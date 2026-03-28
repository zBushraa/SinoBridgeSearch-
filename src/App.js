import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [lang, setLang] = useState("zh"); // default Chinese
  const [sortType, setSortType] = useState("year");
  const [modalItem, setModalItem] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const data = [
    {
      name: "Zhaozhou Bridge",
      zh: "赵州桥",
      year: 605,
      desc: "Oldest stone arch bridge in China",
      zhDesc: "中国最古老的石拱桥",
      img: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Zhaozhou_Bridge.jpg"
    },
    {
      name: "Lugou Bridge",
      zh: "卢沟桥",
      year: 1189,
      desc: "Historic stone bridge in Beijing",
      zhDesc: "北京著名的石桥",
      img: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Lugou_Bridge.jpg"
    },
    {
      name: "Guangji Bridge",
      zh: "广济桥",
      year: 1170,
      desc: "Ancient floating bridge",
      zhDesc: "古老的浮桥",
      img: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Guangji_Bridge.jpg"
    }
  ];

  // Filter and sort
  let filtered = data.filter(
    item => item.year < 1911 && item.name.toLowerCase().includes(text.toLowerCase())
  );
  if (sortType === "year") filtered.sort((a, b) => a.year - b.year);
  if (sortType === "nameEn") filtered.sort((a, b) => a.name.localeCompare(b.name));
  if (sortType === "nameZh") filtered.sort((a, b) => a.zh.localeCompare(b.zh));

  const toggleFavorite = (item) => {
    if (favorites.includes(item.name)) {
      setFavorites(favorites.filter(f => f !== item.name));
    } else {
      setFavorites([...favorites, item.name]);
    }
  };

  return (
    <div style={styles.container}>
      {/* Top Bar */}
      <div style={styles.topBar}>
        <button
          onClick={() => setLang(lang === "en" ? "zh" : "en")}
          style={{ ...styles.langBtn, background: "#FF6B6B" }}
        >
          {lang === "en" ? "中文" : "English"}
        </button>
      </div>

      {/* Center Box */}
      <div style={styles.centerBox}>
        <h1 style={styles.logo}>🌉</h1>
        <h2 style={styles.subtitle}>SinoBridge Search / 中桥搜索</h2>

        <input
          placeholder={lang === "en" ? "Search ancient bridge..." : "搜索古桥..."}
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={styles.input}
        />

        {/* Sorting Buttons */}
        <div style={styles.sortBar}>
          <button onClick={() => setSortType("year")} style={{ ...styles.sortBtn, background: "#4ECDC4" }}>
            Sort by Year
          </button>
          <button onClick={() => setSortType("nameEn")} style={{ ...styles.sortBtn, background: "#556270" }}>
            Sort by Name (EN)
          </button>
          <button onClick={() => setSortType("nameZh")} style={{ ...styles.sortBtn, background: "#C7F464" }}>
            Sort by Name (ZH)
          </button>
        </div>
      </div>

      {/* Bridge Cards */}
      <div style={styles.results}>
        {filtered.map((item, index) => (
          <div key={index} style={styles.card} onClick={() => setModalItem(item)}>
            <img src={item.img} alt={item.name} style={styles.image} />
            <div style={styles.details}>
              <h2>{item.zh} / {item.name}</h2>
              <p>{lang === "en" ? item.desc : item.zhDesc}</p>
              <p>{lang === "en" ? "Year: " : "年份: "}{item.year}</p>
              <button
                style={styles.favBtn}
                onClick={(e) => { e.stopPropagation(); toggleFavorite(item); }}
              >
                {favorites.includes(item.name) ? "★" : "☆"} Favorite
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalItem && (
        <div style={styles.modalBg} onClick={() => setModalItem(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <img src={modalItem.img} alt={modalItem.name} style={styles.modalImage} />
            <h2>{modalItem.zh} / {modalItem.name}</h2>
            <p>{modalItem.zhDesc}</p>
            <p>{modalItem.desc}</p>
            <p>Year: {modalItem.year}</p>
            <button style={styles.closeBtn} onClick={() => setModalItem(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: { background: "#fefefe", minHeight: "100vh", fontFamily: "Arial" },
  topBar: { display: "flex", justifyContent: "flex-end", padding: "20px" },
  langBtn: { padding: "8px 16px", border: "none", borderRadius: "8px", color: "#fff", cursor: "pointer", fontWeight: "bold" },
  centerBox: { display: "flex", flexDirection: "column", alignItems: "center", marginTop: "40px" },
  logo: { fontSize: "50px", marginBottom: "10px" },
  subtitle: { fontSize: "22px", marginBottom: "20px", fontWeight: "500", color: "#333" },
  input: { width: "400px", padding: "12px", borderRadius: "25px", border: "1px solid #ccc", fontSize: "16px", outline: "none", marginBottom: "15px" },
  sortBar: { display: "flex", gap: "10px", marginBottom: "20px", flexWrap: "wrap", justifyContent: "center" },
  sortBtn: { padding: "8px 16px", border: "none", borderRadius: "8px", color: "#fff", cursor: "pointer", fontWeight: "bold", transition: "0.3s" },
  results: { display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "25px" },
  card: { width: "320px", borderRadius: "12px", overflow: "hidden", boxShadow: "0 6px 16px rgba(0,0,0,0.2)", cursor: "pointer", transition: "transform 0.3s, box-shadow 0.3s" },
  image: { width: "100%", height: "220px", objectFit: "cover", transition: "transform 0.3s, box-shadow 0.3s" },
  details: { padding: "15px", background: "#fff" },
  favBtn: { marginTop: "8px", padding: "6px 12px", borderRadius: "6px", border: "none", background: "#FFB347", cursor: "pointer", fontWeight: "bold" },
  modalBg: { position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.6)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000 },
  modalContent: { background: "#fff", padding: "20px", borderRadius: "12px", maxWidth: "500px", width: "90%", textAlign: "center", position: "relative" },
  modalImage: { width: "100%", height: "250px", objectFit: "cover", marginBottom: "15px", borderRadius: "8px" },
  closeBtn: { padding: "8px 16px", border: "none", borderRadius: "6px", background: "#007BFF", color: "#fff", cursor: "pointer", marginTop: "10px" }
};

export default App;