(() => {
  const locales = {
    zh: {html:'zh-CN',label:'语言',title:'CLO3D · 第一章'},
    en: {html:'en',label:'Language',title:'CLO3D · Chapter 01'},
    id: {html:'id',label:'Bahasa',title:'CLO3D · Bab 01'},
    ru: {html:'ru',label:'Язык',title:'CLO3D · Глава 01'},
    de: {html:'de',label:'Sprache',title:'CLO3D · Kapitel 01'}
  };
  const picker = document.querySelector('.language-picker');
  const trigger = document.getElementById('languageToggle');
  const menu = document.getElementById('languageMenu');
  const label = document.getElementById('languageLabel');
  if (!picker || !trigger || !menu || !label) return;
  const pageKind = document.body.classList.contains('about-page') ? 'about'
    : document.querySelector('.reset-top') ? 'reset' : 'chapter';
  const pageTitles = {
    chapter:{zh:'CLO3D · 第一章',en:'CLO3D · Chapter 01',id:'CLO3D · Bab 01',ru:'CLO3D · Глава 01',de:'CLO3D · Kapitel 01'},
    about:{zh:'关于 CLO3D · 完整图文讲义',en:'About CLO3D · Complete illustrated notes',id:'Tentang CLO3D · Materi bergambar lengkap',ru:'О CLO3D · Полное иллюстрированное руководство',de:'Über CLO3D · Vollständige illustrierte Anleitung'},
    reset:{zh:'重置 3D 版片 · CLO3D',en:'Reset 3D Pattern · CLO3D',id:'Atur ulang pola 3D · CLO3D',ru:'Сбросить 3D-деталь · CLO3D',de:'3D-Schnittteil zurücksetzen · CLO3D'}
  };
  const staticNodes = [];
  const walker = document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
  for (let node; (node = walker.nextNode());) {
    const original = node.textContent;
    const key = original.trim();
    if (!key) continue;
    let ancestor = node.parentElement;
    let skip = false;
    while (ancestor) {
      if (['SCRIPT','STYLE','SVG'].includes(ancestor.tagName) || ancestor.hasAttribute('data-zh') || ancestor.classList.contains('language-picker')) {skip=true;break;}
      ancestor=ancestor.parentElement;
    }
    if (!skip && !/^[\d\s+./—·-]+$/.test(key)) staticNodes.push({node,original,key});
  }

  // Stable wrappers survive the input-cue highlighter splitting text nodes.
  for (const entry of staticNodes) {
    const span = document.createElement('span');
    span.dataset.staticKey = entry.key;
    entry.node.replaceWith(span);
    span.textContent = entry.original;
    entry.node = span;
  }

  function closeMenu() {
    menu.hidden = true;
    trigger.setAttribute('aria-expanded','false');
  }
  function setLang(language) {
    const code = locales[language] ? language : 'zh';
    document.documentElement.lang = locales[code].html;
    document.title = pageTitles[pageKind][code];
    document.querySelectorAll('[data-zh]').forEach(element => {
      const translated = code === 'zh' ? element.dataset.zh
        : code === 'en' ? element.dataset.en
        : window.CLO_TRANSLATIONS?.[code]?.[element.dataset.en];
      if (translated !== undefined) element.textContent = translated;
    });
    for (const {node,original,key} of staticNodes) {
      if (!node.isConnected) continue;
      const translated = code === 'zh' ? key : window.CLO_STATIC_TRANSLATIONS?.[code]?.[key] || key;
      node.textContent = original.replace(key,translated);
    }
    label.textContent = locales[code].label;
    trigger.setAttribute('aria-label',locales[code].label);
    menu.querySelectorAll('[data-language]').forEach(button => {
      button.setAttribute('aria-checked',String(button.dataset.language === code));
    });
    try { localStorage.setItem('clo-lang',code); } catch (_) {}
    closeMenu();
    document.dispatchEvent(new CustomEvent('clo:languagechange',{detail:{language:code}}));
  }
  window.setLang = setLang;
  trigger.addEventListener('click',() => {
    const opened = menu.hidden;
    menu.hidden = !opened;
    trigger.setAttribute('aria-expanded',String(opened));
    if (opened) menu.querySelector('[aria-checked="true"]')?.focus();
  });
  menu.addEventListener('click',event => {
    const button = event.target.closest('[data-language]');
    if (!button) return;
    setLang(button.dataset.language);
    trigger.focus();
  });
  document.addEventListener('click',event => {
    if (!picker.contains(event.target)) closeMenu();
  });
  document.addEventListener('keydown',event => {
    if (event.key === 'Escape' && !menu.hidden) {
      closeMenu();
      trigger.focus();
    }
  });
  let saved = 'zh';
  try { saved = localStorage.getItem('clo-lang') || 'zh'; } catch (_) {}
  setLang(saved);
})();
