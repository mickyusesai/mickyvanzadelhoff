#!/usr/bin/env python3
"""
One-off content clean-up after the WordPress migration (Phase 3 of docs/MIGRATION-PLAN.md).

What it does, in order:
  1. Loads the Redirection-plugin export (src/data/wordpress-redirects.csv) and splits it into
     affiliate /go/ links, legacy internal redirects and the rest.
  2. Rewrites every demodernenomaden.nl link inside articles and kept pages to its new location:
       /go/<slug>                         -> /go/<slug>            (served by astro redirects)
       /<category>/<slug>/                -> /blog/<category>/<slug>/
       legacy URLs                        -> followed through the redirect chain, then mapped
       kept pages                         -> their new path (/over/, /boek/, ...)
       retired funnel pages               -> link removed, anchor text kept (decision D13)
       documents (.pdf/.xlsx)             -> /downloads/<file>
  3. Fixes image references that point to files that do not exist (size-suffix variants, or
     documents the migration wrongly renamed to .webp).
  4. Generates a meta description (<=155 chars) from the first paragraph where it is empty.
  5. Replaces the old contact details (decision D8).
  6. Writes src/data/redirects.json: every old URL the new site must answer, for astro.config.mjs.
  7. Prints a report. Re-running is safe: all rewrites are idempotent.

Run from the repo root:  python3 scripts/cleanup-content.py
"""
import csv, glob, io, json, os, re, shutil, sys
from collections import Counter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)

ART_DIR = 'src/content/articles'
PAGE_DIR = 'src/content/pages'
CSV_PATH = 'src/data/wordpress-redirects.csv'

