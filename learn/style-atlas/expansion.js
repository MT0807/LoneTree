/* 摄影与电影视觉补充索引。技法、类型、流派与审美标签分别在文案中注明。 */
(() => {
  const photo = '摄影与影像', film = '电影与视觉叙事';
  // id | 中文名 | English | 分类 | 起始 | 结束 | 地域 | 概述 | 视觉线索 | 实践者
  const rows = `
daguerreotype|银版摄影|Daguerreotype|${photo}|1839|1860|法国,美国,英国|在抛光金属板上形成独一无二的正像，是早期摄影工艺而非单一画风。|镜面反光,精细细节,金属板装裱|路易·达盖尔;南沃思与霍斯
calotype|卡罗式纸基摄影|Calotype|${photo}|1841|1860|英国,法国|纸负片可印制多张照片，纤维肌理让影像呈现柔和层次。|纸张纹理,柔和轮廓,负片与正片|威廉·亨利·福克斯·塔尔博特;大卫·奥克塔维厄斯·希尔;罗伯特·亚当森
cyanotype|蓝晒摄影|Cyanotype|${photo}|1842|至今|英国,美国|感光铁盐形成蓝白影像，安娜·阿特金斯以植物标本开拓其视觉语言。|普鲁士蓝,白色轮廓,接触印相|安娜·阿特金斯;约翰·赫歇尔
albumen_print|蛋白相纸摄影|Albumen Print|${photo}|1850|1900|法国,英国,美国|蛋清涂层与银盐使十九世纪肖像和风景更易大量复制，常见暖棕调。|暖棕色调,细腻表面,相纸装裱|路易·德西雷·布朗卡尔-埃弗拉尔;朱莉娅·玛格丽特·卡梅伦
stereoscopy|立体摄影|Stereoscopic Photography|${photo}|1851|1900|英国,法国,美国|两张略有视差的照片经观看器形成深度感，曾是大众观看世界的媒介。|双联画面,视差,空间纵深|查尔斯·惠斯通;奥利弗·温德尔·霍姆斯;Underwood & Underwood
chronophotography|连续动作摄影|Chronophotography|${photo}|1878|1915|美国,法国|将运动拆成连续影格，连接科学观察、摄影实验与早期电影。|连续姿态,时间切片,网格序列|埃德沃德·迈布里奇;艾蒂安-朱尔·马雷
autochrome|奥托克罗姆彩色摄影|Autochrome|${photo}|1907|1935|法国,美国|彩色淀粉颗粒与玻璃正片带来柔和、颗粒状的早期彩色影像。|柔和色彩,细密颗粒,透光玻璃|卢米埃尔兄弟;阿诺德·根特;海因里希·库恩
photomontage|摄影蒙太奇|Photomontage|${photo}|1916|1940|德国,苏联,法国|剪切照片并重新组合，用断裂比例和并置表达政治、讽刺或幻想。|裁切拼接,尺度冲突,图文并置|汉娜·赫希;约翰·哈特菲尔德;亚历山大·罗琴科
photogram|物影摄影|Photogram|${photo}|1918|至今|德国,法国,美国|不使用相机，将物体直接置于感光材料上留下光影痕迹。|物体剪影,透明层叠,反相明暗|克里斯蒂安·沙德;曼·雷;拉斯洛·莫霍利-纳吉
surrealist_photography|超现实主义摄影|Surrealist Photography|${photo}|1924|1950|法国,德国,美国|以多次曝光、暗房处理与意外并置，让日常物件显得陌生。阿杰的纪实照片也被超现实主义者重新解读。|重影,反常尺度,暗房实验|曼·雷;朵拉·玛尔;莫里斯·塔巴尔;欧仁·阿杰（被该运动引用）
abstract_photography|抽象摄影|Abstract Photography|${photo}|1910|至今|美国,德国,英国|从光影、局部与形态出发，使照片不必首先指认具体对象。|局部取景,几何影子,形式节奏|阿尔文·兰登·科伯恩;保罗·斯特兰德;拉斯洛·莫霍利-纳吉;亚伦·西斯金德
architecture_photography|建筑摄影|Architectural Photography|${photo}|1850|至今|美国,法国,德国|用取景、透视和光线呈现建筑的空间、结构与使用方式。|透视线,尺度参照,立面与空间|欧仁·阿杰;贝伦尼斯·阿博特;埃兹拉·斯托勒
aerial_photography|航拍摄影|Aerial Photography|${photo}|1858|至今|法国,美国,英国|高处视角改变人对地形和城市的认识，既是测绘方法也启发抽象构图。|俯视,地形纹理,地图感|纳达尔;乔治·劳伦斯;玛格丽特·伯克-怀特
macro_photography|植物微距摄影|Botanical Close-up Photography|${photo}|1890|至今|德国,美国|放大植物局部，让结构、重复与肌理成为画面主体。|重复形态,局部放大,浅景深|卡尔·布洛斯费尔特;贝伦尼斯·阿博特;罗伯特·梅普尔索普
fashion_photography|时尚摄影|Fashion Photography|${photo}|1910|至今|法国,美国,英国|以人物、服装、姿态和环境共同讲述时尚观念，是商业与艺术交汇的类型。|姿态与服装,布光,编辑叙事|爱德华·斯泰肯;理查德·阿维顿;欧文·佩恩
color_documentary|彩色纪实摄影|Colour Documentary Photography|${photo}|1939|至今|美国,英国,日本|彩色进入社会记录，使服装、标识、劳动环境等细节成为叙事证据。|现场色彩,环境信息,系列叙事|杰克·德拉诺;埃丝特·巴布利;苏珊·梅塞拉斯
environmental_portrait|环境肖像|Environmental Portraiture|${photo}|1930|至今|美国,英国|把人物放在其工作或生活空间中，让背景成为肖像叙事的一部分。|人物与场景,环境线索,叙事道具|阿诺德·纽曼;多萝茜娅·兰格;奥古斯特·桑德
night_photography|夜间城市摄影|Night Photography|${photo}|1900|至今|法国,美国,日本|以街灯、橱窗和长曝光呈现城市夜生活，暗部与光点共同组织画面。|低照度,长曝光,点状灯光|布拉塞;比尔·布兰特;森山大道
early_cinema|早期纪实短片|Early Actuality Film|${film}|1895|1905|法国,英国,美国|以短镜头记录车站、街道与日常活动，电影首先也是观看现实的新方式。|固定机位,单场景,人群运动|卢米埃尔兄弟;爱丽丝·居伊-布拉谢;罗伯特·W·保罗
trick_film|魔术电影|Trick Film|${film}|1896|1915|法国,英国,美国|停机再拍、叠印和布景幻术把舞台魔术转化为银幕奇观。|替换剪辑,手绘布景,多次曝光|乔治·梅里爱;塞冈多·德·乔蒙;沃尔特·R·布斯
silent_slapstick|默片肢体喜剧|Silent Slapstick|${film}|1910|1935|美国,英国,法国|以身体动作、道具和空间关系制造节奏，笑点常依赖镜头中的完整动作。|全身动作,追逐,道具连锁|查理·卓别林;巴斯特·基顿;梅布尔·诺曼德
french_impressionist_cinema|法国印象派电影|French Impressionist Cinema|${film}|1918|1929|法国|以主观镜头、叠印和节奏化剪辑描绘人物感知，并非绘画印象派的直接复制。|主观镜头,叠印,光学变形|路易·德吕克;让·爱泼斯坦;热尔梅娜·杜拉克
surrealist_cinema|超现实主义电影|Surrealist Cinema|${film}|1924|1940|法国,西班牙|以梦境、断裂因果和突兀并置挑战传统叙事与理性观看。|梦的逻辑,意外切换,象征性物件|路易斯·布努埃尔;萨尔瓦多·达利;热尔梅娜·杜拉克
absolute_film|抽象电影|Absolute Film|${film}|1921|1935|德国,法国|让几何形态与运动节奏成为影片主体，探索不依赖人物和故事的视觉音乐。|几何运动,节奏变化,非叙事|瓦尔特·鲁特曼;汉斯·里希特;维京·艾格林
city_symphony|城市交响电影|City Symphony Film|${film}|1921|1935|德国,美国,苏联|以一天中的城市片段和剪辑节奏组织城市肖像，介于纪录与先锋影像之间。|都市快切,交通与人群,时间结构|瓦尔特·鲁特曼;吉加·维尔托夫;保罗·斯特兰德
silhouette_animation|剪影动画|Silhouette Animation|${film}|1920|1940|德国,英国|将剪纸人物逐格拍摄，利用黑色轮廓、层叠背景和舞台式空间讲故事。|剪纸轮廓,逐格运动,层次布景|洛特·赖尼格;贝尔托尔德·巴尔托施
poetic_realism|诗意现实主义电影|Poetic Realism|${film}|1930|1945|法国|在摄影棚与城市边缘场景中结合普通人物、抒情氛围和宿命感。|雾与街景,柔暗布光,宿命叙事|马塞尔·卡尔内;让·雷诺阿;让·维果
classical_hollywood|经典好莱坞叙事|Classical Hollywood Cinema|${film}|1920|1960|美国|以连贯剪辑、清晰场面调度和明星制组织通俗叙事，不等于单一色调。|轴线连续,清晰景别,因果叙事|约翰·福特;霍华德·霍克斯;迈克尔·柯蒂兹
technicolor_musical|特艺彩色歌舞片|Technicolor Musical|${film}|1935|1960|美国,英国|高饱和色、布景和舞蹈共同形成歌舞场面；Technicolor 指历史工艺与品牌。|饱和色彩,舞台化布景,编舞镜头|文森特·明奈利;迈克尔·鲍威尔;斯坦利·多南
japanese_jidaigeki|日本时代剧视觉|Japanese Jidaigeki|${film}|1920|至今|日本|以历史时空、服装和场面调度构建武士与民间故事，内部包含多种风格。|历史服装,群像调度,动作轴线|沟口健二;黑泽明;小林正树
british_free_cinema|英国自由电影|British Free Cinema|${film}|1956|1959|英国|以短纪录片观察日常和工人阶级生活，常采用轻便摄影和现场声音。|街头观察,手持摄影,日常细节|林赛·安德森;卡雷尔·赖兹;托尼·理查森
czech_new_wave|捷克斯洛伐克新浪潮|Czechoslovak New Wave|${film}|1963|1970|捷克斯洛伐克|在政治与文化松动中结合讽刺、非职业演员和大胆形式实验，作品来自捷克与斯洛伐克两地。|荒诞叙事,生活场景,实验剪辑|薇拉·希蒂洛娃;米洛斯·福尔曼;伊日·门泽尔;杜尚·哈纳克
cinema_novo|巴西新电影|Cinema Novo|${film}|1960|1975|巴西|从贫困、土地与政治现实出发，以低成本拍摄探索新的电影语言。|自然光,粗粝外景,政治寓言|格劳贝尔·罗恰;内尔松·佩雷拉·多斯桑托斯;鲁伊·格拉
third_cinema|第三电影|Third Cinema|${film}|1968|至今|阿根廷,古巴,玻利维亚|把电影作为反殖民与政治行动工具，形式往往跨越纪录、访谈和集体放映。|档案与访谈,直接诉求,集体制作|费尔南多·索拉纳斯;奥克塔维奥·赫蒂诺;萨拉·戈麦斯
iranian_new_wave|伊朗新浪潮|Iranian New Wave|${film}|1963|1980|伊朗|将社会观察、寓言和极简叙事结合，边界与后来的伊朗艺术电影并不完全相同。|非职业表演,现实地点,寓言结构|达里乌什·梅赫尔朱伊;苏赫拉布·沙希德-萨莱斯;芙茹·法罗赫扎德
hong_kong_new_wave|香港新浪潮|Hong Kong New Wave|${film}|1979|1990|中国香港|新一代导演以本地经验重塑类型片、社会现实和城市节奏。|密集都市,类型混合,快速节奏|许鞍华;徐克;谭家明
dogme_95|道格玛95|Dogme 95|${film}|1995|2005|丹麦,瑞典,法国|以宣言限制布光、道具和后期，强调现场拍摄；实际作品对规则的执行并不一致。|手持镜头,自然光,现场空间|拉斯·冯·提尔;托马斯·温特伯格;索伦·克拉格-雅各布森
neo_noir|新黑色电影|Neo-noir|${film}|1960|至今|美国,法国,中国香港|重新使用黑色电影的道德暧昧与城市暗影，并加入彩色、现代城市和新类型。|夜景反射,复杂阴影,暧昧角色|罗曼·波兰斯基;迈克尔·曼;柯蒂斯·汉森;王家卫
slow_cinema|慢电影|Slow Cinema|${film}|1970|至今|比利时,中国台湾,匈牙利,泰国|以长镜头、留白和持续观察改变观众对时间与空间的感受，是宽泛的评论标签。|长镜头,少剪辑,日常时间|香特尔·阿克曼;蔡明亮;贝拉·塔尔;阿彼察邦
essay_film|电影散文|Essay Film|${film}|1950|至今|法国,德国,英国|将旁白、档案、个人思考与影像并置，让电影呈现探索问题的过程。|旁白与文字,档案拼接,主观论述|克里斯·马克;阿涅斯·瓦尔达;哈伦·法罗基
`;
  const sourceURLs = {
    daguerreotype:['The Met · 摄影工艺','https://www.metmuseum.org/exhibitions/listings/2001/photography-processes-preservation-conservation'],
    calotype:['The Met · 摄影工艺','https://www.metmuseum.org/exhibitions/listings/2001/photography-processes-preservation-conservation'],
    cyanotype:['The Met · 美国早期摄影','https://www.metmuseum.org/exhibitions/the-new-art-american-photography-1839-1910'],
    albumen_print:['The Met · 摄影工艺','https://www.metmuseum.org/exhibitions/listings/2001/photography-processes-preservation-conservation'],
    stereoscopy:['The Met · 美国早期摄影','https://www.metmuseum.org/exhibitions/the-new-art-american-photography-1839-1910'],
    chronophotography:['The Met · 马雷的连续摄影','https://www.metmuseum.org/art/collection/search/265094'],
    autochrome:['美国国会图书馆 · Autochrome','https://www.loc.gov/collections/genthe/about-this-collection/'],
    photomontage:['The Met · Faking It','https://www.metmuseum.org/exhibitions/listings/2012/faking-it'],
    photogram:['The Met · 包豪斯摄影','https://www.metmuseum.org/press-releases/first-new-york-exhibition-to-focus-on-photography-and-the-bauhaus-experience-opens-june-5-2001-exhibitions'],
    surrealist_photography:['The Met · 超现实主义摄影','https://www.metmuseum.org/essays/photography-and-surrealism'],
    abstract_photography:['The Met · 包豪斯摄影','https://www.metmuseum.org/press-releases/first-new-york-exhibition-to-focus-on-photography-and-the-bauhaus-experience-opens-june-5-2001-exhibitions'],
    architecture_photography:['The Met · 摄影馆藏','https://www.metmuseum.org/about-the-met/collection-areas/photographs'],
    aerial_photography:['美国国会图书馆 · 摄影馆藏','https://www.loc.gov/photos/collections/'],
    macro_photography:['The Met · 摄影馆藏','https://www.metmuseum.org/about-the-met/collection-areas/photographs'],
    fashion_photography:['The Met · Richard Avedon','https://www.metmuseum.org/exhibitions/listings/2002/richard-avedon'],
    color_documentary:['美国国会图书馆 · FSA 彩色摄影','https://www.loc.gov/pictures/collection/fsac/'],
    environmental_portrait:['美国国会图书馆 · FSA 摄影','https://www.loc.gov/pictures/collection/fsa/fsa.html'],
    night_photography:['The Met · 摄影馆藏','https://www.metmuseum.org/about-the-met/collection-areas/photographs'],
    early_cinema:['BFI · 卢米埃尔兄弟的火车短片','https://www.bfi.org.uk/lists/10-great-films-set-train-stations'],
    trick_film:['BFI · 梅里爱与电影魔术','https://www.bfi.org.uk/resources-events-teachers/resources-teachers/sci-fi-classroom/film-1-sci-fi-silents-1901-1906'],
    silent_slapstick:['BFI · 基顿《将军号》','https://www.bfi.org.uk/features/general-greatest-comedy-all-time'],
    french_impressionist_cinema:['BFI · 1920 年代法国先锋电影','https://www.bfi.org.uk/lists/10-great-french-avant-garde-films-1920s'],
    surrealist_cinema:['BFI · 1920 年代法国先锋电影','https://www.bfi.org.uk/lists/10-great-french-avant-garde-films-1920s'],
    absolute_film:['德国电影门户 · Lichtspiel Opus 1','https://www.filmportal.de/film/lichtspiel-opus-1_e7d8bae145bb4b01a7a6218a8f903244'],
    city_symphony:['BFI · 城市交响电影','https://www.bfi.org.uk/features/where-begin-with-city-symphonies'],
    silhouette_animation:['BFI · 洛特·赖尼格的剪影动画','https://www.bfi.org.uk/features/lotte-reiniger-star-bethlehem'],
    poetic_realism:['BFI · 1930 年代法国电影','https://www.bfi.org.uk/lists/10-great-french-films-1930s'],
    classical_hollywood:['BFI · 经典好莱坞场面调度','https://www.bfi.org.uk/sight-and-sound/features/reflections-style-what-became-classical-hollywood-mise-en-scene'],
    technicolor_musical:['BFI · 十部特艺彩色电影','https://www.bfi.org.uk/lists/10-great-technicolor-films'],
    japanese_jidaigeki:['BFI · 日本时代剧','https://www.bfi.org.uk/features/where-begin-with-akira-kurosawa'],
    british_free_cinema:['BFI · 自由电影','https://shop.bfi.org.uk/free-cinema-3-dvd-box-set/'],
    czech_new_wave:['BFI · 捷克斯洛伐克新浪潮','https://www.bfi.org.uk/lists/10-great-slovak-new-wave-films'],
    cinema_novo:['BFI · 1960 年代革命电影','https://www.bfi.org.uk/lists/10-great-revolutionary-films-1960s'],
    third_cinema:['BFI · 1960 年代革命电影','https://www.bfi.org.uk/lists/10-great-revolutionary-films-1960s'],
    iranian_new_wave:['BFI · 《奶牛》与伊朗新浪潮','https://whatson.bfi.org.uk/Online/default.asp?BOparam%3A%3AWScontent%3A%3AloadArticle%3A%3Acontext_id=&BOparam%3A%3AWScontent%3A%3Apermalink=cow-2026'],
    hong_kong_new_wave:['BFI · 香港新浪潮','https://www.bfi.org.uk/features/century-chinese-cinema-introduction'],
    dogme_95:['BFI · 道格玛95','https://www.bfi.org.uk/features/where-begin-with-dogme-95'],
    neo_noir:['BFI · 新黑色电影','https://www.bfi.org.uk/features/la-confidential-curtis-hanson-influences'],
    slow_cinema:['BFI · 慢电影','https://www.bfi.org.uk/lists/10-great-slow-films'],
    essay_film:['BFI · 电影散文','https://www.bfi.org.uk/sight-and-sound/features/essay-film/'],
  };
  rows.trim().split('\n').forEach(line => {
    const [id,name,english,category,start,end,regions,summary,features,people]=line.split('|');
    window.ATLAS_STYLES.push({id,name,english,category,start:Number(start),end:end==='至今'?2026:Number(end),ongoing:end==='至今',regions:regions.split(','),summary,features:features.split(','),people:people.split(';'),source:id,motif:'lens',index:window.ATLAS_STYLES.length});
    window.ATLAS_SOURCES[id]=sourceURLs[id];
  });
  const histories = `
daguerreotype|1839 年达盖尔公开银版工艺后，细节丰富但不可直接复制的金属正像迅速用于肖像和城市记录。它属于摄影工艺，不能用一种色调概括。
calotype|塔尔博特在英国发展纸负片与正片工艺，一张负片可以得到多张照片；纸纤维与化学处理影响画面质感。
cyanotype|赫歇尔发明蓝晒工艺后，安娜·阿特金斯将海藻接触印相制作成图册，连接科学标本与视觉编排。
albumen_print|十九世纪中叶，蛋白相纸成为肖像、旅行和艺术摄影的重要复制方式；泛黄程度也受保存条件影响。
stereoscopy|十九世纪立体观看器与双目照片共同形成家用视觉娱乐，观众借两眼的视差感觉空间深度。
chronophotography|迈布里奇和马雷用不同装置拆解人和动物的运动，连续影像改变科学观察，也为电影研究提供线索。
autochrome|卢米埃尔兄弟的奥托克罗姆于 1907 年商品化。彩色淀粉颗粒让摄影师能在玻璃正片上保留颜色，但曝光较慢。
photomontage|一战后达达与构成主义实践者把报刊照片裁切重组，改变了摄影在政治宣传和现代平面设计中的作用。
photogram|不经镜头的感光成像早于现代艺术；二十世纪先锋艺术家将物体投影、透光与暗房偶然性变成独立作品。
surrealist_photography|超现实主义者在 1920 年代的巴黎广泛使用重曝、暗房操作与现成照片，使熟悉的物体显出梦境感。
abstract_photography|从科伯恩的涡旋照片到包豪斯实验，摄影师利用取景、失焦和反差寻找可独立于题材的形式关系。
architecture_photography|建筑照片既是记录与传播，也是带有选择的视觉论述；摄影师通过机位和光线决定建筑如何被理解。
aerial_photography|十九世纪中叶的气球照片开启航拍，随后飞机、测绘与战争技术推动其扩展；俯视角度让景观趋于图案化。
macro_photography|布洛斯费尔特以植物局部照片观察自然形态，后来科学、广告和艺术摄影都利用近距离成像重新认识尺度。
fashion_photography|二十世纪时尚杂志将服装展示从静态棚拍扩展到街道、叙事和动作；摄影师与造型、编辑协作塑造图像。
color_documentary|美国 FSA/OWI 1939—1944 年的彩色透明片记录劳动与战争动员，说明纪实摄影的色彩也承载社会信息。
environmental_portrait|纽曼等摄影师把肖像从中性背景移入人物的工作场所，以器物和空间提示其职业与社会身份。
night_photography|可携式相机、胶片和曝光技术的发展让摄影师能在夜间观察城市；霓虹、雨面和阴影成为重要叙事元素。
early_cinema|1895 年前后，早期短片常展示火车、工厂或街景。固定机位并不意味着没有设计；人群进出画面的节奏就是观看重点。
trick_film|梅里爱将舞台魔术转化为停机替换、叠印和手绘布景，证明电影可以创造现实中不存在的空间与事件。
silent_slapstick|默片喜剧通过表演者的身体动作与精密布置的场景制造笑点。全景镜头常让观众看清动作与空间关系。
french_impressionist_cinema|一战后法国电影人讨论电影自身的表达力，透过叠印、变焦、快速剪辑和主观视点表现心理经验。
surrealist_cinema|1920 年代法国的先锋电影利用不连续的事件和梦的逻辑。不同作品之间差异很大，不应把超现实主义化成固定滤镜。
absolute_film|鲁特曼、里希特与艾格林探索纯粹形状和运动的影像构成，作品更接近视觉音乐而非传统叙事。
city_symphony|1920 年代的城市交响电影以现代交通、劳动与休闲片段为材料，通过一天的时间结构和剪辑塑造城市节奏。
silhouette_animation|赖尼格在二十世纪初以关节式剪纸逐格动画制作长片，剪影的轮廓和景深层次成为叙事工具。代表影片是洛特·赖尼格《阿赫迈德王子历险记》（1926）。
poetic_realism|1930 年代法国电影将工人、港口和街道与摄影棚布景、抒情对白及宿命感结合；这是后来的电影史名称。
classical_hollywood|美国制片厂体系在二十世纪上半叶发展出连续性剪辑与清晰的叙事调度，但各类型片的视觉外观并不统一。
technicolor_musical|三色 Technicolor 和大型制片厂的布景、服装与舞蹈密切协作，形成 1930—50 年代歌舞片的色彩奇观。
japanese_jidaigeki|时代剧是日本历史题材的广义类型。沟口、黑泽和小林的构图与节奏各异，需要通过具体影片比较。
british_free_cinema|1956 年起英国“自由电影”放映活动提出更个人化的纪录片姿态，城市和工人阶级日常成为重要素材。可比较林赛·安德森《梦幻乐园》（1953）与卡雷尔·赖兹、托尼·理查森《妈妈不允许》（1956）。
czech_new_wave|1960 年代捷克斯洛伐克的捷克与斯洛伐克电影都参与新浪潮，实验荒诞叙事、非职业演员和现实场景，导演之间没有单一画风。可比较薇拉·希蒂洛娃《雏菊》（1966）与伊日·门泽尔《严密监视的列车》（1966）。
cinema_novo|巴西新电影将低成本摄影与关于饥饿、土地和国家身份的讨论相连；不同阶段由写实走向更强的寓言性。
third_cinema|1969 年索拉纳斯和赫蒂诺的宣言提出反殖民电影实践。它强调制作与放映的政治关系，不是一种固定镜头风格。
iranian_new_wave|1960—70 年代伊朗电影人以寓言、日常生活和形式简约开拓新语言，需与革命后的电影发展分开观察。
hong_kong_new_wave|1970 年代末，香港新导演将电视经验、真实城市和类型片实验带入电影，社会现实与奇幻动作并存。可从许鞍华《投奔怒海》（1982）与徐克早期作品比较不同方向。
dogme_95|丹麦导演在 1995 年提出“纯洁誓言”，限制布光、布景和后期制作；实际电影与宣言间存在距离。代表作品有托马斯·温特伯格《家宴》（1998）与拉斯·冯·提尔《白痴》（1998）。
neo_noir|新黑色电影借用旧黑色电影的罪案与道德暧昧，将色彩、现代建筑、霓虹和新的社会背景纳入夜景叙事。可用柯蒂斯·汉森《洛城机密》（1997）观察经典黑色电影元素的更新。
slow_cinema|“慢电影”是宽泛的评论用语，长镜头和少量事件会把观众的注意力转向持续的时间、声音和空间变化。贝拉·塔尔《撒旦探戈》（1994）是分析镜头时长与空间的重要例子。
essay_film|电影散文结合个人声音、文字、档案和观察，让影片在观看中提出问题；它与纪录片和实验电影常有交集。克里斯·马克《日月无光》（1983）可作为观看入口。
`;
  histories.trim().split('\n').forEach(line=>{const split=line.indexOf('|');window.ATLAS_HISTORY[line.slice(0,split)]=line.slice(split+1)});
  const english = `
daguerreotype|A unique silvered metal plate captures fine detail with a mirrorlike surface.|Introduced publicly in 1839, the daguerreotype spread through portraiture and city views; it is a process, not one uniform look.|reflective metal,minute detail,protective case|Louis Daguerre,Southworth and Hawes
calotype|A paper negative can yield several prints, with fibres softening fine detail.|Talbot developed the negative-positive paper process in Britain in the 1840s; the paper and chemistry shaped its appearance.|paper texture,soft edges,negative-positive process|William Henry Fox Talbot,David Octavius Hill,Robert Adamson
cyanotype|Iron salts produce blue-and-white contact images, famously used by Anna Atkins for botanical studies.|John Herschel devised the process; Atkins made plant contact prints into an influential photographic book.|Prussian blue,white silhouettes,contact printing|Anna Atkins,John Herschel
albumen_print|An egg-white coating allowed nineteenth-century photographs to be reproduced with a fine, often warm-toned surface.|Albumen prints became common in portraiture and travel images; present colour also depends on ageing and care.|warm tones,fine surface,mounted paper|Louis-Désiré Blanquart-Evrard,Julia Margaret Cameron
stereoscopy|Paired photographs create a sense of depth when seen through a viewer.|Nineteenth-century stereocards made distant places and events a domestic visual experience.|paired views,parallax,spatial depth|Charles Wheatstone,Oliver Wendell Holmes,Underwood & Underwood
chronophotography|Sequential frames break motion into analysable phases.|Muybridge and Marey used different camera systems to study movement, influencing visual science and early cinema.|repeated poses,time slices,gridded sequences|Eadweard Muybridge,Étienne-Jules Marey
autochrome|Coloured starch grains give early glass transparencies a soft, granular palette.|Marketed in 1907, the Lumière process preserved colour on glass but required relatively long exposure.|soft colour,fine grains,translucent glass|Auguste and Louis Lumière,Arnold Genthe,Heinrich Kühn
photomontage|Cut photographs are recombined to build critique, propaganda or unexpected narratives.|After the First World War, Dada and Constructivist makers used press images as raw material for new compositions.|cut edges,clashing scale,image and text|Hannah Höch,John Heartfield,Alexander Rodchenko
photogram|Objects placed directly on photosensitive material leave camera-less light traces.|Twentieth-century avant-garde artists turned contact printing, transparency and darkroom chance into independent works.|silhouettes,translucent layers,reversed tones|Christian Schad,Man Ray,László Moholy-Nagy
surrealist_photography|Darkroom experiments and uncanny combinations make familiar objects strange.|Surrealists in 1920s Paris used double exposure, solarisation and found photographs to explore dreamlike perception. They also reinterpreted Atget's documentary photographs; Atget was not a movement member.|double exposure,distorted scale,darkroom effects|Man Ray,Dora Maar,Maurice Tabard,Eugène Atget (reinterpreted by the movement)
abstract_photography|Light, crop and form can matter more than naming the object depicted.|From Coburn's Vortographs and Strand's shadow studies to Bauhaus experiments, photographers explored photography as an independent formal language.|close cropping,geometric shadows,visual rhythm|Alvin Langdon Coburn,Paul Strand,László Moholy-Nagy,Aaron Siskind
architecture_photography|Camera position, perspective and light communicate a building's structure and use.|Architectural images both document and interpret space; photographers choose what part of a building viewers encounter.|perspective lines,scale reference,façade and interior|Eugène Atget,Berenice Abbott,Ezra Stoller
aerial_photography|An elevated viewpoint reveals patterns in landscapes and cities.|Balloon photographs began in the nineteenth century; aircraft, surveying and war expanded aerial imaging.|overhead view,terrain texture,maplike composition|Nadar,George Lawrence,Margaret Bourke-White
macro_photography|Close views of plants turn structure, repetition and texture into the subject.|Blossfeldt's studies helped make botanical detail a visual resource for art and design.|repeated forms,enlarged details,shallow focus|Karl Blossfeldt,Berenice Abbott,Robert Mapplethorpe
fashion_photography|Clothing, bodies, pose and setting work together to communicate fashion.|Twentieth-century magazines expanded fashion images from studio display into narrative, motion and location work.|pose and garment,controlled light,editorial story|Edward Steichen,Richard Avedon,Irving Penn
color_documentary|Colour records social settings through clothing, signs, labour and everyday environments.|The FSA and OWI made colour transparencies in 1939–44, showing that documentary colour can itself carry evidence.|observed colour,environmental detail,serial narrative|Jack Delano,Esther Bubley,Susan Meiselas
environmental_portrait|A subject's workplace or home becomes part of the portrait.|Arnold Newman and others used objects and settings to suggest work, identity and social context.|figure and setting,context clues,meaningful props|Arnold Newman,Dorothea Lange,August Sander
night_photography|Streetlamps, shop windows and long exposure structure views of city life after dark.|Portable cameras, film and exposure techniques opened the night city to sustained photographic observation.|low light,long exposure,points of light|Brassaï,Bill Brandt,Daido Moriyama
early_cinema|Short films recorded stations, streets and everyday movement.|Around 1895, early cinema often used a fixed camera; action moving through the frame supplied its rhythm.|fixed camera,single scene,people in motion|Auguste and Louis Lumière,Alice Guy-Blaché,Robert W. Paul
trick_film|Camera substitutions and painted sets turn stage magic into screen spectacle.|Méliès and contemporaries used stopped-camera effects, superimposition and theatrical design to invent impossible events.|substitution cuts,painted sets,multiple exposure|Georges Méliès,Segundo de Chomón,Walter R. Booth
silent_slapstick|Bodies, props and spatial timing carry comedy without spoken dialogue.|Silent comics carefully arranged action within the frame; a wider view often lets the audience grasp the whole gag.|full-body action,chases,linked props|Charlie Chaplin,Buster Keaton,Mabel Normand
french_impressionist_cinema|Subjective views and rhythmic editing turn perception into visual form.|After the First World War, French filmmakers explored superimposition and optical effects to express psychological experience.|subjective camera,superimposition,optical distortion|Louis Delluc,Jean Epstein,Germaine Dulac
surrealist_cinema|Dream logic and abrupt juxtapositions challenge conventional stories.|French avant-garde film in the 1920s experimented with discontinuity; no single visual filter defines the movement.|dream logic,sudden transitions,symbolic objects|Luis Buñuel,Salvador Dalí,Germaine Dulac
absolute_film|Geometry and movement become the subject of the film itself.|Ruttmann, Richter and Eggeling explored abstract moving forms as visual music rather than character-driven narrative.|moving geometry,changing rhythm,non-narrative form|Walter Ruttmann,Hans Richter,Viking Eggeling
city_symphony|Edited city fragments make an urban portrait across a day.|1920s city symphonies assembled transport, labour and leisure into rhythmic structures between documentary and avant-garde film.|urban cutting,transport and crowds,time-of-day structure|Walter Ruttmann,Dziga Vertov,Paul Strand
silhouette_animation|Jointed paper figures move frame by frame through layered stage-like worlds.|Lotte Reiniger's The Adventures of Prince Achmed (1926) is a key work for studying the silhouette's contours and layered depth.|paper silhouettes,stop-motion movement,layered sets|Lotte Reiniger,Berthold Bartosch
poetic_realism|Everyday people inhabit lyrical yet fatalistic street and studio settings.|French cinema of the 1930s joined working lives, atmospheric sets and sombre narratives; the term was applied retrospectively.|fog and streets,soft dark lighting,fatalistic stories|Marcel Carné,Jean Renoir,Jean Vigo
classical_hollywood|Continuity editing and clear staging organise popular screen stories.|The studio system developed reliable narrative techniques in the first half of the twentieth century, across many different genres and looks.|continuity cuts,clear framing,cause-and-effect plot|John Ford,Howard Hawks,Michael Curtiz
technicolor_musical|Saturated colour, sets and dance work together as spectacle.|Three-strip Technicolor and studio production aligned costumes, set design and choreography in musicals of the 1930s–50s.|saturated colour,stage-like sets,choreographed camera|Vincente Minnelli,Michael Powell,Stanley Donen
japanese_jidaigeki|Historical settings and action staging shape diverse Japanese period dramas.|Jidaigeki is a broad historical genre; compare specific films rather than treating Mizoguchi and Kurosawa as one look.|period costume,group blocking,action axes|Kenji Mizoguchi,Akira Kurosawa,Masaki Kobayashi
british_free_cinema|Personal documentary observation focuses on ordinary and working-class lives.|Free Cinema screenings began in 1956. Compare Lindsay Anderson's O Dreamland (1953) with Karel Reisz and Tony Richardson's Momma Don't Allow (1956).|street observation,handheld camera,ordinary details|Lindsay Anderson,Karel Reisz,Tony Richardson
czech_new_wave|Satire, non-professional actors and formal play unsettle ordinary stories.|Czech and Slovak filmmakers experimented during the 1960s political thaw. Compare Věra Chytilová's Daisies (1966) with Jiří Menzel's Closely Watched Trains (1966).|absurd situations,everyday locations,experimental editing|Věra Chytilová,Miloš Forman,Jiří Menzel,Dušan Hanák
cinema_novo|Low-budget filmmaking addresses poverty, land and national identity.|Brazilian Cinema Novo linked location shooting to political debates and later developed more allegorical forms.|natural light,rough locations,political allegory|Glauber Rocha,Nelson Pereira dos Santos,Ruy Guerra
third_cinema|Film becomes an anti-colonial political practice, often shown collectively.|Solanas and Getino's 1969 manifesto concerned production and exhibition as much as screen form; it is not a fixed camera style.|archives and interviews,direct address,collective production|Fernando Solanas,Octavio Getino,Sara Gómez
iranian_new_wave|Social observation, allegory and spare storytelling reshape Iranian cinema.|Filmmakers in the 1960s–70s developed new languages distinct from, though connected to, later Iranian art cinema.|non-professional actors,real locations,allegorical structure|Dariush Mehrjui,Sohrab Shahid Saless,Forough Farrokhzad
hong_kong_new_wave|A younger generation recasts genres through local life and urban energy.|From the late 1970s, directors brought television experience and location shooting into social drama and inventive genre films. Ann Hui's Boat People (1982) offers one entry point.|dense city scenes,mixed genres,rapid rhythm|Ann Hui,Tsui Hark,Patrick Tam
dogme_95|A manifesto limits lighting, props and post-production to foreground on-location filmmaking.|Danish filmmakers proposed the Vow of Chastity in 1995. Thomas Vinterberg's Festen and Lars von Trier's The Idiots (both 1998) are key works.|handheld shots,available light,real locations|Lars von Trier,Thomas Vinterberg,Søren Kragh-Jacobsen
neo_noir|Modern cities and colour renew noir's crime stories and moral ambiguity.|Neo-noir borrows from earlier noir while using new urban settings and colour. Curtis Hanson's L.A. Confidential (1997) makes those borrowings visible.|night reflections,complex shadows,ambiguous characters|Roman Polanski,Michael Mann,Curtis Hanson,Wong Kar-wai
slow_cinema|Long takes and sparse events make the passage of time felt.|Slow cinema is a broad critical label. Béla Tarr's Sátántangó (1994) provides a concrete case for studying shot duration and space.|long takes,few cuts,everyday duration|Chantal Akerman,Tsai Ming-liang,Béla Tarr,Apichatpong Weerasethakul
essay_film|Voice, archive and observation develop an argument on screen.|Essay films combine personal reflection with documentary and experimental forms. Chris Marker's Sans soleil (1983) is a useful starting point.|voice and text,archival montage,subjective inquiry|Chris Marker,Agnès Varda,Harun Farocki
`;
  english.trim().split('\n').forEach(line=>{
    const [id,summary,context,clues,people]=line.split('|');
    window.ATLAS_EN[id]={summary,context,clues:clues.split(','),people:people.split(',')};
  });
})();
