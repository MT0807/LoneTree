(() => {
  const terms = [
    '鼠标右键','鼠标左键','鼠标中键','鼠标滚轮','空格键','数字键','方向键','右键单击','左键单击','双击','右键','左键','中键','滚轮','空格',
    'right mouse button','left mouse button','middle mouse button','mouse wheel','right-click','Right-click','left-click','Left-click','double-click','Double-click','right button','left button','middle button','Spacebar','spacebar','Space','Shift','Ctrl','Control','Alt','Delete','Backspace','Enter','Escape','Esc','Tab',
    'tombol kanan mouse','tombol kiri mouse','tombol tengah mouse','roda mouse','klik kanan','Klik kanan','klik kiri','Klik kiri','klik dua kali','bilah spasi','tombol spasi','Spasi',
    'правую кнопку мыши','правой кнопкой мыши','правая кнопка мыши','левую кнопку мыши','левой кнопкой мыши','левая кнопка мыши','среднюю кнопку мыши','средней кнопкой мыши','колесо мыши','колесико мыши','колёсико мыши','пробел','Пробел','Пробела','пробела',
    'rechte Maustaste','rechten Maustaste','linke Maustaste','linken Maustaste','mittlere Maustaste','mittleren Maustaste','mittlere Taste','mittleren Taste','Mitteltaste','Mausrad','Rechtsklick','Rechtsklicken','Linksklick','Doppelklick','doppelklicken','Leertaste','Umschalttaste','Strg','Entf'
  ];
  const escape = value => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp([...new Set(terms)].sort((a,b)=>b.length-a.length).map(term => /[\u3400-\u9fff]/u.test(term) ? escape(term) : `(?<![\\p{L}\\p{N}_])${escape(term)}(?![\\p{L}\\p{N}_])`).join('|'), 'gu');
  const skip = 'script,style,svg,textarea,input,select,option,kbd,.input-cue,[contenteditable="true"]';
  let scheduled = false;
  function highlight(root = document.body) {
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (!node.parentElement || node.parentElement.closest(skip)) continue;
      pattern.lastIndex = 0;
      if (pattern.test(node.data)) nodes.push(node);
    }
    for (const node of nodes) {
      const fragment = document.createDocumentFragment();
      let offset = 0;
      pattern.lastIndex = 0;
      for (const match of node.data.matchAll(pattern)) {
        fragment.append(document.createTextNode(node.data.slice(offset,match.index)));
        const cue = document.createElement('strong');
        cue.className = 'input-cue';
        cue.textContent = match[0];
        fragment.append(cue);
        offset = match.index + match[0].length;
      }
      fragment.append(document.createTextNode(node.data.slice(offset)));
      node.replaceWith(fragment);
    }
  }
  const observer = new MutationObserver(() => {
    if (scheduled) return;
    scheduled = true;
    queueMicrotask(() => {
      observer.disconnect();
      highlight();
      observer.observe(document.body,{subtree:true,childList:true,characterData:true});
      scheduled = false;
    });
  });
  highlight();
  observer.observe(document.body,{subtree:true,childList:true,characterData:true});
})();
