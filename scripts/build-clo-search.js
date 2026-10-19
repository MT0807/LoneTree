// Build the small, offline search index from the chapter's bilingual copy.
// Run: node scripts/build-clo-search.js
const fs = require('fs');
const path = require('path');

const chapter = path.join(__dirname, '..', 'learn', 'clo3d', 'chapter-01');
const pages = ['index.html', 'about-clo3d.html', 'reset-3d-pattern.html'];
const decode = value => value.replace(/&(?:amp|quot|apos|lt|gt|#(\d+)|#x([\da-f]+));/gi, (whole, decimal, hex) => {
  if (decimal) return String.fromCodePoint(Number(decimal));
  if (hex) return String.fromCodePoint(parseInt(hex, 16));
  return { '&amp;': '&', '&quot;': '"', '&apos;': "'", '&lt;': '<', '&gt;': '>' }[whole.toLowerCase()] || whole;
});
const attr = (tag, name) => {
  const match = tag.match(new RegExp('(?:^|\\s)' + name + '="([^"]*)"'));
  return match ? decode(match[1]) : null;
};
const entries = [];

for (const page of pages) {
  const html = fs.readFileSync(path.join(chapter, page), 'utf8');
  let ordinal = 0;
  let headingZh = page === 'index.html' ? 'CLO3D 第一章' : page === 'about-clo3d.html' ? '关于 CLO3D' : '重置 3D 版片';
  let headingEn = page === 'index.html' ? 'CLO3D Chapter 01' : page === 'about-clo3d.html' ? 'About CLO3D' : 'Reset 3D Pattern';
  const tags = html.match(/<[^>]*>/g) || [];
  for (const tag of tags) {
    const zh = attr(tag, 'data-zh');
    const en = attr(tag, 'data-en');
    if (zh === null || en === null) continue;
    ordinal++;
    const tagName = tag.match(/^<([\w-]+)/)?.[1]?.toLowerCase();
    if (!tagName) continue;
    if (/^h[1-4]$/.test(tagName)) { headingZh = zh; headingEn = en; }
    if (!['h1','h2','h3','h4','p','li','figcaption','strong'].includes(tagName)) continue;
    if (zh.length < 3 && en.length < 3) continue;
    entries.push({page, ordinal, anchor: attr(tag, 'id') || `search-entry-${ordinal}`, zh, en, headingZh, headingEn});
  }
}
const output = 'window.CLO_SEARCH_INDEX=' + JSON.stringify(entries) + ';\n';
fs.writeFileSync(path.join(chapter, 'search-index.js'), output, 'utf8');
console.log(`Indexed ${entries.length} searchable passages from ${pages.length} pages.`);
