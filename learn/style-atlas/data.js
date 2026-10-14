/* 教学用索引：年代为大致活跃期；地域为起源或重要发展地，并非唯一归属。 */
window.ATLAS_SOURCES = {
  moma: ['MoMA · 艺术术语', 'https://www.moma.org/collection/terms/'],
  met: ['大都会艺术博物馆 · 艺术史', 'https://www.metmuseum.org/toah/'],
  va: ['V&A · 艺术与设计', 'https://www.vam.ac.uk/articles/'],
  tate: ['Tate · 艺术术语', 'https://www.tate.org.uk/art/art-terms'],
  artnouveau: ['V&A · 新艺术运动', 'https://www.vam.ac.uk/articles/art-nouveau-an-international-style'],
  artdeco: ['V&A · 装饰艺术', 'https://www.vam.ac.uk/articles/an-introduction-to-art-deco'],
  rococo: ['大都会 · 洛可可', 'https://www.metmuseum.org/toah/hd/roco/hd_roco.htm'],
  rinpa: ['大都会 · 琳派', 'https://www.metmuseum.org/ja/essays/rinpa-painting-style'],
  edo: ['大都会 · 江户绘画', 'https://www.metmuseum.org/exhibitions/listings/2014/edo-period-painting'],
  islamic: ['大都会 · 伊斯兰几何纹样', 'https://www.metmuseum.org/pt/essays/geometric-patterns-in-islamic-art'],
  mughal: ['大都会 · 莫卧儿画派作品', 'https://www.metmuseum.org/art/collection/search/825585'],
  rajput: ['大都会 · 拉杰普特宫廷绘画', 'https://www.metmuseum.org/exhibitions/listings/2011/lyrical-visions'],
  cubism: ['MoMA · 立体主义', 'https://www.moma.org/collection/terms/cubism'],
  dada: ['MoMA · 达达', 'https://www.moma.org/collection/terms/dada'],
  futurism: ['MoMA · 未来主义', 'https://www.moma.org/collection/terms/futurism'],
  suprematism: ['MoMA · 至上主义', 'https://www.moma.org/collection/terms/suprematism'],
  destijl: ['MoMA · 风格派', 'https://www.moma.org/collection/terms/de-stijl'],
  orphism: ['MoMA · 俄耳甫斯主义', 'https://www.moma.org/collection/terms/orphism'],
  western_desert: ['澳大利亚国家美术馆 · 西部沙漠绘画', 'https://nga.gov.au/stories-ideas/mantua-nangala/'],
  abex: ['MoMA · 抽象表现主义', 'https://www.moma.org/collection/terms/abstract-expressionism']
};