# ---- decisions from docs/MIGRATION-PLAN.md -------------------------------------------------
KEPT_PAGES = {            # old slug -> new path
    'over-mij': '/over/',
    'contact': '/contact/',
    'digital-nomad-boek': '/boek/',
    'verhalen-en-lessen-uit-een-vrij-leven-digital-nomad': '/boek/',
    'workshop-ai-chatgpt-bedrijven': '/ai-workshops/ai-introductie/',
    'privacybeleid': '/privacy/',
    'workation': '/workation/',
}
KEPT_PAGE_FILES = {'over-mij', 'digital-nomad-boek', 'privacybeleid'}
# Every page slug that existed on the WordPress site. Retired pages (not in KEPT_PAGES) are
# unlinked in content and redirected to the homepage, or to a better target listed below.
ALL_PAGE_SLUGS = set('''aanmelden-case-study acquisitie-mail-laten-schrijven advertentie affiliates-startersgids
artikelen bedankt-aanmelding bedankt-business-bootcamp bedankt blog-business blog-expert-training-gefeliciteerd
blog-expert-training blog bloggen-content-creatie business-bouwen-case-study cinema contact content-creatie
dankjewel digital-nomad-boek download2349815h3fh94h10913h5f3049hf9031h034h09hf3 gaan-met-die-banaan-startersgids
gefeliciteerd-je-bent-erbij gefeliciteerd-opname-blog-business gelukt-startersgids gratis-blog-expert gratis
ik-twijfel-nog je-bent-erbij je-doet-mee jouw-mogelijkheden leer-online-geld-verdienen
masterclass-10k-acquisitie-mail-geslaagd masterclass-acquisitie-mail mijn-conclusie-over-geluk
online-klanten-krijgen-zzp-er online-marketing-bedrijf over-mij passief-inkomen-affiliate-marketing privacybeleid
reizen-en-werken-combineren stap-1-niche-naam-gaan stap-2-beautiful stap-3-blog-logo stap-4-publicatie
stap-5-blog-lezers stap-6-geld-verdienen-met-bloggen startersgids-2020 startersgids-onthuld startersgids-verhaal
startersgids tarieven training-word-digitale-nomade-2019 van-blog-naar-business-masterclass vbnb-training vbnb
verhalen-en-lessen-uit-een-vrij-leven-digital-nomad videos-fotos website-optimalisatie weten-wat-je-wilt workation
workshop-ai-chatgpt-bedrijven yes zelf-reizen-en-werken-word-digital-nomad'''.split())
RETIRED_PAGE_TARGETS = {   # retired pages with a better destination than the homepage
    'workation': '/blog/ondernemen/workations-ondernemersreizen/',
    'artikelen': '/blog/',
    'blog': '/blog/',
    'tarieven': '/ai-workshops/',
    'training-word-digitale-nomade-2019': '/blog/digitalenomaden/digital-nomad-worden/',
    'zelf-reizen-en-werken-word-digital-nomad': '/blog/digitalenomaden/digital-nomad-worden/',
    'reizen-en-werken-combineren': '/blog/digitalenomaden/reizen-en-werken-combineren/',
}
DELETED_ARTICLES = {      # slug -> replacement path (None = unlink)
    'jia-ruan': None,
    'webreus-storing': '/blog/review/cloud86-webhosting-review/',
    'nft-secrets-review-mitchel-van-duuren': '/blog/web3/nft-uitleg/',   # Micky, 2026-09-20: training gone, page deleted
    'official-trump-kopen-ideal': '/blog/web3/meme-coins-kopen-crypto/',  # 2026-09-20: a MEXC/Pikamoon funnel, MEXC dropped
}
DELETED_CATEGORY = {'jia-ruan': 'review', 'webreus-storing': 'ondernemen', 'nft-secrets-review-mitchel-van-duuren': 'review', 'official-trump-kopen-ideal': 'web3'}
MANUAL_LINKS = {          # old paths the redirect chain cannot resolve
    '/online-geld-verdienen/smmb-masterclass-review/': None,
    '/online-geld-verdienen/crypto-masterclass-review-allesovercrypto-patrick-suiker-derek-westra/': '/blog/review/money-mastery-review-allesovercrypto-patrick-suiker-derek-westra/',
    '/online-geld-verdienen/bol-masterclass-jia-ruan-review/': '/blog/ondernemen/verkopen-op-bol-com/',
    '/ondernemen/nft-alpha-jia-ruan-bv/': None,
    '/plaatsen/wonen-en-werken-in-londen-engeland/': '/blog/digitalenomaden/wonen-en-werken-in-londen-engeland/',
}
GO_OVERRIDES = {          # affiliate targets that no longer exist (Micky, 2026-09-16): send old /go/ URLs somewhere sane
    '/go/get-webinarjam': 'https://www.webinarjam.com/',
    '/go/get-everwebinar': 'https://www.everwebinar.com/',
    '/go/get-webinarninja': 'https://www.webinarninja.com/',
    '/go/getresponse': 'https://www.getresponse.com/',
    # NFT Secrets is gone and Micky wants no NFT programme in its place (2026-09-20): land on his own NFT article
    '/go/nft-secrets': '/blog/web3/nft-uitleg/',
    '/go/nft-secrets-gratis': '/blog/web3/nft-uitleg/',
    # wrong or discontinued bol products (found 2026-09-20): land on a bol search with the partner tracking intact
    '/go/the-art-of-non-conformity-boek': 'https://partner.bol.com/click/click?p=2&t=url&s=54708&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fs%2F%3Fsearchtext%3Dthe%2Bart%2Bof%2Bnon-conformity%2Bchris%2Bguillebeau&name=The%20Art%20of%20Non-Conformity',
    '/go/ledger-nano-s': 'https://partner.bol.com/click/click?p=2&t=url&s=54708&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fs%2F%3Fsearchtext%3Dledger%2Bnano%2Bs%2Bplus&name=Ledger%20Nano%20S%20Plus',
    # the old KuCoin link had become a MEXC referral; MEXC leaves NL in 2026 and KuCoin EU is MiCA-licensed
    '/go/kucoin': 'https://www.kucoin.com/en-eu',
    # exchanges without a MiCA licence are no longer recommended (Micky, 2026-09-20): land on the reviews
    '/go/binance': '/blog/review/binance-review-crypto-exchange/',
    '/go/mexc': '/blog/web3/beste-crypto-exchange/',
    '/go/bitget': '/blog/web3/beste-crypto-exchange/',
    '/go/sembly': 'https://www.sembly.ai/',
    # Possibol is gone (2026-09-19): both bol.com links go to Micky's Business Mine partner link (free masterclass)
    '/go/bol-com-verkopen-e-book': 'https://checkout.businessmine.co/r?id=SkAhfw5B',
    '/go/bol-com-cursus-en-coaching': 'https://checkout.businessmine.co/r?id=SkAhfw5B',
}
# Every Fiverr gig link lands on the Fiverr homepage with Micky's affiliate tracking (Micky, 2026-09-20): the
# individual gigs come and go and he does not want to maintain them.
FIVERR_HOME = 'https://go.fiverr.com/visit/?bta=340671&brand=fiverrcpa&landingPage=https%3A%2F%2Fwww.fiverr.com%2F'
# Affiliate links that never existed on the WordPress site (added here, 2026-09-20)
NEW_GO_LINKS = {
    '/go/revolut': 'https://revolut.com/referral/?referral-code=mickyxtka!SEP2-26-AR-TR-TRDDM&geo-redirect',
}
OLD_EMAILS = ['mick@demodernenomaden.nl', 'info@demodernenomaden.nl']
NEW_EMAIL = 'mickyvz@live.nl'
DOC_EXT = ('.pdf', '.xlsx', '.zip', '.mp4')

