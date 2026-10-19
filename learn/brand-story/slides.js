const media = {
  borsalino: {
    src: 'assets/borsalino-hat.jpg',
    alt: 'Borsalino 黑色毡帽产品图',
    credit: 'Borsalino official product image',
    link: 'https://www.borsalino.com/us_en/the-history'
  },
  rock: {
    src: 'assets/rockride-jewelry.webp',
    alt: 'ROCK&RIDE 银饰佩戴细节',
    credit: 'ROCK&RIDE reference image',
    link: 'http://www.rockride.cn/about.html'
  },
  scabal: {
    src: 'assets/scabal-savile-row.jpg',
    alt: 'SCABAL Savile Row 门店与品牌标识',
    credit: 'Scabal / Savile Row reference image',
    link: 'https://scabal.com/pages/scabal-savile-row'
  },
  scabalEditorial: {
    src: 'https://scabal.com/cdn/shop/articles/Tailoring-Header-SS18-1_5f7127fc-99f3-452a-aec1-9d94feaeba9f.jpg?v=1748611485',
    alt: 'Scabal 春季剪裁视觉：西装人物站在石质楼梯上',
    credit: 'Scabal / Spring Tailoring',
    link: 'https://scabal.com/blogs/news/spring-forward'
  },
  burberry: {
    src: 'https://dpk6zrxldcuco.cloudfront.net/2022/annual/professional/bcb1357c-2d21-40e5-a5d0-452dfb19734e/640x740q80-smart.jpg',
    alt: 'Burberry Open Spaces 影片：人物在海面上方悬浮',
    credit: 'Burberry / Open Spaces · D&AD',
    link: 'https://www.dandad.org/annual/2022/entry/professional/236331'
  },
  prada: {
    src: 'https://hips.hearstapps.com/hbztw.h-cdn.co/assets/17/04/1600x800/landscape-1485334637-a6-prada-springsummer-2017-advcampaign-365-frontiers-02.jpg?resize=1200%3A%2A',
    alt: 'Prada 365 春夏广告：人物与沙地、草丛形成具有层次的构图',
    credit: 'Willy Vanderperre / Prada 365',
    link: 'https://www.prada.com/fr/en/pradasphere/campaigns/2017/365-ss-woman.html'
  },
  loewe: {
    src: 'https://prcdn.freetls.fastly.net/release_image/10711/115/10711-115-3241f368bdf0802b07cb63f734bac671-2160x2700.jpg?auto=webp&bg-color=fff&fit=bounds&format=jpeg&height=1350&quality=85%2C65&width=1950',
    alt: 'LOEWE Crafted World 海报：装满手工工具的包袋和大字标题',
    credit: 'LOEWE / Crafted World 官方发布图',
    link: 'https://www.loewe.com/int/en/pd/stories-projects/crafted-world-exhibition.html'
  }
};

