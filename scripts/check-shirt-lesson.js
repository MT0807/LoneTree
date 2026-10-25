const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname,'..');
const chapter = path.join(root,'learn','clo3d','shirt-lesson');
const html = fs.readFileSync(path.join(chapter,'index.html'),'utf8');
const shelf = fs.readFileSync(path.join(root,'learn','index.html'),'utf8');
assert(shelf.includes('href="clo3d/shirt-lesson/"'),'Missing second CLO3D book');
assert(shelf.includes('一起来做一件男士衬衫吧'),'Missing book title');
assert(html.includes('href="../../#clo3d"'),'Missing return link');
assert.equal((html.match(/class="lesson-step"/g)||[]).length,5,'Expected five lesson steps');
assert(html.indexOf('class="design-intro"') < html.indexOf('id="chest-cut"'),'Pattern-design introduction must precede the second recording');
assert.equal((html.match(/<figcaption data-zh="操作视频/g)||[]).length,5,'Each recording needs an 操作视频 caption');

const sources = [...html.matchAll(/<source src="([^"]+\.mp4)"/g)].map(match=>match[1]);
const posters = [...html.matchAll(/poster="([^"]+\.jpg)"/g)].map(match=>match[1]);
assert.equal(sources.length,5);
assert.equal(posters.length,5);
for (const file of [...sources,...posters]) assert(fs.existsSync(path.join(chapter,file)),`Missing ${file}`);
for (const file of sources) {
  const bytes = fs.readFileSync(path.join(chapter,file));
  assert(bytes.length>100_000 && bytes.length<20_000_000,`Unexpected video size: ${file}`);
  assert.equal(bytes.toString('ascii',4,8),'ftyp',`Invalid MP4: ${file}`);
}

const context={window:{}};
vm.runInNewContext(fs.readFileSync(path.join(chapter,'shirt-translations.js'),'utf8'),context);
const phrases=[...new Set([...html.matchAll(/\sdata-en="([^"]*)"/g)].map(match=>match[1]))];
for (const lang of ['id','ru','de']) {
  const missing=phrases.filter(phrase=>!context.window.SHIRT_TRANSLATIONS[lang]?.[phrase]);
  assert.equal(missing.length,0,`Missing ${lang} translations: ${missing.join('; ')}`);
}
console.log(`Shirt lesson verified: 5 videos, 5 posters, ${phrases.length} phrases in 5 languages.`);
