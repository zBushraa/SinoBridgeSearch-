import { imageCatalog } from "./imageCatalog";

const detailCatalog = {
  zhaozhou: {
    alias_en: "Anji Bridge",
    alias_zh: "安济桥",
    dynasty_en: "Sui dynasty",
    dynasty_zh: "隋代",
    tip_en: "Search with the Chinese name in local map apps for more accurate results in China.",
    tip_zh: "在中国使用地图时，直接搜索“赵州桥”通常比英文名更准确。",
  },
  lugou: {
    alias_en: "Marco Polo Bridge",
    alias_zh: "卢沟桥（马可波罗桥）",
    dynasty_en: "Jin dynasty, later restored in Qing periods",
    dynasty_zh: "金代始建，后经清代重修",
    tip_en: "The Chinese search term 卢沟桥 is the most reliable option in China-based maps.",
    tip_zh: "在百度地图或高德地图中搜索“卢沟桥”最稳定。",
  },
  luoyang: {
    alias_en: "Wan'an Bridge of Quanzhou historical records",
    alias_zh: "泉州洛阳桥",
    dynasty_en: "Northern Song dynasty",
    dynasty_zh: "北宋",
    tip_en: "Pair the bridge name with Quanzhou for accurate local search results.",
    tip_zh: "搜索时加上“泉州”会更容易定位到正确桥址。",
  },
  baodai: {
    alias_en: "Precious Belt Bridge",
    alias_zh: "苏州宝带桥",
    dynasty_en: "Tang dynasty, later rebuilt and maintained",
    dynasty_zh: "唐代始建，后历代修葺",
    tip_en: "Use Suzhou + Baodai Bridge when searching in Chinese map services.",
    tip_zh: "在中国地图中搜索“苏州宝带桥”定位更准确。",
  },
  guangji: {
    alias_en: "Xiangzi Bridge",
    alias_zh: "湘子桥",
    dynasty_en: "Southern Song dynasty",
    dynasty_zh: "南宋",
    tip_en: "The local name Xiangzi Bridge may appear in Chinese travel guides and maps.",
    tip_zh: "在潮州本地语境中，“湘子桥”也非常常见。",
  },
  bianhe: {
    alias_en: "Qingming Scroll Rainbow Bridge",
    alias_zh: "清明上河图虹桥",
    dynasty_en: "Song dynasty cultural reconstruction context",
    dynasty_zh: "宋代文化语境",
    tip_en: "This bridge is often explored through historical imagery rather than a single surviving site.",
    tip_zh: "这座桥更多通过历史图像与复原研究被认识，不完全等同于单一现存遗址。",
  },
  shuangqiao: {
    alias_en: "Double Bridge",
    alias_zh: "周庄双桥",
    dynasty_en: "Ming-Qing era water-town landscape tradition",
    dynasty_zh: "明清水乡景观传统",
    tip_en: "Search with the town name if a map app shows multiple Double Bridges.",
    tip_zh: "如遇同名桥较多，搜索“周庄双桥”更方便。",
  },
  yongtong: {
    alias_en: "Yongtong Stone Bridge",
    alias_zh: "永通石桥",
    dynasty_en: "Tang dynasty",
    dynasty_zh: "唐代",
    tip_en: "Chinese local search works best with the bridge name plus province or county.",
    tip_zh: "搜索时加上所在省县名称，定位会更稳定。",
  },
  wanan: {
    alias_en: "Wan'an Covered Bridge",
    alias_zh: "万安廊桥",
    dynasty_en: "Song dynasty tradition",
    dynasty_zh: "宋代传统",
    tip_en: "Covered bridge sites in China are easier to find using the Chinese bridge name.",
    tip_zh: "廊桥类景点在国内地图里通常用中文名检索更快。",
  },
  tongji: {
    alias_en: "Tongji Ancient Bridge",
    alias_zh: "通济古桥",
    dynasty_en: "Song to later local cultural continuity",
    dynasty_zh: "宋代以来的地方文化延续",
    tip_en: "Try searching the Chinese name together with the city for more precise route results.",
    tip_zh: "建议使用“城市名 + 通济桥”进行组合检索。",
  },
  anping: {
    alias_en: "Wuli Bridge",
    alias_zh: "五里桥",
    dynasty_en: "Southern Song dynasty",
    dynasty_zh: "南宋",
    tip_en: "Anping Bridge is often easier to locate under its alternative name Wuli Bridge.",
    tip_zh: "在中国地图中，“五里桥”有时比“安平桥”更容易搜到。",
  },
  shunji: {
    alias_en: "Shunji Ancient Bridge",
    alias_zh: "顺济古桥",
    dynasty_en: "Southern Song period context",
    dynasty_zh: "南宋时期语境",
    tip_en: "Use the Chinese place name with the bridge for more reliable navigation in China.",
    tip_zh: "在国内导航中建议加上地名一起搜索。",
  },
  jinshui: {
    alias_en: "Golden Water Bridge",
    alias_zh: "紫禁城金水桥",
    dynasty_en: "Ming dynasty",
    dynasty_zh: "明代",
    tip_en: "For China travel use, searching Forbidden City + Jinshui Bridge is most precise.",
    tip_zh: "在国内地图中搜索“故宫 金水桥”最容易定位。",
  },
  taiping: {
    alias_en: "Taiping Ancient Bridge",
    alias_zh: "太平古桥",
    dynasty_en: "Late imperial local bridge tradition",
    dynasty_zh: "明清时期地方桥梁传统",
    tip_en: "This bridge is best understood through its surrounding landscape context.",
    tip_zh: "这类桥更适合结合周边古镇或风景区一起检索。",
  },
  yudai: {
    alias_en: "Yudai Bridge",
    alias_zh: "颐和园玉带桥",
    dynasty_en: "Qing dynasty, Qianlong reign",
    dynasty_zh: "清代乾隆时期",
    tip_en: "In China, use Summer Palace + Jade Belt Bridge for the clearest map result.",
    tip_zh: "在中国地图里搜索“颐和园 玉带桥”最准确。",
  },
  ninedragon: {
    alias_en: "Nine Dragons Bridge",
    alias_zh: "九龙桥",
    dynasty_en: "Qing imperial garden context",
    dynasty_zh: "清代皇家园林语境",
    tip_en: "Because the name is ambiguous, searching the Chinese name with the park name is recommended.",
    tip_zh: "因名称容易混淆，建议用“景区名 + 九龙桥”一起搜索。",
  },
  fengyu: {
    alias_en: "Wind and Rain Bridge",
    alias_zh: "侗族风雨桥",
    dynasty_en: "Late traditional timber bridge culture",
    dynasty_zh: "近代以前木构桥传统延续",
    tip_en: "For travel in China, the Chinese ethnic and regional naming is usually more accurate than the English one.",
    tip_zh: "在中国出行时，用“侗族风雨桥”或具体村寨名检索通常更准确。",
  },
};

