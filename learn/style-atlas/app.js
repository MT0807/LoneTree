(() => {
  const styles = window.ATLAS_STYLES;
  const sources = window.ATLAS_SOURCES;
  const histories = window.ATLAS_HISTORY || {};
  const artworks = window.ATLAS_ARTWORKS || {};
  document.getElementById('realCount').textContent = Object.keys(artworks).length;
  const categories = ['历史艺术','现代艺术运动','建筑与设计','摄影与影像','地域绘画传统','当代视觉语言'];
  const eras = [
    { id:'pre1400', label:'1400 年以前', from:-10000, to:1399 },
    { id:'1400s', label:'1400—1699', from:1400, to:1699 },
    { id:'1700s', label:'1700—1799', from:1700, to:1799 },
    { id:'1800s', label:'1800—1899', from:1800, to:1899 },
    { id:'1900s', label:'1900—1949', from:1900, to:1949 },
    { id:'1950s', label:'1950—1999', from:1950, to:1999 },
    { id:'2000s', label:'2000 年至今', from:2000, to:2026 }
  ];
  const categoryNames = { '历史艺术':'历史艺术','现代艺术运动':'现代艺术','建筑与设计':'设计 / 建筑','摄影与影像':'摄影 / 影像','地域绘画传统':'地域传统','当代视觉语言':'当代标签' };
  const state = { query:'', category:new Set(), era:new Set(), region:new Set(), sort:'chronological' };
  const $ = id => document.getElementById(id);
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const regionList = [...new Set(styles.flatMap(x => x.regions))].sort((a,b)=>a.localeCompare(b,'zh-CN'));
  const eraMatch = (style, era) => style.start <= era.to && style.end >= era.from;
  const period = s => `${s.start < 1000 ? s.start + ' 年' : s.start + ' 年'}—${s.ongoing ? '至今' : s.end + ' 年'}`;

  function checkbox(container, group, value, label, count) {
    const id = `filter-${group}-${container.children.length}`;
    const item = document.createElement('label');
    item.innerHTML = `<input type="checkbox" id="${id}" data-group="${group}" value="${escape(value)}"><span class="check-name">${escape(label)}</span><span>${count}</span>`;
    container.append(item);
  }
  categories.forEach(c=>checkbox($('categoryFilters'),'category',c,c,styles.filter(s=>s.category===c).length));
  eras.forEach(e=>checkbox($('eraFilters'),'era',e.id,e.label,styles.filter(s=>eraMatch(s,e)).length));
  regionList.forEach(r=>checkbox($('regionFilters'),'region',r,r,styles.filter(s=>s.regions.includes(r)).length));

  function matching() {
    const q = state.query.trim().toLocaleLowerCase();
    const list = styles.filter(s => {
      if(q && ![s.name,s.english,s.category,s.summary,...s.regions,...s.features,...s.people].join(' ').toLocaleLowerCase().includes(q)) return false;
      if(state.category.size && !state.category.has(s.category)) return false;
      if(state.era.size && !eras.some(e=>state.era.has(e.id)&&eraMatch(s,e))) return false;
      if(state.region.size && !s.regions.some(r=>state.region.has(r))) return false;
      return true;
    });
    if(state.sort==='name') list.sort((a,b)=>a.name.localeCompare(b.name,'zh-CN'));
    else if(state.sort==='recent') list.sort((a,b)=>b.start-a.start||a.index-b.index);
    else list.sort((a,b)=>a.start-b.start||a.index-b.index);
    return list;
  }
  function card(s) {
    const work=artworks[s.id];
    const visual=work?`<div class="card-art real-card-art"><img src="${escape(work.file)}" alt="${escape(work.title)}，${escape(work.artist)}" loading="lazy"><span class="art-index">STYLE / ${String(s.index+1).padStart(2,'0')}</span><span class="art-type">${escape(categoryNames[s.category])}</span></div>`:'';
    return `<article class="style-card ${work?'has-image':'no-image'}"><button class="card-hit" type="button" data-open="${s.id}" aria-label="查看${escape(s.name)}详情">${visual}<div class="card-body"><span class="card-era">${escape(period(s))}</span><h3>${escape(s.name)}</h3><div class="card-english">${escape(s.english)}</div><p>${escape(s.summary)}</p><div class="card-foot"><span>${escape(s.regions.slice(0,2).join(' · '))}${s.regions.length>2?' 等':''}</span><span>查看线索 ↗</span></div></div></button></article>`;
  }
  function renderChips() {
    const chips=[];
    if(state.query) chips.push(['query',state.query,`搜索：${state.query}`]);
    for(const group of ['category','era','region']) for(const value of state[group]) {
      const label=group==='era'?eras.find(e=>e.id===value).label:value;
      chips.push([group,value,label]);
    }
    $('activeFilters').innerHTML=chips.map(([group,value,label])=>`<button type="button" data-remove-group="${escape(group)}" data-remove-value="${escape(value)}" aria-label="移除${escape(label)}筛选">${escape(label)} ×</button>`).join('');
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
    $('mobileFilterToggle').innerHTML=`${open?'收起':'展开'}筛选条件 <span>${open?'−':'＋'}</span>`;
  });
  document.addEventListener('keydown',e=>{
    if(e.key==='/'&&document.activeElement?.tagName!=='INPUT'&&!$('detailDialog').open){e.preventDefault();$('search').focus()}
  });

  const dialog=$('detailDialog');
  let previousHash='';
  function openDetail(s,updateHash=true) {
    if(!s)return;
    const source=sources[s.source]||sources.met, work=artworks[s.id];
    const prompt=s.category==='当代视觉语言'?'把这个标签拆成可执行条件：具体写出色彩、光线、构图和材质，而不只写风格名称。':'选一件有作者、日期与收藏出处的真实作品，逐一指出下列特征在作品中的位置。';
    const workVisual=work?`<figure class="detail-work"><img src="${escape(work.file)}" alt="${escape(work.title)}，${escape(work.artist)}" loading="eager"><figcaption><span>${escape(work.artist)} · ${escape(work.title)}${work.date?' · '+escape(work.date):''}</span><a href="${escape(work.url)}" target="_blank" rel="noopener noreferrer">${escape(work.institution)} / ${escape(work.rights)} ↗</a></figcaption>${work.note?`<p class="work-note">${escape(work.note)}</p>`:''}</figure>`:'';
    $('detailContent').innerHTML=`<div class="detail-inner"><button class="detail-close" type="button" aria-label="关闭详情">×</button><span class="detail-kicker">STYLE / ${String(s.index+1).padStart(2,'0')} · ${escape(s.category)} / ${escape(s.regions.join(' · '))}</span><h2 id="detailTitle">${escape(s.name)}</h2><div class="detail-english">${escape(s.english)}</div>${workVisual}<p class="detail-intro">${escape(s.summary)}</p><div class="detail-meta"><div><small>大致活跃期 / PERIOD</small><strong>${escape(period(s))}</strong></div><div><small>起源或重要发展地 / PLACE</small><strong>${escape(s.regions.join(' · '))}</strong></div></div><div class="detail-history"><h3>历史脉络 / CONTEXT</h3><p>${escape(histories[s.id]||'请结合资料入口，考察这类视觉语言在具体年代与地域中的发展。')}</p></div><div class="detail-cols"><div class="detail-block"><h3>视觉线索 / LOOK FOR</h3><ul>${s.features.map(f=>`<li>${escape(f)}</li>`).join('')}</ul></div><div class="detail-block"><h3>代表人物与相关实践者 / PEOPLE</h3><ul>${s.people.map(f=>`<li>${escape(f)}</li>`).join('')}</ul></div></div><div class="detail-callout"><b>观察练习：</b>${escape(prompt)}</div><div class="detail-source"><span>资料入口 · 具体作品与作者请继续核对馆藏信息</span><a href="${escape(source[1])}" target="_blank" rel="noopener noreferrer">${escape(source[0])} ↗</a></div><div class="detail-prevnext"><button type="button" data-shift="-1">← 上一种</button><button type="button" data-shift="1">下一种 →</button></div></div>`;
    if(!dialog.open){previousHash=location.hash||'#library';dialog.showModal()}
    dialog.scrollTop=0;
    if(updateHash)history.replaceState(null,'',`#style-${s.id}`);
  }
  $('cards').addEventListener('click',e=>{const button=e.target.closest('[data-open]');if(button)openDetail(styles.find(s=>s.id===button.dataset.open))});
  $('detailContent').addEventListener('click',e=>{
    if(e.target.closest('.detail-close'))dialog.close();
    const shift=e.target.closest('[data-shift]');if(shift){const current=location.hash.replace('#style-','');const pos=rendered.findIndex(s=>s.id===current);const next=rendered[(pos+Number(shift.dataset.shift)+rendered.length)%rendered.length];openDetail(next)}
  });
  dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
  dialog.addEventListener('close',()=>{if(location.hash.startsWith('#style-'))history.replaceState(null,'',previousHash||'#library')});
  render();
  const initial=location.hash.match(/^#style-([a-z0-9_]+)$/);
  if(initial){const s=styles.find(x=>x.id===initial[1]);if(s)openDetail(s,false)}
})();
