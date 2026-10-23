(() => {
  const ids = ['arts_crafts','ukiyoe','art_deco','bauhaus','impressionism','pictorialism','film_noir','memphis','renaissance','rococo','constructivism','nihonga','new_color_photography','german_expressionist_cinema','midcentury_interior','cyberpunk'];
  const styles = window.ATLAS_STYLES || [];
  const artworks = window.ATLAS_ARTWORKS || {};
  const i18n = window.ATLAS_I18N;
  const items = ids.map(id => ({style:styles.find(s => s.id === id),work:artworks[id]})).filter(x => x.style && x.work);
  const stage = document.getElementById('exploreStage');
  const container = document.getElementById('exploreItems');
  const modes = [...document.querySelectorAll('.explore-modes button')];
  if (!stage || !items.length) return;
  let mode = 'ring', active = 0, wheelTotal = 0, touchX = null;
  container.innerHTML = items.map(({style,work},index) => `<button class="explore-work" type="button" data-index="${index}" data-name="${style.name}" aria-label="查看${style.name}：${work.artist}《${work.title}》"><img src="${work.file}" alt="${work.title}，${work.artist}" ${index < 4 ? 'loading="eager"' : 'loading="lazy"'}></button>`).join('');
  const cards = [...container.children];
  const wrap = n => (n + items.length) % items.length;
  function draw() {
    const width = stage.clientWidth, height = stage.clientHeight;
    const compact = width < 700;
    const rx = Math.min(width * (compact ? .37 : .36), compact ? 210 : 590);
    const ry = Math.min(height * (compact ? .33 : .34), compact ? 260 : 320);
    cards.forEach((card,i) => {
      const offset = wrap(i - active);
      const signed = offset > items.length / 2 ? offset - items.length : offset;
      let x = 0, y = 0, scale = 1, rotate = 0, opacity = 1, z = 1;
      if (mode === 'ring') {
        const angle = -Math.PI / 2 + offset * Math.PI * 2 / items.length;
        x = Math.cos(angle) * rx; y = Math.sin(angle) * ry;
        scale = .83 + .17 * ((Math.sin(angle) + 1) / 2);
        z = Math.round((Math.sin(angle) + 1) * 50);
      } else if (mode === 'tilt') {
        x = signed * (compact ? width * .27 : Math.min(width * .19,240));
        y = Math.sin(signed * .8) * (height * .18);
        rotate = signed * -8; scale = signed === 0 ? 1.18 : .84;
        opacity = Math.abs(signed) > (compact ? 2 : 3) ? 0 : 1;
        z = 20 - Math.abs(signed);
      } else if (mode === 'flat') {
        x = signed * (compact ? width * .29 : Math.min(width * .2,260));
        scale = signed === 0 ? 1.2 : .86;
        opacity = Math.abs(signed) > (compact ? 2 : 3) ? 0 : 1;
        z = 20 - Math.abs(signed);
      } else {
        const columns = 4;
        const rows = Math.ceil(items.length / columns);
        const gapX = compact ? Math.min(width * .23,85) : Math.min(width * .16,190);
        const gapY = compact ? Math.min(height * .22,112) : Math.min(height * .22,160);
        x = (i % columns - (columns - 1) / 2) * gapX;
        y = (Math.floor(i / columns) - (rows - 1) / 2) * gapY;
        scale = compact ? .9 : .8;
        z = i === active ? 10 : 1;
      }
      card.style.transform = `translate(-50%,-50%) translate(${x}px,${y}px) rotate(${rotate}deg) scale(${scale})`;
      card.style.opacity = opacity;
      card.style.zIndex = z;
      card.tabIndex = opacity ? 0 : -1;
    });
  }
  function step(amount) { active = wrap(active + amount); draw(); }
  modes.forEach(button => button.addEventListener('click',() => {
    mode = button.dataset.mode;
    modes.forEach(x => x.setAttribute('aria-pressed',String(x === button)));
    draw();
  }));
  container.addEventListener('click',event => {
    const card = event.target.closest('.explore-work');
    if (!card) return;
    active = Number(card.dataset.index); draw();
    document.dispatchEvent(new CustomEvent('atlas-open-style',{detail:items[active].style.id}));
  });
  stage.addEventListener('wheel',event => {
    wheelTotal += event.deltaY;
    if (Math.abs(wheelTotal) >= 75) { step(Math.sign(wheelTotal)); wheelTotal = 0; }
  },{passive:true});
  stage.addEventListener('keydown',event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {event.preventDefault();step(event.key === 'ArrowRight' ? 1 : -1);}
  });
  stage.addEventListener('touchstart',event => {touchX = event.touches[0]?.clientX ?? null;},{passive:true});
  stage.addEventListener('touchend',event => {
    if (touchX === null) return;
    const difference = (event.changedTouches[0]?.clientX ?? touchX) - touchX;
    if (Math.abs(difference) > 45) step(difference < 0 ? 1 : -1);
    touchX = null;
  },{passive:true});
  window.addEventListener('resize',draw);
  document.addEventListener('atlas-language-change',()=>{
    cards.forEach((card,index)=>{
      const {style,work}=items[index], label=i18n.name(style);
      card.dataset.name=label;
      card.setAttribute('aria-label',i18n.lang==='en'?`View ${label}: ${work.artist}, ${work.title}`:`查看${label}：${work.artist}《${work.title}》`);
    });
    draw();
  });
  document.dispatchEvent(new CustomEvent('atlas-language-change',{detail:i18n.lang}));
  draw();
})();