const rawBridges = [
  {
    id: "zhaozhou",
    name: "Zhaozhou Bridge",
    zh: "赵州桥",
    year: 605,
    location: "Hebei, China",
    location_zh: "中国河北",
    type_en: "Open-spandrel stone arch bridge",
    type_zh: "敞肩式石拱桥",
    feature_en: "Slim arch profile and lightweight structural openings",
    feature_zh: "桥身弧线轻盈，拱肩开孔让整体看起来更通透",
    img: "/images/zhaozhou.jpg",
    gallery: ["/images/zhaozhou_1.jpg", "/images/zhaozhou_2.jpg", "/images/zhaozhou_3.jpg"],
    desc_en: `Zhaozhou Bridge, built in 605 during the Sui dynasty, is one of the most celebrated bridges in Chinese history and is widely regarded as the earliest surviving open-spandrel stone arch bridge in the world.

What makes it visually distinctive is the lightness of its structure. Instead of appearing heavy and solid, the main arch is accompanied by smaller openings in the shoulders, giving the bridge a more graceful and airy profile than many earlier stone bridges.

This design was not only elegant but also technically innovative. It reduced the weight of the structure, improved drainage and flood performance, and helped distribute pressure more efficiently. For that reason, Zhaozhou Bridge is often discussed as a landmark in the global history of bridge engineering.

Its long survival through floods, earthquakes, and centuries of use has made it a symbol of both structural intelligence and artistic refinement in ancient China.`,
    desc_zh: `赵州桥建于公元605年，是中国古代桥梁工程中最具代表性的作品之一。从图片中可以看到，它的主拱线条非常舒展，桥体比例轻巧，和普通厚重的石桥明显不同。

这座桥最重要的特点是敞肩式结构，也就是在大拱两侧开出小拱洞，这样既能减轻桥身重量，也能帮助泄洪和分散压力。正因为这种设计，它常被视为中国古代桥梁技术突破性的成果。

历经洪水、地震与长期使用后，赵州桥依然保存良好。它不仅是一座桥，更像是一件把结构美感与工程智慧结合在一起的石作杰作。`,
  },
  {
    id: "lugou",
    name: "Lugou Bridge",
    zh: "卢沟桥",
    year: 1189,
    location: "Beijing, China",
    location_zh: "中国北京",
    type_en: "Multi-span stone bridge",
    type_zh: "联拱石桥",
    feature_en: "Stone lions lining the balustrades",
    feature_zh: "桥栏两侧密布石狮，是最容易辨认的视觉特征",
    img: "/images/lugou.jpg",
    gallery: ["/images/lugou_1.jpg", "/images/lugou_2.jpg", "/images/lugou_3.jpg"],
    desc_en: `Lugou Bridge, also known internationally as the Marco Polo Bridge, began construction in 1189 and was completed in 1192. It is one of Beijing's most important historic bridges and is especially well known for the stone lions that line its balustrades.

These carved lions are the bridge's most memorable visual feature. Their different poses, expressions, and sizes give the bridge a strong sculptural identity and make it far more than a purely functional crossing.

The bridge also occupies an important place in both Chinese and global historical memory. Marco Polo's account helped make it famous abroad, while the Marco Polo Bridge Incident of 1937 gave it major significance in modern Chinese history.

Structurally and artistically, Lugou Bridge remains one of the clearest surviving examples of a major northern stone bridge from the Jin and later Qing restoration tradition.`,
    desc_zh: `卢沟桥建于1189年，是北京地区最有代表性的古桥之一。照片里最吸引人的往往不是桥面本身，而是栏杆上成排分布的石狮，它们让整座桥有很强的历史辨识度。

这座桥因马可·波罗的记述而广为西方世界所知，后来又因近代中国历史中的重要事件而具有更深的纪念意义。因此，卢沟桥既是一处古代建筑，也是一处历史现场。

从结构上看，它体现了金代成熟的石桥营造技术；从视觉上看，桥身平稳舒展，石栏、望柱和石狮共同构成了极具层次感的景观。`,
  },
  {
    id: "luoyang",
    name: "Luoyang Bridge",
    zh: "洛阳桥",
    year: 1059,
    location: "Quanzhou, China",
    location_zh: "中国泉州",
    type_en: "Stone beam-sea bridge",
    type_zh: "跨海梁式石桥",
    feature_en: "Marine foundation techniques in tidal water",
    feature_zh: "建在潮汐水域上，桥基处理技术非常有代表性",
    img: "/images/luoyang.jpg",
    gallery: ["/images/luoyang_1.jpg", "/images/luoyang_2.jpg", "/images/luoyang_3.jpg"],
    desc_en: `Luoyang Bridge, completed in 1059 in Quanzhou, is one of the most important bridges in the history of Chinese marine engineering. Unlike inland arch bridges, it was built across tidal estuary conditions where water movement and foundation stability were constant challenges.

Its fame comes largely from the engineering methods used during construction. Historical accounts describe techniques such as strengthening the bridge base with oyster growth and carefully adapting the structure to changing tides and soft underwater conditions.

This gave the bridge importance far beyond local transportation. It became a critical link in Quanzhou, one of the great port cities of the Song-Yuan period, and formed part of the broader historical environment associated with maritime trade.

Luoyang Bridge is therefore valued not just as an old bridge, but as an early and highly sophisticated response to coastal construction problems.`,
    desc_zh: `洛阳桥建于北宋时期，是中国古代跨海桥梁中的代表作。与内陆拱桥相比，它给人的视觉印象更平稳、开阔，桥体与海湾、潮水环境的关系特别明显。

它最值得关注的不是单一的装饰，而是建桥环境本身。洛阳桥修建在潮汐水域中，古代工匠为稳定桥基，采用了非常有名的海洋工程方法，这使它在中国桥梁史上占有独特地位。

从交通意义看，它长期连接泉州沿海交通与贸易往来；从工程意义看，它展示了中国古人面对海潮、水流和软基条件时的适应能力。`,
  },
  {
    id: "baodai",
    name: "Baodai Bridge",
    zh: "宝带桥",
    year: 816,
    location: "Suzhou, China",
    location_zh: "中国苏州",
    type_en: "Multi-arch stone bridge",
    type_zh: "多孔联拱石桥",
    feature_en: "Long ribbon-like bridge body with many small arches",
    feature_zh: "桥体修长，连续小拱非常密集，外观像一条带子",
    img: "/images/baodai.jpg",
    gallery: ["/images/baodai_1.jpg", "/images/baodai_2.jpg", "/images/baodai_3.jpg"],
    desc_en: `Baodai Bridge, first built in 816 in Suzhou, is one of China's best-known multi-arch stone bridges. Its long, low body and repeated sequence of small arches create the appearance of a ribbon laid across the water.

That elongated form is not only visually striking but also practical. The many openings help regulate water flow and allow movement through a canal-rich environment, making the bridge especially well suited to the hydraulic landscape of Jiangnan.

Because of this, Baodai Bridge is often admired as both infrastructure and scenery. It embodies the refined balance between engineering, waterways, and visual rhythm that characterizes much of Suzhou's historic environment.

Its reputation today rests on that combination of elegance, water management, and enduring regional identity.`,
    desc_zh: `宝带桥建于唐代，是苏州最具识别度的古桥之一。图片中最明显的特点就是桥身极长、拱洞连续排列，远看像一条横卧水面的丝带，这也是“宝带桥”视觉魅力的来源。

它由很多小拱连接而成，这种多孔布局既让桥体有节奏感，也有利于通水和行船。对于江南水网地区来说，这类桥梁不仅承担交通功能，也和周边水环境密切配合。

宝带桥之所以常被提起，不只是因为它古老，更因为它把水利、交通与景观审美结合得非常完整，是典型的江南桥梁形象。`,
  },
  {
    id: "guangji",
    name: "Guangji Bridge",
    zh: "广济桥",
    year: 1170,
    location: "Chaozhou, China",
    location_zh: "中国潮州",
    type_en: "Hybrid stone and pontoon bridge",
    type_zh: "梁桥与浮桥结合的复合桥",
    feature_en: "Movable floating section for river traffic",
    feature_zh: "中段可拆装，方便船只通过，是画面与结构都很特别的一座桥",
    img: "/images/guangji.jpg",
    gallery: ["/images/guangji_1.jpg", "/images/guangji_2.jpg", "/images/guangji_3.jpg"],
    desc_en: `Guangji Bridge in Chaozhou is one of the most unusual historic bridges in China because it combines fixed bridge sections with a floating pontoon section. First built in 1170, it is often listed among China's great ancient bridges.

Its importance lies in this hybrid structure. Rather than being a conventional stone bridge throughout, it was designed to respond to the navigational needs of the Han River by allowing part of the crossing to be opened or adjusted.

This gave Guangji Bridge a very different relationship to urban life and river traffic than most monumental bridges. It served commerce, circulation, and symbolic identity all at once.

Today it is valued not only as a feat of engineering but also as one of the strongest cultural symbols of Chaozhou.`,
    desc_zh: `广济桥是潮州最具代表性的地标之一，也是中国古桥中结构最特别的桥梁之一。它不是单纯的一种桥式，而是将固定桥段与可变动的浮桥段结合起来，因此从画面上就能感到它和普通石桥很不一样。

这种设计直接回应了韩江通航的需求，桥的一部分可以根据河道交通进行调整，所以广济桥既有工程巧思，也有很强的城市生活意味。

今天人们提到广济桥，往往不只是在谈桥梁本身，而是在谈潮州历史、商业往来和地方文化记忆。`,
  },
  {
    id: "bianhe",
    name: "Bianhe Rainbow Bridge",
    zh: "汴河虹桥",
    year: 1100,
    location: "Kaifeng, China",
    location_zh: "中国开封",
    type_en: "Wooden rainbow bridge",
    type_zh: "木构虹桥",
    feature_en: "Curved bridge form associated with Song urban life",
    feature_zh: "桥身弯曲如虹，和市井、河道、船只场景联系很强",
    img: "/images/bianhe.jpg",
    gallery: ["/images/bianhe_1.jpg", "/images/bianhe_2.jpg", "/images/bianhe_3.jpg"],
    desc_en: `Bianhe Rainbow Bridge is most famous through its appearance in the celebrated handscroll "Along the River During the Qingming Festival," where it serves as a focal point in the urban life of the Song dynasty capital.

The term "rainbow bridge" refers to its strongly curved profile, which rises over the river in a form that is both structurally expressive and visually memorable. Even where modern viewers encounter it through paintings and reconstructions, the bridge remains central to the imagination of Song-era city life.

More than a crossing, it functioned as a node of movement, trade, and public interaction. Boats passed beneath it while merchants, pedestrians, and goods converged around it.

For that reason, Bianhe Rainbow Bridge is as important in cultural history as in architectural history.`,
    desc_zh: `汴河虹桥最著名的形象来自《清明上河图》，因此它常常被理解为宋代城市生活的一种象征。虽然今天人们更多是通过图像和复原来认识它，但“虹桥”这个名字本身就说明了它弯曲上拱、如彩虹横跨水面的特征。

这类桥不仅连接河道两岸，更是市场、行人、商船交汇的空间节点。只要想到宋代汴京的繁忙街景，虹桥几乎就是最核心的视觉焦点之一。

因此，汴河虹桥的重要性不只在桥梁形式，也在它所承载的城市记忆和文化想象。`,
  },
  {
    id: "shuangqiao",
    name: "Shuangqiao",
    zh: "双桥",
    year: 1573,
    location: "Suzhou, China",
    location_zh: "中国苏州",
    type_en: "Twin stone bridges",
    type_zh: "双联石桥",
    feature_en: "Two connected bridges crossing at different directions",
    feature_zh: "两桥相接，和水巷、民居一起形成典型江南画面",
    img: "/images/shuangqiao.jpg",
    gallery: ["/images/shuangqiao_1.jpg", "/images/shuangqiao_2.jpg", "/images/shuangqiao_3.jpg"],
    desc_en: `Shuangqiao, or the Double Bridge, is a classic Jiangnan waterside composition formed by two connected bridges crossing different channels in Suzhou.

Its importance lies less in monumental engineering than in spatial atmosphere. The bridges, waterways, houses, and reflections together create a scene that has become one of the most recognizable visual symbols of the Jiangnan water town.

Because of this, Shuangqiao appears frequently in painting, photography, and travel imagery. It is admired for the way it turns everyday circulation into an elegant built landscape.

The bridge group is best understood as part of a lived waterside environment rather than as a single isolated monument.`,
    desc_zh: `双桥是江南水乡景观中非常经典的一组桥梁形象。照片里常能看到两座桥与河道、白墙灰瓦民居一起出现，这种组合本身就很像一幅传统水乡画。

它的特别之处在于并不是单独一座桥，而是两座桥配合不同水路与巷道形成连续空间，所以观看时更容易感受到“小桥、流水、人家”的生活气息。

双桥之所以常被画家和游客反复描绘，正是因为它把江南建筑、水面反光与日常生活场景结合得非常自然。`,
  },
  {
    id: "yongtong",
    name: "Yongtong Bridge",
    zh: "永通桥",
    year: 727,
    location: "Hebei, China",
    location_zh: "中国河北",
    type_en: "Stone arch bridge",
    type_zh: "石拱桥",
    feature_en: "Early mature arch form from the Tang period",
    feature_zh: "拱券厚实稳重，能看出早期石桥追求稳定的结构思路",
    img: "/images/yongtong.jpg",
    gallery: ["/images/yongtong_1.jpg", "/images/yongtong_2.jpg", "/images/yongtong_3.jpg"],
    desc_en: `Yongtong Bridge, dating to the Tang period, is valued as an example of early mature stone arch construction in China.

Compared with later bridges that emphasize refinement and scenic elegance, Yongtong Bridge presents a more solid and restrained appearance. That visual heaviness reflects the structural priorities of an earlier stage in stone bridge development.

Its significance lies in showing how arch construction evolved toward greater stability, durability, and long-term performance. Bridges like Yongtong help bridge the historical gap between experimental early forms and later celebrated masterpieces.

As a result, it is important not only as a preserved monument but also as evidence of the developmental history of Chinese bridge engineering.`,
    desc_zh: `永通桥约建于唐代，是中国早期成熟石拱桥的重要实例之一。与一些后期造型更轻巧的桥相比，它给人的感觉更厚实、更稳重，体现了早期石桥对结构安全的重视。

从照片中往往可以看到桥身整体比较朴实，没有过多装饰，但正是这种简洁让拱券、桥面和石材本身更突出。

永通桥的价值在于，它帮助人们理解中国古代石桥从经验建造逐渐走向成熟技术的过程。`,
  },
  {
    id: "wanan",
    name: "Wan'an Bridge",
    zh: "万安桥",
    year: 1138,
    location: "Fujian, China",
    location_zh: "中国福建",
    type_en: "Covered wooden corridor bridge",
    type_zh: "木构廊桥",
    feature_en: "Roofed bridge deck for travel, rest, and gathering",
    feature_zh: "桥上带廊屋，既能通行，也像一条跨水而建的公共空间",
    img: "/images/wanan.jpg",
    gallery: ["/images/wanan_1.jpg", "/images/wanan_2.jpg", "/images/wanan_3.jpg"],
    desc_en: `Wan'an Bridge is a traditional covered wooden corridor bridge associated with southern Chinese architectural traditions. Rather than functioning as a bare crossing, it incorporates a roofed passage that turns the bridge into a shared public space.

This design offered practical protection from rain and sun, but it also supported conversation, rest, and community interaction. In that sense, the bridge belongs as much to daily social life as to transport infrastructure.

Its wooden structure and built enclosure distinguish it sharply from stone arches such as those in northern or imperial settings.

Wan'an Bridge is therefore an excellent example of how local environment, material tradition, and communal life shaped bridge design in southern China.`,
    desc_zh: `万安桥是一座典型的南方木构廊桥。和石桥相比，它最容易被认出的地方是桥上覆盖着廊屋，这让桥不只是过河设施，也像一条跨水而建的街巷。

这样的结构非常适合多雨潮湿的环境，行人可以在桥上避风雨、停留、交谈，因此桥梁本身也成为社区生活的一部分。

从图像角度看，万安桥最有魅力的就是木构、屋顶和河道共同形成的层次感，它体现了南方桥梁“可行、可停、可聚”的生活属性。`,
  },
  {
    id: "tongji",
    name: "Tongji Bridge",
    zh: "通济桥",
    year: 1190,
    location: "Guangdong, China",
    location_zh: "中国广东",
    type_en: "Historic arch bridge",
    type_zh: "古代拱桥",
    feature_en: "Bridge associated with local gatherings and seasonal customs",
    feature_zh: "常与地方民俗活动联系在一起，不只是交通节点",
    img: "/images/tongji.jpg",
    gallery: ["/images/tongji_1.jpg", "/images/tongji_2.jpg", "/images/tongji_3.jpg"],
    desc_en: `Tongji Bridge is remembered not only as a crossing but also as a bridge deeply connected with local ritual life and seasonal custom in southern China.

Bridges of this kind often became gathering spaces where movement, commerce, and civic identity overlapped. That cultural role helps explain why Tongji Bridge remains meaningful beyond its practical transport function.

Visually, its historical value is tied to its place within a larger riverside settlement rather than to a single dramatic structural gesture.

It stands as an example of how many Chinese bridges became woven into the ceremonial and emotional life of their communities.`,
    desc_zh: `通济桥是岭南地区很有代表性的古桥之一。它的意义不仅在于跨越水面、连接道路，更在于长期参与地方节庆与集体记忆，所以人们对它的感受常常带有生活气息与仪式感。

从视觉上看，这类桥梁往往与周边河道、街市和人流共同构成城市景观，并不是孤立存在的建筑物。

因此，通济桥值得关注的不只是桥体本身，更是它在地方文化中所扮演的“连接”角色。`,
  },
  {
    id: "anping",
    name: "Anping Bridge",
    zh: "安平桥",
    year: 1138,
    location: "Quanzhou, Fujian, China",
    location_zh: "中国福建泉州",
    type_en: "Stone beam sea bridge",
    type_zh: "跨海梁式石桥",
    feature_en: "Exceptionally long stone beam bridge with repeated piers across estuary waters",
    feature_zh: "桥身极长，桥墩连续展开，是最具辨识度的长梁式古桥之一",
    img: "/images/anping.jpg",
    gallery: ["/images/anping.jpg"],
    desc_en: `Anping Bridge, also known as Wuli Bridge, began construction in 1138 during the Southern Song dynasty and was completed in the mid-12th century. It is one of the most important long-span historic bridges in Fujian and is often described as China's longest surviving ancient stone beam bridge.

Unlike dramatic arch bridges, Anping Bridge is distinguished by length, rhythm, and engineering endurance. Its deck stretches across what was once a tidal estuary, carried by a long sequence of stone piers and massive stone beams.

The bridge played an important role in connecting transport routes in the Quanzhou region, an area deeply tied to maritime trade during the Song and Yuan periods. For this reason, Anping Bridge is significant not only as infrastructure, but also as part of the wider historical transportation network of Quanzhou.

Its monumental horizontal form gives it a very different visual identity from garden bridges or arch bridges, making it one of the clearest examples of large-scale stone beam construction in premodern China.`,
    desc_zh: `安平桥又称“五里桥”，始建于南宋绍兴八年（1138年），后于12世纪中期建成，是福建乃至中国古代桥梁史上极具代表性的长梁式石桥之一。

与赵州桥、玉带桥这类以拱形著称的桥不同，安平桥最震撼人的地方在于“长”。它横跨原本的潮汐水域，桥墩与石梁连续铺展，形成极强的节奏感和延展感，因此在视觉上非常壮阔。

从交通意义上看，安平桥连接了泉州周边的重要通道，而泉州在宋元时期又是海上贸易极其繁盛的地区，因此这座桥不仅是一处地方性古桥，也是区域交通网络的重要组成部分。

安平桥的价值在于，它让人看到中国古代桥梁并不只有拱桥成就，梁式石桥同样可以在尺度、技术和景观气势上达到惊人的高度。`,
  },
  {
    id: "shunji",
    name: "Shunji Bridge",
    zh: "顺济桥",
    year: 1200,
    location: "Fujian, China",
    location_zh: "中国福建",
    type_en: "Regional stone bridge",
    type_zh: "地方石桥",
    feature_en: "Practical bridge form serving daily movement and trade",
    feature_zh: "造型朴实，强调耐久与日常通行功能",
    img: "/images/shunji.jpg",
    gallery: ["/images/shunji_1.jpg", "/images/shunji_2.jpg", "/images/shunji_3.jpg"],
    desc_en: `Shunji Bridge represents a more regional and workaday form of historic bridge building in China. It is not famous because of extreme scale or imperial context, but because it reflects durable local construction serving real everyday needs.

Its appearance is comparatively plain, and that simplicity is part of its value. The bridge emphasizes reliability, connection, and daily use over ceremonial display.

Historically, such bridges supported movement between villages, markets, and agricultural communities, making them central to local social and economic life.

Shunji Bridge therefore reminds us that Chinese bridge heritage includes not only iconic masterpieces but also regionally important bridges that sustained ordinary life.`,
    desc_zh: `顺济桥体现的是一种更贴近日常生活的地方桥梁形象。它不像皇家园林桥那样强调装饰，也不像名胜古桥那样以传奇闻名，而是通过稳定、实用的结构承担真实的通行任务。

从照片和整体气质来看，它的特色在于简洁与耐久，这种朴素感恰恰反映了地方桥梁服务社区、服务贸易的实际用途。

顺济桥的价值在于让人看到，中国古桥遗产并不只有“名桥”，也包括大量支撑地方社会运行的普通而重要的桥梁。`,
  },
  {
    id: "jinshui",
    name: "Jinshui Bridge",
    zh: "金水桥",
    year: 1420,
    location: "Beijing, China",
    location_zh: "中国北京",
    type_en: "Ceremonial marble bridge",
    type_zh: "礼仪性汉白玉桥",
    feature_en: "Formal white-stone bridge aligned with palace axes",
    feature_zh: "与宫殿中轴线和御道关系紧密，画面庄重规整",
    img: "/images/jinshui.jpg",
    gallery: ["/images/jinshui_1.jpg", "/images/jinshui_2.jpg", "/images/jinshui_3.jpg"],
    desc_en: `Jinshui Bridge belongs to the ceremonial architectural sequence of the Forbidden City in Beijing and should be understood within the logic of imperial space rather than ordinary transportation.

Its white stone construction, symmetrical layout, and alignment with palace axes contribute to a formal and highly ordered visual effect. In this setting, the bridge participates in hierarchy, ritual, and political symbolism.

Unlike bridges shaped mainly by geography or hydraulic need, Jinshui Bridge is shaped by court design and ceremonial procession.

It is therefore significant as a bridge, but also as an integral element of one of the most carefully composed imperial architectural ensembles in China.`,
    desc_zh: `金水桥位于紫禁城前部区域，是典型的宫廷礼仪空间组成部分。和民间桥梁不同，它更强调秩序、等级与中轴对称，所以从画面上看会显得非常规整庄重。

桥体多用汉白玉等石材建成，栏杆、桥面与周边宫殿建筑共同构成了皇家建筑特有的仪式感。

金水桥的重要性不仅在于过水功能，更在于它是皇城空间序列中的一部分，代表着传统宫廷建筑的礼制审美。`,
  },
  {
    id: "taiping",
    name: "Taiping Bridge",
    zh: "太平桥",
    year: 1600,
    location: "Anhui, China",
    location_zh: "中国安徽",
    type_en: "Scenic historic bridge",
    type_zh: "古景观桥",
    feature_en: "Bridge integrated with riverside scenery and travel routes",
    feature_zh: "桥、山水与古镇环境联系紧密，视觉上更偏风景性",
    img: "/images/taiping.jpg",
    gallery: ["/images/taiping_1.jpg", "/images/taiping_2.jpg", "/images/taiping_3.jpg"],
    desc_en: `Taiping Bridge is best appreciated in relation to its surrounding landscape. Rather than standing out through highly specialized engineering, it is remembered for the way it integrates with its setting and traditional travel routes.

Historically, it helped connect local movement and commerce, giving it practical significance beyond its scenic image.

At the same time, the bridge reads strongly as part of a broader landscape composition, where water, settlement, and crossing form a unified view.

This balance between utility and atmosphere gives Taiping Bridge its lasting appeal.`,
    desc_zh: `太平桥常常给人一种“景在桥中、桥在景中”的感觉。相比强调复杂结构的名桥，它更突出的魅力在于桥与周边环境的融合，适合在整体风景中观看。

历史上，它承担过地方交通和商旅往来的功能，因此并不是单纯的观景设施，而是和区域发展联系在一起的桥梁。

今天再看太平桥，人们往往会同时看到它的实用历史和它作为传统景观元素的美感。`,
  },
  {
    id: "yudai",
    name: "Jade Belt Bridge",
    zh: "玉带桥",
    year: 1750,
    location: "West Causeway, Kunming Lake, Summer Palace, Beijing, China",
    location_zh: "中国北京颐和园昆明湖西堤",
    type_en: "Single-span high-arch stone garden bridge",
    type_zh: "单孔高拱石桥（园林景观桥）",
    feature_en: "A sharply rising arch curve that looks like a lifted jade belt above the lake",
    feature_zh: "桥身高高拱起，弧线流畅，像一条向上挑起的玉带横跨湖面",
    img: "/images/yudai.jpg",
    gallery: ["/images/yudai_1.jpg", "/images/yudai_2.jpg", "/images/yudai_3.jpg"],
    desc_en: `Jade Belt Bridge, also known as Yudai Bridge, was built during the Qianlong period of the Qing Dynasty, generally dated to 1750 and sometimes recorded as 1751. It stands on the West Causeway of Kunming Lake in the Summer Palace, Beijing, and is the most visually dramatic bridge among the West Causeway bridges.

Its defining feature is the single, very high arch that rises sharply above the water, giving the bridge the shape of an upward-curving jade belt. Built with white marble and pale stone, the bridge contrasts beautifully with the lake surface and becomes especially striking in clear light. The balustrades, posts, and carved details reflect the refined stone craftsmanship of the Qing imperial garden tradition.

The high arch was not only aesthetic. It was also designed to allow large imperial boats to pass underneath when the Qianlong Emperor traveled by water toward Yuquan Mountain. In this sense, the bridge combines navigation function with landscape composition.

Historically, the bridge belongs to the original construction phase of Qingyi Garden, the predecessor of the Summer Palace. It was damaged after the destruction of the garden in 1860 and later restored during the Guangxu-era rebuilding of the Summer Palace. Today, it remains one of the signature landmarks of Kunming Lake.

Artistically, Jade Belt Bridge is a classic example of Chinese imperial garden design. It breaks the flat line of the causeway with a single elegant arc, linking water, embankment, willow trees, and distant hills into one composed scene. Its form has made it one of the most iconic garden bridges in China.`,
    desc_zh: `玉带桥建于清乾隆十五年（公元1750年，亦有资料记为1751年），位于北京颐和园昆明湖西堤，是西堤六桥中造型最醒目、识别度最高的一座桥。

它是一座单孔高拱石桥，桥身高高拱起，弧线流畅舒展，整体形似一条向上挑起的玉带，这是它最鲜明的视觉标识。桥体以汉白玉和青白石砌筑而成，洁白桥身与湖水、堤岸、垂柳形成强烈而优雅的对比。桥栏望柱、纹饰雕刻以及石狮细节，也体现了清代皇家园林石作工艺的精巧水准。

这种高拱造型并不只是为了好看。乾隆皇帝曾乘御舟由昆明湖前往玉泉山，高耸的拱券能够让较高的船只顺利通过桥下，因此玉带桥同时兼顾了通航需求与景观效果。

从历史沿革来看，玉带桥始建于清漪园营建时期，是西堤六桥中唯一的高拱桥。1860年清漪园遭焚后，玉带桥曾受损，后在光绪年间重建颐和园时按原样修复，所以今天所见仍保持着清代皇家园林桥梁的整体风貌。

在园林艺术上，玉带桥是“借景”与“造景”结合的典型范例。它以一条强烈而优美的弧线打破西堤的平直走势，把湖面、堤岸、柳树和远山串联成富有节奏感的构图，也因此成为中国古典园林桥梁中极具代表性的经典形象。`,
  },
  {
    id: "ninedragon",
    name: "Nine-Dragon Bridge",
    zh: "九龙桥",
    year: 1751,
    location: "Summer Palace, Beijing, China",
    location_zh: "中国北京颐和园",
    type_en: "Decorative garden bridge",
    type_zh: "园林装饰性桥梁",
    feature_en: "Known for imperial garden context rather than large-span engineering",
    feature_zh: "更强调皇家园林环境中的观赏性，而不是大跨度结构表现",
    img: "/images/ninedragon.jpg",
    gallery: ["/images/ninedragon.jpg"],
    desc_en: `This entry refers to the Nine-Dragon Bridge associated with the imperial garden setting in Beijing, not the Hong Kong Kowloon district. The name is therefore rendered as "Nine-Dragon Bridge" rather than "Kowloon Bridge" to avoid confusion.

Its significance lies more in symbolic meaning, landscape composition, and decorative imperial garden context than in large structural scale. It belongs to a world of courtly scenery rather than to the category of major transport bridges.

Because online image attribution for this bridge is frequently confused with unrelated landmarks, the project intentionally uses a neutral fallback image unless a verified bridge photograph is available.

That decision helps preserve informational accuracy instead of presenting a visually attractive but incorrect image association.`,
    desc_zh: `这里的“九龙桥”指的是北京皇家园林语境中的九龙桥，不是香港“九龙”的英文地名对应桥梁，因此英文名称采用更准确的 “Nine-Dragon Bridge”，以避免误解。

这座桥的价值主要体现在园林景观、皇家语境和装饰象征意义上，而不是像大型名桥那样以跨度或复杂结构著称。

考虑到网络上对“九龙桥”图片归属常有混淆，本项目在未确认图片准确来源前，刻意改为使用中性占位图，避免错误指认。`,
  },
  {
    id: "fengyu",
    name: "Fengyu Bridge",
    zh: "风雨桥",
    year: 1910,
    location: "Guangxi, China",
    location_zh: "中国广西",
    type_en: "Dong covered bridge",
    type_zh: "侗族风雨廊桥",
    feature_en: "Roofed timber bridge used for shelter and community life",
    feature_zh: "桥上有屋顶与廊道，既能避雨，也能停留交流",
    img: "/images/fengyu.jpg",
    gallery: ["/images/fengyu_1.jpg", "/images/fengyu_2.jpg", "/images/fengyu_3.jpg"],
    desc_en: `Fengyu Bridge is a traditional covered bridge associated with the Dong ethnic group and is one of the most recognizable forms of minority wooden architecture in southwest China.

Its roofed corridor transforms the bridge into more than a passage. It serves as shelter, meeting place, resting point, and social space, giving the bridge a strong communal dimension.

Architecturally, the combination of timber framing, layered roof forms, and decorated passageway creates a structure that reads almost like a building stretched across water.

Fengyu Bridge is therefore important as both vernacular engineering and living cultural space.`,
    desc_zh: `风雨桥是侗族传统建筑中非常有代表性的桥梁形式。它最直观的视觉特点就是桥上覆盖着廊屋，远看更像一座横跨水面的木构建筑，而不是单纯的桥。

这种桥不只服务于通行，还为人们提供遮风避雨、歇脚和社交的空间，所以“风雨桥”本身就带有浓厚的生活气息。

从建筑文化角度看，风雨桥把结构、装饰与民族日常生活结合在一起，是中国少数民族木构建筑智慧的重要体现。`,
  },
];

export const bridges = rawBridges.map((bridge) => {
  const images = imageCatalog[bridge.id] || {};
  const gallery = (images.gallery || bridge.gallery || [images.cover || bridge.img]).filter(Boolean);

  return {
    ...bridge,
    ...(detailCatalog[bridge.id] || {}),
    img: images.cover || bridge.img,
    gallery,
    galleryCount: gallery.length,
    keywords: [
      bridge.name,
      bridge.zh,
      bridge.location,
      String(bridge.year),
      bridge.desc_en,
      bridge.desc_zh,
    ]
      .join(" ")
      .toLowerCase(),
  };
});
