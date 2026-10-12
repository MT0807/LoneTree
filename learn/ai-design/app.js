const categories=['全部','理解与沟通','研究与规划','生成与编辑图片','制作动态内容','优化画质','制作 PPT','制作网站','生成 3D','Agent 与工作流'];
const tools=[
{name:'ChatGPT',type:'对话与协作界面',cats:[1,2,3,6],desc:'整理想法、分析素材，协助研究与制作。',input:'任务说明、参考图片、文件与已有文字。',output:'分析、草稿或可用功能支持的视觉与文件结果。',check:'核对事实与来源；明确使用的模型、工具和可访问素材。',url:'https://learn.chatgpt.com/docs/use-chatgpt'},
{name:'Lovart',type:'设计平台',cats:[3,4],desc:'在画布中组织生成、编辑与系列视觉。',input:'设计 brief、品牌资料、原图与参考。',output:'生成与编辑后的视觉资产。',check:'检查主体细节、文字与系列一致性，并确认导出内容是否便于继续编辑。',url:'https://www.lovart.ai/'},
{name:'Midjourney',type:'图像生成平台',cats:[3],desc:'探索视觉方向、构图与场景概念。',input:'描述词与平台支持的视觉参考。',output:'图像方案与变体。',check:'概念图与真实产品展示的要求不同；核对主体结构。',url:'https://www.midjourney.com/'},
{name:'FLUX',type:'图像模型家族',cats:[3],desc:'通过兼容平台与流程生成或编辑图像。',input:'文字、图片以及具体模型支持的输入。',output:'图像；能力依模型版本与接入方式而异。',check:'模型不是工作界面，需要选择接入平台或本地工作流。',url:'https://bfl.ai/'},
{name:'ComfyUI',type:'节点工作流界面',cats:[3,4],desc:'组织模型、参考与处理步骤。',input:'模型、节点、图像与流程参数。',output:'工作流生成的图像或视频等结果。',check:'运行条件、模型兼容性与节点配置会影响流程。',url:'https://www.comfy.org/'},
{name:'Runway',type:'视觉创作平台',cats:[3,4],desc:'探索图像与动态视觉的制作。',input:'文字、图像与所选功能支持的素材。',output:'图像或视频方案。',check:'检查连续性、动作与主体一致性，具体功能以当前平台为准。',url:'https://runwayml.com/'},
{name:'Sealaes',type:'在线图像风格化工具',cats:[3],desc:'轻量化的在线图像风格化工具，可作为探索图片视觉语言的入口。',input:'希望风格化的图片与视觉方向。',output:'风格化的图像结果。',check:'对照原图检查主体、材质和细节是否仍符合设计目标；具体操作以工具页面为准。',url:'https://adagog.github.io/sealaes/'},
{name:'Topaz',type:'画质增强工具',cats:[5],desc:'降噪、锐化与放大图片。',input:'需要改善画质的图片。',output:'增强后的图片。',check:'放大检查面料、皮肤与边缘，警惕假细节、光晕和过度处理。',url:'https://www.topazlabs.com/topaz-photo'},
{name:'Codex',type:'开发与执行工作方式',cats:[2,7,9],desc:'把页面需求转化为代码，预览并迭代。',input:'页面内容、设计参考、交互与素材。',output:'网页代码与可访问环境中的执行结果。',check:'检查手机显示、链接与交互。编写、运行和发布是不同步骤。',url:'https://learn.chatgpt.com/docs/use-chatgpt'},
{name:'Claude',type:'对话与协作产品',cats:[1,2,7],desc:'辅助阅读、写作、分析与代码任务。',input:'问题、文档、素材与任务说明。',output:'解释、草稿、分析与产品可用功能支持的结果。',check:'核对事实与原文，区分 Claude 产品与其模型系列。',url:'https://www.anthropic.com/claude'},
{name:'豆包',type:'AI 助手产品',cats:[1,2,3,6],desc:'对话、学习、写作与多媒体创作入口。',input:'文字、图片与当前功能支持的资料。',output:'回答、草稿或视觉内容。',check:'具体模型与功能依当前产品界面而定。',url:'https://www.doubao.com/'},
{name:'扣子 Coze',type:'Agent 与工作流平台',cats:[1,2,6,7,9],desc:'组织智能体、工作流与办公创作任务。',input:'目标、资料、工具和流程设置。',output:'自动化任务结果、内容或可编辑项目。',check:'核对连接器权限、引用资料与每一步执行记录。',url:'https://www.coze.cn/overview'},
{name:'WorkBuddy',type:'桌面 AI 工作台',cats:[1,2,6,7,9],desc:'协助拆解并执行办公与创意任务。',input:'任务说明和经授权的本地或连接资料。',output:'文档、整理结果或执行成果。',check:'先确认文件访问与写入权限，再检查交付文件。',url:'https://cloud.tencent.com/product/workbuddy'},
{name:'OpenClaw',type:'自托管 Agent 框架',cats:[2,7,9],desc:'把模型、聊天渠道与工具连接成可执行助手。',input:'模型配置、渠道、工具权限与任务。',output:'在配置范围内的多步骤行动与结果。',check:'检查部署、访问权限、外部服务与日志。',url:'https://openclaw.ai/'},
{name:'TapNow',type:'AI 视觉创作画布',cats:[3,4,9],desc:'在创作画布中组织图片、视频和参考素材。',input:'视觉 brief、参考图与画布任务。',output:'图像、视频与可继续编辑的创作方案。',check:'核对参考控制、连续性和导出素材。',url:'https://www.tapnow.media/'},
{name:'Tripo 3D',type:'AI 3D 创作平台',cats:[8],desc:'从文字或图片探索 3D 模型。',input:'文字描述、照片或概念草图。',output:'可继续处理的 3D 资产。',check:'检查几何结构、拓扑、贴图与导出格式。',url:'https://www.tripo3d.ai/'},
{name:'LibTV',type:'视频创作平台',cats:[3,4,9],desc:'围绕镜头与故事制作 AI 动态内容。',input:'脚本、分镜、图像与可用的参考素材。',output:'视频片段或系列动态方案。',check:'检查镜头衔接、人物连续性与声音。',url:'https://www.liblib.tv/'},
{name:'Kimi',type:'AI 助手产品',cats:[1,2,6,7],desc:'辅助资料处理、写作与知识工作。',input:'问题、文档和任务背景。',output:'分析、文稿和产品可用功能支持的成果。',check:'区分月之暗面公司、Kimi 产品和具体模型版本。',url:'https://www.kimi.com/'}];
const officialIconHosts={ChatGPT:'chatgpt.com',Lovart:'www.lovart.ai',Midjourney:'www.midjourney.com',FLUX:'bfl.ai',ComfyUI:'www.comfy.org',Runway:'runwayml.com',Topaz:'www.topazlabs.com',Codex:'chatgpt.com',Claude:'claude.ai','豆包':'www.doubao.com','扣子 Coze':'www.coze.cn',WorkBuddy:'cloud.tencent.com',OpenClaw:'openclaw.ai',TapNow:'www.tapnow.media','Tripo 3D':'www.tripo3d.ai',LibTV:'www.liblib.tv',Kimi:'www.kimi.com','Nano Banana':'ai.google.dev',Seedance:'seed.bytedance.com',Seedream:'seed.bytedance.com','Kimi / 月之暗面':'www.kimi.com',GPT:'chatgpt.com',Tripo:'www.tripo3d.ai'};
const localIcons={ChatGPT:'openai.ico',Codex:'openai.ico',GPT:'openai.ico',Lovart:'lovart.ico',FLUX:'flux.ico',ComfyUI:'comfyui.ico',WorkBuddy:'tencent.ico',TapNow:'tapnow.ico','Tripo 3D':'tripo.ico',Tripo:'tripo.ico',LibTV:'liblib.ico',Kimi:'kimi.ico','Kimi / 月之暗面':'kimi.ico',Midjourney:'midjourney.png',Runway:'runway.png',Topaz:'topaz.png',Claude:'claude.png','豆包':'doubao.png','扣子 Coze':'coze.png',OpenClaw:'openclaw.png',Seedance:'seed.png',Seedream:'seed.png','Nano Banana':'google-g.svg'};
function logoBox(name){const host=officialIconHosts[name],local=localIcons[name];const label=name.replace(/[^A-Za-z0-9一-龥]/g,'').slice(0,2).toUpperCase();const src=local?`assets/brand-icons/${local}`:host?`https://${host}/favicon.ico`:'';return `<span class="brand-logo" role="img" aria-label="${name} 的品牌图标"><span>${label}</span>${src?`<img src="${src}" alt="" loading="lazy">`:''}</span>`}
document.addEventListener('error',e=>{if(!e.target.matches||!e.target.matches('.brand-logo img'))return;const img=e.target;if(!img.dataset.fallback){img.dataset.fallback='1';img.src='https://www.google.com/s2/favicons?domain='+new URL(img.src).hostname+'&sz=128'}else img.remove()},true);
const filters=document.querySelector('#filters');let selected=0;function render(){filters.innerHTML=categories.map((c,i)=>`<button class="${i===selected?'active':''}" aria-pressed="${i===selected}" data-filter="${i}">${c}</button>`).join('');const items=tools.filter(t=>selected===0||t.cats.includes(selected));document.querySelector('#tools').innerHTML=items.map(t=>`<button class="tool" data-tool="${tools.indexOf(t)}">${logoBox(t.name)}<small>${t.type}</small><h3>${t.name}</h3><p>${t.desc}</p></button>`).join('')}render();filters.addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(b){selected=+b.dataset.filter;render()}});const dialog=document.querySelector('dialog');document.querySelector('#tools').addEventListener('click',e=>{const b=e.target.closest('[data-tool]');if(!b)return;const t=tools[+b.dataset.tool];document.querySelector('#tool-detail').innerHTML=`<div class="eyebrow">${t.type}</div><h2>${t.name}</h2><p>${t.desc}</p><div class="detail-label">提供什么</div><p>${t.input}</p><div class="detail-label">得到什么</div><p>${t.output}</p><div class="detail-label">怎样检查</div><p>${t.check}</p><a class="copy" target="_blank" rel="noopener" href="${t.url}">${t.name==='Sealaes'?'打开工具':'官方资料'}</a>`;dialog.showModal()});document.querySelector('.close').onclick=()=>dialog.close();dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
document.querySelectorAll('.image-grid').forEach(grid=>{const row=+grid.dataset.row;grid.innerHTML=Array.from({length:4},(_,i)=>`<div class="image-cell" role="img" aria-label="${grid.dataset.sheet==='fashion'?'时尚摄影':'空间设计'}${row?'明确条件':'模糊条件'}示意 ${i+1}" style="background-image:url('assets/${grid.dataset.sheet}.png');background-position:${i*100/3}% ${row*100}%"><span>方案 0${i+1}</span></div>`).join('')});
const sections=[...document.querySelectorAll('.screen,.chapter-gate,.generate-track,.layer-track,.lesson-screen')];document.querySelector('#dots').innerHTML=['lesson-01-01','layers','lesson-03-01','lesson-04-01'].map((id,i)=>`<a href="#${id}" aria-label="前往第 ${i+1} 章"></a>`).join('');const dots=[...document.querySelectorAll('#dots a')];const names={'01':'认识 AI','02':'看懂组成','03':'安排协作','04':'研究参考'};let ticking=false;function update(){const target=innerHeight*.4;let current=0;sections.forEach((s,i)=>{if(s.getBoundingClientRect().top<=target)current=i});dots.forEach((d,i)=>d.classList.toggle('active',i===Number(sections[current].dataset.chapter)-1));const chapter=sections[current].dataset.chapter;document.querySelector('#chapter-label').textContent=`${chapter} / ${names[chapter]}`;document.querySelector('#page-label').textContent=`${String(current+1).padStart(2,'0')} / ${sections.length}`;document.querySelectorAll('nav a').forEach(a=>a.classList.toggle('active',a.dataset.chapter===chapter));const total=document.documentElement.scrollHeight-innerHeight;document.querySelector('.progress i').style.width=`${total?scrollY/total*100:0}%`;ticking=false}addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(update);ticking=true}},{passive:true});update();const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('revealed');observer.unobserve(e.target)}}),{threshold:.12});sections.forEach(s=>observer.observe(s));
const labels={goal:'目标',refs:'素材与参考',conditions:'场景、光线与镜头',limits:'保留项与修改范围',output:'输出与检查标准'};document.querySelector('#brief').addEventListener('input',()=>{const text=[...new FormData(document.querySelector('#brief'))].filter(([k,v])=>v.trim()).map(([k,v])=>`${labels[k]}：${v.trim()}`).join('\n\n');document.querySelector('#composed').textContent=text||'填写左侧内容，整理成可复制的任务说明。'});let toastTimer;function toast(t){const n=document.querySelector('#toast');n.textContent=t;n.style.opacity=1;clearTimeout(toastTimer);toastTimer=setTimeout(()=>n.style.opacity=0,2500)}document.addEventListener('click',async e=>{const b=e.target.closest('[data-copy]');if(!b)return;const text=document.getElementById(b.dataset.copy).textContent;try{await navigator.clipboard.writeText(text);toast('已复制')}catch{const t=document.createElement('textarea');t.value=text;document.body.append(t);t.select();const ok=document.execCommand('copy');t.remove();toast(ok?'已复制':'请选中文字手动复制')}});
const generation=document.querySelector('#generate'),genCards=[...document.querySelectorAll('.gen-card')],genCaption=document.querySelector('#generate-caption');const genLines=['从一张原始模特照片开始。','在巴黎街头重新安排场景和光线。','把大衣单独呈现为白底商品图。'];function updateGeneration(){if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;const range=generation.offsetHeight-innerHeight,progress=Math.max(0,Math.min(1,-generation.getBoundingClientRect().top/range));genCards.forEach((card,i)=>{const start=i*.31-.09;const enter=Math.max(0,Math.min(1,(progress-start)/.1));const exit=i===2?0:Math.max(0,Math.min(1,(progress-start-.31)/.1));const y=(1-enter)*85-exit*90;const turn=(1-enter)*7-exit*7;card.style.transform=`translate(-50%,calc(-50% + ${y}vh)) rotate(${turn}deg) scale(${.8+enter*.2-exit*.08})`;card.style.opacity=enter*(1-exit);card.style.zIndex=String(i+1)});const step=Math.min(2,Math.floor(progress*3));genCaption.textContent=genLines[step];document.querySelector('#generate-index').textContent=`0${step+1} — 03`}addEventListener('scroll',()=>requestAnimationFrame(updateGeneration),{passive:true});addEventListener('resize',updateGeneration);updateGeneration();