const slides = [
  {section:'00 / 开场', title:'Brand Story', tone:'purple', layout:'cover', kicker:'A VISUAL STORYTELLING WORKBOOK', lead:'品牌如何成为故事，故事如何成为画面。', foot:'FC&I BB3 · CONCEPT / COMPOSITION / STYLE', note:'从三个学期项目品牌出发，学习把研究转换为艺术指导。'},
  {section:'00 / 开场', title:'项目概览', tone:'dark', layout:'tiles', hideTitle:true, kicker:'READ THE BRIEF', lead:'从品牌研究出发，创作可跨媒介延伸的视觉叙事。', tiles:[['01','品牌与受众','有依据地认识品牌与新一代受众'],['02','艺术指导','让策略变成可执行的视觉规则'],['03','广告图像','Borsalino 方向：3 张棚拍/CGI 图像 + 2 张外景图像'],['04','Brandzine','用图片、文章与版式建立品牌世界']], note:'Borsalino 是跨校竞赛；ROCK&RIDE 与 SCABAL 按项目 brief 的其他要求推进。', source:'课程项目 brief（本地 PDF）'},
  {section:'01 / 三个品牌', title:'同一份方法，三种品牌语言。', tone:'purple', layout:'tiles', kicker:'THREE BRAND DIRECTIONS', tiles:[['01 / HATS','Borsalino','传承如何进入新一代的生活？'],['02 / JEWELLERY','ROCK&RIDE','如何让首饰成为态度与身份线索？'],['03 / TAILORING','SCABAL','怎样让面料工艺被看见、被感受？']], note:'这三个问题是课堂分析角度，不是品牌给出的正式口号。'},
  {section:'01 / 三个品牌', title:'Borsalino：从 Alessandria 出发。', tone:'light', layout:'brand', kicker:'BRAND STORY / ORIGIN', image:media.borsalino, lead:'一顶帽子的历史，不只属于过去；它也在持续决定人如何进入一个空间。', points:['1857 年 4 月 4 日，Giuseppe Borsalino 在 Alessandria 创办制帽工厂。','品牌后来通过广告与电影，把工艺物件带入更大的文化想象。','可保留的核心资产：制帽手艺、经典帽形、Alessandria 与电影记忆。'], source:'https://borsalinomuseum.com/en/the-museum/', note:'历史页用于建立可信度；下一页把历史转成今天可使用的身份语言。'},
  {section:'01 / 三个品牌', title:'Borsalino：经典是一种出场方式。', tone:'dark', layout:'tiles', kicker:'STORY TRANSLATION / HATS', lead:'不要只说“复古”。要让观众看到帽子如何改变一个人的轮廓、姿态与角色。', tiles:[['事实','1857 / Alessandria','品牌拥有真实地点与可追溯的工艺起点。'],['张力','传统 × 新一代','经典不能停留在博物馆，要重新回到身体上。'],['命题','你的出场方式','帽子不规定你是谁，而是让你决定如何出现。']], note:'建议视觉关键词：轮廓、帽檐、手势、城市、银幕；避免把品牌固定成老派绅士。'},
  {section:'01 / 三个品牌', title:'Borsalino：人们买到的，是一段角色感。', tone:'purple', layout:'tiles', kicker:'BRAND LABELS / HATS', tiles:[['01','有品位','懂得经典的来源，但不需要大声证明。'],['02','有个人风格','敢于在日常城市里制造自己的轮廓。'],['03','有文化记忆','让电影、工艺和当下生活发生联系。'],['04','耐久而非一次性','选择可以长期佩戴、持续改写的物件。']], note:'年轻化的重点不是把 Borsalino 变低龄，而是让经典成为个人表达工具。'},
  {section:'01 / 三个品牌', title:'ROCK&RIDE：把符号戴在身上。', tone:'light', layout:'brand', kicker:'BRAND STORY / ORIGIN', image:media.rock, lead:'首饰不只是装饰；它可以成为佩戴者选择过的信念、记忆或生活态度。', points:['官方资料将品牌描述为发源于布鲁克林的独立设计品牌，发展超过 20 年。','品牌强调“不凡设计、卓越工艺”和“自由灵魂装备”。','设计会借用历史、宗教、流行文化与神秘主义符号，再重新赋予意义。'], source:'http://www.rockride.cn/about.html', note:'“1993 年创立”在部分外部传播中出现，但官方当前关于页未明确给出；正式提案前应向品牌方确认。'},
  {section:'01 / 三个品牌', title:'ROCK&RIDE：自由不是风格滤镜。', tone:'dark', layout:'tiles', kicker:'STORY TRANSLATION / JEWELLERY', lead:'真正的故事不是“看起来很酷”，而是为什么这个符号值得被某个人随身携带。', tiles:[['符号','玫瑰 / 徽章 / 骷髅','从文化中取出图腾，再放回个人生活。'],['行为','佩戴 / 收藏 / 叠戴','手、颈部和动作让首饰进入日常。'],['命题','我的自由装备','产品成为表达立场与经历的私人标记。']], note:'建议视觉关键词：刻痕、反光、手部、身体距离、收藏；避免只用皮衣和霓虹灯代表摇滚。'},
  {section:'01 / 三个品牌', title:'ROCK&RIDE：人们获得的是态度标签。', tone:'purple', layout:'tiles', kicker:'BRAND LABELS / JEWELLERY', tiles:[['01','独立','不随主流审美走，有自己的选择。'],['02','有态度','敢于表达，但不依赖大Logo。'],['03','懂符号','会为图腾、饰物和收藏赋予个人意义。'],['04','有反骨','外表可以锋利，选择仍然高度私人化。']], note:'传播可邀请用户讲述“我为什么选择这个符号”，让首饰故事由佩戴者共同完成。'},
  {section:'01 / 三个品牌', title:'SCABAL：一套衣服从纤维开始。', tone:'light', layout:'brand', kicker:'BRAND STORY / ORIGIN', image:media.scabal, lead:'SCABAL 的品牌价值藏在看不见的地方：原料、织造、知识和量体过程共同构成身份。', points:['1938 年，Otto Hertz 在布鲁塞尔创办纺织品贸易公司。','1972 年，品牌进入伦敦 Savile Row；1973 年收购 Huddersfield 织造厂。','SCABAL 把面料、定制、艺术想象与电影服装联系在同一个系统中。'], source:'https://scabal.com/pages/scabal-heritage', note:'SCABAL 不应只被讲成“正式西装”；它更适合讲材料如何成为个人身份。'},
  {section:'01 / 三个品牌', title:'SCABAL：把材料拍成身份。', tone:'dark', layout:'tiles', kicker:'STORY TRANSLATION / TAILORING', lead:'从一根纤维开始，经过水、织机、样本册、剪裁和身体，最后成为一个人进入世界的方式。', tiles:[['原料','羊毛与来源','品质也包含环境、耐久与责任。'],['工艺','织造与手感','用纹理、垂坠和光泽替代空泛的“高级感”。'],['场景','Savile Row / 生活','服装最终要服务于人物，而不是压过人物。']], note:'建议视觉关键词：样本册、织纹、肩线、手势、建筑线条；让近景成为工艺证据。'},
  {section:'01 / 三个品牌', title:'SCABAL：人们获得的是判断力。', tone:'purple', layout:'tiles', kicker:'BRAND LABELS / TAILORING', tiles:[['01','有知识','看得见剪裁、材料和细节的差异。'],['02','可靠','在重要场合拥有清晰、稳定的自我形象。'],['03','长期主义','把衣服当作可持续使用的个人资产。'],['04','面向未来','尊重传统，同时接受技术与责任的变化。']], note:'年轻化的方向是“有知识的自我建构”，而不只是老派商务权威。'},
  {section:'01 / 三个品牌', title:'Borsalino', tone:'light', layout:'brand', kicker:'BRAND 01 / ITALY · HATS', image:media.borsalino, lead:'不是先讲“复古”，而是先看一顶帽子承载的工艺与身份。', points:['品牌由 Giuseppe Borsalino 于 1857 年在意大利 Alessandria 开设。','品牌的真实资产包括制帽工序、经典帽形与手写标识。','本次 brief 的核心张力：传承与年轻一代，真实身份与数字传播。'], source:'https://www.borsalino.com/row_en/the-history', note:'课堂可请学生区分：品牌史实、自己的观察、尚待验证的受众假设。'},
  {section:'01 / 三个品牌', title:'把帽子从“物件”变成“角色”。', tone:'dark', layout:'tiles', kicker:'BORSALINO / VISUAL TRANSLATION', lead:'同一顶帽子可以讲三层故事。', tiles:[['轮廓','远景','帽檐先成为一眼可认的形状。'],['工艺','近景','手势、材料和制作痕迹让传承可见。'],['关系','情境','人物如何佩戴，决定它属于谁的当下。']], note:'这是一套摄影任务分配方法，不要求每张图重复展示帽子。'},
  {section:'01 / 三个品牌', title:'ROCK&RIDE', tone:'light', layout:'brand', kicker:'BRAND 02 / JEWELLERY · SHANGHAI PROJECT', image:media.rock, lead:'金属、符号与佩戴方式，可以成为讲述个人态度的语法。', points:['品牌发布资料将摇滚与机车文化列为重要线索。','产品线可见戒指、项链、手镯等，部分作品使用骷髅、扑克、玫瑰等符号。','研究时要问：这些符号对目标受众意味着什么，而不只是“酷”。'], source:'https://www.chinapp.com/pinpaidongtai/229665', note:'公开资料有限；创始时间、品牌定位等进一步信息应向合作品牌核实。'},
  {section:'01 / 三个品牌', title:'让首饰拥有叙事尺度。', tone:'dark', layout:'tiles', kicker:'ROCK&RIDE / VISUAL TRANSLATION', lead:'小物件需要放大“触感”和“行为”。', tiles:[['产品','微距','刻痕、反光与材质让设计被读懂。'],['人物','佩戴','手、颈部、动作呈现它如何进入生活。'],['空间','氛围','场景回应品牌文化，避免直接套用摇滚刻板印象。']], note:'课堂讨论：只有黑色皮衣和霓虹灯，是否足以讲清这个品牌？'},
  {section:'01 / 三个品牌', title:'SCABAL', tone:'light', layout:'brand', kicker:'BRAND 03 / FABRIC · TAILORING', image:media.scabal, lead:'一套西装的故事，从面料、剪裁和人物气质同时开始。', points:['Scabal 于 1938 年在布鲁塞尔创立，品牌长期经营高端面料与定制男装。','品牌历史包含织造工艺、Savile Row 门店及与电影服装的联系。','影像不能只交代“正式”；要让观众看见质地、垂坠和穿着者。'], source:'https://scabal.com/pages/scabal-heritage', note:'Scabal 官方资料特别适合做“材料如何成为故事”的课堂研究。'},
  {section:'01 / 三个品牌', title:'把材料拍成情绪。', tone:'dark', layout:'tiles', kicker:'SCABAL / VISUAL TRANSLATION', lead:'同一套西装，可以通过镜头距离改变叙事。', tiles:[['全身','结构','比例、肩线、动作交代剪裁。'],['特写','质感','织纹、手势、光泽交代工艺。'],['环境','身份','空间与人物关系交代着装情境。']], note:'拍摄计划先决定“要证明什么”，再决定灯光和镜头。'},
  {section:'02 / Brand Story', title:'品牌故事不等于品牌年表。', tone:'purple', layout:'statement', kicker:'THE SHIFT', statement:'事实是起点。<br><span class="accent">故事是事实与观众之间的关系。</span>', lead:'年份、发源地、创始人可以提供依据；人物、情境与变化让依据被感受。', note:'请学生选一个品牌事实，尝试改写成一张可拍摄的画面。'},
  {section:'02 / Brand Story', title:'一句话，先讲清冲突。', tone:'dark', layout:'formula', kicker:'STORY ENGINE', lead:'谁在什么情境中，需要什么？品牌能提供怎样的转变？', formula:['受众','情境','张力','品牌角色','改变'], note:'示例练习：“一个在城市中寻找自我表达的人，如何重新理解一顶经典帽子？”这是课堂假设，须由研究检验。'},
  {section:'03 / 品牌系统', title:'品牌系统，究竟有哪些层？', tone:'light', layout:'tiles', kicker:'BRAND SYSTEM / SIX LAYERS', tiles:[['01','核心','使命、价值、立场与可核实的品牌资产'],['02','受众','他们的需要、情境与文化语境'],['03','语言','命名、标题、文案语气与关键词'],['04','视觉','标识、字体、色彩、构图、图像规则'],['05','体验','产品、触点、服务与互动方式'],['06','治理','在不同媒介中如何保持一致、如何判断偏离']], note:'不是每个项目都要重新设计 Logo。先找出必须保留和可以演化的部分。'},
  {section:'03 / 品牌系统', title:'将系统变成一张“规则卡”。', tone:'dark', layout:'tiles', kicker:'FROM STRATEGY TO ART DIRECTION', lead:'每个创作决定都要有依据和用途。', tiles:[['保留','Brand code','识别品牌所必需的产品、符号或制作方式。'],['转译','Visual rule','色彩、灯光、材质、人物和版式的可执行约束。'],['扩展','Application','广告、视频、社交内容与 Brandzine 各说哪一部分。']], note:'一套风格规则需要能指导多张作品，而不是只适合一张情绪板。'},
  {section:'04 / 概念包装', title:'如何包装一个概念？', tone:'purple', layout:'formula', kicker:'CONCEPT PACKAGING', lead:'把想法从一句抽象形容词，组织成能被讨论和制作的提案。', formula:['一句命题','一个标题','三条依据','三种画面','一套规则'], note:'这里的“包装”指概念呈现与视觉系统；项目 brief 未要求实体包装盒设计。'},
  {section:'04 / 概念包装', title:'构图不是装饰，是阅读顺序。', tone:'dark', layout:'tiles', kicker:'COMPOSITION / SEE → FEEL → REMEMBER', tiles:[['第一眼','主视觉','主体轮廓、比例和对比先抓住注意。'],['第二眼','证据','细节、工艺、佩戴动作支持故事。'],['第三眼','记忆','标题、留白与视觉符号留下明确印象。']], lead:'拍之前问：观众先看什么？随后发现什么？最终记住什么？', note:'可直接对应 advertorial、back cover 与 Brandzine 跨页。'},
  {section:'04 / 概念包装', title:'风格叙事：让每张图说同一种语言。', tone:'light', layout:'tiles', kicker:'STYLE IS A SET OF RULES', tiles:[['色彩','关系','不是只选紫色，而是决定主色、辅助色与对比。'],['光线','情绪','软硬、方向和明暗决定画面的心理距离。'],['材质','证据','质地的清晰程度决定工艺是否可信。'],['空间','世界','背景与道具说明人物属于什么情境。'],['人物','态度','姿态、视线与动作建立角色。'],['版式','节奏','图文比例与留白让故事跨页面延续。']], note:'风格词要转换为可观察的选择，避免只写“高级感、电影感、年轻化”。'},
  {section:'05 / 真实案例', title:'看案例，不只看“好不好看”。', tone:'purple', layout:'statement', kicker:'CASE STUDY METHOD', statement:'品牌资产 → 创意命题 → 构图选择 → 媒介延展', lead:'接下来五个品牌案例，分别看它们如何把一个想法拍成可辨认的视觉系统。', note:'案例分析是教学解读；不要把分析措辞当作品牌官方意图。'},
  {section:'05 / 真实案例', title:'Borsalino / Estate Italiana', tone:'dark', layout:'case', kicker:'CASE 01 / CAMPAIGN PHOTOGRAPHY', image:media.borsalino, lead:'品牌以地中海旅程和夏日片刻为线索，让帽子成为人物风格的一部分。', observations:['岩石与服装形成相近的中性色层次','帽形在人物轮廓中保持可读','场景传递轻松，而非只展示产品'], source:'https://www.borsalino.com/es_en/ss25-adv-campaign', note:'官方页面注明摄影 Jeremy Everett、艺术指导 Agata Belcen。'},
  {section:'05 / 真实案例', title:'Scabal / Spring Tailoring', tone:'dark', layout:'case', kicker:'CASE 02 / EDITORIAL PHOTOGRAPHY', image:media.scabalEditorial, lead:'建筑线条与人物站姿共同强调西装的剪裁，材料细节则需要近景补足。', observations:['建筑线条呼应服装结构','纵向人物比例让廓形清楚','整体图与局部图承担不同任务'], source:'https://scabal.com/blogs/news/spring-forward', note:'分析基于 Scabal 官方编辑内容中的摄影图。'},
  {section:'05 / 真实案例', title:'Burberry / Open Spaces', tone:'dark', layout:'case', kicker:'CASE 03 / BRAND FILM', image:media.burberry, lead:'把品牌关于探索与自由的文字，变成身体在自然空间里漂浮的视觉行动。', observations:['天空与地平线提供大面积呼吸感','多人动作把“开放”拍成关系','外套仍是人物形象的一部分'], source:'https://www.dandad.org/annual/2022/entry/professional/236331', note:'Burberry 年报介绍了这支外套广告影片和线下延展；画面来自 D&AD 的项目档案。'},
  {section:'05 / 真实案例', title:'Prada / 365', tone:'dark', layout:'case', kicker:'CASE 04 / CAMPAIGN SYSTEM', image:media.prada, lead:'一个品牌可以有多条视觉叙事。Prada 365 用不同场景构成持续变化的广告系统。', observations:['同一系列拥有多个视觉章节','人物与场景的关系持续变化','摄影视角成为不同章节的共同线索'], source:'https://www.prada.com/fr/en/pradasphere/campaigns/2017/365-ss-woman.html', note:'Prada 官方介绍 2017 年春夏系列的五种视觉身份；摄影由 Willy Vanderperre 完成。'},
  {section:'05 / 真实案例', title:'LOEWE / Crafted World', tone:'dark', layout:'case', kicker:'CASE 05 / EDITORIAL CAMPAIGN', image:media.loewe, lead:'工艺不必只用工匠手部特写表达；工具、材料与轻松的物件组合也能建立可识别的世界。', observations:['工具成为“工艺”最直接的证据','干净背景让物件像展品一样被观看','大字标题使概念跨海报与展览延续'], source:'https://www.loewe.com/int/en/pd/stories-projects/crafted-world-exhibition.html', note:'图片为 LOEWE 的 Crafted World 展览发布视觉；课堂分析其宣传图的构图与叙事。'},
  {section:'06 / 课堂练习', title:'现在，做一页 Story-to-Image。', tone:'light', layout:'tiles', kicker:'YOUR FIRST DELIVERABLE', tiles:[['01','找依据','选一个品牌，列 3 条有出处的品牌事实。'],['02','写命题','一句话写清受众、情境与品牌角色。'],['03','画草图','主视觉、细节图、编辑页各画一格。'],['04','定规则','写下色彩、光线、材质、人物的选择。']], note:'讲评时检查：图像是否能在不读 Logo 的情况下讲出这个品牌的特征？'},
  {section:'06 / 课堂练习', title:'结束前，问自己。', tone:'purple', layout:'statement', kicker:'FINAL CHECK', statement:'如果拿掉 Logo，<br><span class="accent">这个故事还属于这个品牌吗？</span>', lead:'事实让故事可信；构图让故事被看见；风格让它成为一个系统。', note:'下一阶段可继续补充每个品牌的受众调研、视觉参考板和拍摄计划。'}
];