# ---- load content ----------------------------------------------------------------------------
def read_fm(text):
    m = re.match(r'^---\n(.*?)\n---\n', text, re.S)
    fm = m.group(1) if m else ''
    body = text[m.end():] if m else text
    return fm, body

def fm_get(fm, key):
    m = re.search(rf'^{key}:\s*"?(.*?)"?\s*$', fm, re.M)
    return m.group(1) if m else ''

articles = {}
for f in sorted(glob.glob(f'{ART_DIR}/*.md')):
    fm, _ = read_fm(open(f, encoding='utf-8').read())
    articles[fm_get(fm, 'slug')] = fm_get(fm, 'category')
page_slugs = ALL_PAGE_SLUGS | {os.path.basename(f)[:-3] for f in glob.glob(f'{PAGE_DIR}/*.md')}

# ---- redirects export -------------------------------------------------------------------------
rows = list(csv.DictReader(open(CSV_PATH, encoding='utf-8')))
go_links, legacy, other = {}, {}, {}
for r in rows:
    src, tgt = r['source'].strip(), r['target'].strip()
    if src.lower().startswith('/go/'):
        go_links[src.rstrip('/').lower()] = tgt
    elif tgt.startswith('https://demodernenomaden.nl'):
        legacy[src] = tgt.replace('https://demodernenomaden.nl', '') or '/'
    elif src.rstrip('/').split('/')[-1] in articles:
        pass                                   # kept article that WordPress redirected away: serve it again
    else:
        other[src] = tgt

# ---- resolver -------------------------------------------------------------------------------------
migrated_files = set(os.listdir('public/images/migrated'))
download_files = set(os.listdir('public/downloads')) if os.path.isdir('public/downloads') else set()

def resolve(path, depth=0):
    """Old-site path -> new-site path, or None to unlink."""
    if depth > 6:
        return None
    frag = ''
    if '#' in path:
        path, frag = path.split('#', 1); frag = '#' + frag
    path = path.split('?')[0] or '/'
    if path.lower().startswith('/go/'):
        return path.rstrip('/').lower()
    if path.startswith('/wp-content/uploads/'):
        name = os.path.basename(path)
        if name in download_files:
            return '/downloads/' + name
        base = os.path.splitext(name)[0] + '.webp'
        return '/images/migrated/' + base if base in migrated_files else None
    if path in MANUAL_LINKS:
        return MANUAL_LINKS[path]
    for cand in (path, path.rstrip('/'), path.rstrip('/') + '/'):
        if cand in legacy:
            t = legacy[cand]
            return resolve(t, depth + 1) if t != path else None
        if cand in other:              # old page now redirects to an external affiliate target
            return None
    if path == '/':
        return '/'
    segs = [s for s in path.split('/') if s]
    if len(segs) == 2 and segs[0] == 'category':
        return f'/blog/{segs[1]}/' if segs[1] in set(articles.values()) else '/blog/'
    if len(segs) == 1 and segs[0] in set(articles.values()):
        return f'/blog/{segs[0]}/'
    slug = segs[-1] if segs else ''
    if slug in DELETED_ARTICLES:
        return DELETED_ARTICLES[slug]
    if slug in articles:
        return f'/blog/{articles[slug]}/{slug}/' + frag
    if slug in KEPT_PAGES:
        return KEPT_PAGES[slug] + frag
    if slug in RETIRED_PAGE_TARGETS:
        return RETIRED_PAGE_TARGETS[slug]
    if slug in page_slugs:
        return None                    # retired funnel page: unlink (D13)
    return None

