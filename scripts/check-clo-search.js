const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..', 'learn', 'clo3d');
const chapter = path.join(root,'chapter-01');
const context = {window:{}};
vm.runInNewContext(fs.readFileSync(path.join(chapter,'search-index.js'),'utf8'),context);
vm.runInNewContext(fs.readFileSync(path.join(chapter,'translations.js'),'utf8'),context);
vm.runInNewContext(fs.readFileSync(path.join(root,'shirt-lesson','shirt-translations.js'),'utf8'),context);
const index = context.window.CLO_SEARCH_INDEX;
assert(index.length > 250,'Index should cover the instructional copy');
for (const page of ['chapter-01/index.html','chapter-01/about-clo3d.html','chapter-01/reset-3d-pattern.html','shirt-lesson/index.html']) {
  const html = fs.readFileSync(path.join(root,page),'utf8');
  const elements = (html.match(/<[^>]*>/g)||[]).filter(tag => /\sdata-zh=/.test(tag)&&/\sdata-en=/.test(tag));
  const entries = index.filter(entry => entry.page===page);
  assert(entries.length > 0,`${page} has no search results`);
  for (const entry of entries) {
    const tag = elements[entry.ordinal-1];
    assert(tag,`${page}: missing element ${entry.ordinal}`);
    const existingId = /(?:^|\s)id="([^"]*)"/.exec(tag)?.[1];
    assert.equal(entry.anchor,existingId||`search-entry-${entry.ordinal}`);
    assert(entry.zh && entry.en);
  }
  for (const asset of ['search.css','search-index.js','search.js']) {
    assert(html.includes(asset),`${page} does not load ${asset}`);
  }
}
for (const language of ['id','ru','de']) {
  assert(context.window.CLO_TRANSLATIONS[language],`Missing ${language} translation`);
  const missing = index.filter(entry => !(entry.page.startsWith('shirt-lesson/') ? context.window.SHIRT_TRANSLATIONS[language] : context.window.CLO_TRANSLATIONS[language])[entry.en]);
  assert.equal(missing.length,0,`${language} has ${missing.length} untranslated passages`);
}
console.log(`Search index verified: ${index.length} passages, 4 pages, 5 languages.`);
