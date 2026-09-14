#!/usr/bin/env python3
"""
Repairs WordPress/Elementor conversion damage in the migrated articles (Phase 5 prep).
Re-runnable and idempotent. Run from the repo root:  python3 scripts/fix-article-markup.py

What it fixes, per article:
  1. Leaked bol.com widget script lines (`var bol_sitebar=...`), newsletter form shortcodes,
     stray popup close buttons (`×`).
  2. Elementor template blocks that were pasted into many articles:
       - the "GRATIS Digital Nomad Boek" box  -> one styled book box (first occurrence), rest removed
       - the "Training AI op locatie 2024" box -> one styled workshop box with current details
       - the meme-coin promo                   -> kept once, flagged with a TODO comment
  3. Headings: bold/italic wrappers removed, escaped dots unescaped, empty headings merged with
     the text line that followed them (or removed), FAQ-toggle anchor links unwrapped, a heading
     that repeats the article title dropped, and heading levels normalised so the top level in
     the body is H2 with no jumps.
  4. Escapes and entities: `\>` in link text -> `›`, `\_` -> `_`.
  5. Images without alt text get one from the image title or filename.
  6. YouTube links on their own line become privacy-friendly embeds.
"""
import glob, os, re, sys
from collections import Counter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)
report = Counter()

BOOK_BOX = ('<aside class="cta-box cta-box--book not-prose">'
            '<div><p class="cta-box__eyebrow">Gratis boek</p>'
            '<p><strong>Dé inspiratie voor een vrij leven.</strong> Alle verhalen en lessen uit zes jaar reizen en online werken staan in mijn boek. Gratis en direct te downloaden, geen e-mail nodig.</p></div>'
            '<a class="btn btn-primary" href="/boek/">Download het boek</a></aside>')
WORKSHOP_BOX = ('<aside class="cta-box cta-box--workshop not-prose">'
                '<div><p class="cta-box__eyebrow">AI-workshop op locatie</p>'
                '<p><strong>AI Introductie.</strong> In drie uur ziet je hele team wat AI voor jullie bedrijf kan betekenen. Tot 25 deelnemers, bij jou op locatie, €1.500 excl. btw.</p></div>'
                '<a class="btn btn-primary" href="/ai-workshops/ai-introductie/">Bekijk de workshop</a></aside>')
MEME_TODO = '<!-- TODO: verify this data is still current (meme-coin promo, Pikamoon pick "begin 2025", MEXC) -->'

BOOK_RE = re.compile(
    r'(?:^#{1,6}[ \t]*_?\*{0,2}GRATIS Digital Nomad Boek\*{0,2}_?[ \t]*\n\s*)?'
    r'^#{1,6}[ \t]*\*{0,2}Dé inspiratie voor een vrij leven\*{0,2}[ \t]*\n'
    r'(?:(?!^#).*\n)*?'
    r'^\[Ga naar boek\]\(/boek/\)[ \t]*\n'
    r'(?:\s*^!\[[^\]]*\]\([^)]*boek-cover[^)]*\)[ \t]*\n)?', re.M)
WORKSHOP_RE = re.compile(
    r'(?:^!\[[^\]]*\]\([^)]*training-ai-kunstmatige-intelligentie-in-company[^)]*\)[ \t]*\n\s*)?'
    r'^#{1,6}[ \t]*\*{0,2}Training AI op locatie 2024\*{0,2}[ \t]*\n'
    r'(?:(?!^#).*\n)*?'
    r'^\[Contact voor meer info\]\(/contact/\)[ \t]*\n', re.M)
MEME_RE = re.compile(
    r'^## Klaar om de volgende 100x meme-coin sensatie te ontdekken\? 🚀[ \t]*\n'
    r'(?:(?!^#).*\n)*?'
    r'^\*\*Ready\?.*\n', re.M)

def replace_blocks(body):
    def once(rx, replacement, key):
        nonlocal body
        matches = list(rx.finditer(body))
        if not matches:
            return
        out, last = [], 0
        for i, m in enumerate(matches):
            out.append(body[last:m.start()])
            out.append(replacement(m.group(0)) if i == 0 else '')
            last = m.end()
            report[key + (' replaced' if i == 0 else ' duplicate removed')] += 1
        out.append(body[last:])
        body = ''.join(out)
    once(BOOK_RE, lambda s: '\n' + BOOK_BOX + '\n\n', 'book box')
    once(WORKSHOP_RE, lambda s: '\n' + WORKSHOP_BOX + '\n\n', 'workshop box')
    once(MEME_RE, lambda s: (MEME_TODO + '\n' + s) if MEME_TODO not in body else s, 'meme-coin promo')
    return body

def norm_text(s):
    return re.sub(r'[^a-z0-9]+', ' ', s.lower()).strip()