report = Counter()
unresolved = Counter()
# link text may contain one nested image: [![alt](src)](url)
LINK_RE = re.compile(r'\[((?:[^\[\]]|!\[[^\]]*\]\([^)]*\))*)\]\((https?://demodernenomaden\.nl(/[^)\s"]*)?)(\s+"[^"]*")?\)')
IMG_RE = re.compile(r'!\[([^\]]*)\]\((/images/migrated/[^)\s"]+)(\s+"[^"]*")?\)')

def rewrite_links(body, fname):
    def sub(m):
        text, full, path, title = m.group(1), m.group(2), m.group(3) or '/', m.group(4) or ''
        new = resolve(path)
        if new is None:
            report['links unlinked'] += 1
            if path not in MANUAL_LINKS and not (path.split('#')[0].rstrip('/').split('/')[-1] in page_slugs | set(DELETED_ARTICLES) | set(other)):
                unresolved[path] += 1
            return text
        report['links rewritten'] += 1
        return f'[{text}]({new}{title})'
    body = LINK_RE.sub(sub, body)
    # bare URLs left in text (rare)
    def bare(m):
        new = resolve(m.group(1) or '/')
        report['bare urls rewritten'] += 1
        return new if new else m.group(0)
    body = re.sub(r'(?<!\()https?://demodernenomaden\.nl(/[^\s)"<]*)?', bare, body)
    return body

def fix_images(body):
    def sub(m):
        alt, path, title = m.group(1), m.group(2), m.group(3) or ''
        name = os.path.basename(path)
        if name in migrated_files:
            return m.group(0)
        stem = os.path.splitext(name)[0]
        # document wrongly renamed to .webp by the migration
        for ext in DOC_EXT:
            if stem + ext in download_files:
                report['doc links fixed'] += 1
                return f'[{alt or stem}](/downloads/{stem}{ext})'
        # size-suffix or duplicate-suffix variants
        for cand in (re.sub(r'-\d{2,4}x\d{2,4}$', '', stem), re.sub(r'-\d+$', '', stem),
                     re.sub(r'-\d{2,4}x\d{2,4}-\d+$', '', stem), re.sub(r'-\d+-\d{2,4}x\d{2,4}$', '', stem)):
            if cand != stem and cand + '.webp' in migrated_files:
                report['image variants fixed'] += 1
                return f'![{alt}](/images/migrated/{cand}.webp{title})'
        report['images removed (missing)'] += 1
        return f'<!-- TODO: image missing after migration: {name} -->'
    body = IMG_RE.sub(sub, body)
    # non-image links to /images/migrated/*.webp that were documents
    def doclink(m):
        text, path = m.group(1), m.group(2)
        stem = os.path.splitext(os.path.basename(path))[0]
        for ext in DOC_EXT:
            if stem + ext in download_files:
                report['doc links fixed'] += 1
                return f'[{text}](/downloads/{stem}{ext})'
        return m.group(0)
    body = re.sub(r'(?<!!)\[([^\]]*)\]\((/images/migrated/[^)\s"]+\.webp)\)', doclink, body)
    return body

def make_description(body):
    for para in re.split(r'\n\s*\n', body):
        p = para.strip()
        if not p or p.startswith(('#', '!', '<', '[', '*', '-', '>', '|')):
            continue
        p = re.sub(r'!\[[^\]]*\]\([^)]*\)', '', p)
        p = re.sub(r'\[([^\]]*)\]\([^)]*\)', r'\1', p)
        p = re.sub(r'[*_`\\]+', '', p)
        p = re.sub(r'\s+', ' ', p).strip()
        if len(p) < 40:
            continue
        if len(p) > 155:
            p = p[:152].rsplit(' ', 1)[0].rstrip(',;:.') + '…'
        return p.replace('"', '\\"')
    return ''

def fix_contact(text):
    for e in OLD_EMAILS:
        text = text.replace(e, NEW_EMAIL)
    return text

def process(path, is_article):
    text = open(path, encoding='utf-8').read()
    fm, body = read_fm(text)
    body = rewrite_links(body, path)
    body = fix_images(body)
    body = fix_contact(body)
    if 'description: ""' in fm:
        d = make_description(body)
        if d:
            fm = fm.replace('description: ""', f'description: "{d}"', 1)
            report['descriptions generated'] += 1
        else:
            report['descriptions still empty'] += 1
    elif 'description:' not in fm:
        d = make_description(body)
        fm += f'\ndescription: "{d}"'
        report['descriptions generated'] += 1
    # YAML double-quoted scalars only allow a few escapes: drop stray backslashes (markdown \[ \*).
    def clean_desc(m):
        val = m.group(1).replace('\\"', '"').replace('\\', '').replace('"', '\\"')
        return f'description: "{val}"'
    fm2 = re.sub(r'^description: "(.*)"$', clean_desc, fm, flags=re.M)
    if fm2 != fm:
        report['descriptions sanitised'] += 1; fm = fm2
    new = f'---\n{fm}\n---\n{body}'
    if new != text:
        open(path, 'w', encoding='utf-8').write(new)
        report['files changed'] += 1

