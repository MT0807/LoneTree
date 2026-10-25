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