const reduceMotion=matchMedia('(prefers-reduced-motion: reduce)');

// The cover starts as an ordered stack and opens as the reader scrolls.
const gate=document.querySelector('#chapters');
const deck=gate.querySelector('.chapter-deck');
const deckCards=[...gate.querySelectorAll('.deck-card')];
function updateDeck(){
  if(reduceMotion.matches){gate.style.setProperty('--deck-progress',0);deckCards.forEach(card=>{card.style.transform='';card.style.opacity='';card.style.zIndex=''});return}
  const travel=Math.max(1,gate.offsetHeight-innerHeight);
  const progress=Math.max(0,Math.min(1,-gate.getBoundingClientRect().top/travel));
  const ease=progress*progress*(3-2*progress);
  const h=deckCards[0].offsetHeight;
  const openGap=innerWidth<=650?9:13;
  const stackStep=h*(innerWidth<=650?.76:.72);
  const openTotal=4*h+3*openGap;
  const closedTotal=h+3*stackStep;
  const openTop=Math.max(0,(deck.clientHeight-openTotal)/2);
  const closedTop=Math.max(0,(deck.clientHeight-closedTotal)/2);
  gate.style.setProperty('--deck-progress',progress.toFixed(3));
  deckCards.forEach((card,i)=>{
    const closedY=closedTop+i*stackStep;
    const openY=openTop+i*(h+openGap);
    const y=closedY+(openY-closedY)*ease;
    const tilt=8*(1-ease);
    card.style.transform=`translate(-50%,${y.toFixed(1)}px) rotateX(${tilt.toFixed(2)}deg) scale(${(.94+.06*ease).toFixed(3)})`;
    card.style.opacity='1';
    card.style.zIndex=String(i+1);
  });
}
addEventListener('scroll',()=>requestAnimationFrame(updateDeck),{passive:true});
addEventListener('resize',updateDeck);
reduceMotion.addEventListener('change',updateDeck);
updateDeck();

