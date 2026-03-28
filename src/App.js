import { useState } from "react";

function App() {
  const [lang, setLang] = useState("zh");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const bridges = [
    {
      name:"Zhaozhou Bridge",
      zh:"赵州桥",
      year:605,
      location:"Hebei, China",
      img:"/images/zhaozhou.jpg",
      gallery:["/images/zhaozhou.jpg"],
      type_en:"Stone Arch",
      type_zh:"石拱桥",
      dynasty_en:"Sui",
      dynasty_zh:"隋朝",
      desc_en:"Oldest stone arch bridge.",
      desc_zh:"世界最古老的石拱桥。"
    },
    {
      name:"Yongtong Bridge",
      zh:"永通桥",
      year:727,
      location:"Hebei, China",
      img:"/images/yongtong.jpg",
      gallery:["/images/yongtong.jpg"],
      type_en:"Stone",
      type_zh:"石桥",
      dynasty_en:"Tang",
      dynasty_zh:"唐朝",
      desc_en:"Ancient Tang bridge.",
      desc_zh:"唐代古桥。"
    },
    {
      name:"Baodai Bridge",
      zh:"宝带桥",
      year:816,
      location:"Suzhou, China",
      img:"/images/baodai.jpg",
      gallery:["/images/baodai.jpg"],
      type_en:"Multi Arch",
      type_zh:"多孔桥",
      dynasty_en:"Tang",
      dynasty_zh:"唐朝",
      desc_en:"Famous 53 arch bridge.",
      desc_zh:"著名的53孔桥。"
    },
    {
      name:"Luoyang Bridge",
      zh:"洛阳桥",
      year:1059,
      location:"Quanzhou, China",
      img:"/images/luoyang.jpg",
      gallery:["/images/luoyang.jpg"],
      type_en:"Stone Beam",
      type_zh:"石梁桥",
      dynasty_en:"Song",
      dynasty_zh:"宋朝",
      desc_en:"Early sea bridge.",
      desc_zh:"早期跨海桥。"
    },
    {
      name:"Bianhe Rainbow Bridge",
      zh:"汴河虹桥",
      year:1100,
      location:"Kaifeng, China",
      img:"/images/bianhe.jpg",
      gallery:["/images/bianhe.jpg"],
      type_en:"Wood",
      type_zh:"木桥",
      dynasty_en:"Song",
      dynasty_zh:"宋朝",
      desc_en:"From famous painting.",
      desc_zh:"来自著名画作。"
    },
    {
      name:"Anping Bridge",
      zh:"安平桥",
      year:1138,
      location:"Fujian, China",
      img:"/images/anping.jpg",
      gallery:["/images/anping.jpg"],
      type_en:"Stone",
      type_zh:"石桥",
      dynasty_en:"Song",
      dynasty_zh:"宋朝",
      desc_en:"Longest ancient bridge.",
      desc_zh:"最长古桥。"
    },
    {
      name:"Wan'an Bridge",
      zh:"万安桥",
      year:1138,
      location:"Fujian, China",
      img:"/images/wanan.jpg",
      gallery:["/images/wanan.jpg"],
      type_en:"Covered Wood",
      type_zh:"廊桥",
      dynasty_en:"Song",
      dynasty_zh:"宋朝",
      desc_en:"Covered wooden bridge.",
      desc_zh:"传统廊桥。"
    },
    {
      name:"Guangji Bridge",
      zh:"广济桥",
      year:1170,
      location:"Chaozhou, China",
      img:"/images/guangji.jpg",
      gallery:["/images/guangji.jpg"],
      type_en:"Mixed",
      type_zh:"混合桥",
      dynasty_en:"Song",
      dynasty_zh:"宋朝",
      desc_en:"Floating section bridge.",
      desc_zh:"浮桥结构。"
    },
    {
      name:"Lugou Bridge",
      zh:"卢沟桥",
      year:1189,
      location:"Beijing, China",
      img:"/images/lugou.jpg",
      gallery:["/images/lugou.jpg"],
      type_en:"Stone Arch",
      type_zh:"石拱桥",
      dynasty_en:"Jin",
      dynasty_zh:"金朝",
      desc_en:"Marco Polo Bridge.",
      desc_zh:"卢沟桥。"
    },
    {
      name:"Tongji Bridge",
      zh:"通济桥",
      year:1190,
      location:"Guangdong, China",
      img:"/images/tongji.jpg",
      gallery:["/images/tongji.jpg"],
      type_en:"Stone",
      type_zh:"石桥",
      dynasty_en:"Song",
      dynasty_zh:"宋朝",
      desc_en:"Cultural bridge.",
      desc_zh:"文化桥。"
    },
    {
      name:"Shunji Bridge",
      zh:"顺济桥",
      year:1200,
      location:"Fujian, China",
      img:"/images/shunji.jpg",
      gallery:["/images/shunji.jpg"],
      type_en:"Stone",
      type_zh:"石桥",
      dynasty_en:"Song",
      dynasty_zh:"宋朝",
      desc_en:"Historic route bridge.",
      desc_zh:"历史桥梁。"
    },
    {
      name:"Jinshui Bridge",
      zh:"金水桥",
      year:1420,
      location:"Beijing, China",
      img:"/images/jinshui.jpg",
      gallery:["/images/jinshui.jpg"],
      type_en:"Marble",
      type_zh:"石桥",
      dynasty_en:"Ming",
      dynasty_zh:"明朝",
      desc_en:"Forbidden city bridge.",
      desc_zh:"紫禁城桥。"
    },
    {
      name:"Shuangqiao",
      zh:"双桥",
      year:1573,
      location:"Suzhou, China",
      img:"/images/shuangqiao.jpg",
      gallery:["/images/shuangqiao.jpg"],
      type_en:"Twin",
      type_zh:"双桥",
      dynasty_en:"Ming",
      dynasty_zh:"明朝",
      desc_en:"Twin scenic bridges.",
      desc_zh:"双桥景观。"
    },
    {
      name:"Taiping Bridge",
      zh:"太平桥",
      year:1600,
      location:"Anhui, China",
      img:"/images/taiping.jpg",
      gallery:["/images/taiping.jpg"],
      type_en:"Stone",
      type_zh:"石桥",
      dynasty_en:"Ming",
      dynasty_zh:"明朝",
      desc_en:"Peace symbol bridge.",
      desc_zh:"和平象征。"
    },
    {
      name:"Yudai Bridge",
      zh:"玉带桥",
      year:1751,
      location:"Beijing, China",
      img:"/images/yudai.jpg",
      gallery:["/images/yudai.jpg"],
      type_en:"Arch",
      type_zh:"拱桥",
      dynasty_en:"Qing",
      dynasty_zh:"清朝",
      desc_en:"Elegant arch bridge.",
      desc_zh:"优美拱桥。"
    },
    {
      name:"Nine-Dragon Bridge",
      zh:"九龙桥",
      year:1700,
      location:"Beijing, China",
      img:"/images/ninedragon.jpg",
      gallery:["/images/ninedragon.jpg"],
      type_en:"Stone",
      type_zh:"石桥",
      dynasty_en:"Qing",
      dynasty_zh:"清朝",
      desc_en:"Dragon decorated bridge.",
      desc_zh:"九龙装饰桥。"
    },
    {
      name:"Fengyu Bridge",
      zh:"风雨桥",
      year:1910,
      location:"Guangxi, China",
      img:"/images/fengyu.jpg",
      gallery:["/images/fengyu.jpg"],
      type_en:"Wood Covered",
      type_zh:"风雨桥",
      dynasty_en:"Qing",
      dynasty_zh:"清朝",
      desc_en:"Wind and rain bridge.",
      desc_zh:"侗族风雨桥。"
    }
  ];

  const filtered = bridges.filter(b =>
    b.name.toLowerCase().includes(search.toLowerCase()) ||
    b.zh.includes(search)
  );

  if (selected) {
    return (
      <div style={{padding:"20px"}}>
        <button onClick={()=>setSelected(null)}>← Back</button>

        <img src={selected.img} style={{width:"100%"}} />

        <h2>{selected.name} / {selected.zh}</h2>

        <p>Year / 年份: {selected.year}</p>
        <p>Location / 地点: {selected.location}</p>
        <p>Type / 类型: {selected.type_en} / {selected.type_zh}</p>
        <p>Dynasty / 朝代: {selected.dynasty_en} / {selected.dynasty_zh}</p>

        <p>{selected.desc_en}</p>
        <p>{selected.desc_zh}</p>
      </div>
    );
  }

  return (
    <div style={{background:"linear-gradient(to right,#e0b3ff,#ffb3d9)",minHeight:"100vh",padding:"20px"}}>
      <div style={{textAlign:"right"}}>
        <button onClick={()=>setLang(lang==="en"?"zh":"en")}>
          {lang==="en"?"中文":"English"}
        </button>
      </div>

      <h1 style={{textAlign:"center"}}>🌉 SinoBridge</h1>

      <input
        placeholder="Search / 搜索"
        value={search}
        onChange={e=>setSearch(e.target.value)}
        style={{padding:"10px",borderRadius:"20px"}}
      />

      <div style={{display:"flex",flexWrap:"wrap"}}>
        {filtered.map((b,i)=>(
          <div key={i} style={{width:"200px",margin:"10px"}} onClick={()=>setSelected(b)}>
            <img src={b.img} style={{width:"100%"}} />
            <p>
  {b.name} <br/>
  <span style={{fontSize:"12px",opacity:0.7}}>{b.zh}</span>
</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;