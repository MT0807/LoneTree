const folders = [
  {
    id: "websites", number: "01", initials: "WEB", color: "orange", title: "网页案例", subtitle: "先看完整的网站怎么组织", count: "02 SOURCES",
    intro: "从真实网站观察版式、图像比例、首屏节奏和信息层级。别急着复制某个漂亮按钮，先问它为什么放在那里。",
    resources: [
      {name:"Recent", image:"images/recent.webp", url:"https://recent.design/", origin:"黄大飘 v2.0", text:"按网站类型与行业浏览真实网页案例，也能继续查看页面的结构、视觉风格和技术线索。适合做项目开始时的参考采样。"},
      {name:"Minimal Gallery", image:"images/minimal-gallery.webp", url:"https://minimal.gallery/", origin:"黄大飘 v2.0", text:"持续更新的精选网站图库。适合研究留白、字级、图文关系和简洁页面如何保持辨识度。"}
    ],
    notes:["先选与自己项目目的相近的案例，保存整页和手机端画面。","用三个词描述它的视觉气质，再指出字、图、留白分别如何支持这个气质。","只提取一条可复用规则；不要把整个页面当模板照搬。"],
    task:"从两个网站各选一个案例。写下首屏最先看到什么、为什么先看到它，以及手机端的阅读顺序。"
  },
  {
    id: "system", number: "02", initials: "SYS", color: "blue", title: "设计规则", subtitle: "把感觉拆成可描述的系统", count: "02 SOURCES",
    intro: "好看不是一句“高级感”。把参考转化成字体、颜色、间距、布局和组件规则，AI 才能在不同页面保持一致。",
    resources: [
      {name:"Refero Styles", image:"images/refero-styles.webp", url:"https://styles.refero.design/", origin:"黄大飘 v2.0", text:"浏览实际网站的视觉系统，并查看色彩、字号和可复制的 DESIGN.md 等结构化描述。适合练习从案例提炼规则。"},
      {name:"Bento Grids", image:"images/bento-grids.webp", url:"https://bentogrids.com/", origin:"邪饿马丁", text:"收集 Bento 网格的真实应用。适合研究模块大小、对齐与信息权重；先画草图，再决定是否使用这种布局。"}
    ],
    notes:["把参考拆成：主色 / 点缀色、标题 / 正文字级、列数 / 间距、卡片圆角 / 边框。","每条规则写明作用，例如“高饱和色只用于主按钮和重点数字”。","检查规则在桌面与手机上是否都成立。"],
    task:"选一个网站，制作 1 页设计规则卡：颜色 3 个、字级 3 档、间距 2 档，并给 AI 一段清楚的实施描述。"
  },
  {
    id: "surfaces", number: "03", initials: "BG", color: "pink", title: "背景与氛围", subtitle: "控制渐变和动态背景的分量", count: "02 SOURCES",
    intro: "背景可以建立气氛，但必须服务于信息。需要检查文字对比度、画面性能，以及手机端是否过于拥挤。",
    resources: [
      {name:"Shader Gradient", image:"images/shader-gradient.webp", url:"https://www.shadergradient.co/", origin:"邪饿马丁", text:"制作和调整动态渐变与色彩场。适合首页主视觉或轻量背景实验；确定颜色后再导出或接入项目。"},
      {name:"MotionSites", image:"images/motionsites.webp", url:"https://motionsites.ai/", origin:"两条视频均提及", text:"浏览动态背景与网页效果示例。适合比较动效幅度、移动速度和视觉焦点；它在两条视频里出现，这里只归档一次。"}
    ],
    notes:["先做静态版本，确认排版与对比度已经成立。","动态效果要有停下来的状态，并照顾减少动态效果的系统设置。","手机端优先保证文字清晰与载入速度。"],
    task:"给同一首屏做静态与动态两个版本，比较阅读清晰度和加载感受，保留更合适的一版。"
  },
  {
    id: "components", number: "04", initials: "UI", color: "green", title: "组件与局部", subtitle: "让细节好看，也真正可用", count: "02 SOURCES",
    intro: "从导航、卡片、按钮到局部互动，现成组件能快速说明结构。选用前先看代码环境、交互方式和是否适合自己的内容。",
    resources: [
      {name:"21st.dev", image:"images/21st-dev.webp", url:"https://21st.dev/", origin:"邪饿马丁", text:"收录多作者的 React 界面组件，可查看预览、源码与提示词。适合寻找某个明确区域的做法，而不是一次拼出整站。"},
      {name:"React Bits", image:"images/react-bits.webp", url:"https://www.reactbits.dev/", origin:"邪饿马丁", text:"提供动画文字、背景和交互组件。适合局部试验；使用时核对依赖、键盘操作和移动端表现。"}
    ],
    notes:["先写清组件要解决的任务：导航、反馈、输入还是展示。","复制前查看它需要的技术栈与依赖。","组件改成自己的颜色与字级，检查焦点、点击和触屏反馈。"],
    task:"挑一个卡片或导航组件，说明它解决的具体问题，并做出桌面与手机两种宽度的版本。"
  },
  {
    id: "motion", number: "05", initials: "MOV", color: "yellow", title: "动效与交互", subtitle: "让动作说明内容，而非抢戏", count: "02 SOURCES",
    intro: "动效最有价值的时刻，是帮助用户理解变化：进入、展开、切换和滚动。参考真实案例时，记录触发条件与结束状态。",
    resources: [
      {name:"Made With GSAP", image:"images/made-with-gsap.webp", url:"https://madewithgsap.com/", origin:"邪饿马丁", text:"收集 GSAP 动效案例。适合观察滚动叙事、转场节奏和元素之间的关系，再选择适合自己内容的运动方式。"},
      {name:"Spotted in Prod", image:"images/spotted-in-prod.webp", url:"https://www.spottedinprod.com/clips", origin:"黄大飘 v2.0", text:"展示真实 iOS 产品里的交互片段。适合研究按钮反馈、页面切换、手势与状态变化。"}
    ],
    notes:["记录动作发生在什么操作之后，持续多久，用户会得到什么反馈。","每页只保留少量关键动效，让内容的阅读优先。","测试键盘、触屏和减少动态效果的设置。"],
    task:"给自己的网页设计一个“打开文件夹”的微交互：写出触发、过渡、完成后的三个状态。"
  }
];

