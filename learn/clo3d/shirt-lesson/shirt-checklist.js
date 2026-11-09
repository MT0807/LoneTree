(() => {
  const key = 'clo3d-shirt-assignment-checklist-v1';
  const boxes = [...document.querySelectorAll('#assignment-checklist input[data-check-id]')];
  let saved = {};

  try {
    saved = JSON.parse(localStorage.getItem(key) || '{}') || {};
  } catch (_) {
    saved = {};
  }

  boxes.forEach((box) => {
    box.checked = saved[box.dataset.checkId] === true;
    box.addEventListener('change', () => {
      saved[box.dataset.checkId] = box.checked;
      try {
        localStorage.setItem(key, JSON.stringify(saved));
      } catch (_) {
        // Browsers with storage disabled can still use the checklist for this visit.
      }
    });
  });
})();
