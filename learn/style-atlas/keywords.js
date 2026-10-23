(() => {
  const notes = window.ATLAS_KEYWORDS || [];
  const i18n = window.ATLAS_I18N;
  const grid = document.getElementById('keywordGrid');
  const panel = document.getElementById('keywordPanel');
  const toggle = document.getElementById('keywordToggle');
  const query = document.getElementById('search');
  const chosen = ['folk_illustration','geometric_photo_poster','swiss_design_notes','risograph','diffuse_gradient','enigmatriz'];
  const escape = text => String(text).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  let expanded = false;
  const copy = {
    zh: {title:'从作品里提取的视觉关键词',intro:'从两位创作者的公开作品说明中整理。这里记录可观察的做法与检索词，并连接图鉴中的相关风格；它们并不全是历史流派。',all:'查看全部关键词 ↓',less:'收起关键词 ↑',related:'查看关联风格 ↗',source:'查看原帖 ↗',count:n=>`${n} 条观察`,kinds:{'视觉方向':'视觉方向','海报做法':'海报做法','历史参考':'历史参考','媒介技法':'媒介技法','材料技法':'材料技法','混合描述词':'混合描述词','地域参考':'地域参考','创作者观察':'创作者观察'}},
    en: {title:'Visual vocabulary from real projects',intro:'Terms gathered from two creators’ public posts. They describe observable approaches and link to related archive records; they are not all historical movements.',all:'View all keywords ↓',less:'Show fewer ↑',related:'Related style ↗',source:'Original post ↗',count:n=>`${n} observations`,kinds:{'视觉方向':'Visual direction','海报做法':'Poster approach','历史参考':'Historical reference','媒介技法':'Media technique','材料技法':'Material technique','混合描述词':'Hybrid descriptor','地域参考':'Regional reference','创作者观察':'Creator study'}}
  };
  function card(note, c, isEn) {
    const name=isEn?note.english:note.name;
    const clues=isEn?note.cluesEn:note.clues;
    const related=note.related.find(id=>window.ATLAS_STYLES.some(style=>style.id===id));
    return `<article class="keyword-card"><div class="keyword-card-top"><span>${escape(c.kinds[note.kind])}</span><span>↗</span></div><h4>${escape(name)}</h4><p class="keyword-alt">${escape(isEn?note.name:note.english)}</p><ul>${clues.map(clue=>`<li>${escape(clue)}</li>`).join('')}</ul><div class="keyword-card-foot"><small>${escape(note.creator)}</small><div>${related?`<button type="button" data-related="${escape(related)}">${c.related}</button>`:''}<a href="${escape(note.url)}" target="_blank" rel="noopener noreferrer">${c.source}</a></div></div></article>`;
  }
  function render() {
    const isEn=i18n.lang==='en', c=copy[isEn?'en':'zh'], q=query.value.trim().toLocaleLowerCase();
    let matching=notes.filter(note=>!q||[note.name,note.english,note.kind,note.creator,...note.clues,...note.cluesEn].join(' ').toLocaleLowerCase().includes(q));
    panel.hidden=Boolean(q && !matching.length);
    if(!q&&!expanded) matching=chosen.map(id=>notes.find(note=>note.id===id)).filter(Boolean);
    document.getElementById('keywordTitle').textContent=c.title;
    document.getElementById('keywordIntro').textContent=c.intro;
    document.getElementById('keywordCount').textContent=c.count(q?matching.length:notes.length);
    grid.innerHTML=matching.map(note=>card(note,c,isEn)).join('');
    toggle.hidden=Boolean(q);
    toggle.textContent=expanded?c.less:c.all;
    toggle.setAttribute('aria-expanded',String(expanded));
  }
  toggle.addEventListener('click',()=>{expanded=!expanded;render()});
  grid.addEventListener('click',event=>{const button=event.target.closest('[data-related]');if(button)document.dispatchEvent(new CustomEvent('atlas-open-style',{detail:button.dataset.related}))});
  query.addEventListener('input',render);
  document.getElementById('clearAll').addEventListener('click',render);
  document.getElementById('emptyReset').addEventListener('click',render);
  document.addEventListener('atlas-language-change',render);
  render();
})();