// Scroll-linked transforms for page boundaries. Keep the long reading areas still.
const transformPages=[...document.querySelectorAll('.screen')];
const transformTracks=[...document.querySelectorAll('.generate-track')];
const clamp01=value=>Math.max(0,Math.min(1,value));
let transformFrame=0;
function updatePageTransforms(){
  transformFrame=0;
  if(reduceMotion.matches){
    transformPages.forEach(page=>{page.style.transform='';page.style.opacity='';page.style.borderRadius=''});
    transformTracks.forEach(track=>{const stage=track.querySelector('.gate-stage,.generate-stage');stage.style.transform='';stage.style.borderRadius=''});
    return;
  }
  const viewport=innerHeight;
  for(const page of transformPages){
    const top=page.offsetTop-scrollY;
    const bottom=top+page.offsetHeight;
    if(top>viewport*1.25||bottom<-viewport*.25)continue;
    const entering=1-clamp01((viewport-top)/(viewport*.85));
    const leaving=clamp01((viewport-bottom)/(viewport*.65));
    const bend=Math.max(entering,leaving);
    page.style.transform=`perspective(1600px) translate3d(0,${(42*entering-26*leaving).toFixed(1)}px,0) rotateX(${(2.4*entering-1.2*leaving).toFixed(2)}deg) scale(${(1-.055*bend).toFixed(4)})`;
    page.style.opacity=(1-.2*entering-.11*leaving).toFixed(3);
    page.style.borderRadius=`${(18*bend).toFixed(1)}px`;
  }
  for(const track of transformTracks){
    const bottom=track.offsetTop+track.offsetHeight-scrollY;
    const leaving=clamp01((viewport-bottom)/(viewport*.7));
    const stage=track.querySelector('.gate-stage,.generate-stage');
    stage.style.transform=`translate3d(0,${(-22*leaving).toFixed(1)}px,0) scale(${(1-.06*leaving).toFixed(4)})`;
    stage.style.borderRadius=`${(18*leaving).toFixed(1)}px`;
  }
}
function queuePageTransforms(){if(!transformFrame)transformFrame=requestAnimationFrame(updatePageTransforms)}
addEventListener('scroll',queuePageTransforms,{passive:true});
addEventListener('resize',queuePageTransforms);
reduceMotion.addEventListener('change',queuePageTransforms);
updatePageTransforms();

