(() => {
  const locales = {
    zh:{html:'zh-CN',label:'语言',title:'一起来做一件男士衬衫吧 · CLO3D'},
    en:{html:'en',label:'Language',title:"Let's make a men's shirt · CLO3D"},
    id:{html:'id',label:'Bahasa',title:'Mari membuat kemeja pria · CLO3D'},
    ru:{html:'ru',label:'Язык',title:'Делаем мужскую рубашку · CLO3D'},
    de:{html:'de',label:'Sprache',title:'Wir gestalten ein Herrenhemd · CLO3D'}
  };
  const picker = document.querySelector('.language-picker');
  const trigger = document.getElementById('languageToggle');
  const menu = document.getElementById('languageMenu');
  const label = document.getElementById('languageLabel');
  if (!picker || !trigger || !menu || !label) return;
  const close = () => { menu.hidden = true; trigger.setAttribute('aria-expanded','false'); };
  const toolNames = {
    zh:['编辑板片','编辑点／线','编辑曲线点','编辑缝纫线','编辑 3D 画笔（服装）','3D 笔（服装）','M:N 自由缝纫','线缝纫','内部多边形／线','半片内部线','属性编辑器','显示安排点','生成圆顺曲线','板片外线扩张','服装渲染类型','半透明表面','转化为内部图形','折叠强度','旋转中心','切断','硬化','合并'],
    en:['Edit 3D Pen (Garment)','3D Pen (Garment)','M:N Free Sewing','Internal Polygon/Line','Half Pattern Internal Line','Offset Pattern Outline','Convert to Internal Shape','Show Arrangement Points','Semi-Transparent Surface','Garment Rendering Type','Edit Curve Point','Edit Point/Line','Edit Sewing','Edit Pattern','Segment Sewing','Property Editor','Fold Strength','Smooth Curve','rotation pivot','Rectangle','Harden','Merge','Cut'],
    id:['Jahit Bebas M:N','Edit Pola','Edit Jahitan','Editor Properti','Kekuatan Lipat','Garis Internal','Poligon/Garis Internal','Pen 3D','Kurva Halus','Persegi Panjang'],
    ru:['Свободное шитьё M:N','Редактирование швейных линий','Редактировать выкройку','Редактировать 3D-перо','Редактор свойств','сила сгиба','внутренняя линия','3D-перо','Укрепить'],
    de:['M:N Freies Nähen','3D-Stift (Kleidungsstück) bearbeiten','Eigenschaften-Editor','Faltstärke','Muster bearbeiten','Naht bearbeiten','Segmentnähen','Interne Linie','3D-Stift','Rechteck','Härten']
  };
  function highlightTools(language) {
    const escaped = toolNames[language].sort((a,b) => b.length-a.length)
      .map(term => term.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'));
    const pattern = new RegExp(['「[^」]+」','“[^”]+”','„[^“]+“','«[^»]+»',...escaped,'Ctrl[／/]Command\\s*\\+\\s*[AD]','\\b(?:Shift|Enter|Delete|Space|[ZIGNXBS])\\b','空格键'].join('|'),'gi');
    document.querySelectorAll('.lesson-step .step-copy p[data-zh][data-en], .lesson-step .step-copy li[data-zh][data-en]').forEach(element => {
      const value = element.textContent;
      pattern.lastIndex = 0;
      const fragment = document.createDocumentFragment();
      let end = 0;
      for (const match of value.matchAll(pattern)) {
        if (match.index > end) fragment.append(document.createTextNode(value.slice(end,match.index)));
        const emphasis = document.createElement('span');
        emphasis.className = 'tool-term';
        emphasis.textContent = match[0];
        fragment.append(emphasis);
        end = match.index + match[0].length;
      }
      if (end === 0) return;
      fragment.append(document.createTextNode(value.slice(end)));
      element.replaceChildren(fragment);
    });
  }
  function setLanguage(language) {
    const code = locales[language] ? language : 'zh';
    document.documentElement.lang = locales[code].html;
    document.title = locales[code].title;
    document.querySelectorAll('[data-zh][data-en]').forEach(element => {
      const value = code === 'zh' ? element.dataset.zh
        : code === 'en' ? element.dataset.en
        : window.SHIRT_TRANSLATIONS?.[code]?.[element.dataset.en] || element.dataset.en;
      element.textContent = value;
    });
    highlightTools(code);
    label.textContent = locales[code].label;
    trigger.setAttribute('aria-label',locales[code].label);
    menu.querySelectorAll('[data-language]').forEach(button => {
      button.setAttribute('aria-checked',String(button.dataset.language === code));
    });
    try { localStorage.setItem('clo-lang',code); } catch (_) {}
    close();
    document.dispatchEvent(new CustomEvent('clo:languagechange',{detail:{language:code}}));
  }
  trigger.addEventListener('click',() => {
    const opened = menu.hidden;
    menu.hidden = !opened;
    trigger.setAttribute('aria-expanded',String(opened));
    if (opened) menu.querySelector('[aria-checked="true"]')?.focus();
  });
  menu.addEventListener('click',event => {
    const button = event.target.closest('[data-language]');
    if (!button) return;
    setLanguage(button.dataset.language);
    trigger.focus();
  });
  document.addEventListener('click',event => { if (!picker.contains(event.target)) close(); });
  document.addEventListener('keydown',event => {
    if (event.key === 'Escape' && !menu.hidden) { close(); trigger.focus(); }
  });
  let saved = 'zh';
  try { saved = localStorage.getItem('clo-lang') || 'zh'; } catch (_) {}
  setLanguage(saved);
})();
