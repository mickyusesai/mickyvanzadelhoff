const sharp = require('sharp'); const fs = require('fs');
(async () => {
  const [,, listFile, out] = process.argv;
  const names = fs.readFileSync(listFile, 'utf8').trim().split('\n').filter(Boolean);
  const cols = 5, tw = 240, th = 135, pad = 26, W = cols * tw, rows = Math.ceil(names.length / cols), H = rows * (th + pad);
  const comps = [];
  for (let i = 0; i < names.length; i++) {
    const x = (i % cols) * tw, y = Math.floor(i / cols) * (th + pad);
    const f = `public/images/spots/${names[i]}.webp`; if (!fs.existsSync(f)) continue;
    comps.push({ input: await sharp(f).resize(tw - 6, th).png().toBuffer(), left: x + 3, top: y });
    comps.push({ input: Buffer.from(`<svg width="${tw}" height="${pad}"><text x="4" y="17" font-family="Arial" font-size="12" fill="#17112E">${names[i]}</text></svg>`), left: x, top: y + th });
  }
  await sharp({ create: { width: W, height: H, channels: 4, background: '#F5F3FF' } }).composite(comps).jpeg({ quality: 80 }).toFile(out);
  console.log('sheet', names.length, out);
})();