const $ = (id) => document.getElementById(id);
const carousel = $('carousel');
let current = 0;
let startX = null;
let lastWheel = 0;

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}
function imageFrame(image, extraClass = '') {
  return `<div class="image-frame ${extraClass}"><img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt)}" loading="lazy" decoding="async"><span class="image-credit">${escapeHtml(image.credit)}</span></div>`;
}
function sourceLink(slide) {
  if (!slide.source || !slide.source.startsWith('https://')) return '';
  return `<a class="source-link" href="${escapeHtml(slide.source)}" target="_blank" rel="noopener noreferrer">查看原始作品与资料 ↗</a>`;
}
function tiles(items) {
  return `<div class="tile-grid">${items.map(([label, title, body]) => `<div class="tile"><b>${escapeHtml(label)}</b><strong>${escapeHtml(title)}</strong>${body ? `<small>${escapeHtml(body)}</small>` : ''}</div>`).join('')}</div>`;
}
function slideBody(slide) {
  switch (slide.layout) {
    case 'cover': return `<div class="orb-art" aria-hidden="true"></div><p class="cover-overline">${escapeHtml(slide.kicker)}</p><h1>BRAND<br><span class="accent">STORY.</span></h1><p class="cover-sub">${escapeHtml(slide.lead)}</p><div class="cover-bottom"><span>THE RESEARCH</span><span>THE IMAGE</span><span>THE SYSTEM</span></div>`;
    case 'brand': return `<div class="two-col"><div><p class="eyebrow">${escapeHtml(slide.kicker)}</p><h2>${escapeHtml(slide.title)}</h2><p class="lead">${escapeHtml(slide.lead)}</p><ul class="bullet-list">${slide.points.map(p=>`<li>${escapeHtml(p)}</li>`).join('')}</ul>${sourceLink(slide)}</div>${imageFrame(slide.image)}</div>`;
    case 'tiles': return `<div><p class="eyebrow">${escapeHtml(slide.kicker)}</p>${slide.hideTitle ? '' : `<h2>${escapeHtml(slide.title)}</h2>`}${slide.lead ? `<p class="lead">${escapeHtml(slide.lead)}</p>` : ''}${tiles(slide.tiles)}</div>`;
    case 'statement': return `<div><p class="eyebrow">${escapeHtml(slide.kicker)}</p><h2 class="statement">${slide.statement}</h2><p class="lead">${escapeHtml(slide.lead)}</p></div>`;
    case 'formula': return `<div><p class="eyebrow">${escapeHtml(slide.kicker)}</p><h2>${escapeHtml(slide.title)}</h2><p class="lead">${escapeHtml(slide.lead)}</p><div class="formula">${slide.formula.map((x,i)=>`${i ? '<i>→</i>' : ''}<span>${escapeHtml(x)}</span>`).join('')}</div></div>`;
    case 'case': return `<div class="two-col visual-first"><div><p class="eyebrow">${escapeHtml(slide.kicker)}</p><h2>${escapeHtml(slide.title)}</h2><p class="lead">${escapeHtml(slide.lead)}</p><div class="case-observation">${slide.observations.map(o=>`<span>${escapeHtml(o)}</span>`).join('')}</div>${sourceLink(slide)}</div>${imageFrame(slide.image)}</div>`;
    default: return `<h2>${escapeHtml(slide.title)}</h2>`;
  }
}
function renderSlides() {
  carousel.innerHTML = slides.map((slide,i) => `<article class="slide" data-index="${i}" data-tone="${slide.tone}" aria-label="第 ${i+1} 页：${escapeHtml(slide.title)}"><div class="slide-content"><div class="slide-kicker">${escapeHtml(slide.section)} / ${String(i+1).padStart(2,'0')}</div><div class="slide-body">${slideBody(slide)}</div><div class="slide-footer"><span>${escapeHtml(slide.foot || 'BRAND STORY / LONETREE LEARN')}</span><span title="讲者提示：${escapeHtml(slide.note || '')}">${String(i+1).padStart(2,'0')} / ${String(slides.length).padStart(2,'0')}</span></div></div></article>`).join('');
  carousel.querySelectorAll('.slide').forEach(el => el.addEventListener('click', () => { const i = Number(el.dataset.index); if (i !== current) goTo(i); }));
  const groups = [];
  slides.forEach((slide,i) => { const name = slide.section; let group = groups.find(g=>g.name===name); if (!group) { group={name,items:[]}; groups.push(group); } group.items.push({index:i,title:slide.title}); });
  $('contentsList').innerHTML = groups.map(g=>`<div class="contents-group"><h3>${escapeHtml(g.name)}</h3>${g.items.map(item=>`<button type="button" data-goto="${item.index}"><span>${escapeHtml(item.title)}</span><span>${String(item.index+1).padStart(2,'0')}</span></button>`).join('')}</div>`).join('');
  $('contentsList').querySelectorAll('[data-goto]').forEach(btn=>btn.addEventListener('click',()=>{goTo(Number(btn.dataset.goto));toggleContents(false)}));
  update();
}
function goTo(index) { current = Math.max(0,Math.min(slides.length-1,index)); update(); }
function update() {
  carousel.querySelectorAll('.slide').forEach((el,i)=>{
    const delta=i-current;
    el.className='slide '+(delta===0?'is-active':delta===-1?'is-prev':delta===1?'is-next':delta<0?'is-hidden-left':'is-hidden-right');
    el.setAttribute('aria-hidden',delta===0?'false':'true');
    el.inert=Math.abs(delta)>1;
  });
  $('pageNumber').textContent=`${String(current+1).padStart(2,'0')} / ${String(slides.length).padStart(2,'0')}`;
  $('progressBar').style.width=`${((current+1)/slides.length)*100}%`;
  $('chapterName').textContent=slides[current].section;
  $('prevButton').disabled=current===0;
  $('nextButton').disabled=current===slides.length-1;
  const hash=`#page-${String(current+1).padStart(2,'0')}`;
  if(location.hash!==hash)history.replaceState(null,'',hash);
}
function toggleContents(open) { $('contents').classList.toggle('open',open); $('contents').setAttribute('aria-hidden',open?'false':'true'); $('contentsButton').setAttribute('aria-expanded',open?'true':'false'); }
$('prevButton').addEventListener('click',()=>goTo(current-1));
$('nextButton').addEventListener('click',()=>goTo(current+1));
$('contentsButton').addEventListener('click',()=>toggleContents(true));
$('closeContents').addEventListener('click',()=>toggleContents(false));
$('contents').addEventListener('click',e=>{if(e.target===$('contents'))toggleContents(false)});
document.addEventListener('keydown',e=>{if(e.key==='Escape')toggleContents(false);if($('contents').classList.contains('open'))return;if(['ArrowRight','PageDown'].includes(e.key)){e.preventDefault();goTo(current+1)}if(['ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();goTo(current-1)}});
carousel.addEventListener('pointerdown',e=>{startX=e.clientX;carousel.setPointerCapture(e.pointerId)});
carousel.addEventListener('pointerup',e=>{if(startX===null)return;const dx=e.clientX-startX;startX=null;if(Math.abs(dx)>42)goTo(current+(dx<0?1:-1))});
carousel.addEventListener('pointercancel',()=>{startX=null});
carousel.addEventListener('wheel',e=>{if(Math.abs(e.deltaX)<22||Math.abs(e.deltaX)<Math.abs(e.deltaY))return;e.preventDefault();if(Date.now()-lastWheel<520)return;lastWheel=Date.now();goTo(current+(e.deltaX>0?1:-1))},{passive:false});
window.addEventListener('hashchange',()=>{const page=Number(location.hash.match(/page-(\d+)/)?.[1]);if(Number.isFinite(page)&&page>0)goTo(page-1)});
const initial=Number(location.hash.match(/page-(\d+)/)?.[1]);if(Number.isFinite(initial)&&initial>0)current=Math.min(initial-1,slides.length-1);
renderSlides();