// id | 中文名 | 英文/原文 | 分类 | 起年 | 迄年 | 关联地域 | 一句话 | 可观察特征 | 代表人物/实践者 | 资料入口 | 视觉示意类型
const rows = `
gothic|哥特式|Gothic|建筑与设计|1140|1500|法国,英国,德国|从中世纪教堂发展出的垂直、透光的建筑语言，后来也影响书籍和装饰。|尖拱,肋拱与飞扶壁,彩色玻璃|苏热;皮埃尔·德·蒙特勒伊|met|arch
renaissance|文艺复兴|Renaissance|历史艺术|1400|1600|意大利,法国,德国|借古典研究重新组织人体、空间与叙事，透视法成为重要工具。|线性透视,人体比例,古典秩序|列奥纳多·达·芬奇;拉斐尔|met|perspective
mannerism|矫饰主义|Mannerism|历史艺术|1520|1600|意大利,法国|延长比例并制造不稳定的空间与姿态，显示有意为之的复杂性。|拉长的人体,紧张姿势,非自然色彩|蓬托尔莫;帕尔米贾尼诺|met|figure
baroque|巴洛克|Baroque|历史艺术|1600|1750|意大利,荷兰,西班牙|通过戏剧化光线、运动与尺度调动观看者的情绪。|强明暗,斜线动势,宏大叙事|卡拉瓦乔;贝尔尼尼;伦勃朗|met|dramatic
rococo|洛可可|Rococo|历史艺术|1720|1780|法国,德国|从宫廷室内与绘画兴起，以轻盈、精巧和曲线装饰见长。|贝壳曲线,粉彩,不对称装饰|华托;布歇;弗拉戈纳尔|rococo|ornate
neoclassicism|新古典主义|Neoclassicism|历史艺术|1750|1830|法国,意大利,英国|借古希腊罗马形式表达秩序、理性与公共理想。|清晰轮廓,柱式,克制配色|雅克-路易·大卫;安东尼奥·卡诺瓦|met|columns
romanticism|浪漫主义|Romanticism|历史艺术|1780|1850|英国,法国,德国|强调情感、想象与自然的崇高感，回应理性化的时代。|激烈天气,强烈情绪,自由笔触|德拉克洛瓦;特纳;卡斯帕·大卫·弗里德里希|met|landscape
realism|现实主义|Realism|历史艺术|1840|1880|法国,英国|将日常劳动和当代生活带入原本属于历史画的视野。|普通人物,直接观察,少理想化|库尔贝;米勒|met|figure
preraphaelite|拉斐尔前派|Pre-Raphaelite Brotherhood|历史艺术|1848|1900|英国|以细密自然观察、文学主题与鲜明色彩回应学院派惯例。|清晰细节,中世纪题材,宝石般色彩|约翰·埃弗里特·米莱;但丁·加百列·罗塞蒂|tate|botanic
arts_crafts|工艺美术运动|Arts and Crafts|建筑与设计|1860|1910|英国,美国|重新重视手工、材料和日常物件的设计质量。|植物纹样,手工痕迹,材料诚实|威廉·莫里斯;约翰·拉斯金|va|botanic
impressionism|印象派|Impressionism|历史艺术|1870|1890|法国|捕捉自然光和瞬间视觉经验，画面保留可见笔触。|破碎笔触,户外光色,日常场景|莫奈;雷诺阿;贝尔特·莫里索|met|light
post_impressionism|后印象派|Post-Impressionism|历史艺术|1886|1905|法国,荷兰|并非统一画派；艺术家分别探索结构、情感与象征色彩。|主观用色,结构化画面,个人笔触|梵高;塞尚;高更|tate|brush
pointillism|点彩派|Neo-Impressionism|历史艺术|1886|1910|法国,比利时|以分离色点和色彩理论组织画面，又称新印象主义。|细小色点,光学混色,严谨布局|修拉;保罗·西涅克|moma|dots
symbolism|象征主义|Symbolism|历史艺术|1880|1910|法国,比利时,挪威|用神话、梦境与暗示表达内在经验。|神秘叙事,象征物,非自然氛围|奥迪隆·雷东;古斯塔夫·莫罗;爱德华·蒙克|tate|dream
art_nouveau|新艺术运动|Art Nouveau|建筑与设计|1890|1914|法国,比利时,英国,奥地利|把植物曲线融入海报、家具、建筑和装饰艺术。|鞭形曲线,花卉,整体设计|阿尔丰斯·穆夏;维克多·奥塔;赫克托·吉马尔|artnouveau|vine
vienna_secession|维也纳分离派|Vienna Secession|建筑与设计|1897|1914|奥地利|跨越绘画、建筑和出版物，追求与旧体制分离的现代形式。|几何边框,金色,平面装饰|古斯塔夫·克里姆特;约瑟夫·霍夫曼|va|gold
fauvism|野兽派|Fauvism|现代艺术运动|1905|1910|法国|以不依赖真实光照的高饱和色组织情绪与空间。|大胆纯色,简化形体,强烈对比|马蒂斯;安德烈·德兰|moma|color
expressionism|表现主义|Expressionism|现代艺术运动|1905|1930|德国,奥地利|以变形、用色和笔触传达主观情感。|夸张变形,情绪色彩,粗粝线条|恩斯特·路德维希·基希纳;康定斯基|moma|brush
cubism|立体主义|Cubism|现代艺术运动|1907|1920|法国,西班牙|拆解单一视点，把不同角度的物体压进同一画面。|多视角,几何切面,拼贴|毕加索;乔治·布拉克;胡安·格里斯|cubism|facets
futurism|未来主义|Futurism|现代艺术运动|1909|1944|意大利|歌颂现代速度与技术，尝试在静态图像中表现运动。|重复轮廓,速度线,机械动势|翁贝托·薄丘尼;贾科莫·巴拉|futurism|speed
suprematism|至上主义|Suprematism|现代艺术运动|1913|1930|俄罗斯|以基本几何与有限色彩探索非具象表达。|方形与圆形,白色空间,少量纯色|卡济米尔·马列维奇;奥尔加·罗扎诺娃|suprematism|blocks
constructivism|构成主义|Constructivism|现代艺术运动|1915|1935|俄罗斯|强调艺术参与社会生产，形成富力量感的排版和结构。|斜线构图,红黑配色,摄影蒙太奇|亚历山大·罗琴科;柳博芙·波波娃|moma|diagonal
destijl|风格派|De Stijl|现代艺术运动|1917|1932|荷兰|将造型还原为水平、垂直、原色和非对称平衡。|黑色网格,红黄蓝,矩形关系|蒙德里安;特奥·凡·杜斯堡|destijl|grid
dada|达达|Dada|现代艺术运动|1916|1925|瑞士,德国,法国,美国|以偶然、现成品和拼贴挑战传统艺术的边界。|文字拼贴,荒诞并置,现成品|杜尚;汉娜·赫希;特里斯坦·查拉|dada|collage
bauhaus|包豪斯|Bauhaus|建筑与设计|1919|1933|德国|将艺术、工艺与工业生产放在同一教学实验中。|基础形,功能结构,材料实验|瓦尔特·格罗皮乌斯;保罗·克利;安妮·阿尔伯斯|va|blocks
art_deco|装饰艺术|Art Deco|建筑与设计|1920|1940|法国,美国,英国|将几何装饰、奢华材质与现代都市想象结合。|阶梯轮廓,放射纹,金属光泽|让·杜南;埃尔泰;威廉·凡·阿伦|artdeco|sunburst
surrealism|超现实主义|Surrealism|现代艺术运动|1924|1960|法国,西班牙,比利时|借梦境、潜意识和不合逻辑的组合重新组织现实。|梦境场景,异物并置,奇异尺度|达利;马格利特;多萝西娅·坦宁|moma|dream
new_objectivity|新客观主义|Neue Sachlichkeit|现代艺术运动|1920|1933|德国|以冷静、尖锐的具象语言观察魏玛时期社会。|硬朗轮廓,社会讽刺,清晰细节|奥托·迪克斯;乔治·格罗兹|tate|figure
harlem_renaissance|哈莱姆文艺复兴|Harlem Renaissance|现代艺术运动|1920|1940|美国|非裔美国艺术家在文学、音乐与视觉艺术中建立新的文化表达。|城市生活,肖像,跨媒介节奏|阿隆·道格拉斯;奥古斯塔·萨维奇|met|silhouette
mexican_muralism|墨西哥壁画运动|Mexican Muralism|现代艺术运动|1920|1970|墨西哥|以公共壁画叙述历史、劳动与社会议题。|巨幅叙事,公共空间,有力人物|迭戈·里维拉;何塞·克莱门特·奥罗斯科;大卫·阿尔法罗·西凯罗斯|moma|mural
international_style|国际主义平面设计|International Typographic Style|建筑与设计|1950|1980|瑞士,德国,美国|用网格、无衬线字和清晰层级组织现代信息设计。|严格网格,左对齐,非对称留白|约瑟夫·米勒-布罗克曼;阿明·霍夫曼|va|typography
brutalism|粗野主义建筑|Brutalism|建筑与设计|1950|1980|英国,法国,日本|突出体量、结构和材料的直接表达，常见清水混凝土。|裸露混凝土,雕塑体块,重复模块|勒·柯布西耶;艾莉森与彼得·史密森|va|concrete
abstract_expressionism|抽象表现主义|Abstract Expressionism|现代艺术运动|1943|1960|美国|战后纽约艺术家以大尺幅、动作或色域探索抽象绘画。|巨大画幅,身体动作,非具象|杰克逊·波洛克;李·克拉斯纳;马克·罗斯科|abex|gesture
color_field|色域绘画|Color Field Painting|现代艺术运动|1950|1975|美国|以大面积色彩关系营造沉浸的观看经验。|大色块,边界变化,低叙事性|马克·罗斯科;海伦·弗兰肯塔勒|moma|fields
op_art|欧普艺术|Op Art|现代艺术运动|1960|1975|英国,法国,美国|利用重复几何和强对比制造视觉震动或运动错觉。|条纹重复,黑白对比,视错觉|布里奇特·莱利;维克多·瓦萨雷里|moma|optical
pop_art|波普艺术|Pop Art|现代艺术运动|1955|1975|英国,美国|把广告、漫画和大众消费图像带入艺术创作。|鲜亮色彩,复制图像,商业符号|安迪·沃霍尔;罗伊·利希滕斯坦;理查德·汉密尔顿|moma|pop
minimalism|极简主义|Minimalism|现代艺术运动|1960|1980|美国|以重复、标准化形体及作品与空间的关系提出问题。|简单几何,重复模块,工业材料|唐纳德·贾德;艾格尼丝·马丁|moma|minimal
conceptual_art|观念艺术|Conceptual Art|现代艺术运动|1960|1985|美国,英国|作品的观念、文本或指令可能比可见物件更核心。|语言作为材料,档案,执行规则|索尔·勒维特;约瑟夫·科苏斯;小野洋子|tate|text
arte_povera|贫穷艺术|Arte Povera|现代艺术运动|1967|1980|意大利|使用土、布、石等非传统材料质疑商品与精英艺术。|日常材料,自然过程,装置现场|米开朗基罗·皮斯托莱托;扬尼斯·库奈利斯|tate|material
photorealism|照相写实主义|Photorealism|现代艺术运动|1968|1990|美国|依据摄影图像，以高度精细的绘画再现机械观看。|照片裁切,反射表面,精密细节|查克·克洛斯;理查德·埃斯蒂斯|moma|lens
neo_expressionism|新表现主义|Neo-Expressionism|现代艺术运动|1975|1995|德国,美国,意大利|重新强调具象、厚重笔触与历史和身份的个人叙事。|粗放笔触,大幅具象,不安情绪|乔治·巴塞利兹;让-米歇尔·巴斯奎特|tate|brush
memphis|孟菲斯设计|Memphis Design|建筑与设计|1981|1988|意大利|以鲜艳塑料、图案与玩笑式造型挑战功能主义的严肃感。|撞色,几何图案,不规则组合|埃托雷·索特萨斯;娜塔莉·杜·帕斯基耶|va|memphis
psychedelic|迷幻海报|Psychedelic Poster|建筑与设计|1965|1975|美国,英国|与音乐和反文化相关，以难读却强烈的字形营造感官体验。|流动字体,高对比色,密集装饰|韦斯·威尔逊;维克多·莫斯科索|va|waves
grunge_type|粗粝字体设计|Grunge Typography|建筑与设计|1990|2005|美国,英国|把扫描、破损与层叠痕迹带入数码时代的编辑设计。|破碎字形,叠印,低保真质感|大卫·卡森;内维尔·布罗迪|va|collage
postmodern_graphics|后现代平面设计|Postmodern Graphic Design|建筑与设计|1970|2000|美国,英国,意大利|质疑单一理性网格，借用历史符号并鼓励多义阅读。|混合字体,挪用,复杂层次|艾普丽尔·格雷曼;保拉·谢尔|va|collage
pictorialism|画意摄影|Pictorialism|摄影与影像|1885|1920|美国,英国,法国|早期摄影师通过柔焦和暗房工艺争取摄影的艺术地位。|柔焦,手工印相,诗意氛围|爱德华·斯泰肯;格特鲁德·凯瑟比尔|met|soft
new_vision|新视觉摄影|New Vision Photography|摄影与影像|1920|1940|德国,俄罗斯|运用俯仰角度、近摄与暗房实验拓展机器视觉。|极端视角,锐利几何,摄影拼贴|拉斯洛·莫霍利-纳吉;亚历山大·罗琴科|moma|lens
new_topographics|新地形摄影|New Topographics|摄影与影像|1975|1990|美国|以看似中性的视角记录被人类改变的普通地景。|平视构图,人造地景,系列观看|罗伯特·亚当斯;刘易斯·巴尔茨|moma|landscape
ukiyoe|浮世绘|Ukiyo-e|地域绘画传统|1650|1900|日本|江户时期的绘画与木版画，描绘戏剧、都市生活和名所。|平面色块,大胆裁切,轮廓线|葛饰北斋;歌川广重;喜多川歌麿|edo|wave
rinpa|琳派|Rinpa|地域绘画传统|1600|1900|日本|以自然母题、金银地和装饰性概括连接绘画与工艺。|花草重复,金箔背景,大胆留白|俵屋宗达;尾形光琳;酒井抱一|rinpa|botanic
nihonga|日本画|Nihonga|地域绘画传统|1880|至今|日本|近代日本对传统材料与绘画身份的重新组织，并非单一古代画派。|矿物颜料,纸绢媒介,传统与现代并置|横山大观;上村松园|rinpa|ink
sumi_e|水墨画|Ink Wash Painting|地域绘画传统|1100|至今|中国,日本,韩国|用水、墨和笔势形成层次；各地的发展脉络不同。|墨色层次,运笔,留白|牧谿;雪舟等杨|met|ink
shanshui|山水画|Shanshui|地域绘画传统|600|至今|中国|以山川构建可游、可居、可思的空间，不等同于西方风景画。|散点观看,皴法,题跋|范宽;郭熙;黄公望|met|landscape
literati|文人画|Literati Painting|地域绘画传统|1000|至今|中国|强调诗书画印与个人笔墨修养，作品也承载交往和思想。|笔墨趣味,题跋,诗书画结合|苏轼;倪瓒;董其昌|met|ink
gongbi|工笔画|Gongbi|地域绘画传统|600|至今|中国|以细致线描和层层设色描绘人物、花鸟与器物。|精细线条,层染,工整形象|顾恺之;宋徽宗赵佶|met|botanic
minhwa|民画|Minhwa|地域绘画传统|1700|1900|韩国|朝鲜后期流行的民间图像，常承载吉祥愿望与生活趣味。|虎与鹊,吉祥图案,明快色彩|姓名未详的民间画师|met|folk
dansekhwa|单色画|Dansaekhwa|现代艺术运动|1970|至今|韩国|韩国艺术家借重复劳动、物质表面和单色探索绘画过程。|反复笔触,物质肌理,低饱和色|朴栖甫;河钟贤;郑相和|tate|material
mughal|莫卧儿细密画|Mughal Painting|地域绘画传统|1550|1850|印度|宫廷绘画融合波斯与南亚传统，常记录人物、自然与史事。|细密肖像,精致植物,宫廷叙事|巴萨旺;达斯旺特;乌斯塔德·曼苏尔|mughal|miniature
rajput|拉杰普特宫廷绘画|Rajput Painting|地域绘画传统|1500|1900|印度|北印度多个宫廷的画派群，常表现史诗、情感与音乐主题。|鲜明平面色,叙事分格,宫廷场景|尼哈尔·昌德;萨希卜丁|rajput|miniature
persian_miniature|波斯细密画|Persian Miniature|地域绘画传统|1300|1700|伊朗|书籍绘画以细密线条、复杂建筑与诗歌叙事组织空间。|多层空间,细线纹样,手稿叙事|比赫扎德;礼萨·阿巴西|met|miniature
islamic_geometry|伊斯兰几何纹样|Islamic Geometric Patterns|建筑与设计|800|至今|伊朗,土耳其,摩洛哥,西班牙|跨地域工艺传统，以网格生成重复而变化的几何图案。|星形网格,平铺,对称变换|历史工匠群体;吉里赫纹样设计者|islamic|geometry
ebru|埃布鲁水拓画|Ebru / Abru|地域绘画传统|1500|至今|土耳其,伊朗|在水面形成彩色纹理再转印至纸，广见于书籍装帧。|流动花纹,水面转印,单张独特|土耳其与波斯书籍工匠群体;内杰梅丁·奥克亚伊|met|marble
adinkra|阿丁克拉符号|Adinkra|建筑与设计|1800|至今|加纳|阿散蒂等社群在纺织与视觉传达中使用具寓意的符号。|符号重复,印染,寓意图形|阿散蒂印布工匠群体|met|symbols
kente|肯特织布|Kente|建筑与设计|1700|至今|加纳|阿散蒂与埃维社群的织布传统，图案与色彩具有社会语境。|窄幅拼接,条纹格纹,鲜明配色|阿散蒂与埃维织工群体|met|woven
ndebele|恩德贝勒壁画|Ndebele Mural Painting|地域绘画传统|1900|至今|南非|由南非恩德贝勒女性延续并发展的家屋彩绘传统。|几何色块,外墙构图,黑色边线|埃丝特·马兰古;恩德贝勒女性画师群体|met|grid
aboriginal_dot|澳大利亚西部沙漠绘画|Western Desert Painting|地域绘画传统|1971|至今|澳大利亚|以社区和土地知识为背景发展的当代原住民绘画；点描只是其中一种方法。|点与线,地景关系,文化语境|克利福德·波森·贾帕尔贾里;帕潘亚艺术家群体|western_desert|dots
vaporwave|蒸汽波视觉|Vaporwave Visuals|当代视觉语言|2010|至今|美国,日本|网络音乐与图像文化衍生的视觉标签，常挪用旧数码和消费图像。|粉紫渐变,旧电脑图形,拼贴怀旧|跨网络创作者群体|moma|retro
cyberpunk|赛博朋克视觉|Cyberpunk Visuals|当代视觉语言|1980|至今|美国,日本|由科幻文学与影像扩散的未来都市视觉，不是单一艺术运动。|高密度城市,霓虹夜景,技术义肢|雷德利·斯科特;押井守;席德·米德|moma|neon
y2k|Y2K 视觉|Y2K Aesthetic|当代视觉语言|1997|2005|美国,日本,英国|千禧年前后数码产品、时尚与互联网共同塑造的视觉集合。|金属与塑料,泡泡字体,亮面渐变|跨领域设计师与数码品牌团队|va|chrome
retro_futurism|复古未来主义|Retro-futurism|当代视觉语言|1960|至今|美国,英国,日本|用过去对未来的想象来设计今天的图像，需说明引用的具体年代。|旧式机器想象,太空意象,年代拼接|席德·米德;雷蒙德·洛伊|va|retro
editorial_minimal|当代编辑式极简|Editorial Minimalism|当代视觉语言|2000|至今|跨地域|宽泛的设计取向；应具体说明字级、留白、网格和材质。|大留白,克制字体,少量重点色|跨地域编辑设计师群体|va|typography
cinematic_visual|电影感视觉|Cinematic Visual Language|当代视觉语言|1920|至今|跨地域|跨时代的视觉描述词，需拆解为镜头、光比、色调与叙事。|景别与构图,光比,色彩分级|格雷格·托兰;王家卫;克里斯托弗·道尔|moma|lens
`;

window.ATLAS_STYLES = rows.trim().split('\n').map((line, index) => {
  const [id, name, english, category, start, end, regions, summary, features, people, source, motif] = line.split('|');
  return { id, name, english, category, start: Number(start), end: end === '至今' ? 2026 : Number(end), ongoing: end === '至今', regions: regions.split(','), summary, features: features.split(','), people: people.split(';'), source, motif, index };
});