const modelEntries=[
 {name:'Nano Banana',kind:'图像生成与编辑 · Google',use:'Gemini 原生图像生成能力的系列名称，可从文字和参考图创建、修改视觉。具体模型版本会更新。',question:'任务要从零生成，还是保留原照片细节做编辑？',url:'https://ai.google.dev/gemini-api/docs/image-generation'},
 {name:'Seedance',kind:'视频生成 · 字节跳动 Seed',use:'以文字、图片等参考生成动态画面；选用的版本决定可用输入、时长和编辑方式。',question:'镜头动作、人物连续性和声音分别怎样检查？',url:'https://seed.bytedance.com/zh/seedance'},
 {name:'Seedream',kind:'图像生成 · 字节跳动 Seed',use:'Seed 的图像生成与编辑模型系列；它与视频系列 Seedance 承担不同任务。',question:'静帧图像是否需要继续进入视频流程？',url:'https://seed.bytedance.com/zh/models'},
 {name:'Kimi / 月之暗面',kind:'语言与 Agent · Moonshot AI',use:'月之暗面是开发公司，Kimi 是产品及模型系列。学习时把公司、入口与当前模型版本分别记录。',question:'你使用的是 Kimi 的哪个界面与模型？',url:'https://www.moonshot.ai/'},
 {name:'GPT',kind:'语言与多模态 · OpenAI',use:'模型家族为 ChatGPT 等产品提供能力；当前工具与权限仍由使用环境决定。',question:'回答来自已有知识、上传文件，还是实时搜索？',url:'https://platform.openai.com/docs/models'},
 {name:'Claude',kind:'语言与推理 · Anthropic',use:'Claude 既是产品名称，也对应不断更新的模型系列；适合区分模型能力与产品界面。',question:'当前任务是否需要文件、检索或实际执行工具？',url:'https://www.anthropic.com/claude'},
 {name:'FLUX',kind:'图像模型 · Black Forest Labs',use:'图像生成模型系列，通常通过不同平台或工作流调用。',question:'你要的是视觉探索，还是需要保留真实服装的商业图？',url:'https://bfl.ai/'},
 {name:'Tripo',kind:'3D 生成 · Tripo',use:'通过文字或图像生成三维资产；后续仍要检查模型结构与材质。',question:'生成后能否满足你要的拓扑、贴图与导出要求？',url:'https://www.tripo3d.ai/'}
];
const modelPicks=document.querySelector('#model-picks'),modelDescription=document.querySelector('#model-description'),modelFrame=document.querySelector('#model-official-frame'),modelLink=document.querySelector('#model-official-link');let activeModel=0;
function renderModel(index){activeModel=index;const m=modelEntries[index];modelPicks.innerHTML=modelEntries.map((entry,i)=>`<button type="button" data-model="${i}" class="${i===index?'active':''}" aria-pressed="${i===index}">${logoBox(entry.name)}<span>${entry.name}</span></button>`).join('');modelDescription.innerHTML=`<span class="num">${m.kind}</span>${logoBox(m.name)}<h3>${m.name}</h3><p>${m.use}</p><p><strong>课堂问题：</strong>${m.question}</p>`;modelLink.href=m.url;modelFrame.src=m.url;modelFrame.title=`${m.name} 官方网站预览`}
modelPicks.addEventListener('click',e=>{const button=e.target.closest('[data-model]');if(button)renderModel(Number(button.dataset.model))});
const modelDrawer=document.querySelector('#model-drawer');modelDrawer.addEventListener('toggle',()=>{if(modelDrawer.open&&modelFrame.src==='about:blank')renderModel(activeModel)});
document.querySelector('#open-model-drawer').addEventListener('click',e=>{e.preventDefault();modelDrawer.open=true;modelDrawer.scrollIntoView({behavior:reduceMotion.matches?'instant':'smooth'})});

