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

  add('ZIMM', `
zimm_street_3d_type|街景中的立体字|Dimensional Type in a Street Scene|海报做法|果冻或气球质感,街景透视,贴纸与警示带|jelly or balloon texture,street perspective,stickers and caution tape|photomontage,pop_art,deconstructive_typography
zimm_paper_stage|平面设计变纸艺立体书|Flat Design as a Paper Pop-up|材料技法|纸张层叠,折叠结构,侧向光影|layered paper,folded structure,side lighting|arts_crafts,persian_miniature
zimm_patchwork_type|布料拼贴字|Patchwork Letterforms|材料技法|碎布字形,缝合边缘,错位排版|fabric-cut letters,stitched edges,offset composition|arts_crafts,kente
zimm_spatial_poster|移轴感空间海报|Miniature-like Spatial Poster|海报做法|斜向透视,局部景深,版式层次|oblique perspective,selective focus,layered layout|photomontage,new_vision
zimm_lowpoly_game|低多边形游戏画面|Low-poly Game Visuals|媒介技法|可见多边形,低模几何,早期游戏锯齿|visible facets,low-poly geometry,early-game aliasing|web1_design,y2k_graphics
`);

  window.ATLAS_KEYWORD_DETAILS = {
    zimm_street_3d_type: {
      zh:'从原有字形出发，建立柔软、发亮的立体材质，再按街景的机位、透视和光照合成。最后叠加贴纸与警示带，让图形越出照片边框。先检查文字是否仍清楚、投影是否贴合墙面。',
      en:'Start with existing letterforms, give them a soft glossy volume, and composite them into a street photograph using its camera angle, perspective and light. Add stickers and caution tape across the frame; check legibility and contact shadows.'
    },
    zimm_paper_stage: {
      zh:'把原本的平面图拆成前景、中景、背景，模拟纸片折叠、叠压与投影，再从斜角观察。视频展示的是数字生成的纸艺效果；真实立体书还需要能实际开合的纸机构。',
      en:'Separate a flat graphic into foreground, middle ground and background; simulate paper folds, overlapping layers and shadows, then view it obliquely. This is a digital paper effect; a physical pop-up book also needs a working paper mechanism.'
    },
    zimm_patchwork_type: {
      zh:'先画字形轮廓，再给每个字母分配不同布片，加入切边、缝线和轻微错位。视频结合生成图像与手工修整；重点是让缝合逻辑和字的可读性同时成立。',
      en:'Draw the letter shapes first, then assign different fabric pieces and add cut edges, seams and slight misalignment. The video combines generated imagery with manual refinement; keep both stitching logic and letter legibility.'
    },
    zimm_spatial_poster: {
      zh:'通过倾斜的画面平面、前后遮挡与局部景深，把平面文字版式做出微缩场景般的空间感。这里的“移轴”指视觉效果与软件操作，不能等同于真正的移轴镜头摄影。',
      en:'Use an angled picture plane, occlusion and selective focus to make a flat text layout feel like a miniature scene. Here “tilt-shift” names a visual effect and software action, not necessarily a photograph made with a tilt-shift lens.'
    },
    zimm_lowpoly_game: {
      zh:'用少量多边形建立物体或场景，让切面、简化贴图与轻微锯齿可见，联想到 N64 / PS1 时期的低模游戏画面。视频说明字体另行手工处理，因此不要把整张海报都归为 AI 自动生成。',
      en:'Build objects or scenes from few polygons, leaving facets, simple textures and slight aliasing visible to recall N64 / PS1-era games. The creator says the cover typography was handled separately by hand, so the entire poster should not be labelled fully AI-generated.'
    }
  };

  window.ATLAS_KEYWORDS = notes;
})();
