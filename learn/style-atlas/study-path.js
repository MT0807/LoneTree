/* A compact reading route across the two public art-history posts by TJ Design Studio.
   Style cards hold the historical content; this route links rather than duplicates it. */
(() => {
  const chapters = [
    ['古代与中世纪',['ancient_greek','byzantine']],
    ['近代艺术',['renaissance','baroque','romanticism','realism','impressionism','post_impressionism']],
    ['现代艺术',['vienna_secession','fauvism','expressionism','cubism','dada','surrealism','abstract_expressionism','pop_art']]
  ];
  const namesEn = ['Ancient & Medieval','Early Modern & 19th Century','Modern Art'];
  const all = window.ATLAS_STYLES;
  const i18n = window.ATLAS_I18N;
  const escape = value => String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function render(){
    const en = i18n.lang === 'en';
    document.getElementById('studyPathTitle').textContent = en ? 'An art-history reading route' : '沿着艺术史，读懂 16 种风格';
    document.getElementById('studyPathIntro').textContent = en
      ? 'Based on two public overviews by TJ Design Studio. Fourteen styles were already in the archive; Ancient Greek and Byzantine art have now been added. Select a term to see documented works and historical context.'
      : '参考 TJ Design Studio 的两则公开梳理，串起 16 种风格。原有 14 项保留，补入古希腊与拜占庭艺术；点选名称可查看真实作品与历史脉络。';
    document.getElementById('studyPathLinks').innerHTML = chapters.map(([label,ids],group)=>`<div class="study-group"><span>${escape(en?namesEn[group]:label)}</span><div>${ids.map(id=>{const style=all.find(s=>s.id===id);return style?`<button type="button" data-study-style="${id}">${escape(en?style.english:(id==='realism'?'写实主义 / 现实主义':style.name))} <b aria-hidden="true">↗</b></button>`:''}).join('')}</div></div>`).join('');
  }
  document.getElementById('studyPathLinks').addEventListener('click',event=>{
    const button=event.target.closest('[data-study-style]');
    if(button)document.dispatchEvent(new CustomEvent('atlas-open-style',{detail:button.dataset.studyStyle}));
  });
  document.addEventListener('atlas-language-change',render);
  render();
})();
