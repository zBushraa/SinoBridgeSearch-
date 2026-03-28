import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [lang, setLang] = useState("zh"); // default Chinese
  const [selected, setSelected] = useState(null);

  const data = [
    {
      name:"Zhaozhou Bridge",
      zh:"赵州桥",
      year:605,
      location:"Hebei, China",
      img:"/images/zhaozhou.jpg",
      type:"Stone Arch",
      length:"50m",
      dynasty:"Sui",
      desc_en:"World’s oldest open-spandrel stone arch bridge.",
      desc_zh:"世界上最古老的敞肩式石拱桥。",
      history:"Built by Li Chun, survived floods and earthquakes."
    },
    {
      name:"Yongtong Bridge",
      zh:"永通桥",
      year:727,
      location:"Hebei, China",
      img:"/images/yongtong.jpg",
      type:"Stone Arch",
      length:"32m",
      dynasty:"Tang",
      desc_en:"Inspired by Zhaozhou Bridge design.",
      desc_zh:"受赵州桥设计启发。",
      history:"Important transport bridge in Tang era."
    },
    {
      name:"Baodai Bridge",
      zh:"宝带桥",
      year:816,
      location:"Suzhou, China",
      img:"/images/baodai.jpg",
      type:"Multi-arch",
      length:"317m",
      dynasty:"Tang",
      desc_en:"Famous 53-arch bridge.",
      desc_zh:"著名的53孔桥。",
      history:"One of China’s longest ancient bridges."
    },
    {
      name:"Luoyang Bridge",
      zh:"洛阳桥",
      year:1059,
      location:"Quanzhou, China",
      img:"/images/luoyang.jpg",
      type:"Stone Beam",
      length:"731m",
      dynasty:"Song",
      desc_en:"Early sea-crossing bridge.",
      desc_zh:"早期跨海桥。",
      history:"Used oyster reef foundation."
    },
    {
      name:"Bianhe Rainbow Bridge",
      zh:"汴河虹桥",
      year:1100,
      location:"Kaifeng, China",
      img:"/images/bianhe.jpg",
      type:"Wood Arch",
      length:"Unknown",
      dynasty:"Song",
      desc_en:"Legendary bridge from painting.",
      desc_zh:"出现在古画中的桥。",
      history:"From Qingming Festival scroll."
    },
    {
      name:"Anping Bridge",
      zh:"安平桥",
      year:1138,
      location:"Fujian, China",
      img:"/images/anping.jpg",
      type:"Stone",
      length:"2255m",
      dynasty:"Song",
      desc_en:"Longest ancient bridge.",
      desc_zh:"最长古桥。",
      history:"Called “Bridge with No End”."
    },
    {
      name:"Wan'an Bridge",
      zh:"万安桥",
      year:1138,
      location:"Fujian, China",
      img:"/images/wanan.jpg",
      type:"Wood Covered",
      length:"98m",
      dynasty:"Song",
      desc_en:"Traditional covered bridge.",
      desc_zh:"传统廊桥。",
      history:"Wood architecture example."
    },
    {
      name:"Guangji Bridge",
      zh:"广济桥",
      year:1170,
      location:"Chaozhou, China",
      img:"/images/guangji.jpg",
      type:"Stone + Floating",
      length:"518m",
      dynasty:"Song",
      desc_en:"Floating bridge section.",
      desc_zh:"石桥与浮桥结合。",
      history:"One of 4 famous bridges."
    },
    {
      name:"Lugou Bridge",
      zh:"卢沟桥",
      year:1189,
      location:"Beijing, China",
      img:"/images/lugou.jpg",
      type:"Stone Arch",
      length:"266m",
      dynasty:"Jin",
      desc_en:"Marco Polo Bridge.",
      desc_zh:"卢沟桥。",
      history:"Known for lion statues."
    },
    {
      name:"Tongji Bridge",
      zh:"通济桥",
      year:1190,
      location:"Guangdong, China",
      img:"/images/tongji.jpg",
      type:"Stone",
      length:"Unknown",
      dynasty:"Song",
      desc_en:"Cultural symbol.",
      desc_zh:"文化象征。",
      history:"Festival usage."
    },
    {
      name:"Shunji Bridge",
      zh:"顺济桥",
      year:1200,
      location:"Fujian, China",
      img:"/images/shunji.jpg",
      type:"Stone",
      length:"Unknown",
      dynasty:"Song",
      desc_en:"Historic trade bridge.",
      desc_zh:"贸易桥。",
      history:"Important route."
    },
    {
      name:"Jinshui Bridge",
      zh:"金水桥",
      year:1420,
      location:"Beijing, China",
      img:"/images/jinshui.jpg",
      type:"Marble",
      length:"Unknown",
      dynasty:"Ming",
      desc_en:"Forbidden City bridge.",
      desc_zh:"紫禁城桥。",
      history:"Imperial use only."
    },
    {
      name:"Shuangqiao",
      zh:"双桥",
      year:1573,
      location:"Suzhou, China",
      img:"/images/shuangqiao.jpg",
      type:"Twin Arch",
      length:"Unknown",
      dynasty:"Ming",
      desc_en:"Twin bridges.",
      desc_zh:"双桥。",
      history:"Famous scenic spot."
    },
    {
      name:"Taiping Bridge",
      zh:"太平桥",
      year:1600,
      location:"Anhui, China",
      img:"/images/taiping.jpg",
      type:"Stone",
      length:"Unknown",
      dynasty:"Ming",
      desc_en:"Symbol of peace.",
      desc_zh:"和平象征。",
      history:"Local landmark."
    },
    {
      name:"Yudai Bridge",
      zh:"玉带桥",
      year:1751,
      location:"Beijing, China",
      img:"/images/yudai.jpg",
      type:"Arch",
      length:"Unknown",
      dynasty:"Qing",
      desc_en:"Elegant arch bridge.",
      desc_zh:"优雅拱桥。",
      history:"Summer Palace."
    },
    {
      name:"Nine-Dragon Bridge",
      zh:"九龙桥",
      year:1700,
      location:"Beijing, China",
      img:"/images/ninedragon.jpg",
      type:"Stone",
      length:"Unknown",
      dynasty:"Qing",
      desc_en:"Dragon carvings.",
      desc_zh:"九龙雕刻。",
      history:"Imperial symbol."
    },
    {
      name:"Fengyu Bridge",
      zh:"风雨桥",
      year:1910,
      location:"Guangxi, China",
      img:"/images/fengyu.jpg",
      type:"Wood Covered",
      length:"64m",
      dynasty:"Qing",
      desc_en:"Dong minority bridge.",
      desc_zh:"侗族风雨桥。",
      history:"Used for shelter."
    }
  ];

  const filtered = data.filter(item =>
    item.name.toLowerCase().includes(text.toLowerCase()) ||
    item.zh.includes(text)
  );

  if (selected) {
    return (
      <div style={styles.detailContainer}>
        <button onClick={()=>setSelected(null)}>← {lang==="en"?"Back":"返回"}</button>

        <div style={styles.detailCard}>
          <img src={selected.img} style={styles.detailImage}/>
          <h1>{lang==="en"?selected.name:selected.zh}</h1>

          <p>{lang==="en"?"Year":"年份"}: {selected.year}</p>
          <p>{lang==="en"?"Location":"地点"}: {selected.location}</p>
          <p>{lang==="en"?"Type":"类型"}: {selected.type}</p>
          <p>{lang==="en"?"Length":"长度"}: {selected.length}</p>
          <p>{lang==="en"?"Dynasty":"朝代"}: {selected.dynasty}</p>

          <p>{lang==="en"?selected.desc_en:selected.desc_zh}</p>
          <p>{selected.history}</p>

          <a href={`https://www.google.com/maps/search/${selected.location}`} target="_blank">
            {lang==="en"?"View Map":"查看地图"}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>

      <div style={styles.topBar}>
        <button onClick={()=>setLang(lang==="en"?"zh":"en")}>
          {lang==="en"?"中文":"English"}
        </button>
      </div>

      <div style={styles.centerBox}>
        <h1>🌉 SinoBridge</h1>

        <input
          placeholder={lang==="en"?"Search...":"搜索..."}
          value={text}
          onChange={(e)=>setText(e.target.value)}
          style={styles.input}
        />
      </div>

      <div style={styles.results}>
        {filtered.map((item,index)=>(
          <div key={index} style={styles.card} onClick={()=>setSelected(item)}>
            <img src={item.img} style={styles.image}/>
            <p>{lang==="en"?item.name:item.zh}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

const styles = {
  container:{minHeight:"100vh",background:"linear-gradient(to right,#e0b3ff,#ffb3d9)",padding:"20px"},
  topBar:{display:"flex",justifyContent:"flex-end"},
  centerBox:{textAlign:"center",marginTop:"40px"},
  input:{width:"300px",padding:"10px",borderRadius:"25px",border:"none"},
  results:{display:"flex",flexWrap:"wrap",justifyContent:"center",marginTop:"30px"},
  card:{width:"220px",margin:"10px",padding:"10px",background:"#fff",borderRadius:"10px",cursor:"pointer"},
  image:{width:"100%",height:"130px",objectFit:"cover"},
  detailContainer:{padding:"20px",textAlign:"center"},
  detailCard:{background:"#fff",padding:"20px",borderRadius:"10px",maxWidth:"500px",margin:"auto"},
  detailImage:{width:"100%"}
};

export default App;