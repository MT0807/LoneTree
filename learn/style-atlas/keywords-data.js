/* 来自公开作品说明的观察词，不等同于历史流派名称；展出的图片另有独立作品来源。 */
(() => {
  const notes = [];
  const add = (creator, lines) => {
    lines.trim().split('\n').forEach(line => {
      const [id, name, english, kind, clues, cluesEn, related] = line.split('|');
      notes.push({id, name, english, kind, clues:clues.split(','), cluesEn:cluesEn.split(','), related:related ? related.split(',') : [], creator});
    });
  };

  add('贰贰Yara_', `
folk_illustration|复古民艺插画|Folk Art Illustration|视觉方向|稚拙手绘,朴拙造型,自然纹理|naive drawing,simplified forms,natural texture|arts_crafts,minhwa
colorful_geometric_collage|彩色几何拼贴|Colorful Geometric Collage|海报做法|高饱和撞色,几何图形,重复图案|saturated contrast,geometry,repeated pattern|memphis,postmodern_graphics
playful_typography|趣味手写字海报|Playful Typography Poster|海报做法|夸张字形,手写字,自由排版|expressive letters,hand lettering,free layout|push_pin,new_wave
`);
  add('贰贰Yara_', `
geometric_photo_poster|几何摄影海报|Geometric Photo Poster|海报做法|摄影拼贴,几何遮挡,留白排版|photo collage,geometric overlay,negative space|new_typography,midcentury_graphics
vector_art_poster|矢量艺术海报|Vector Art Poster|海报做法|简化形状,大胆色块,平面构成|simple shapes,bold colour,flat composition|flat_design,midcentury_graphics
flat_illustration_poster|扁平插画海报|Flat Illustration Poster|海报做法|扁平插画,趣味人物,故事场景|flat illustration,playful figures,narrative scene|flat_design,push_pin
`);
  add('贰贰Yara_', `
victorian_graphics|维多利亚式平面装饰|Victorian Graphic Ornament|历史参考|繁复边框,古典字体,复古印刷|ornate border,period lettering,historical printing|arts_crafts,push_pin
swiss_design_notes|瑞士设计|Swiss Design|历史参考|严格网格,无衬线字体,理性留白|strict grid,sans serif type,rational space|international_style
pixel_art_notes|像素艺术|Pixel Art|媒介技法|可见像素,有限色板,低分辨率|visible pixels,limited palette,low resolution|web1_design,y2k_graphics
`);
  add('贰贰Yara_', `
plush_toy_poster|毛绒玩具海报|Plush Toy Poster|海报做法|毛绒质感,玩偶组合,立体场景|plush texture,toy arrangement,staged scene|pop_art
embroidery_poster|刺绣材质海报|Embroidery Poster|材料技法|针脚纹理,纺织肌理,手工文字|stitches,textile texture,embroidered type|arts_crafts
object_styling_poster|实物创意摆拍|Object Styling Poster|海报做法|实物组合,俯拍构图,物体拼字|object arrangement,flat lay,object lettering|conceptual_art,phototypesetting
`);
  add('贰贰Yara_', `
pacific_punk_wave|太平洋朋克浪潮|Pacific Punk Wave|混合描述词|海浪意象,朋克图形,粗粝印刷|surf imagery,punk graphics,rough print|punk_zine,grunge_type
slavic_folk|斯拉夫民艺参考|Slavic Folk References|地域参考|民间纹样,花卉刺绣,木刻图像|folk pattern,floral embroidery,woodcut imagery|arts_crafts
bohemian_visual|波西米亚视觉|Bohemian Visuals|混合描述词|植物与日月,织物纹样,有机组合|botanical and celestial motifs,textiles,organic composition|art_nouveau,arts_crafts
`);
  add('贰贰Yara_', `
tamae_mizukami|水上多摩江的点线风景|Tamae Mizukami: Dotted Landscapes|创作者观察|点线构成,俯瞰山川,低饱和配色|dots and lines,aerial landscape,muted colour|pointillism,shanshui
microbial_watercolor|微观微生物水彩|Microbial Watercolor Art|材料技法|通透水痕,细胞形态,放射线条|translucent washes,cellular forms,radiating lines|abstract_photography
watercolor_boho_pattern|水彩波西米亚混合纹样|Watercolor Boho Pattern|混合描述词|水彩晕染,几何图案,连续纹样|watercolour wash,geometry,repeating pattern|islamic_geometry,arts_crafts
`);
  add('贰贰Yara_', `
risograph|孔版印刷视觉|Risograph Print Look|材料技法|颗粒肌理,套色错位,有限色板|grain,misregistration,limited palette|punk_zine,desktop_publishing
surreal_collage|超现实拼贴|Surreal Collage|海报做法|意象重组,尺度错置,梦境感|unexpected juxtaposition,scale shift,dream logic|surrealism,dada
liquid_chrome|液态金属|Liquid Chrome|材料技法|镜面反射,流动金属,银色高光|mirror reflection,liquid metal,silver highlights|y2k,y2k_graphics
`);
  add('贰贰Yara_', `
doodle_graphic|手绘涂鸦设计|Doodle Graphic|海报做法|手绘线条,稚拙感,随性构图|hand drawn line,naive touch,loose layout|push_pin,punk_zine
japanese_editorial|日系编辑设计|Japanese Editorial Design|混合描述词|编辑排版,留白,纸张肌理|editorial layout,negative space,paper texture|editorial_minimal
minimal_food_poster|极简食物海报|Minimal Food Poster|海报做法|食物主体,克制排版,杂志感|hero food image,restrained type,editorial mood|editorial_minimal,minimalism
`);
  add('贰贰Yara_', `
diffuse_gradient|弥散渐变|Diffuse Gradient|材料技法|柔和渐变,光晕,模糊边缘|soft gradient,glow,blurred edge|y2k_graphics,vaporwave
retro_airbrush|复古喷绘|Retro Airbrush Graphics|材料技法|喷绘质感,柔焦光晕,高饱和色彩|airbrush texture,soft halo,saturated colour|y2k_graphics,psychedelic
experimental_typography|实验字体|Experimental Typography|海报做法|字体变形,文字叠层,版式错位|distorted type,layering,offset layout|new_wave,deconstructive_typography
`);

  add('是朝朝', `
anna_medieval_surreal|Anna：中世纪手稿 × 超现实|Anna: Medieval × Surreal|创作者观察|古典手稿细节,当代物件,叙事错置|manuscript detail,contemporary objects,narrative displacement|surrealism,preraphaelite
`);
  add('是朝朝', `
openprest_experiment|OPENPREST®：规则式排版实验|OPENPREST®: Typographic Experiments|创作者观察|网格与规则,重复变形,错位重组|grid and rules,repetition and distortion,offset recombination|international_style,new_wave
`);
  add('是朝朝', `
ayush_soni|Ayush Soni：科技视觉实验|Ayush Soni: Experimental Tech Visuals|创作者观察|模块化几何,算法纹理,鲜明对比|modular geometry,algorithmic texture,bold contrast|information_design,postmodern_graphics
enigmatriz|enigmatriz：字符与故障拼贴|enigmatriz: ASCII and Glitch Collage|创作者观察|ASCII 字符,低保真数字感,复印颗粒|ASCII characters,lo-fi digital texture,photocopy grain|retro_futurism,grunge_type,web1_design
`);
  add('是朝朝', `
roktimm|Roktimm：纹理与概念海报|Roktimm: Texture and Concept Posters|创作者观察|材质渐变,概念海报,极简文案|material gradient,concept poster,minimal copy|editorial_minimal,retro_futurism
xchylerdrenth|XchylerDrenth：实验品牌视觉|XchylerDrenth: Experimental Brand Visuals|创作者观察|大胆排版,几何元素,图形重组|bold typography,geometry,graphic recombination|postmodern_graphics,corporate_identity
`);
  add('是朝朝', `
roktimm_xray|Roktimm：X 射线视觉实验|Roktimm: X-ray Visual Study|创作者观察|X 射线意象,粉色信号标记,像素化边缘|X-ray imagery,pink signal labels,pixelated edges|new_vision,editorial_minimal
`);

  window.ATLAS_KEYWORDS = notes;
})();
