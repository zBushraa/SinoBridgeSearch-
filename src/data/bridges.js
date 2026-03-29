const rawBridges = [
  {
    id: "zhaozhou",
    name: "Zhaozhou Bridge",
    zh: "赵州桥",
    year: 605,
    location: "Hebei, China",
    img: "/images/zhaozhou.jpg",
    gallery: ["/images/zhaozhou_1.jpg", "/images/zhaozhou_2.jpg", "/images/zhaozhou_3.jpg"],
    desc_en: `Zhaozhou Bridge, built in 605 AD, is widely recognized as the world's oldest open-spandrel stone arch bridge. Designed by the master craftsman Li Chun, it represents a revolutionary advancement in bridge engineering. Unlike traditional solid arch bridges, its innovative design reduces weight while maintaining exceptional strength.

The bridge has survived numerous floods, earthquakes, and centuries of use, demonstrating the brilliance of ancient Chinese engineering. Its elegant curvature and symmetry also reflect aesthetic sophistication, making it not only a functional structure but also a work of art.

Today, Zhaozhou Bridge stands as a symbol of China's technological innovation and cultural heritage, inspiring engineers worldwide.`,
    desc_zh: `赵州桥建于公元605年，被认为是世界上最古老的敞肩式石拱桥。由著名工匠李春设计，其结构创新地减少了桥体重量，同时保持了极高的强度。

该桥历经洪水、地震和数百年的使用，依然屹立不倒，充分体现了中国古代工程技术的卓越水平。其优美的弧线和对称结构不仅具有实用价值，也具有极高的艺术价值。

如今，赵州桥不仅是工程奇迹，更是中国文化与智慧的象征。`,
  },
  {
    id: "lugou",
    name: "Lugou Bridge",
    zh: "卢沟桥",
    year: 1189,
    location: "Beijing, China",
    img: "/images/lugou.jpg",
    gallery: ["/images/lugou_1.jpg", "/images/lugou_2.jpg", "/images/lugou_3.jpg"],
    desc_en: `Lugou Bridge, also known as Marco Polo Bridge, is one of the most historically significant bridges in China. Built in 1189, it is famous for its hundreds of intricately carved stone lions, each unique in expression and design.

The bridge gained global recognition after being described by Marco Polo, who praised its grandeur. It later became a key historical site during the Marco Polo Bridge Incident in 1937.

Architecturally, the bridge showcases the advanced masonry techniques of the Jin Dynasty and remains an important cultural and historical landmark.`,
    desc_zh: `卢沟桥建于1189年，是中国最著名的古桥之一，以桥上雕刻精美的石狮而闻名，每一只石狮都形态各异。

该桥因马可·波罗的记载而闻名世界，并在1937年的卢沟桥事变中成为重要历史地点。

从建筑角度来看，它展现了金代高超的石工技术，是中国重要的历史文化遗产。`,
  },
  {
    id: "luoyang",
    name: "Luoyang Bridge",
    zh: "洛阳桥",
    year: 1059,
    location: "Quanzhou, China",
    img: "/images/luoyang.jpg",
    gallery: ["/images/luoyang_1.jpg", "/images/luoyang_2.jpg", "/images/luoyang_3.jpg"],
    desc_en: `Luoyang Bridge, completed in 1059 during the Song Dynasty, is a groundbreaking example of ancient marine engineering. It was one of the first large stone bridges built across tidal waters.

Engineers used innovative techniques such as oyster cultivation to stabilize the bridge’s foundation, allowing it to withstand strong sea currents.

The bridge played a vital role in connecting trade routes along the Maritime Silk Road and stands today as a testament to human ingenuity and adaptation to nature.`,
    desc_zh: `洛阳桥建于宋代（1059年），是古代海洋工程的重要里程碑，是最早跨越潮汐水域的大型石桥之一。

建造过程中采用了利用牡蛎固定桥基的创新技术，使桥梁能够抵御强烈海流。

该桥在海上丝绸之路贸易中发挥了重要作用，是人类智慧与自然适应能力的体现。`,
  },
  {
    id: "baodai",
    name: "Baodai Bridge",
    zh: "宝带桥",
    year: 816,
    location: "Suzhou, China",
    img: "/images/baodai.jpg",
    gallery: ["/images/baodai_1.jpg", "/images/baodai_2.jpg", "/images/baodai_3.jpg"],
    desc_en: `Baodai Bridge, built in 816 AD during the Tang Dynasty, is one of the most remarkable multi-arch stone bridges in China. Stretching elegantly across the water in Suzhou, it consists of dozens of small arches forming a long ribbon-like structure.

The bridge was carefully designed to manage water flow while still supporting heavy traffic. Its unique structure helped prevent flooding and allowed boats to pass through multiple openings.

Beyond its engineering brilliance, Baodai Bridge is a cultural symbol of harmony between architecture and nature. It reflects the advanced hydraulic knowledge of ancient China and remains a breathtaking historical landmark today.`,
    desc_zh: `宝带桥建于唐代（公元816年），是中国最著名的多孔石拱桥之一。桥梁在苏州水域上优雅延伸，由数十个小拱组成，宛如一条飘带。

该桥设计精妙，不仅承载交通，还能有效调节水流，防止洪水，并允许船只通过多个拱洞。

除了工程价值外，宝带桥还象征着人与自然的和谐，是中国古代水利技术与建筑艺术结合的典范。`,
  },
  {
    id: "guangji",
    name: "Guangji Bridge",
    zh: "广济桥",
    year: 1170,
    location: "Chaozhou, China",
    img: "/images/guangji.jpg",
    gallery: ["/images/guangji_1.jpg", "/images/guangji_2.jpg", "/images/guangji_3.jpg"],
    desc_en: `Guangji Bridge, built in 1170, is one of China’s Four Ancient Bridges and is famous for its unique hybrid structure combining stone arches with a floating pontoon section.

This innovative design allows sections of the bridge to be opened for passing ships, making it highly adaptable.

The bridge represents a brilliant fusion of practicality and creativity, and remains an iconic cultural landmark in Chaozhou.`,
    desc_zh: `广济桥建于1170年，是中国四大古桥之一，以其石拱与浮桥结合的独特结构而闻名。

桥的一部分可以拆开以供船只通行，具有极高的灵活性。

该桥体现了实用性与创造力的结合，是潮州的重要文化象征。`,
  },
  {
    id: "bianhe",
    name: "Bianhe Rainbow Bridge",
    zh: "汴河虹桥",
    year: 1100,
    location: "Kaifeng, China",
    img: "/images/bianhe.jpg",
    gallery: ["/images/bianhe_1.jpg", "/images/bianhe_2.jpg", "/images/bianhe_3.jpg"],
    desc_en: `Bianhe Rainbow Bridge is a wooden arch bridge famously depicted in the classic painting "Along the River During the Qingming Festival".

Its curved structure resembles a rainbow and symbolizes prosperity in Song Dynasty urban life.

The bridge was a central hub of activity, connecting markets and communities, and represents the sophistication of ancient Chinese city planning.`,
    desc_zh: `汴河虹桥是著名的木拱桥，在《清明上河图》中有生动描绘。

其弧形结构如同彩虹，象征宋代城市的繁荣。

桥梁连接着市集与居民区，是城市生活的重要枢纽，体现了古代城市规划的高度发展。`,
  },
  {
    id: "shuangqiao",
    name: "Shuangqiao",
    zh: "双桥",
    year: 1573,
    location: "Suzhou, China",
    img: "/images/shuangqiao.jpg",
    gallery: ["/images/shuangqiao_1.jpg", "/images/shuangqiao_2.jpg", "/images/shuangqiao_3.jpg"],
    desc_en: `Shuangqiao, meaning "Double Bridge", consists of two intersecting bridges forming a unique visual composition in Suzhou.

It is widely featured in Chinese paintings and is considered a symbol of classical Jiangnan water-town aesthetics.

The bridge reflects the harmony between architecture, water, and daily life.`,
    desc_zh: `双桥由两座桥交叉组成，是苏州最具代表性的景观之一。

它常出现在中国传统绘画中，是江南水乡美学的重要象征。

该桥体现了建筑、水域与生活的和谐统一。`,
  },
  {
    id: "yongtong",
    name: "Yongtong Bridge",
    zh: "永通桥",
    year: 727,
    location: "Hebei, China",
    img: "/images/yongtong.jpg",
    gallery: ["/images/yongtong_1.jpg", "/images/yongtong_2.jpg", "/images/yongtong_3.jpg"],
    desc_en: `Yongtong Bridge, constructed during the Tang Dynasty around 727 AD, is one of the lesser-known yet historically significant stone arch bridges in China.

It reflects the evolution of early bridge engineering and shows how ancient builders improved structural stability over time.

The bridge has survived natural challenges for centuries and remains a valuable cultural heritage site today.`,
    desc_zh: `永通桥建于唐代（约公元727年），是中国较早的石拱桥之一。

它体现了桥梁工程的发展过程，展示了古代工匠如何不断改进结构稳定性。

该桥历经数百年仍然保存良好，是重要的文化遗产。`,
  },
  {
    id: "wanan",
    name: "Wan'an Bridge",
    zh: "万安桥",
    year: 1138,
    location: "Fujian, China",
    img: "/images/wanan.jpg",
    gallery: ["/images/wanan_1.jpg", "/images/wanan_2.jpg", "/images/wanan_3.jpg"],
    desc_en: `Wan'an Bridge is a traditional wooden corridor bridge built during the Song Dynasty. It reflects the unique architectural style of southern China, combining transportation with shelter.

The covered design protects travelers from weather while also serving as a social gathering place for local communities.

It showcases the integration of functionality and cultural life in ancient Chinese architecture.`,
    desc_zh: `万安桥建于宋代，是一座典型的木结构廊桥，体现了中国南方建筑风格。

桥上的廊道不仅为行人遮风避雨，也成为人们交流和休息的场所。

它展示了古代建筑中功能与生活文化的结合。`,
  },
  {
    id: "tongji",
    name: "Tongji Bridge",
    zh: "通济桥",
    year: 1190,
    location: "Guangdong, China",
    img: "/images/tongji.jpg",
    gallery: ["/images/tongji_1.jpg", "/images/tongji_2.jpg", "/images/tongji_3.jpg"],
    desc_en: `Tongji Bridge is an important historical bridge in southern China, serving as a key transportation route for centuries.

It is also associated with local festivals and traditions, symbolizing good fortune and unity among communities.

The bridge continues to play a cultural role beyond its original function.`,
    desc_zh: `通济桥是中国南方重要的古桥之一，长期作为交通要道使用。

它还与当地的传统节日密切相关，象征着好运与团结。

该桥不仅具有交通价值，也具有深厚的文化意义。`,
  },
  {
    id: "shunji",
    name: "Shunji Bridge",
    zh: "顺济桥",
    year: 1200,
    location: "Fujian, China",
    img: "/images/shunji.jpg",
    gallery: ["/images/shunji_1.jpg", "/images/shunji_2.jpg", "/images/shunji_3.jpg"],
    desc_en: `Shunji Bridge reflects traditional Chinese bridge construction techniques, combining simplicity with durability.

It served as an essential connection point for rural communities, supporting trade and daily life.

Its preservation highlights the importance of regional heritage in China.`,
    desc_zh: `顺济桥体现了中国传统桥梁建造技术，结构简洁而坚固。

它曾是连接乡村的重要通道，支持贸易和日常生活。

该桥的保存体现了地方文化遗产的重要性。`,
  },
  {
    id: "jinshui",
    name: "Jinshui Bridge",
    zh: "金水桥",
    year: 1420,
    location: "Beijing, China",
    img: "/images/jinshui.jpg",
    gallery: ["/images/jinshui_1.jpg", "/images/jinshui_2.jpg", "/images/jinshui_3.jpg"],
    desc_en: `Jinshui Bridge is located within the Forbidden City and plays an important ceremonial role.

Its elegant marble design reflects imperial power and traditional Chinese aesthetics.

The bridge is a key architectural element in one of the most famous historical sites in China.`,
    desc_zh: `金水桥位于紫禁城内，具有重要的礼仪意义。

其优雅的汉白玉结构体现了皇权与中国传统美学。

它是中国最著名历史建筑群的重要组成部分。`,
  },
  {
    id: "taiping",
    name: "Taiping Bridge",
    zh: "太平桥",
    year: 1600,
    location: "Anhui, China",
    img: "/images/taiping.jpg",
    gallery: ["/images/taiping_1.jpg", "/images/taiping_2.jpg", "/images/taiping_3.jpg"],
    desc_en: `Taiping Bridge is known for its scenic surroundings and historical importance.

It served as a key route for travelers and merchants, contributing to regional development.

The bridge remains a symbol of peace and stability.`,
    desc_zh: `太平桥以其优美的自然环境和历史价值而闻名。

它曾是商旅往来的重要通道，促进了地区发展。

该桥象征着和平与稳定。`,
  },
  {
    id: "yudai",
    name: "Yudai Bridge",
    zh: "玉带桥",
    year: 1751,
    location: "Beijing, China",
    img: "/images/yudai.jpg",
    gallery: ["/images/yudai_1.jpg", "/images/yudai_2.jpg", "/images/yudai_3.jpg"],
    desc_en: `Yudai Bridge is famous for its high arch, allowing imperial boats to pass underneath.

Its elegant shape resembles a jade belt, giving the bridge its name.

It is a fine example of Qing Dynasty landscape architecture.`,
    desc_zh: `玉带桥以其高拱设计著称，可供皇家船只通行。

其形状宛如玉带，因此得名。

它是清代园林建筑的典范。`,
  },
  {
    id: "ninedragon",
    name: "Nine-Dragon Bridge",
    zh: "九龙桥",
    year: 1700,
    location: "Beijing, China",
    img: "/images/ninedragon.jpg",
    gallery: ["/images/ninedragon_1.jpg", "/images/ninedragon_2.jpg", "/images/ninedragon_3.jpg"],
    desc_en: `Nine-Dragon Bridge is decorated with intricate carvings of dragons, symbolizing power and protection.

It reflects imperial symbolism and artistic craftsmanship.

The bridge stands as a cultural and artistic treasure.`,
    desc_zh: `九龙桥以精美的龙雕刻装饰，象征权力与守护。

它体现了皇家象征意义与艺术工艺。

该桥是文化与艺术的珍贵遗产。`,
  },
  {
    id: "fengyu",
    name: "Fengyu Bridge",
    zh: "风雨桥",
    year: 1910,
    location: "Guangxi, China",
    img: "/images/fengyu.jpg",
    gallery: ["/images/fengyu_1.jpg", "/images/fengyu_2.jpg", "/images/fengyu_3.jpg"],
    desc_en: `Fengyu Bridge is a traditional covered bridge built by the Dong ethnic group. It combines functionality with architecture, providing shelter and space for social gatherings.`,
    desc_zh: `风雨桥是侗族建造的传统廊桥，不仅用于通行，还提供遮风避雨的空间。`,
  },
];

export const bridges = rawBridges.map((bridge) => ({
  ...bridge,
  gallery: (bridge.gallery && bridge.gallery.length > 0 ? bridge.gallery : [bridge.img]).filter(Boolean),
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
}));
