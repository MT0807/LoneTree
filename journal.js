document.querySelectorAll('[data-copy]').forEach((button) => {
  button.addEventListener('click', async () => {
    const source = document.getElementById(button.dataset.copy);
    if (!source) return;
    const text = source.textContent.trim();
    let copied = false;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        copied = true;
      }
    } catch (_) {
      // HTTP pages do not always have access to the Clipboard API.
    }
    if (!copied) {
      const input = document.createElement('textarea');
      input.value = text;
      input.style.position = 'fixed';
      input.style.opacity = '0';
      document.body.appendChild(input);
      input.select();
      copied = document.execCommand('copy');
      input.remove();
    }
    button.textContent = copied ? '已复制，可继续编辑 ✓' : '复制失败，请选中文字';
    window.setTimeout(() => { button.textContent = '复制整份素材 ↗'; }, 3500);
  });
});