const layerTrack=document.querySelector('.layer-scroll'),layerCards=[...document.querySelectorAll('.layer-card')];
const creative=document.querySelector('#creative'),creativeNumbers=[...creative.querySelectorAll('[data-creative]')],creativeDecisions=[...creative.querySelectorAll('.decision span')];
let narrativeFrame=0;
function updateNarrative(){narrativeFrame=0;if(reduceMotion.matches){layerCards.forEach(card=>{card.style.transform='';card.style.opacity=''});creativeNumbers.concat(creativeDecisions).forEach(el=>{el.style.transform='';el.style.opacity=''});return}
 const range=Math.max(1,layerTrack.offsetHeight-innerHeight),p=clamp01(-layerTrack.getBoundingClientRect().top/range);
 layerCards.forEach((card,i)=>{const d=i-p*2,near=Math.abs(d);card.style.transform=`translate(-50%,-50%) translate3d(0,${(d*95).toFixed(2)}vh,0) rotateX(${(d*7).toFixed(2)}deg) scale(${(1-Math.min(.13,near*.09)).toFixed(3)})`;card.style.opacity=clamp01(1-near*1.2).toFixed(3);card.style.zIndex=String(10-Math.round(near*3))});
 document.querySelector('#layer-progress-bar').style.width=`${Math.round(p*100)}%`;document.querySelector('#layer-step').textContent=`0${Math.min(3,Math.floor(p*3)+1)} / 03`;
 const rect=creative.getBoundingClientRect(),cp=clamp01((innerHeight-rect.top)/(innerHeight+rect.height*.45));
 creativeNumbers.forEach((el,i)=>{const t=clamp01((cp-(.09+i*.17))/.17);el.style.transform=`translateY(${((1-t)*65).toFixed(1)}px) scale(${(.65+t*.35).toFixed(3)})`;el.style.opacity=t.toFixed(3)});
 creativeDecisions.forEach((el,i)=>{const t=clamp01((cp-(.25+i*.075))/.18);el.style.transform=`translateY(${((1-t)*34).toFixed(1)}px)`;el.style.opacity=t.toFixed(3)});
}
function queueNarrative(){if(!narrativeFrame)narrativeFrame=requestAnimationFrame(updateNarrative)}
addEventListener('scroll',queueNarrative,{passive:true});addEventListener('resize',queueNarrative);reduceMotion.addEventListener('change',queueNarrative);updateNarrative();
