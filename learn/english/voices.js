// Browser voices differ by device; known names are preferences, not a gender API.
(() => {
  const synth = window.speechSynthesis;
  const select = document.querySelector('#voice');
  const hint = document.querySelector('#voice-hint');
  const female = /\b(Samantha|Ava|Allison|Susan|Karen|Serena|Moira|Tessa|Fiona|Victoria|Zira|Aria|Jenny|Sonia|Libby|Hazel|Catherine|Natasha|Female)\b/i;
  const english = v => /^en(?:[-_]|$)/i.test(v.lang);
  const score = v => (female.test(v.name) ? 100 : 0)
    + (/enhanced|premium|natural|neural/i.test(v.name) ? 20 : 0)
    + (/^en[-_]US$/i.test(v.lang) ? 4 : 0) + (v.default ? 1 : 0);
  let voices = [], preferred = '';
  try { preferred = localStorage.getItem('lonetree-english-voice') || ''; } catch {}
  function refresh() {
    voices = synth.getVoices().filter(english).sort((a,b) => score(b)-score(a));
    select.replaceChildren();
    if (!voices.length) {
      select.add(new Option('等待设备加载英文音色…', ''));
      select.disabled = true;
      hint.textContent = '英文音色加载后会自动显示。';
      return;
    }
    voices.forEach(v => select.add(new Option(`${v.name} · ${v.lang}`, v.voiceURI)));
    select.disabled = false;
    select.value = voices.some(v => v.voiceURI === preferred) ? preferred : voices[0].voiceURI;
    hint.textContent = female.test(voices[0].name)
      ? '已优先选择可用的英文女声；可以切换音色试听，选择会保存在此浏览器。'
      : '当前未识别到常见英文女声音色；可以切换试听，或在设备上添加英文语音。';
  }
  if (!synth) {
    select.disabled = true;
    hint.textContent = '此浏览器暂不支持语音朗读。';
    window.speakEnglish = () => {};
    return;
  }
  select.addEventListener('change', () => {
    preferred = select.value;
    synth.cancel();
    try { localStorage.setItem('lonetree-english-voice', preferred); } catch {}
  });
  synth.addEventListener('voiceschanged', refresh);
  refresh();
  window.speakEnglish = text => {
    // Refresh synchronously so speech remains inside the mobile tap gesture.
    refresh();
    const status = document.querySelector('#status');
    const voice = voices.find(v => v.voiceURI === select.value);
    if (!voice) {
      status.textContent = '英文音色尚未加载，请稍后再点一次。';
      return;
    }
    synth.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voice;
    utterance.lang = voice.lang;
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.onstart = () => { status.textContent = ''; };
    utterance.onerror = e => {
      if (!['canceled', 'interrupted'].includes(e.error))
        status.textContent = '这个音色暂时无法播放，请切换另一个音色。';
    };
    synth.speak(utterance);
  };
})();
