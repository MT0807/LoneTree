(() => {
  const total = window.ATLAS_STYLES.length;
  const copy = {
    zh: {
      back:'返回 Learn', chosen:'精选作品', roam:'风格漫游', flat:'平铺', tilt:'倾斜', ring:'环绕', gallery:'画廊',
      libraryTitle:'视觉档案馆', libraryIntro:`从 ${total} 种风格与创作者的视觉关键词中寻找方向。点开风格卡片，可查看历史、真实作品、视觉线索与资料入口。`,
      filters:'筛选 / FILTER', clear:'全部清除 ↺', keyword:'关键词搜索', searchPlaceholder:'风格、人物、地区或特征…',
      expand:'展开筛选条件', collapse:'收起筛选条件', categories:'风格类别', era:'时代', place:'国家 / 地区',
      filterNote:'同组条件取并集，不同组交叉筛选。年代表示大致活跃期；一个风格可以关联多个地区。',
      results:'当前结果', entries:` / ${total} 个条目`, sort:'排序', chronological:'按出现时间', byName:'按中文名', recent:'由近到远',
      emptyTitle:'暂时没有匹配的风格', emptyText:'可以减少一个筛选条件，或换一个关键词。', emptyReset:'清除全部条件 ↗',
      sourcesTitle:'风格不是<br><em>一个固定标签。</em>',
      sourcesOne:'本图鉴把历史艺术运动、设计流派、地域绘画传统与当代视觉标签分开标示。日期是便于教学的大致范围；一个运动可能在多个地方同时发展，代表人物也不是完整名单。',
      sourcesTwo:'已配图条目使用真实作品、实物或现场照片，来自博物馆开放获取馆藏与 Wikimedia Commons。详情保留作品名、作者、年代、来源及使用许可；未核实图片的条目保持纯文字。部分较新的图像是风格延续或应用例子，已在详情说明。',
      footerNote:'本地课件 · 真实作品图像与资料索引', top:'回到顶部 ↑',
      sourceMoma:'MoMA 术语库 ↗', sourceMet:'大都会艺术史 ↗', sourceVa:'V&A 文章 ↗', sourceTate:'Tate 术语 ↗',
      artPeriod:'大致活跃期 / PERIOD', artPlace:'起源或重要发展地 / PLACE', context:'历史脉络 / CONTEXT',
      clues:'视觉线索 / LOOK FOR', people:'代表人物与相关实践者 / PEOPLE', exercise:'观察练习：',
      sourceEntry:'资料入口 · 具体作品与作者请继续核对馆藏信息', prevStyle:'← 上一种', nextStyle:'下一种 →',
      missingContext:'请结合资料入口，考察这类视觉语言在具体年代与地域中的发展。',
      promptLabel:'把这个标签拆成可执行条件：具体写出色彩、光线、构图和材质，而不只写风格名称。',
      promptHistory:'选一件有作者、日期与收藏出处的真实作品，逐一指出下列特征在作品中的位置。',
      cardLook:'查看线索 ↗', archive:'文字档案', remove:'移除', searchChip:'搜索：', ongoing:'至今',
      category:{'历史艺术':'历史艺术','现代艺术运动':'现代艺术运动','建筑与室内设计':'建筑与室内设计','平面设计与排版':'平面设计与排版','摄影与影像':'摄影与影像','电影与视觉叙事':'电影与视觉叙事','地域绘画传统':'地域绘画传统','当代视觉语言':'当代视觉语言'}
    },
    en: {
      back:'Back to Learn', chosen:'SELECTED WORKS', roam:'Visual archive', flat:'Flat', tilt:'Tilt', ring:'Ring', gallery:'Gallery',
      libraryTitle:'Visual Archive', libraryIntro:`Explore ${total} visual styles and a new vocabulary index from working creators. Open a style card for its history, real work, clues and source.`,
      filters:'FILTER', clear:'Clear all ↺', keyword:'Search', searchPlaceholder:'Style, person, place or visual clue…',
      expand:'Show filters', collapse:'Hide filters', categories:'Category', era:'Period', place:'Country / region',
      filterNote:'Selections within a group are combined; groups intersect. Dates are approximate, and a style may span several regions.',
      results:'Results', entries:` / ${total} entries`, sort:'Sort', chronological:'Earliest first', byName:'By name', recent:'Newest first',
      emptyTitle:'No matching styles', emptyText:'Try fewer filters or a different keyword.', emptyReset:'Clear all filters ↗',
      sourcesTitle:'A style is never<br><em>just a label.</em>',
      sourcesOne:'This archive distinguishes historical art movements, design approaches, regional traditions and contemporary visual labels. Dates are approximate teaching aids; movements often cross borders, and the listed practitioners are not exhaustive.',
      sourcesTwo:'Illustrated records use photographs of real works, objects or places from museum open-access collections and Wikimedia Commons. Each entry links to its source and rights information. Records without verified images remain text-only; later examples are identified in their details.',
      footerNote:'Local course resource · authentic works and source index', top:'Back to top ↑',
      sourceMoma:'MoMA Art Terms ↗', sourceMet:'The Met · Art History ↗', sourceVa:'V&A Articles ↗', sourceTate:'Tate Art Terms ↗',
      artPeriod:'APPROXIMATE PERIOD', artPlace:'ORIGIN / DEVELOPMENT', context:'HISTORICAL CONTEXT',
      clues:'VISUAL CLUES', people:'ARTISTS / PRACTITIONERS', exercise:'Try this: ',
      sourceEntry:'Source guide · verify individual works and artists in collection records', prevStyle:'← Previous', nextStyle:'Next →',
      missingContext:'Follow the source link to investigate when and where this visual language developed.',
      promptLabel:'Turn this label into concrete directions for colour, light, composition and materials.',
      promptHistory:'Choose one documented work and point to each visual clue in the image.',
      cardLook:'Explore ↗', archive:'Text record', remove:'Remove', searchChip:'Search: ', ongoing:'present',
      category:{'历史艺术':'Historical art','现代艺术运动':'Modern art movements','建筑与室内设计':'Architecture & interiors','平面设计与排版':'Graphic design & type','摄影与影像':'Photography & image','电影与视觉叙事':'Film & visual narrative','地域绘画传统':'Regional painting traditions','当代视觉语言':'Contemporary visual languages'}
    }
  };
  const regions = window.ATLAS_REGIONS_EN || {};
  const $ = selector => document.querySelector(selector);
  let lang = 'zh';
  try { if (localStorage.getItem('visual-archive-lang') === 'en') lang = 'en'; } catch (_) {}
  const t = key => copy[lang][key];
  const name = style => lang === 'en' ? style.english : style.name;
  const region = value => lang === 'en' ? (regions[value] || value) : value;
  const backLink = $('#backButton');
  if (/\/learn\/style-atlas\/(?:index\.html)?$/.test(location.pathname)) backLink.href = '../';
  function applyStatic() {
    const c = copy[lang], en = lang === 'en';
    document.documentElement.lang = en ? 'en' : 'zh-CN';
    document.title = en ? 'Visual Archive' : '视觉档案馆';
    $('meta[name="description"]').content = en ? `A bilingual visual archive of ${total} art and design styles, searchable by category, period and region.` : `视觉档案馆：按类别、时代和地域探索 ${total} 种艺术与设计风格。`;
    $('.skip').textContent = en ? 'Skip to archive' : '跳到视觉档案馆';
    $('.site-controls').setAttribute('aria-label', en ? 'Page controls' : '页面控制');
    $('.explore').setAttribute('aria-label', en ? 'Selected works tour' : '精选作品互动导览');
    $('.control-back span').textContent = c.back;
    backLink.setAttribute('aria-label',c.back);
    $('.control-languages').setAttribute('aria-label',en ? 'Language' : '语言切换');
    $('#langZh').setAttribute('aria-pressed',String(!en));
    $('#langEn').setAttribute('aria-pressed',String(en));
    $('.explore-top>span').innerHTML = `${c.chosen} <i>／ ${c.roam}</i>`;
    for (const mode of ['flat','tilt','ring','gallery']) $(`[data-mode="${mode}"]`).textContent = c[mode];
    $('.explore-modes').setAttribute('aria-label',en ? 'Artwork layout' : '作品排列方式');
    $('#exploreStage').setAttribute('aria-label',en ? 'Selected works. Scroll, swipe or use arrow keys to browse; select a work to read its record.' : '精选作品。滚动、滑动或左右方向键可以切换作品；点击作品查看资料。');
    $('#library-title').innerHTML = `${c.libraryTitle}<span class="title-dot">.</span>`;
    $('.library-heading p').textContent = c.libraryIntro;
    $('.filter-title span').textContent = c.filters;
    $('#clearAll').textContent = c.clear;
    $('.search-wrap label').textContent = c.keyword;
    $('#search').placeholder = c.searchPlaceholder;
    $('.filters').setAttribute('aria-label',c.filters);
    $('#categoryFilters').closest('fieldset').querySelector('legend').innerHTML = `${c.categories} <small>STYLE TYPE</small>`;
    $('#eraFilters').closest('fieldset').querySelector('legend').innerHTML = `${c.era} <small>PERIOD</small>`;
    $('#regionFilters').closest('fieldset').querySelector('legend').innerHTML = `${c.place} <small>PLACE</small>`;
    $('.filter-note').textContent = c.filterNote;
    $('.results-toolbar .results-label').textContent = c.results;
    $('.results-toolbar .results-label:last-child').textContent = c.entries;
    $('.sort-label').firstChild.textContent = c.sort + ' ';
    $('#sort option[value="chronological"]').textContent = c.chronological;
    $('#sort option[value="name"]').textContent = c.byName;
    $('#sort option[value="recent"]').textContent = c.recent;
    $('#empty h3').textContent = c.emptyTitle;
    $('#empty p').textContent = c.emptyText;
    $('#emptyReset').textContent = c.emptyReset;
    $('.source-grid h2').innerHTML = c.sourcesTitle;
    $('.source-grid p:first-of-type').textContent = c.sourcesOne;
    $('.source-grid p:nth-of-type(2)').textContent = c.sourcesTwo;
    $('.source-links a:nth-child(1)').textContent = c.sourceMoma;
    $('.source-links a:nth-child(2)').textContent = c.sourceMet;
    $('.source-links a:nth-child(3)').textContent = c.sourceVa;
    $('.source-links a:nth-child(4)').textContent = c.sourceTate;
    $('footer span:first-child').textContent = en ? 'VISUAL ARCHIVE' : '视觉档案馆 / VISUAL ARCHIVE';
    $('footer span:nth-child(2)').textContent = c.footerNote;
    $('footer a').textContent = c.top;
  }
  function setLanguage(next) {
    if (next !== 'zh' && next !== 'en') return;
    lang = next;
    try { localStorage.setItem('visual-archive-lang',lang); } catch (_) {}
    applyStatic();
    document.dispatchEvent(new CustomEvent('atlas-language-change',{detail:lang}));
  }
  window.ATLAS_I18N = {get lang(){return lang},t,name,region,setLanguage,category:value=>copy[lang].category[value]||value};
  $('#langZh').addEventListener('click',()=>setLanguage('zh'));
  $('#langEn').addEventListener('click',()=>setLanguage('en'));
  applyStatic();
})();