# ---- run ----------------------------------------------------------------------------------------------
for slug in DELETED_ARTICLES:
    p = f'{ART_DIR}/{slug}.md'
    if os.path.exists(p):
        os.remove(p); report['articles deleted'] += 1
for f in sorted(glob.glob(f'{ART_DIR}/*.md')):
    process(f, True)
for f in sorted(glob.glob(f'{PAGE_DIR}/*.md')):
    slug = os.path.basename(f)[:-3]
    if slug in KEPT_PAGE_FILES:
        process(f, False)
    else:
        os.remove(f); report['pages retired'] += 1

# ---- redirects.json ------------------------------------------------------------------------------
redirects = {}
def add(src, dst):
    # One entry per path, without trailing slash: astro's trailingSlash 'ignore' matches both forms.
    src = '/' + src.strip('/').split('?')[0]
    if src == '/' or not dst or src == dst or src.rstrip('/') == dst.rstrip('/'):
        return
    if re.search(r'[^A-Za-z0-9/_\-.%]', src):
        return                                              # junk sources from the export (&nbsp, "! rel=")
    redirects.setdefault(src, dst)

for slug, cat in articles.items():                       # old article URLs -> /blog/
    if slug not in DELETED_ARTICLES:
        add(f'/{cat}/{slug}/', f'/blog/{cat}/{slug}/')
for cat in sorted(set(articles.values())):               # old category URLs
    add(f'/{cat}/', f'/blog/{cat}/'); add(f'/category/{cat}/', f'/blog/{cat}/')
for slug, dst in DELETED_ARTICLES.items():                # old URL and the new-site URL of a deleted article
    add(f'/{DELETED_CATEGORY[slug]}/{slug}/', dst or '/'); add(f'/blog/{DELETED_CATEGORY[slug]}/{slug}/', dst or '/')
for slug, dst in KEPT_PAGES.items():
    add(f'/{slug}/', dst)
for slug in sorted(ALL_PAGE_SLUGS - set(KEPT_PAGES)):    # retired pages
    add(f'/{slug}/', resolve(f'/{slug}/') or '/')
for src, tgt in go_links.items():                        # affiliate links
    add(src, FIVERR_HOME if src.startswith('/go/fiverr') else GO_OVERRIDES.get(src, tgt))
for src, tgt in NEW_GO_LINKS.items():
    add(src, tgt)
for src, tgt in legacy.items():                          # legacy WordPress redirects, re-resolved
    add(src, resolve(src) or '/')
for src, tgt in other.items():
    add(src, tgt)
for name in download_files:                              # old upload URLs for documents
    for r in rows:
        if r['source'].endswith(name):
            add(r['source'], '/downloads/' + name)
add('/e-book/digital-nomad', '/downloads/Digital-Nomad-Boek.pdf')
add('/e-book/online-geld-verdienen', '/downloads/Online-Geld-Verdienen-2021-E-book.pdf')
# Briefing 2 (2026-09-15): the fixed-price bouwweek became the custom service page /automatisering/.
add('/ai-workshops/bouwen-met-claude-code/', '/automatisering/')
add('/feed', '/rss.xml'); add('/sitemap_index.xml', '/sitemap-index.xml'); add('/post-sitemap.xml', '/sitemap-index.xml'); add('/page-sitemap.xml', '/sitemap-index.xml')

os.makedirs('src/data', exist_ok=True)
json.dump(dict(sorted(redirects.items())), open('src/data/redirects.json', 'w', encoding='utf-8'), indent=1, ensure_ascii=False)
report['redirect entries'] = len(redirects)

print('\n'.join(f'{k:32} {v}' for k, v in sorted(report.items())))
if unresolved:
    print('\nUNRESOLVED (unlinked, check manually):')
    for k, v in unresolved.most_common():
        print(f'  {v:3}  {k}')
