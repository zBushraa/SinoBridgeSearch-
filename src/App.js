import { useState } from "react";

function App() {
  const [lang, setLang] = useState("zh");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const bridges = [
    { name:"Zhaozhou Bridge", zh:"赵州桥", year:605, location:"Hebei", img:"/images/zhaozhou.jpg", type:"Stone Arch", dynasty:"Sui" },
    { name:"Yongtong Bridge", zh:"永通桥", year:727, location:"Hebei", img:"/images/yongtong.jpg", type:"Stone", dynasty:"Tang" },
    { name:"Baodai Bridge", zh:"宝带桥", year:816, location:"Suzhou", img:"/images/baodai.jpg", type:"Multi-arch", dynasty:"Tang" },
    { name:"Luoyang Bridge", zh:"洛阳桥", year:1059, location:"Quanzhou", img:"/images/luoyang.jpg", type:"Stone Beam", dynasty:"Song" },
    { name:"Bianhe Rainbow Bridge", zh:"汴河虹桥", year:1100, location:"Kaifeng", img:"/images/bianhe.jpg", type:"Wood", dynasty:"Song" },
    { name:"Anping Bridge", zh:"安平桥", year:1138, location:"Fujian", img:"/images/anping.jpg", type:"Stone", dynasty:"Song" },
    { name:"Wan'an Bridge", zh:"万安桥", year:1138, location:"Fujian", img:"/images/wanan.jpg", type:"Wood Covered", dynasty:"Song" },
    { name:"Guangji Bridge", zh:"广济桥", year:1170, location:"Chaozhou", img:"/images/guangji.jpg", type:"Mixed", dynasty:"Song" },
    { name:"Lugou Bridge", zh:"卢沟桥", year:1189, location:"Beijing", img:"/images/lugou.jpg", type:"Stone Arch", dynasty:"Jin" },
    { name:"Tongji Bridge", zh:"通济桥", year:1190, location:"Guangdong", img:"/images/tongji.jpg", type:"Stone", dynasty:"Song" },
    { name:"Shunji Bridge", zh:"顺济桥", year:1200, location:"Fujian", img:"/images/shunji.jpg", type:"Stone", dynasty:"Song" },
    { name:"Jinshui Bridge", zh:"金水桥", year:1420, location:"Beijing", img:"/images/jinshui.jpg", type:"Marble", dynasty:"Ming" },
    { name:"Shuangqiao", zh:"双桥", year:1573, location:"Suzhou", img:"/images/shuangqiao.jpg", type:"Twin", dynasty:"Ming" },
    { name:"Taiping Bridge", zh:"太平桥", year:1600, location:"Anhui", img:"/images/taiping.jpg", type:"Stone", dynasty:"Ming" },
    { name:"Yudai Bridge", zh:"玉带桥", year:1751, location:"Beijing", img:"/images/yudai.jpg", type:"Arch", dynasty:"Qing" },
    { name:"Nine-Dragon Bridge", zh:"九龙桥", year:1700, location:"Beijing", img:"/images/ninedragon.jpg", type:"Stone", dynasty:"Qing" },
    { name:"Fengyu Bridge", zh:"风雨桥", year:1910, location:"Guangxi", img:"/images/fengyu.jpg", type:"Wood Covered", dynasty:"Qing" }
  ];

  const filtered = bridges.filter(b =>
    b.name.toLowerCase().includes(search.toLowerCase()) ||
    b.zh.includes(search)
  );

  if (selected) {
    return (
      <div style={styles.container}>
        <button onClick={()=>setSelected(null)}>← Back</button>

        <div style={styles.detail}>
          <img src={selected.img} style={styles.detailImg} />

          <h2>{lang==="en"?selected.name:selected.zh}</h2>
          <p>{lang==="en"?"Year":"年份"}: {selected.year}</p>
          <p>{lang==="en"?"Location":"地点"}: {selected.location}</p>
          <p>{lang==="en"?"Type":"类型"}: {selected.type}</p>
          <p>{lang==="en"?"Dynasty":"朝代"}: {selected.dynasty}</p>

          <a href={`https://www.google.com/maps/search/${selected.location}`} target="_blank">
            {lang==="en"?"View Map":"查看地图"}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>

      <div style={{textAlign:"right"}}>
        <button onClick={()=>setLang(lang==="en"?"zh":"en")}>
          {lang==="en"?"中文":"English"}
        </button>
      </div>

      <h1 style={{textAlign:"center"}}>🌉 SinoBridge</h1>

      <div style={{textAlign:"center"}}>
        <input
          placeholder={lang==="en"?"Search...":"搜索..."}
          value={search}
          onChange={e=>setSearch(e.target.value)}
          style={styles.input}
        />
      </div>

      <div style={styles.grid}>
        {filtered.map((b,i)=>(
          <div key={i} style={styles.card} onClick={()=>setSelected(b)}>
            <img src={b.img} loading="lazy" style={styles.img}/>
            <p>{lang==="en"?b.name:b.zh}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

const styles = {
  container:{background:"linear-gradient(to right,#e0b3ff,#ffb3d9)",minHeight:"100vh",padding:"20px"},
  input:{padding:"10px",borderRadius:"20px",border:"none",width:"250px"},
  grid:{display:"flex",flexWrap:"wrap",justifyContent:"center",marginTop:"20px"},
  card:{width:"200px",margin:"10px",background:"#fff",padding:"10px",borderRadius:"10px",cursor:"pointer"},
  img:{width:"100%",height:"120px",objectFit:"cover"},
  detail:{background:"#fff",padding:"20px",borderRadius:"10px",maxWidth:"400px",margin:"auto"},
  detailImg:{width:"100%"}
};

export default App;