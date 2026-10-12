document.querySelectorAll('.shelf-section').forEach((section) => {
  const list = section.querySelector('.book-list');
  const arrows = [...section.querySelectorAll('.scroll-arrow')];
  if (!arrows.length) return;

  const updateArrows = () => {
    arrows[0].disabled = list.scrollLeft <= 1;
    arrows[1].disabled = list.scrollLeft + list.clientWidth >= list.scrollWidth - 1;
  };

  arrows.forEach((arrow) => arrow.addEventListener('click', () => {
    const firstBook = list.querySelector('.book-item');
    const distance = firstBook.getBoundingClientRect().width + parseFloat(getComputedStyle(list).gap);
    list.scrollBy({ left: Number(arrow.dataset.direction) * distance, behavior: 'smooth' });
  }));

  list.addEventListener('scroll', updateArrows, { passive: true });
  window.addEventListener('resize', updateArrows);
  updateArrows();
});
