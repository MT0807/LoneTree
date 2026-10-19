const fs = require('fs');
const path = require('path');
const chapter = path.join(__dirname, '..', 'learn', 'clo3d', 'chapter-01');
for (const name of ['index.html', 'about-clo3d.html', 'reset-3d-pattern.html']) {
  const file = path.join(chapter, name);
  let html = fs.readFileSync(file, 'utf8');
  if (!html.includes('search.css')) html = html.replace('</head>', '<link rel="stylesheet" href="search.css"/></head>');
  if (!html.includes('search-index.js')) html = html.replace('</body>', '<script src="search-index.js"></script><script src="search.js"></script></body>');
  fs.writeFileSync(file, html);
}