def fix_headings(lines, title):
    out = []
    i = 0
    while i < len(lines):
        l = lines[i]
        m = re.match(r'^(#{1,6})[ \t]*(.*?)[ \t]*$', l)
        if not m:
            out.append(l); i += 1; continue
        level, text = m.group(1), m.group(2)
        # unwrap bold/italic, links to in-page anchors, escaped dots
        t = text
        t = re.sub(r'^\*\*(.+)\*\*$', r'\1', t)
        t = re.sub(r'^__(.+)__$', r'\1', t)
        t = re.sub(r'^_(.+)_$', r'\1', t)
        t = re.sub(r'^\*(.+)\*$', r'\1', t)
        t = re.sub(r'\[([^\]]+)\]\(#[^)]*\)', r'\1', t)
        t = t.replace('**', '').replace('__', '')          # headings are bold already; also fixes unclosed bold
        t = t.replace('\\.', '.').strip()
        if t != text:
            report['heading wrappers removed'] += 1
        if not t:
            # empty heading: merge with the next short plain line, else drop
            j = i + 1
            while j < len(lines) and lines[j].strip() == '':
                j += 1
            if j < len(lines) and 3 < len(lines[j].strip()) < 90 and not re.match(r'^(#|!|\[|\*|-|\d+\.|>|<|\|)', lines[j].strip()) and not lines[j].strip().endswith(('.', ':', ';')):
                out.append(f'{level} {lines[j].strip()}')
                report['empty heading merged'] += 1
                i = j + 1
                continue
            report['empty heading removed'] += 1
            i += 1
            continue
        if norm_text(t) == norm_text(title):
            report['title heading dropped'] += 1
            i += 1
            continue
        out.append(f'{level} {t}')
        i += 1
    # H1 inside a body: when H1s outnumber H2s the author used H1 for sections (shift everything
    # down a level); otherwise the H1s are stray mistakes and simply become H2s.
    h1 = sum(1 for l in out if re.match(r'^# ', l)); h2 = sum(1 for l in out if re.match(r'^## ', l))
    if h1 and h1 <= h2:
        out = [re.sub(r'^# ', '## ', l) for l in out]
        report['stray H1s merged into H2'] += 1
    # normalise levels: distinct levels ascending -> 2, 3, 4, 5
    levels = sorted({len(re.match(r'^#+', l).group()) for l in out if re.match(r'^#{1,6} ', l)})
    if levels and (levels[0] != 2 or any(b - a > 1 for a, b in zip(levels, levels[1:]))):
        mapping = {lv: min(2 + k, 5) for k, lv in enumerate(levels)}
        out = [re.sub(r'^(#+) ', lambda m: '#' * mapping[len(m.group(1))] + ' ', l) if re.match(r'^#{1,6} ', l) else l for l in out]
        report['heading levels normalised'] += 1
    return out

YT_LINE = re.compile(r'^\s*\[?(?:[^\]\n]*)\]?\(?(?:https?://(?:www\.)?(?:youtube\.com/watch\?v=|youtu\.be/)([\w-]{6,}))[^)\s]*\)?\s*$')

def fix_lines(body, title):
    lines = body.split('\n')
    kept = []
    for l in lines:
        if re.match(r'^\s*var bol\\?_sitebar=', l):
            report['widget script lines removed'] += 1; continue
        if re.match(r'^\s*\\?\[\w*\\?_?form[^\]]*\\?\]\s*$', l):
            report['form shortcodes removed'] += 1; continue
        if l.strip() == '×':
            report['popup close buttons removed'] += 1; continue
        m = YT_LINE.match(l)
        if m and '<iframe' not in l:
            vid = m.group(1)
            kept.append(f'<div class="video not-prose"><iframe src="https://www.youtube-nocookie.com/embed/{vid}" title="YouTube-video" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>')
            report['youtube embeds'] += 1; continue
        kept.append(l)
    kept = fix_headings(kept, title)
    body = '\n'.join(kept)
    # anchor links elsewhere
    body, n = re.subn(r'\[([^\]]+)\]\(#[^)]*\)', r'\1', body); report['anchor links unwrapped'] += n
    body, n = re.subn(r'\\>', '›', body); report['escaped > fixed'] += n
    body, n = re.subn(r'\\_', '_', body); report['escaped _ fixed'] += n
    # image alt text
    def alt(m):
        path, title_ = m.group(1), m.group(3)
        base = title_ or re.sub(r'\.\w+$', '', os.path.basename(path))
        base = re.sub(r'\s*\(\d+\)\s*$', '', base)
        base = re.sub(r'(-\d+)?(-scaled)?(-\d{2,4}x\d{2,4})?$', '', base)
        base = re.sub(r'[-_]+', ' ', base).strip().capitalize()
        report['image alt added'] += 1
        return f'![{base}]({path}{m.group(2) or ""})'
    body = re.sub(r'!\[\]\(([^)\s"]+)(\s+"([^"]*)")?\)', alt, body)
    body, n = re.subn(r'\n{4,}', '\n\n\n', body); report['blank runs collapsed'] += n
    return body

for f in sorted(glob.glob('src/content/articles/*.md')):
    text = open(f, encoding='utf-8').read()
    m = re.match(r'^---\n(.*?)\n---\n', text, re.S)
    fm, body = m.group(1), text[m.end():]
    title = re.search(r'^title:\s*"(.*)"', fm, re.M).group(1).replace('\\"', '"')
    new = replace_blocks(body)
    new = fix_lines(new, title)
    if new != body:
        open(f, 'w', encoding='utf-8').write(f'---\n{fm}\n---\n{new}')
        report['files changed'] += 1

for k, v in sorted(report.items()):
    print(f'{v:5}  {k}')
