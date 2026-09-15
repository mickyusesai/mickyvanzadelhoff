#!/usr/bin/env node
/**
 * Spot illustrations (icons) for the main pages, in the same style and palette as the article
 * headers: one object, centred, flat poster look, on a plain pale-lilac background. The
 * background is then made transparent so the icons work on any surface.
 *
 * Usage: node scripts/generate-spots.mjs [--only name,name] [--force] [--dry-run]
 * Prompts live in src/data/spot-illustrations.json; output in public/images/spots/<name>.webp
 * (transparent, 640px) — landscape scenes are 1400x788 like the headers. $0.04 per image.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { COLOUR_PROMPT, BACKDROP_PROMPT, STYLE_PROMPT, generate, loadEnv } from './generate-headers.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SPOTS = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/data/spot-illustrations.json'), 'utf8'));
const OUT = path.join(ROOT, 'public/images/spots');
const args = process.argv.slice(2);
const flag = (n) => args.includes(`--${n}`);
const opt = (n) => { const i = args.indexOf(`--${n}`); return i >= 0 ? args[i + 1] : undefined; };

const ICON_STYLE =
  'A single object, centred, filling most of the frame, isolated on a plain flat very pale lilac background with nothing else: no landscape, no ground, no shadow, no scenery. ' +
  'Flat poster illustration with a subtle grain texture, bold simple shapes, no outlines. No text, no letters, no logos, no faces. ' +
  'Colours, strictly: electric violet, lavender, deep violet, lime, pale lime, peach and near-black indigo, with coral as one small accent.';

export function spotPrompt(s) {
  if (s.kind === 'scene') return `Centerpiece: ${s.prompt}, drawn large in the middle of the frame, filling about half of the image height, clearly the main subject, under a pale lilac sky. ${COLOUR_PROMPT} ${BACKDROP_PROMPT} ${STYLE_PROMPT}`;
  return `Icon of ${s.prompt}. ${ICON_STYLE}`;
}

/** Flood-fill the flat background from the four corners to transparent (PIL, tolerance in RGB). */
async function knockOutBackground(pngIn, pngOut) {
  const { execFileSync } = await import('node:child_process');
  const py = `
from PIL import Image, ImageDraw
im = Image.open(${JSON.stringify(pngIn)}).convert('RGBA')
w, h = im.size
px = im.load()
seeds = [(0,0),(w-1,0),(0,h-1),(w-1,h-1),(w//2,0),(w//2,h-1),(0,h//2),(w-1,h//2)]
import collections
def close(a, b, tol=28):
    return abs(a[0]-b[0])<=tol and abs(a[1]-b[1])<=tol and abs(a[2]-b[2])<=tol
for sx, sy in seeds:
    ref = px[sx, sy][:3]
    if ref[0] < 200 or ref[1] < 200 or ref[2] < 200: continue  # not a light background at this corner
    ImageDraw.floodfill(im, (sx, sy), (0,0,0,0), thresh=60)
# soften the edge: any pixel that is transparent stays; feather is skipped for crispness
bbox = im.getbbox()
if bbox:
    pad = int(max(w, h) * 0.04)
    l, t, r, b = bbox
    im = im.crop((max(0,l-pad), max(0,t-pad), min(w,r+pad), min(h,b+pad)))
side = max(im.size)
canvas = Image.new('RGBA', (side, side), (0,0,0,0))
canvas.paste(im, ((side-im.size[0])//2, (side-im.size[1])//2))
canvas.save(${JSON.stringify(pngOut)})
`;
  execFileSync('python3', ['-c', py], { stdio: 'inherit' });
}

async function main() {
  loadEnv();
  fs.mkdirSync(OUT, { recursive: true });
  const only = opt('only') ? opt('only').split(',') : null;
  const jobs = SPOTS.filter((s) => !only || only.includes(s.name)).filter((s) => flag('force') || !fs.existsSync(path.join(OUT, `${s.name}.webp`)));
  console.log(`${jobs.length} spot(s), about $${(jobs.length * 0.04).toFixed(2)}${flag('dry-run') ? ' (dry run)' : ''}`);
  for (const s of jobs) {
    const prompt = spotPrompt(s);
    if (flag('dry-run')) { console.log(`\n[${s.name}] ${prompt}`); continue; }
    process.stdout.write(`${s.name} … `);
    try {
      const buf = await generate(prompt, 'digital_illustration/2d_art_poster', s.kind === 'scene' ? { width: 1820, height: 1024 } : { width: 1024, height: 1024 });
      const dest = path.join(OUT, `${s.name}.webp`);
      if (s.kind === 'scene') {
        await sharp(buf).resize(1400, 788, { fit: 'cover' }).webp({ quality: 78 }).toFile(dest);
      } else {
        const raw = path.join(OUT, `${s.name}.raw.png`), cut = path.join(OUT, `${s.name}.cut.png`);
        await sharp(buf).png().toFile(raw);
        await knockOutBackground(raw, cut);
        await sharp(cut).resize(640, 640, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).webp({ quality: 80 }).toFile(dest);
        fs.unlinkSync(raw); fs.unlinkSync(cut);
      }
      console.log('ok');
    } catch (e) { console.log(`FAILED: ${e.message}`); }
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
