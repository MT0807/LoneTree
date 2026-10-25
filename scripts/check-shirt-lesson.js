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
assert.equal((html.match(/class="lesson-step"/g)||[]).length,21,'Expected twenty-one lesson steps');
assert(html.indexOf('class="design-intro"') < html.indexOf('id="chest-cut"'),'Pattern-design introduction must precede the second recording');
assert.equal((html.match(/<figcaption data-zh="操作视频/g)||[]).length,21,'Each recording needs an 操作视频 caption');
assert(html.indexOf('id="trace-lines"') > html.indexOf('id="armhole-transfer"'),'Tracing must follow dart manipulation');
assert(html.indexOf('id="trace-curves"') > html.indexOf('id="trace-lines"'),'Curves must follow straight edges');
assert(html.includes('07-dartless-block.png'),'Missing final dartless block reference');
for (const id of ['cut-new-pieces','arrange-pieces','sew-shirt','harden-check']) assert(html.includes(`id="${id}"`),`Missing ${id}`);
for (const id of ['pattern-refinement','adjust-shape','refine-armhole','square-seams','front-placket']) assert(html.includes(`id="${id}"`),`Missing ${id}`);
for (const id of ['overlap-placket','collar-module','draft-collar','sew-collar']) assert(html.includes(`id="${id}"`),`Missing ${id}`);
for (const id of ['shape-collar','collar-fold-line','fold-collar']) assert(html.includes(`id="${id}"`),`Missing ${id}`);
assert(html.includes('折叠强度」设为 100') && html.includes('按 B 使用「编辑缝纫线」'),'Missing fold and seam adjustment details');
assert(html.indexOf('id="overlap-placket"') < html.indexOf('id="collar-module"'),'Collar bookmark should follow placket overlap');
assert(html.includes('24.99 cm') && html.includes('宽 25 cm、高 5 cm'),'Missing collar measurement example');
assert(html.includes('1.5 倍速'),'Second pattern-refinement recording should be marked at 1.5× speed');
assert(html.includes('间距设为 1.5 cm'),'Missing 1.5 cm placket extension');

const sources = [...html.matchAll(/<source src="([^"]+\.mp4)"/g)].map(match=>match[1]);
const posters = [...html.matchAll(/poster="([^"]+\.jpg)"/g)].map(match=>match[1]);
assert.equal(sources.length,21);
assert.equal(posters.length,21);
for (const file of [...sources,...posters]) assert(fs.existsSync(path.join(chapter,file)),`Missing ${file}`);
for (const [,file] of html.matchAll(/<img[^>]+src="(assets\/[^"]+)"/g)) assert(fs.existsSync(path.join(chapter,file)),`Missing ${file}`);
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
console.log(`Shirt lesson verified: 21 videos, 21 posters, ${phrases.length} phrases in 5 languages.`);
