(() => {
  const styles = window.ATLAS_STYLES;
  const sources = window.ATLAS_SOURCES;
  const histories = window.ATLAS_HISTORY || {};
  const artworks = window.ATLAS_ARTWORKS || {};
  const en = window.ATLAS_EN || {};
  const keywordNotes = window.ATLAS_KEYWORDS || [];
  const i18n = window.ATLAS_I18N;
  const categories = ['历史艺术','现代艺术运动','建筑与室内设计','平面设计与排版','摄影与影像','电影与视觉叙事','地域绘画传统','当代视觉语言'];
  const eras = [
    { id:'pre1400', label:'1400 年以前', from:-10000, to:1399 },
    { id:'1400s', label:'1400—1699', from:1400, to:1699 },
    { id:'1700s', label:'1700—1799', from:1700, to:1799 },
    { id:'1800s', label:'1800—1899', from:1800, to:1899 },
    { id:'1900s', label:'1900—1949', from:1900, to:1949 },
    { id:'1950s', label:'1950—1999', from:1950, to:1999 },
    { id:'2000s', label:'2000 年至今', from:2000, to:2026 }
  ];
  const categoryNames = { '历史艺术':'历史艺术','现代艺术运动':'现代艺术','建筑与室内设计':'建筑 / 室内','平面设计与排版':'平面 / 排版','摄影与影像':'摄影 / 影像','电影与视觉叙事':'电影 / 叙事','地域绘画传统':'地域传统','当代视觉语言':'当代标签' };
  const state = { query:'', category:new Set(), era:new Set(), region:new Set(), sort:'chronological' };
  const $ = id => document.getElementById(id);
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const regionList = [...new Set(styles.flatMap(x => x.regions))].sort((a,b)=>a.localeCompare(b,'zh-CN'));
  const eraMatch = (style, era) => style.start <= era.to && style.end >= era.from;
  const period = s => s.start < 0 ? (i18n.lang === 'en' ? `${Math.abs(s.start)}–${Math.abs(s.end)} BCE` : `公元前 ${Math.abs(s.start)}—${Math.abs(s.end)} 年`) : (i18n.lang === 'en' ? `${s.start}–${s.ongoing ? 'present' : s.end}` : `${s.start} 年—${s.ongoing ? '至今' : s.end + ' 年'}`);
  const places = s => s.regions.map(i18n.region).join(' · ');
  const category = s => i18n.lang === 'en' ? i18n.category(s.category) : categoryNames[s.category];
  const content = s => i18n.lang === 'en' ? en[s.id] : null;

  function checkbox(container, group, value, label, count) {
    const id = `filter-${group}-${container.children.length}`;
    const item = document.createElement('label');
    item.innerHTML = `<input type="checkbox" id="${id}" data-group="${group}" value="${escape(value)}"><span class="check-name">${escape(label)}</span><span>${count}</span>`;
    container.append(item);
  }
  function renderFilters() {
    for (const id of ['categoryFilters','eraFilters','regionFilters']) $(id).replaceChildren();
    categories.forEach(c=>checkbox($('categoryFilters'),'category',c,i18n.category(c),styles.filter(s=>s.category===c).length));
    eras.forEach(e=>checkbox($('eraFilters'),'era',e.id,i18n.lang === 'en' ? (e.id === 'pre1400' ? 'Before 1400' : e.id === '2000s' ? '2000–present' : e.label.replace(' 年','')) : e.label,styles.filter(s=>eraMatch(s,e)).length));
    regionList.forEach(r=>checkbox($('regionFilters'),'region',r,i18n.region(r),styles.filter(s=>s.regions.includes(r)).length));
    document.querySelectorAll('.check-list input').forEach(input=>{input.checked=state[input.dataset.group].has(input.value)});
  }
  renderFilters();

  function matching() {
    const q = state.query.trim().toLocaleLowerCase();
    const list = styles.filter(s => {
      const translation=en[s.id];
      const directHit=[s.name,s.english,s.category,s.summary,...s.regions,...s.regions.map(i18n.region),...s.features,...s.people,i18n.category(s.category),translation?.summary,translation?.context,...(translation?.clues||[]),...(translation?.people||[])].join(' ').toLocaleLowerCase().includes(q);
      const aliasHit=s.id==='realism'&&'写实主义'.includes(q);
      const noteHit=keywordNotes.some(note=>note.related.includes(s.id)&&[note.name,note.english,...note.clues,...note.cluesEn,note.creator].join(' ').toLocaleLowerCase().includes(q));
      if(q && !directHit && !aliasHit && !noteHit) return false;
      if(state.category.size && !state.category.has(s.category)) return false;
      if(state.era.size && !eras.some(e=>state.era.has(e.id)&&eraMatch(s,e))) return false;
      if(state.region.size && !s.regions.some(r=>state.region.has(r))) return false;
      return true;
    });
    if(state.sort==='name') list.sort((a,b)=>i18n.name(a).localeCompare(i18n.name(b),i18n.lang==='en'?'en':'zh-CN'));
    else if(state.sort==='recent') list.sort((a,b)=>b.start-a.start||a.index-b.index);
    else list.sort((a,b)=>a.start-b.start||a.index-b.index);
    return list;
  }
  function card(s) {
    const work=artworks[s.id], translated=content(s), label=i18n.name(s), description=translated?.summary||s.summary;
    const subtitle=i18n.lang==='en'?s.name:s.english;
    const visual=work?`<div class="card-art real-card-art"><img src="${escape(work.file)}" alt="${escape(work.title)}, ${escape(work.artist)}" loading="lazy"><span class="art-index">STYLE / ${String(s.index+1).padStart(2,'0')}</span><span class="art-type">${escape(category(s))}</span></div>`:`<div class="card-art archive-card-art" aria-hidden="true"><span class="archive-kicker">STYLE ARCHIVE</span><strong>${escape(label)}</strong><span class="archive-features">${escape((translated?.clues||s.features).slice(0,2).join(' · '))}</span><span class="art-index">STYLE / ${String(s.index+1).padStart(2,'0')}</span><span class="art-type">${i18n.t('archive')}</span></div>`;
    return `<article class="style-card ${work?'has-image':'no-image'}"><button class="card-hit" type="button" data-open="${s.id}" aria-label="${i18n.lang==='en'?'View':'查看'}${escape(label)}${i18n.lang==='en'?' details':'详情'}">${visual}<div class="card-body"><span class="card-era">${escape(period(s))}</span><h3>${escape(label)}</h3><div class="card-english">${escape(subtitle)}</div><p>${escape(description)}</p><div class="card-foot"><span>${escape(s.regions.slice(0,2).map(i18n.region).join(' · '))}${s.regions.length>2?(i18n.lang==='en'?' + more':' 等'):''}</span><span>${i18n.t('cardLook')}</span></div></div></button></article>`;
  }
  function renderChips() {
    const chips=[];
    if(state.query) chips.push(['query',state.query,`${i18n.t('searchChip')}${state.query}`]);
    for(const group of ['category','era','region']) for(const value of state[group]) {
      const label=group==='era'?(i18n.lang==='en'?(value==='pre1400'?'Before 1400':value==='2000s'?'2000–present':eras.find(e=>e.id===value).label):eras.find(e=>e.id===value).label):group==='category'?i18n.category(value):i18n.region(value);
      chips.push([group,value,label]);
    }
    $('activeFilters').innerHTML=chips.map(([group,value,label])=>`<button type="button" data-remove-group="${escape(group)}" data-remove-value="${escape(value)}" aria-label="${i18n.t('remove')} ${escape(label)}">${escape(label)} ×</button>`).join('');
  }
  let rendered = [];
  function render() {
    rendered=matching();
    $('resultCount').textContent=rendered.length;
    $('cards').innerHTML=rendered.map(card).join('');
    $('empty').hidden=rendered.length>0;
    renderChips();
  }
  function clear() {
    state.query='';state.category.clear();state.era.clear();state.region.clear();
    $('search').value='';document.querySelectorAll('.check-list input').forEach(input=>input.checked=false);render();
  }
  $('search').addEventListener('input',e=>{state.query=e.target.value;render()});
  $('sort').addEventListener('change',e=>{state.sort=e.target.value;render()});
  $('clearAll').addEventListener('click',clear);
  $('emptyReset').addEventListener('click',clear);
  $('filter-groups').addEventListener('change',e=>{
    if(!e.target.matches('input[type=checkbox]'))return;
    const set=state[e.target.dataset.group];
    e.target.checked?set.add(e.target.value):set.delete(e.target.value);
    render();
  });
  $('activeFilters').addEventListener('click',e=>{
    const button=e.target.closest('[data-remove-group]');if(!button)return;
    const {removeGroup:group,removeValue:value}=button.dataset;
    if(group==='query'){$('search').value='';state.query=''}
    else{state[group].delete(value);const input=[...document.querySelectorAll('.check-list input')].find(x=>x.dataset.group===group&&x.value===value);if(input)input.checked=false}
    render();
  });
  $('mobileFilterToggle').addEventListener('click',()=>{
    const open=$('filter-groups').classList.toggle('open');
    $('mobileFilterToggle').setAttribute('aria-expanded',String(open));
    $('mobileFilterToggle').innerHTML=`${i18n.t(open?'collapse':'expand')} <span>${open?'−':'＋'}</span>`;
  });
  document.addEventListener('keydown',e=>{
    if(e.key==='/'&&document.activeElement?.tagName!=='INPUT'&&!$('detailDialog').open){e.preventDefault();$('search').focus()}
  });

  const dialog=$('detailDialog');
  let previousHash='';
  function openDetail(s,updateHash=true) {
    if(!s)return;
    const source=sources[s.source]||sources.met, work=artworks[s.id], translated=content(s), isEn=i18n.lang==='en';
    const prompt=i18n.t(s.category==='当代视觉语言'?'promptLabel':'promptHistory');
    const sourceLabel=isEn?new URL(source[1]).hostname.replace(/^www\./,''):source[0];
    const workLabel=work?(isEn?new URL(work.url).hostname.replace(/^www\./,''):work.institution):'';
    const gallery=(window.ATLAS_STYLE_GALLERIES?.[s.id] || [s.id]).map(id=>artworks[id]).filter(Boolean);
    const workVisual=gallery.length?`<div class="detail-work-gallery ${gallery.length>1?'multiple':''}">${gallery.map((item,index)=>`<figure class="detail-work"><img src="${escape(item.file)}" alt="${escape(item.title)}, ${escape(item.artist)}" loading="${index?'lazy':'eager'}"><figcaption><span>${escape(item.artist)} · ${escape(item.title)}${item.date?' · '+escape(item.date):''}</span><a href="${escape(item.url)}" target="_blank" rel="noopener noreferrer">${escape(isEn?new URL(item.url).hostname.replace(/^www\./,''):item.institution)} / ${escape(item.rights)} ↗</a></figcaption>${item.note&&!isEn?`<p class="work-note">${escape(item.note)}</p>`:''}</figure>`).join('')}</div>`:'';
    const clues=translated?.clues||s.features, people=translated?.people||s.people;
    $('detailContent').innerHTML=`<div class="detail-inner"><div class="detail-language" role="group" aria-label="${isEn?'Language':'语言切换'}"><button type="button" data-lang="zh" aria-pressed="${!isEn}">中</button><span>/</span><button type="button" data-lang="en" aria-pressed="${isEn}">EN</button></div><button class="detail-close" type="button" aria-label="${isEn?'Close details':'关闭详情'}">×</button><span class="detail-kicker">STYLE / ${String(s.index+1).padStart(2,'0')} · ${escape(category(s))} / ${escape(places(s))}</span><h2 id="detailTitle">${escape(i18n.name(s))}</h2><div class="detail-english">${escape(isEn?s.name:s.english)}</div>${workVisual}<p class="detail-intro">${escape(translated?.summary||s.summary)}</p><div class="detail-meta"><div><small>${i18n.t('artPeriod')}</small><strong>${escape(period(s))}</strong></div><div><small>${i18n.t('artPlace')}</small><strong>${escape(places(s))}</strong></div></div><div class="detail-history"><h3>${i18n.t('context')}</h3><p>${escape(translated?.context||histories[s.id]||i18n.t('missingContext'))}</p></div><div class="detail-cols"><div class="detail-block"><h3>${i18n.t('clues')}</h3><ul>${clues.map(f=>`<li>${escape(f)}</li>`).join('')}</ul></div><div class="detail-block"><h3>${i18n.t('people')}</h3><ul>${people.map(f=>`<li>${escape(f)}</li>`).join('')}</ul></div></div><div class="detail-callout"><b>${i18n.t('exercise')}</b>${escape(prompt)}</div><div class="detail-source"><span>${i18n.t('sourceEntry')}</span><a href="${escape(source[1])}" target="_blank" rel="noopener noreferrer">${escape(sourceLabel)} ↗</a></div><div class="detail-prevnext"><button type="button" data-shift="-1">${i18n.t('prevStyle')}</button><button type="button" data-shift="1">${i18n.t('nextStyle')}</button></div></div>`;
    if(!dialog.open){previousHash=location.hash||'#library';dialog.showModal()}
    dialog.scrollTop=0;
    if(updateHash)history.replaceState(null,'',`#style-${s.id}`);
  }
  $('cards').addEventListener('click',e=>{const button=e.target.closest('[data-open]');if(button)openDetail(styles.find(s=>s.id===button.dataset.open))});
  document.addEventListener('atlas-open-style',e=>openDetail(styles.find(s=>s.id===e.detail)));
  $('detailContent').addEventListener('click',e=>{
    const lang=e.target.closest('[data-lang]');if(lang){i18n.setLanguage(lang.dataset.lang);return}
    if(e.target.closest('.detail-close'))dialog.close();
    const shift=e.target.closest('[data-shift]');if(shift){const current=location.hash.replace('#style-','');const pos=rendered.findIndex(s=>s.id===current);const next=rendered[(pos+Number(shift.dataset.shift)+rendered.length)%rendered.length];openDetail(next)}
  });
  dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
  dialog.addEventListener('close',()=>{if(location.hash.startsWith('#style-'))history.replaceState(null,'',previousHash||'#library')});
  document.addEventListener('atlas-language-change',()=>{
    renderFilters();
    $('mobileFilterToggle').innerHTML=`${i18n.t($('filter-groups').classList.contains('open')?'collapse':'expand')} <span>${$('filter-groups').classList.contains('open')?'−':'＋'}</span>`;
    render();
    if(dialog.open){const s=styles.find(x=>x.id===location.hash.replace('#style-',''));if(s)openDetail(s,false)}
  });
  $('mobileFilterToggle').innerHTML=`${i18n.t('expand')} <span>＋</span>`;
  render();
  const initial=location.hash.match(/^#style-([a-z0-9_]+)$/);
  if(initial){const s=styles.find(x=>x.id===initial[1]);if(s)openDetail(s,false)}
})();
