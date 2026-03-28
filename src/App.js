import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [lang, setLang] = useState("zh");
  const [selected, setSelected] = useState(null);

  const data = [
    {
      name: "Zhaozhou Bridge",
      zh: "赵州桥",
      year: 605,
      location: "Hebei",
      type: "Stone Arch",
      desc: "World’s oldest open-spandrel stone arch bridge",
      zhDesc: "世界上最古老的敞肩石拱桥",
      img: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Zhaozhou_Bridge.jpg"
    },
    {
      name: "Yongtong Bridge",
      zh: "永通桥",
      year: 727,
      location: "Hebei",
      type: "Stone Arch",
      desc: "Ancient Tang dynasty bridge",
      zhDesc: "唐代古桥",
      img: "https://upload.wikimedia.org/wikipedia/commons/8/80/Yongtong_Bridge.jpg"
    },
    {
      name: "Baodai Bridge",
      zh: "宝带桥",
      year: 816,
      location: "Suzhou",
      type: "Multi-arch",
      desc: "Famous long multi-arch bridge",
      zhDesc: "著名长多拱桥",
      img: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Baodai_Bridge.jpg"
    },
    {
      name: "Luoyang Bridge",
      zh: "洛阳桥",
      year: 1059,
      location: "Quanzhou",
      type: "Stone Beam",
      desc: "One of the earliest sea-crossing bridges",
      zhDesc: "最早的跨海桥之一",
      img: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Luoyang_Bridge.jpg"
    },
    {
      name: "Bianhe Rainbow Bridge",
      zh: "汴河虹桥",
      year: 1100,
      location: "Kaifeng",
      type: "Wood Arch",
      desc: "Famous from ancient painting",
      zhDesc: "古画中的著名桥",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Rainbow_Bridge.jpg"
    },
    {
      name: "Anping Bridge",
      zh: "安平桥",
      year: 1138,
      location: "Fujian",
      type: "Stone Beam",
      desc: "One of the longest stone bridges",
      zhDesc: "最长石桥之一",
      img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Anping_Bridge.jpg"
    },
    {
      name: "Guangji Bridge",
      zh: "广济桥",
      year: 1170,
      location: "Chaozhou",
      type: "Floating + Beam",
      desc: "Unique combination bridge",
      zhDesc: "独特组合桥",
      img: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Guangji_Bridge.jpg"
    },
    {
      name: "Lugou Bridge",
      zh: "卢沟桥",
      year: 1189,
      location: "Beijing",
      type: "Stone Arch",
      desc: "Historic Marco Polo Bridge",
      zhDesc: "著名卢沟桥",
      img: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Lugou_Bridge.jpg"
    },
    {
      name: "Jinshui Bridge",
      zh: "金水桥",
      year: 1420,
      location: "Beijing",
      type: "Imperial",
      desc: "Bridge in Forbidden City",
      zhDesc: "紫禁城桥",
      img: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Jinshui_Bridge.jpg"
    },
    {
      name: "Yudai Bridge",
      zh: "玉带桥",
      year: 1751,
      location: "Beijing",
      type: "Arch",
      desc: "Beautiful jade belt bridge",
      zhDesc: "美丽玉带桥",
      img: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Yudai_Bridge.jpg"
    }
  ];

  const filtered = data.filter(item =>
    item.name.toLowerCase().includes(text.toLowerCase()) ||
    item.zh.includes(text)
  );

  // DETAILS PAGE
  if (selected) {
    return (
      <div style={styles.detailContainer}>
        <button onClick={() => setSelected(null)} style={styles.backBtn}>
          ← {lang === "en" ? "Back" : "返回"}
        </button>

        <div style={styles.detailCard}>
          <img src={selected.img} style={styles.detailImage} />

          <h1>{lang === "en" ? selected.name : selected.zh}</h1>

          <p>{lang === "en" ? selected.desc : selected.zhDesc}</p>

          <p><b>{lang==="en"?"Year":"年份"}:</b> {selected.year}</p>
          <p><b>{lang==="en"?"Location":"地点"}:</b> {selected.location}</p>
          <p><b>{lang==="en"?"Type":"类型"}:</b> {selected.type}</p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>

      {/* LANGUAGE */}
      <div style={styles.topBar}>
        <button onClick={() => setLang(lang === "en" ? "zh" : "en")} style={styles.langBtn}>
          {lang === "en" ? "中文" : "English"}
        </button>
      </div>

      {/* SEARCH */}
      <div style={styles.centerBox}>
        <h1 style={styles.logo}>🌉 SinoBridge</h1>

        <input
          placeholder={lang==="en"?"Search bridges...":"搜索桥梁..."}
          value={text}
          onChange={(e)=>setText(e.target.value)}
          style={styles.input}
        />
      </div>

      {/* LIST */}
      <div style={styles.results}>
        {filtered.map((item,index)=>(
          <div key={index} style={styles.card} onClick={()=>setSelected(item)}>
            <img src={item.img} style={styles.image}/>
            <h2>{lang==="en"?item.name:item.zh}</h2>
            <p>{lang==="en"?item.desc:item.zhDesc}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

const styles = {
  container:{minHeight:"100vh",background:"linear-gradient(to right,#e0f7fa,#e1bee7)",padding:"20px"},
  topBar:{display:"flex",justifyContent:"flex-end"},
  langBtn:{padding:"8px 15px",background:"#6a1b9a",color:"#fff",border:"none",borderRadius:"20px"},
  centerBox:{textAlign:"center",marginTop:"40px"},
  logo:{fontSize:"40px"},
  input:{width:"320px",padding:"10px",borderRadius:"25px",border:"none"},
  results:{display:"flex",flexWrap:"wrap",justifyContent:"center",marginTop:"30px"},
  card:{width:"240px",margin:"10px",padding:"10px",background:"#fff",borderRadius:"10px",cursor:"pointer"},
  image:{width:"100%",height:"140px",objectFit:"cover"},
  detailContainer:{textAlign:"center",padding:"20px"},
  detailCard:{maxWidth:"600px",margin:"auto",background:"#fff",padding:"20px",borderRadius:"10px"},
  detailImage:{width:"100%"}
};

export default App;