const grid = document.getElementById("folder-grid");
const archive = document.getElementById("archive-view");
const reader = document.getElementById("reader-view");
const readerContent = document.getElementById("reader-content");
const readerCount = document.getElementById("reader-count");
const prevButton = document.getElementById("prev-folder");
const nextButton = document.getElementById("next-folder");

function folderShape(folder) {
  return `<span class="folder-object" aria-hidden="true"><b>${folder.initials}</b><small>${folder.number} / VC</small></span>`;
}

grid.innerHTML = folders.map(folder => `
  <button class="folder-card" type="button" data-id="${folder.id}" data-color="${folder.color}" aria-label="打开 ${folder.title} 文件夹">
    <span class="card-top"><span>${folder.number} / FOLDER</span><span>VIBE CODING</span></span>
    <span class="folder-illustration">${folderShape(folder)}</span>
    <h3>${folder.title}</h3><p>${folder.subtitle}</p>
    <span class="card-bottom"><span>${folder.count}</span><span aria-hidden="true">↗</span></span>
  </button>`).join("");

function renderFolder(index) {
  const folder = folders[index];
  readerCount.textContent = `${folder.number} / ${String(folders.length).padStart(2,"0")}`;
  const resources = folder.resources.map((resource, i) => `
    <article class="resource"><div class="resource-top"><span>REFERENCE ${String(i + 1).padStart(2,"0")}</span><span>${resource.origin}</span></div>
      <a class="resource-preview" href="${resource.image}" target="_blank" rel="noopener" aria-label="查看 ${resource.name} 网站完整截图"><img src="${resource.image}" alt="${resource.name} 网站实景截图" loading="lazy" decoding="async"></a>
      <h3>${resource.name}</h3><p>${resource.text}</p><a class="resource-link" href="${resource.url}" target="_blank" rel="noopener noreferrer">访问网站 ↗</a></article>`).join("");
  readerContent.innerHTML = `
    <div class="reader-hero"><div><p class="reader-tag">FOLDER ${folder.number} / VIBE CODING</p><h1>${folder.title}<span style="color:var(--orange)">.</span></h1><p>${folder.intro}</p></div><div class="reader-folder-art" data-color="${folder.color}">${folderShape(folder)}</div></div>
    <div class="reader-section"><h2>01 / 资料入口</h2><div class="reader-section-body resource-list">${resources}</div></div>
    <div class="reader-section"><h2>02 / 阅读线索</h2><div class="reader-section-body reader-notes">${folder.notes.map((note,i)=>`<div class="reader-note"><span>STEP ${String(i+1).padStart(2,"0")}</span><p>${note}</p></div>`).join("")}</div></div>
    <div class="reader-task"><h2>03 / 试一试</h2><p>${folder.task}</p></div>`;
  prevButton.disabled = index === 0;
  nextButton.disabled = index === folders.length - 1;
  prevButton.dataset.index = index - 1;
  nextButton.dataset.index = index + 1;
  archive.hidden = true;
  reader.hidden = false;
  window.scrollTo({top:0,behavior:"instant"});
  document.title = `${folder.title} | Vibe Coding`;
}

function renderRoute() {
  const slug = decodeURIComponent(location.hash.slice(1));
  const index = folders.findIndex(folder => folder.id === slug);
  if (index >= 0) renderFolder(index);
  else {
    archive.hidden = false;
    reader.hidden = true;
    document.title = "Vibe Coding | LoneTree Learn";
    if (slug === "files") requestAnimationFrame(() => document.getElementById("files").scrollIntoView({behavior:"instant"}));
  }
}

grid.addEventListener("click", event => {
  const card = event.target.closest(".folder-card");
  if (card) location.hash = card.dataset.id;
});
document.getElementById("reader-back").addEventListener("click", () => { location.hash = "files"; });
prevButton.addEventListener("click", () => { if (!prevButton.disabled) location.hash = folders[Number(prevButton.dataset.index)].id; });
nextButton.addEventListener("click", () => { if (!nextButton.disabled) location.hash = folders[Number(nextButton.dataset.index)].id; });
window.addEventListener("hashchange", renderRoute);
renderRoute();
