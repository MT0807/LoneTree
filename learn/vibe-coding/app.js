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
  },
  {
    id: "six-sites", number: "06", initials: "6×", color: "purple", title: "网页质感六站", subtitle: "北岛 Travis 视频里的六个实用网站", count: "06 SOURCES",
    intro: "这六个网站来自北岛 Travis 的《Vibe Coding 必收藏！6 个提升网页质感的网站》。按“看案例 → 选组件 → 做动效”的顺序使用，把喜欢的页面或代码链接交给 AI，并说明要借鉴的具体部分。",
    video: "https://www.bilibili.com/video/BV12SHQ6jEqA/",
    resources: [
      {name:"MotionSites", url:"https://motionsites.ai/", origin:"设计灵感", text:"浏览带动效的网页案例与可复用的 AI 设计提示词。先挑一个与项目气质接近的首页，观察布局、图像和运动节奏。"},
      {name:"Aceternity UI", url:"https://ui.aceternity.com/", origin:"动态组件", text:"React、Tailwind CSS 与 Motion 组件库。可查看组件、页面区块与交互效果，再让 AI 按自己的技术栈和品牌颜色改写。"},
      {name:"Showreel.design", url:"https://showreel.design/", origin:"动态作品", text:"按风格和类别浏览动态设计作品，包括 3D 与 CGI。适合寻找节奏、转场和视觉叙事参考，再提炼成文字要求。"},
      {name:"Uiverse", url:"https://uiverse.io/", origin:"界面元素", text:"社区制作的按钮、加载状态、卡片等 UI 元素，可查看 HTML/CSS、Tailwind 或 React 等实现。先测试交互，再整合进页面。"},
      {name:"React Bits", url:"https://reactbits.dev/", origin:"React 动效", text:"提供动画文字、背景和微交互的 React 组件。选择局部效果，核对依赖与性能，再适配手机和减少动态效果设置。"},
      {name:"Anime.js", url:"https://animejs.com/", origin:"动画引擎", text:"用于网页动画的 JavaScript 库。可控制时间线、滚动触发与 SVG 动画；适合需要定制运动逻辑时参考官方示例。"}
    ],
    notes:["先从 MotionSites 和 Showreel 找到整体视觉方向，记录具体的布局与动效。","在 Aceternity UI、Uiverse 和 React Bits 中只选解决当前问题的组件。","需要自定义时间线时再研究 Anime.js，并检查加载速度、键盘操作和手机端。"],
    task:"从六站中选一个案例和一个组件，把链接交给 AI；说明想借鉴的结构、颜色或动效，并要求保留自己网站的内容与视觉规则。"
  },
  {
    id: "scroll-parallax", number: "07", initials: "3D", color: "blue", title: "滚动视差网站搭建", subtitle: "从产品素材到滚动交互与上线", count: "03 SOURCES",
    intro: "参考汤姆CC的AI工具箱《如何用AI制作3D产品网站？》：从产品素材出发，制作具有空间感的网页，再测试并部署。下面是按这一主题整理的可操作路线；具体工具和参数请以原视频及官方文档为准。",
    video: "https://v.douyin.com/KRn2-m46pLk/",
    resources: [
      {name:"Three.js 模型加载", url:"https://threejs.org/manual/pages/loading-3d-models.html", origin:"真实 3D", text:"需要用户拖动旋转、缩放或换角度时，准备产品的 GLB 模型，在网页中实时渲染。先保证轮廓、材质和灯光，再安排滚动镜头。"},
      {name:"GSAP ScrollTrigger", url:"https://gsap.com/docs/v3/Plugins/ScrollTrigger/", origin:"滚动控制", text:"将页面滚动进度连接到镜头、模型旋转或文字入场；用 scrub 调整跟随手感，并分段设计首屏、特写和结尾。"},
      {name:"MDN 滚动动画", url:"https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations", origin:"网页基础", text:"了解浏览器原生的滚动进度动画。文字、图层和简单视差可先用 CSS 实现，再决定是否需要 Three.js。"}
    ],
    notes:["01 / 准备产品素材：正面、侧面和细节图；确定颜色、材质与三个展示重点。","02 / 选画面方案：固定镜头可做图片序列；需要自由旋转和点选细节时使用真实 3D 模型。","03 / 设计滚动分镜：首屏建立产品形象，中段依次展示结构与材质，结尾给出明确按钮。","04 / 让 AI 实现并逐段检查：文字可读、滚动可倒退、手机端流畅，并照顾减少动态效果的设置。","05 / 部署前压缩素材，检查加载速度、链接和触屏操作。"],
    task:"选一件产品，写出 3 段滚动分镜与每段镜头动作。先做可滚动的静态草稿，再让 AI 接入图片序列或 GLB 模型；用手机和电脑各检查一次。"
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
      ${resource.image ? `<a class="resource-preview" href="${resource.image}" target="_blank" rel="noopener" aria-label="查看 ${resource.name} 网站完整截图"><img src="${resource.image}" alt="${resource.name} 网站实景截图" loading="lazy" decoding="async"></a>` : `<a class="resource-preview resource-preview-text" href="${resource.url}" target="_blank" rel="noopener noreferrer" aria-label="访问 ${resource.name} 网站"><span>${resource.name}</span><small>VISIT SITE ↗</small></a>`}
      <h3>${resource.name}</h3><p>${resource.text}</p><a class="resource-link" href="${resource.url}" target="_blank" rel="noopener noreferrer">访问网站 ↗</a></article>`).join("");
  readerContent.innerHTML = `
    <div class="reader-hero"><div><p class="reader-tag">FOLDER ${folder.number} / VIBE CODING</p><h1>${folder.title}<span style="color:var(--orange)">.</span></h1><p>${folder.intro}</p>${folder.video ? `<a class="video-source" href="${folder.video}" target="_blank" rel="noopener noreferrer">观看原视频 ↗</a>` : ""}</div><div class="reader-folder-art" data-color="${folder.color}">${folderShape(folder)}</div></div>
    <div class="reader-section"><h2>01 / 资料入口</h2><div class="reader-section-body resource-list">${resources}</div></div>
    <div class="reader-section"><h2>02 / 阅读线索</h2><div class="reader-section-body reader-notes">${folder.notes.map((note,i)=>`<div class="reader-note"><span>STEP ${String(i+1).padStart(2,"0")}</span><p>${note}</p></div>`).join("")}</div></div>
    <div class="reader-task"><h2>03 / 试一试</h2><p>${folder.task}</p></div>
    ${folder.id === "scroll-parallax" ? `<section class="original-video" aria-labelledby="original-video-title"><div class="original-video-heading"><span>CLASSROOM CASE / ORIGINAL VIDEO</span><h2 id="original-video-title">原视频<span>.</span></h2><p>完整观看这段 5 秒影像。课堂讨论时，可以暂停在 1、3、5 秒，观察形态、角度与色彩的变化。</p></div><video src="scroll-case.mp4" poster="scroll-case-poster.jpg" controls playsinline preload="metadata" aria-label="粉紫色 3D 猴头旋转，蓝色形体在结尾进入画面"></video><div class="original-video-foot"><span>0001–0124 / 00:05</span><a href="scroll-case.mp4" download="0001-0124.mp4">下载原视频 ↘</a></div></section>` : ""}`;
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
