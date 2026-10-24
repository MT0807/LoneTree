(() => {
  const notes = window.ATLAS_KEYWORDS || [];
  const art = window.ATLAS_ARTWORKS || {};
  const galleries = window.ATLAS_KEYWORD_GALLERIES || {};
  const details = window.ATLAS_KEYWORD_DETAILS || {};
  const i18n = window.ATLAS_I18N;
  const grid = document.getElementById('keywordGrid');
  const panel = document.getElementById('keywordPanel');
  const toggle = document.getElementById('keywordToggle');
  const query = document.getElementById('search');
  const dialog = document.getElementById('keywordDialog');
  const dialogContent = document.getElementById('keywordDialogContent');
  const chosen = ['folk_illustration','geometric_photo_poster','swiss_design_notes','risograph','diffuse_gradient','enigmatriz'];
  const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  let expanded = false;
  let activeId = null;
  let activeImage = 0;
  const copy = {
    zh: {title:'从作品里提取的视觉关键词',intro:'从三位创作者的公开作品说明中整理。点开卡片，观察真实作品里的构图、材质与色彩；这些图片是相关视觉参考，并非所提创作者的作品。',all:'查看全部关键词 ↓',less:'收起关键词 ↑',count:n=>`${n} 条观察`,open:'查看图片与分析',close:'关闭',reference:'相关真实作品 · 非该创作者作品',imageSource:'查看作品出处 ↗',visualClues:'观察线索',method:'做法与辨析',imageCount:n=>`${n} 张图片`,kinds:{'视觉方向':'视觉方向','海报做法':'海报做法','历史参考':'历史参考','媒介技法':'媒介技法','材料技法':'材料技法','混合描述词':'混合描述词','地域参考':'地域参考','创作者观察':'创作者观察'}},
    en: {title:'Visual vocabulary from real projects',intro:'Terms gathered from three creators’ public posts. Open a card to study composition, material and colour in real works. These are related visual references, not works by the named creator.',all:'View all keywords ↓',less:'Show fewer ↑',count:n=>`${n} observations`,open:'View images and notes',close:'Close',reference:'Related real works · not by the named creator',imageSource:'Artwork record ↗',visualClues:'What to look for',method:'Method and distinction',imageCount:n=>`${n} images`,kinds:{'视觉方向':'Visual direction','海报做法':'Poster approach','历史参考':'Historical reference','媒介技法':'Media technique','材料技法':'Material technique','混合描述词':'Hybrid descriptor','地域参考':'Regional reference','创作者观察':'Creator study'}}
  };
  const galleryFor = note => (galleries[note.id] || []).map(id => art[id]).filter(item => item && item.file);
  function card(note, c, isEn) {
    const name = isEn ? note.english : note.name;
    const clues = isEn ? note.cluesEn : note.clues;
    const cover = galleryFor(note)[0];
    return `<article class="keyword-card"><button class="keyword-open" type="button" data-keyword="${escape(note.id)}" aria-label="${escape(c.open + ': ' + name)}"><span class="keyword-cover"><img src="${escape(cover.file)}" alt="${escape(cover.title)}" loading="lazy"><span class="keyword-cover-count">${escape(c.imageCount(galleryFor(note).length))}</span></span><span class="keyword-card-body"><span class="keyword-card-top"><span>${escape(c.kinds[note.kind])}</span><span aria-hidden="true">↗</span></span><strong class="keyword-name">${escape(name)}</strong><span class="keyword-alt">${escape(isEn?note.name:note.english)}</span><span class="keyword-tags">${clues.map(clue=>`<span>${escape(clue)}</span>`).join('')}</span><span class="keyword-card-foot"><span>${escape(note.creator)}</span><span>${escape(c.open)} ↗</span></span></span></button></article>`;
  }
  function render() {
    const isEn = i18n.lang === 'en', c = copy[isEn?'en':'zh'], q = query.value.trim().toLocaleLowerCase();
    let matching = notes.filter(note => !q || [note.name,note.english,note.kind,note.creator,...note.clues,...note.cluesEn].join(' ').toLocaleLowerCase().includes(q));
    panel.hidden = Boolean(q && !matching.length);
    if (!q && !expanded) matching = chosen.map(id => notes.find(note => note.id === id)).filter(Boolean);
    document.getElementById('keywordTitle').textContent = c.title;
    document.getElementById('keywordIntro').textContent = c.intro;
    document.getElementById('keywordCount').textContent = c.count(q ? matching.length : notes.length);
    grid.innerHTML = matching.map(note => card(note,c,isEn)).join('');
    toggle.hidden = Boolean(q);
    toggle.textContent = expanded ? c.less : c.all;
    toggle.setAttribute('aria-expanded', String(expanded));
  }
  function showGallery() {
    const note = notes.find(n => n.id === activeId);
    if (!note) return;
    const isEn = i18n.lang === 'en', c = copy[isEn?'en':'zh'];
    const gallery = galleryFor(note);
    activeImage = Math.max(0,Math.min(activeImage,gallery.length-1));
    const item = gallery[activeImage];
    const name = isEn ? note.english : note.name;
    const clues = isEn ? note.cluesEn : note.clues;
    const method = details[note.id]?.[isEn?'en':'zh'];
    dialogContent.innerHTML = `<div class="keyword-dialog-head"><div><span class="section-kicker">VISUAL VOCABULARY / ${escape(c.kinds[note.kind])}</span><h2 id="keywordDialogTitle">${escape(name)}</h2><p>${escape(isEn?note.name:note.english)}</p></div><button type="button" class="keyword-dialog-close" data-close aria-label="${escape(c.close)}">×</button></div><p class="keyword-reference">${escape(c.reference)}</p><div class="keyword-gallery-layout"><div class="keyword-gallery-main"><div class="keyword-gallery-image"><img src="${escape(item.file)}" alt="${escape(item.title)}"></div><div class="keyword-gallery-caption"><div><strong>${escape(item.title)}</strong><span>${escape([item.artist,item.date,item.institution].filter(Boolean).join(' · '))}</span></div><a href="${escape(item.url)}" target="_blank" rel="noopener noreferrer">${escape(c.imageSource)}</a></div></div><div class="keyword-gallery-side"><h3>${escape(c.visualClues)}</h3><ul>${clues.map(clue=>`<li>${escape(clue)}</li>`).join('')}</ul>${method?`<div class="keyword-method"><h3>${escape(c.method)}</h3><p>${escape(method)}</p></div>`:''}<div class="keyword-gallery-thumbs">${gallery.map((work,index)=>`<button type="button" data-image="${index}" class="${index===activeImage?'active':''}" aria-label="${escape(work.title)}"><img src="${escape(work.file)}" alt="" loading="lazy"><span>${String(index+1).padStart(2,'0')}</span></button>`).join('')}</div><p class="keyword-gallery-index">${String(activeImage+1).padStart(2,'0')} / ${String(gallery.length).padStart(2,'0')}</p></div></div>`;
  }
  grid.addEventListener('click', event => {
    const button = event.target.closest('[data-keyword]');
    if (!button) return;
    activeId = button.dataset.keyword; activeImage = 0; showGallery(); dialog.showModal();
  });
  dialog.addEventListener('click', event => {
    if (event.target === dialog || event.target.closest('[data-close]')) { dialog.close(); return; }
    const image = event.target.closest('[data-image]');
    if (image) { activeImage = Number(image.dataset.image); showGallery(); }
  });
  dialog.addEventListener('keydown', event => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    const note = notes.find(n => n.id === activeId);
    if (!note) return;
    const length = galleryFor(note).length;
    activeImage = (activeImage + (event.key === 'ArrowRight' ? 1 : -1) + length) % length;
    showGallery(); event.preventDefault();
  });
  toggle.addEventListener('click', () => { expanded = !expanded; render(); });
  query.addEventListener('input', render);
  document.getElementById('clearAll').addEventListener('click', render);
  document.getElementById('emptyReset').addEventListener('click', render);
  document.addEventListener('atlas-language-change', () => { render(); if (dialog.open) showGallery(); });
  render();
})();
