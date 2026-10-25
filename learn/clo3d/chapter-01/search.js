(() => {
  const index = window.CLO_SEARCH_INDEX || [];
  if (!index.length) return;
  const segments = location.pathname.split('/').filter(Boolean);
  if (!segments.at(-1)?.endsWith('.html')) segments.push('index.html');
  const page = segments.slice(-2).join('/');
  document.querySelectorAll('[data-zh][data-en]').forEach((element, number) => {
    element.id ||= `search-entry-${number + 1}`;
  });
  const terms = {
    zh:{button:'搜索',title:'搜索 CLO3D 教程',placeholder:'搜索工具、操作或遇到的问题…',hint:'输入关键词或近义词，点击结果直达操作说明。',empty:'没有找到相关内容，试试其他说法。',initial:'例如：袖口、缝线、肩省、重置板片',pages:{'chapter-01/index.html':'第一章教程','chapter-01/about-clo3d.html':'关于 CLO3D','chapter-01/reset-3d-pattern.html':'重置 3D 版片','shirt-lesson/index.html':'男士衬衫课程'}},
    en:{button:'Search',title:'Search CLO3D lessons',placeholder:'Search tools, steps, or a problem…',hint:'Try a term or a similar word, then open the matching instruction.',empty:'No match found. Try another term.',initial:'Try: armhole, seam, dart, reset',pages:{'chapter-01/index.html':'Chapter 01','chapter-01/about-clo3d.html':'About CLO3D','chapter-01/reset-3d-pattern.html':'Reset 3D Pattern','shirt-lesson/index.html':"Men's shirt lesson"}},
    id:{button:'Cari',title:'Cari pelajaran CLO3D',placeholder:'Cari alat, langkah, atau masalah…',hint:'Coba istilah atau sinonim, lalu buka petunjuk yang sesuai.',empty:'Tidak ada hasil. Coba istilah lain.',initial:'Contoh: lubang lengan, kupnat, simulasi',pages:{'chapter-01/index.html':'Bab 01','chapter-01/about-clo3d.html':'Tentang CLO3D','chapter-01/reset-3d-pattern.html':'Atur ulang pola 3D','shirt-lesson/index.html':'Pelajaran kemeja pria'}},
    ru:{button:'Поиск',title:'Поиск по урокам CLO3D',placeholder:'Найдите инструмент, действие или проблему…',hint:'Введите термин или похожее слово и откройте нужную инструкцию.',empty:'Ничего не найдено. Попробуйте другой запрос.',initial:'Например: пройма, вытачка, симуляция',pages:{'chapter-01/index.html':'Глава 01','chapter-01/about-clo3d.html':'О CLO3D','chapter-01/reset-3d-pattern.html':'Сброс 3D-детали','shirt-lesson/index.html':'Мужская рубашка'}},
    de:{button:'Suche',title:'CLO3D-Lektionen durchsuchen',placeholder:'Werkzeug, Arbeitsschritt oder Problem suchen…',hint:'Einen Begriff oder ein ähnliches Wort eingeben und die Anleitung öffnen.',empty:'Keine Treffer. Versuche einen anderen Begriff.',initial:'Zum Beispiel: Armloch, Abnäher, Simulation',pages:{'chapter-01/index.html':'Kapitel 01','chapter-01/about-clo3d.html':'Über CLO3D','chapter-01/reset-3d-pattern.html':'3D-Schnittteil zurücksetzen','shirt-lesson/index.html':'Herrenhemd-Lektion'}}
  };
  const synonyms = [
    ['板片','版片','裁片','纸样','pattern','panel','piece','pola','schnittteil','деталь','лекало'],
    ['缝线','缝纫线','缝纫','缝合','针线','seam','sewing','stitch','jahitan','naht','шов'],
    ['袖口','袖洞','袖窿','手臂开口','armhole','sleeve opening','lubang lengan','armloch','пройма'],
    ['模拟','仿真','物理','垂坠','simulation','simulate','simulasi','simulation','симуляция'],
    ['穿模','穿透','穿进模特','碰撞','clipping','penetration','collision','durchdringen','пересечение'],
    ['重置','复原','恢复','重来','reset','restore','zurücksetzen','сброс','atur ulang'],
    ['圆弧','曲线','圆顺','弧线','arc','curve','curvature','kurve','кривая'],
    ['安排点','吸附点','定位点','arrangement point','placement point','titik pengaturan','anordnungspunkt','точка размещения'],
    ['孔','洞','镂空','领口','cutout','hole','neckline','lubang','ausschnitt','вырез'],
    ['移动','平移','拖动','move','drag','verschieben','переместить'],
    ['删除','移除','去掉','delete','remove','hapus','löschen','удалить'],
    ['省道','胸省','肩省','dart','kupnat','вытачка','abnäher'],
    ['袖窿','袖笼','袖口','armhole','lubang lengan','пройма','armloch']
  ];
  const normalized = text => (text || '').normalize('NFKC').toLocaleLowerCase().replace(/[\s\p{P}\p{S}]+/gu,'');
  const groups = synonyms.map(group => group.map(normalized));
  const expand = query => {
    const key = normalized(query);
    const variants = new Set([key]);
    for (const group of groups) if (group.some(word => word.includes(key) || key.includes(word))) group.forEach(word => variants.add(word));
    return [...variants].filter(Boolean);
  };
  const grams = text => {
    const result = new Set();
    for (let i=0;i<text.length-1;i++) result.add(text.slice(i,i+2));
    return result;
  };
  const locale = () => {
    const code = document.documentElement.lang.split('-')[0];
    return terms[code] ? code : 'zh';
  };
  const translate = (entry, code, field) => {
    if (field === 'title' && entry.headingEn === "Men's shirt pattern design") return terms[code].pages[entry.page];
    if (code === 'zh') return entry[field === 'title' ? 'headingZh' : 'zh'];
    const source = entry[field === 'title' ? 'headingEn' : 'en'];
    if (code === 'en') return source;
    const translations = entry.page.startsWith('shirt-lesson/') ? window.SHIRT_TRANSLATIONS : window.CLO_TRANSLATIONS;
    return translations?.[code]?.[source] || source;
  };
  const icon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="10.8" cy="10.8" r="7.2"/><path d="m16.2 16.2 5 5"/></svg>';
  const header = document.querySelector('.top .right') || document.querySelector('.reset-top') || document.querySelector('.lesson-header');
  if (!header) return;
  const trigger = document.createElement('button');
  trigger.type = 'button';
  trigger.className = 'clo-search-trigger';
  trigger.innerHTML = `${icon}<span></span>`;
  trigger.setAttribute('aria-haspopup','dialog');
  header.insertBefore(trigger,header.querySelector('.language-picker'));

  const backdrop = document.createElement('div');
  backdrop.className = 'clo-search-backdrop';
  backdrop.hidden = true;
  backdrop.innerHTML = `<div class="clo-search-dialog" role="dialog" aria-modal="true" aria-labelledby="clo-search-title"><div class="clo-search-head"><h2 id="clo-search-title"></h2><button class="clo-search-close" type="button" aria-label="Close">×</button></div><label class="clo-search-field">${icon}<input type="search" autocomplete="off" spellcheck="false" aria-label="Search lessons"></label><p class="clo-search-hint"></p><div class="clo-search-results" role="list" aria-live="polite"></div></div>`;
  document.body.append(backdrop);
  const input = backdrop.querySelector('input');
  const results = backdrop.querySelector('.clo-search-results');
  const open = () => { backdrop.hidden=false; document.body.style.overflow='hidden'; input.focus(); input.select(); render(); };
  const close = () => { backdrop.hidden=true; document.body.style.overflow=''; trigger.focus(); };
  const makeResult = (entry, code) => {
    const link = document.createElement('a');
    link.className = 'clo-search-result';
    link.href = `../${entry.page}#${entry.anchor}`;
    const head = document.createElement('div');
    head.className = 'clo-search-result-head';
    const title = document.createElement('strong');
    title.textContent = translate(entry,code,'title');
    const pageName = document.createElement('small');
    pageName.textContent = terms[code].pages[entry.page];
    head.append(title,pageName);
    const excerpt = document.createElement('p');
    excerpt.textContent = translate(entry,code,'text');
    link.append(head,excerpt);
    link.addEventListener('click',event => {
      if (entry.page !== page) return;
      event.preventDefault();
      close();
      location.hash = entry.anchor;
      revealTarget(entry.anchor);
    });
    return link;
  };
  const score = (entry, query, variants, code) => {
    const own = normalized(translate(entry,code,'text'));
    const title = normalized(translate(entry,code,'title'));
    const zh = normalized(entry.zh), en = normalized(entry.en);
    const haystacks = [own,title,zh,en];
    let best = 0;
    for (const variant of variants) {
      for (let i=0;i<haystacks.length;i++) {
        const at = haystacks[i].indexOf(variant);
        if (at >= 0) best = Math.max(best,(variant === query ? 100 : 54) + (i === 1 ? 16 : i === 0 ? 10 : 0) - Math.min(at/35,12));
      }
    }
    if (best) return best;
    const qgrams = grams(query);
    if (qgrams.size < 2) return 0;
    let overlap = 0;
    for (const text of haystacks) {
      const tgrams = grams(text);
      let matches = 0;
      for (const gram of qgrams) if (tgrams.has(gram)) matches++;
      overlap = Math.max(overlap,matches/qgrams.size);
    }
    return overlap >= .6 ? 20*overlap : 0;
  };
  function render() {
    const code = locale(), ui = terms[code];
    trigger.querySelector('span').textContent = ui.button;
    trigger.setAttribute('aria-label',ui.button);
    backdrop.querySelector('h2').textContent = ui.title;
    input.placeholder = ui.placeholder;
    input.setAttribute('aria-label',ui.title);
    backdrop.querySelector('.clo-search-hint').textContent = ui.hint;
    results.replaceChildren();
    const query = normalized(input.value.trim());
    if (!query) { const empty = document.createElement('div'); empty.className='clo-search-empty'; empty.textContent=ui.initial; results.append(empty); return; }
    const variants = expand(query);
    const matches = index.map((entry,order) => ({entry,order,score:score(entry,query,variants,code)}))
      .filter(item => item.score > 0).sort((a,b) => b.score-a.score || a.order-b.order).slice(0,10);
    if (!matches.length) { const empty = document.createElement('div'); empty.className='clo-search-empty'; empty.textContent=ui.empty; results.append(empty); return; }
    for (const match of matches) results.append(makeResult(match.entry,code));
  }
  function revealTarget(anchor = location.hash.slice(1)) {
    const target = document.getElementById(anchor);
    if (!target) return;
    target.scrollIntoView({block:'center'});
    target.classList.add('clo-search-target');
    setTimeout(() => target.classList.remove('clo-search-target'),2500);
  }
  trigger.addEventListener('click',open);
  backdrop.querySelector('.clo-search-close').addEventListener('click',close);
  backdrop.addEventListener('click',event => { if (event.target === backdrop) close(); });
  input.addEventListener('input',render);
  input.addEventListener('keydown',event => { if (event.key === 'Enter') results.querySelector('a')?.click(); });
  document.addEventListener('keydown',event => {
    if (event.key === 'Escape' && !backdrop.hidden) {event.preventDefault();close();}
    if ((event.key === '/' || (event.key.toLowerCase() === 'k' && (event.ctrlKey || event.metaKey))) && !/INPUT|TEXTAREA/.test(document.activeElement?.tagName || '') && !document.activeElement?.isContentEditable) {event.preventDefault();open();}
  });
  document.addEventListener('clo:languagechange',render);
  render();
  if (location.hash.startsWith('#search-entry-')) requestAnimationFrame(() => revealTarget());
})();
