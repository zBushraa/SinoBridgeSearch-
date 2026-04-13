import { useDeferredValue, useEffect, useState } from "react";
import "./App.css";
import { bridges } from "./data/bridges";
import { loadCustomBridges, saveCustomBridges } from "./services/bridgeStore";
import { getTimelineSummary, searchBridges } from "./utils/search";

const FAVORITES_STORAGE_KEY = "sinobridge-favorites";
const RECENT_SEARCHES_STORAGE_KEY = "sinobridge-recent-searches";
const FALLBACK_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'%3E%3Crect width='800' height='500' fill='%23e9dfcf'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%233f2d1f' font-family='Georgia,serif' font-size='42'%3ESinoBridge%3C/text%3E%3C/svg%3E";
const EMPTY_BRIDGE_FORM = {
  name: "",
  zh: "",
  year: "",
  location: "",
  img: "",
  desc_en: "",
  desc_zh: "",
};

const copy = {
  zh: {
    switchLanguage: "Switch to English",
    title: "中国古桥",
    subtitle: "保留你的核心搜索体验，并补上更完整的浏览、收藏与信息层。",
    searchPlaceholder: "搜索桥梁、地点、年份...",
    sortLabel: "排序",
    sortName: "按名称",
    sortYearAsc: "最早优先",
    sortYearDesc: "最新优先",
    explore: "桥梁总数",
    favorites: "收藏数量",
    period: "时间跨度",
    recentSearches: "最近搜索",
    noRecentSearches: "还没有搜索记录",
    results: "搜索结果",
    empty: "没有找到匹配的桥梁，试试地点、年份或中英文名称。",
    featuredTitle: "精选桥梁",
    featuredBody: "点击卡片查看详细介绍、图片画廊和地图入口。",
    regions: "地区筛选",
    allRegions: "全部地区",
    compare: "对比桥梁",
    compareHint: "最多选择两座桥做快速对比。",
    compareEmpty: "先在卡片上点击“对比”来选择桥梁。",
    compareAction: "对比",
    removeCompare: "取消对比",
    customTitle: "添加自定义桥梁",
    customBody: "像一个轻量后台一样，把你自己的桥梁数据存进本地。",
    addBridge: "添加桥梁",
    formName: "英文名",
    formZh: "中文名",
    formYear: "年份",
    formLocation: "地点",
    formImage: "图片链接",
    formDescEn: "英文介绍",
    formDescZh: "中文介绍",
    customSaved: "已加入桥梁列表",
    saved: "已收藏",
    save: "收藏",
    back: "返回",
    year: "年份",
    location: "地点",
    listen: "朗读介绍",
    map: "查看地图",
    gallery: "桥梁画廊",
    about: "桥梁简介",
    surprise: "随机看看",
    speechUnsupported: "当前浏览器不支持朗读功能。",
  },
  en: {
    switchLanguage: "切换到中文",
    title: "SinoBridge",
    subtitle: "Your original bridge search stays intact, now with stronger browsing, saved items, and richer structure.",
    searchPlaceholder: "Search by bridge, location, or year...",
    sortLabel: "Sort",
    sortName: "Name",
    sortYearAsc: "Oldest first",
    sortYearDesc: "Newest first",
    explore: "Bridge count",
    favorites: "Favorites",
    period: "Time span",
    recentSearches: "Recent searches",
    noRecentSearches: "No search history yet",
    results: "Results",
    empty: "No bridges matched. Try a location, year, or Chinese or English name.",
    featuredTitle: "Curated collection",
    featuredBody: "Open any card to read the story, browse the gallery, and jump to the map.",
    regions: "Region filter",
    allRegions: "All regions",
    compare: "Compare bridges",
    compareHint: "Choose up to two bridges for a quick comparison.",
    compareEmpty: "Pick bridges with the compare button on each card.",
    compareAction: "Compare",
    removeCompare: "Remove",
    customTitle: "Add a custom bridge",
    customBody: "Use this lightweight local backend panel to save your own bridge entries.",
    addBridge: "Add bridge",
    formName: "English name",
    formZh: "Chinese name",
    formYear: "Year",
    formLocation: "Location",
    formImage: "Image URL",
    formDescEn: "English description",
    formDescZh: "Chinese description",
    customSaved: "Added to the collection",
    saved: "Saved",
    save: "Save",
    back: "Back",
    year: "Year",
    location: "Location",
    listen: "Listen",
    map: "View map",
    gallery: "Gallery",
    about: "About this bridge",
    surprise: "Surprise me",
    speechUnsupported: "Speech playback is not supported in this browser.",
  },
};

function readStoredJson(key, fallback) {
  try {
    const rawValue = window.localStorage.getItem(key);
    return rawValue ? JSON.parse(rawValue) : fallback;
  } catch {
    return fallback;
  }
}

function shapeBridge(bridge) {
  return {
    ...bridge,
    gallery: (bridge.gallery && bridge.gallery.length > 0 ? bridge.gallery : [bridge.img || FALLBACK_IMAGE]).filter(Boolean),
    img: bridge.img || FALLBACK_IMAGE,
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
}

function BridgeImage({ bridge, className }) {
  const [src, setSrc] = useState(bridge.img);

  useEffect(() => {
    setSrc(bridge.img);
  }, [bridge.img]);

  return (
    <img
      src={src}
      alt={bridge.name}
      className={className}
      onError={() => setSrc(FALLBACK_IMAGE)}
    />
  );
}

function App() {
  const [lang, setLang] = useState("zh");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [sortBy, setSortBy] = useState("name");
  const [region, setRegion] = useState("all");
  const [favorites, setFavorites] = useState(() => readStoredJson(FAVORITES_STORAGE_KEY, []));
  const [recentSearches, setRecentSearches] = useState(() => readStoredJson(RECENT_SEARCHES_STORAGE_KEY, []));
  const [customBridges, setCustomBridges] = useState(() => loadCustomBridges().map(shapeBridge));
  const [compareIds, setCompareIds] = useState([]);
  const [bridgeForm, setBridgeForm] = useState(EMPTY_BRIDGE_FORM);
  const [saveMessage, setSaveMessage] = useState("");
  const deferredSearch = useDeferredValue(search);

  const text = copy[lang];
  const allBridges = [...bridges, ...customBridges];
  const regions = Array.from(new Set(allBridges.map((bridge) => bridge.location.split(",")[0].trim()))).sort();
  const searched = searchBridges(allBridges, deferredSearch, sortBy);
  const filtered = searched.filter((bridge) => region === "all" || bridge.location.startsWith(region));
  const timeline = getTimelineSummary(filtered);
  const compared = compareIds
    .map((id) => allBridges.find((bridge) => bridge.id === id))
    .filter(Boolean)
    .slice(0, 2);

  useEffect(() => {
    window.localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    window.localStorage.setItem(RECENT_SEARCHES_STORAGE_KEY, JSON.stringify(recentSearches));
  }, [recentSearches]);

  useEffect(() => {
    saveCustomBridges(customBridges);
  }, [customBridges]);

  useEffect(() => {
    const normalized = deferredSearch.trim();

    if (!normalized) {
      return;
    }

    setRecentSearches((current) => {
      const next = [normalized, ...current.filter((item) => item.toLowerCase() !== normalized.toLowerCase())];
      return next.slice(0, 5);
    });
  }, [deferredSearch]);

  const handleSpeak = (textToSpeak) => {
    if (!window.speechSynthesis || typeof SpeechSynthesisUtterance === "undefined") {
      window.alert(text.speechUnsupported);
      return;
    }

    const message = new SpeechSynthesisUtterance(textToSpeak);
    message.lang = lang === "zh" ? "zh-CN" : "en-US";
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(message);
  };

  const toggleFavorite = (bridgeId) => {
    setFavorites((current) =>
      current.includes(bridgeId) ? current.filter((id) => id !== bridgeId) : [...current, bridgeId]
    );
  };

  const toggleCompare = (bridgeId) => {
    setCompareIds((current) => {
      if (current.includes(bridgeId)) {
        return current.filter((id) => id !== bridgeId);
      }

      if (current.length === 2) {
        return [current[1], bridgeId];
      }

      return [...current, bridgeId];
    });
  };

  const openRandomBridge = () => {
    const source = filtered.length > 0 ? filtered : allBridges;
    const randomIndex = Math.floor(Math.random() * source.length);
    setSelected(source[randomIndex]);
  };

  const handleFormChange = (field, value) => {
    setBridgeForm((current) => ({ ...current, [field]: value }));
  };

  const handleAddBridge = (event) => {
    event.preventDefault(); 
    const id = `custom-${bridgeForm.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${Date.now()}`;
    const nextBridge = shapeBridge({
      id,
      name: bridgeForm.name.trim(),
      zh: bridgeForm.zh.trim(),
      year: Number(bridgeForm.year),
      location: bridgeForm.location.trim(),
      img: bridgeForm.img.trim() || FALLBACK_IMAGE,
      gallery: [bridgeForm.img.trim() || FALLBACK_IMAGE],
      desc_en: bridgeForm.desc_en.trim(),
      desc_zh: bridgeForm.desc_zh.trim(),
    });

    if (!nextBridge.name || !nextBridge.zh || !nextBridge.location || !nextBridge.year) {
      return;
    }

    setCustomBridges((current) => [nextBridge, ...current]);
    setBridgeForm(EMPTY_BRIDGE_FORM);
    setSaveMessage(text.customSaved);
  };

  if (selected) {
    const selectedDescription = lang === "zh" ? selected.desc_zh : selected.desc_en;
    const isFavorite = favorites.includes(selected.id);

    return (
      <main className="app-shell">
        <section className="detail-panel">
          <div className="detail-topbar">
            <button className="ghost-button" onClick={() => setSelected(null)}>
              {text.back}
            </button>

            <button className={`favorite-button ${isFavorite ? "is-active" : ""}`} onClick={() => toggleFavorite(selected.id)}>
              {isFavorite ? text.saved : text.save}
            </button>
          </div>

          <div className="detail-hero">
            <BridgeImage bridge={selected} className="detail-cover" />

            <div>
              <p className="eyebrow">{selected.location}</p>
              <h1>{lang === "zh" ? selected.zh : selected.name}</h1>
              <p className="detail-intro">{selectedDescription}</p>

              <div className="detail-meta">
                <span>
                  <strong>{text.year}</strong> {selected.year}
                </span>
                <span>
                  <strong>{text.location}</strong> {selected.location}
                </span>
              </div>

              <div className="detail-actions">
                <button className="primary-button" onClick={() => handleSpeak(selectedDescription)}>
                  {text.listen}
                </button>
                <a
                  className="ghost-button"
                  href={`https://www.google.com/maps/search/${encodeURIComponent(selected.location)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {text.map}
                </a>
              </div>
            </div>
          </div>

          <section className="detail-section">
            <div className="section-heading">
              <h2>{text.gallery}</h2>
            </div>
            <div className="gallery-grid">
              {selected.gallery.map((image, index) => (
                <img
                  key={`${selected.id}-${index}`}
                  src={image}
                  alt={`${selected.name} ${index + 1}`}
                  className="gallery-image"
                  onError={(event) => {
                    event.currentTarget.src = FALLBACK_IMAGE;
                  }}
                />
              ))}
            </div>
          </section>
        </section>
      </main>
    );
  }

  return (
    <main className="app-shell">
      <section className="hero-panel">
        <div className="hero-topbar">
          <div>
            <p className="eyebrow">SinoBridge Search</p>
            <h1>{text.title}</h1>
            <p className="hero-subtitle">{text.subtitle}</p>
          </div>

          <button className="ghost-button" onClick={() => setLang(lang === "zh" ? "en" : "zh")}>
            {text.switchLanguage}
          </button>
        </div>

        <div className="controls-panel">
          <label className="search-field">
            <span className="sr-only">{text.searchPlaceholder}</span>
            <input
              placeholder={text.searchPlaceholder}
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </label>

          <label className="sort-field">
            <span>{text.sortLabel}</span>
            <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
              <option value="name">{text.sortName}</option>
              <option value="year-asc">{text.sortYearAsc}</option>
              <option value="year-desc">{text.sortYearDesc}</option>
            </select>
          </label>

          <label className="sort-field">
            <span>{text.regions}</span>
            <select value={region} onChange={(event) => setRegion(event.target.value)}>
              <option value="all">{text.allRegions}</option>
              {regions.map((regionName) => (
                <option key={regionName} value={regionName}>
                  {regionName}
                </option>
              ))}
            </select>
          </label>

          <button className="primary-button" onClick={openRandomBridge}>
            {text.surprise}
          </button>
        </div>

        <div className="stats-grid">
          <article className="stat-card">
            <span>{text.explore}</span>
            <strong>{filtered.length}</strong>
          </article>
          <article className="stat-card">
            <span>{text.favorites}</span>
            <strong>{favorites.length}</strong>
          </article>
          <article className="stat-card">
            <span>{text.period}</span>
            <strong>{timeline ? `${timeline.oldest} - ${timeline.newest}` : "N/A"}</strong>
          </article>
        </div>
      </section>

      <section className="content-grid">
        <aside className="sidebar-card">
          <h2>{text.recentSearches}</h2>
          {recentSearches.length === 0 ? <p>{text.noRecentSearches}</p> : null}
          <div className="chip-list">
            {recentSearches.map((item) => (
              <button key={item} className="chip-button" onClick={() => setSearch(item)}>
                {item}
              </button>
            ))}
          </div>
        </aside>

        <section className="results-panel">
          <div className="results-header">
            <div>
              <h2>{text.results}</h2>
              <p>{text.featuredBody}</p>
            </div>
            <div className="feature-card">
              <span className="eyebrow">{text.featuredTitle}</span>
              <p>{bridges[0].name}</p>
            </div>
          </div>

          <section className="compare-panel">
            <div className="section-heading">
              <div>
                <h3>{text.compare}</h3>
                <p>{text.compareHint}</p>
              </div>
            </div>
            {compared.length === 0 ? <div className="empty-state compare-empty">{text.compareEmpty}</div> : null}
            <div className="compare-grid">
              {compared.map((bridge) => (
                <article key={bridge.id} className="compare-card">
                  <h4>{lang === "zh" ? bridge.zh : bridge.name}</h4>
                  <p>{bridge.location}</p>
                  <p>
                    <strong>{text.year}</strong> {bridge.year}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="admin-panel">
            <div className="section-heading">
              <div>
                <h3>{text.customTitle}</h3>
                <p>{text.customBody}</p>
              </div>
            </div>

            <form className="admin-form" onSubmit={handleAddBridge}>
              <input
                value={bridgeForm.name}
                onChange={(event) => handleFormChange("name", event.target.value)}
                placeholder={text.formName}
                aria-label={text.formName}
              />
              <input
                value={bridgeForm.zh}
                onChange={(event) => handleFormChange("zh", event.target.value)}
                placeholder={text.formZh}
                aria-label={text.formZh}
              />
              <input
                value={bridgeForm.year}
                onChange={(event) => handleFormChange("year", event.target.value)}
                placeholder={text.formYear}
                aria-label={text.formYear}
              />
              <input
                value={bridgeForm.location}
                onChange={(event) => handleFormChange("location", event.target.value)}
                placeholder={text.formLocation}
                aria-label={text.formLocation}
              />
              <input
                value={bridgeForm.img}
                onChange={(event) => handleFormChange("img", event.target.value)}
                placeholder={text.formImage}
                aria-label={text.formImage}
              />
              <textarea
                value={bridgeForm.desc_en}
                onChange={(event) => handleFormChange("desc_en", event.target.value)}
                placeholder={text.formDescEn}
                aria-label={text.formDescEn}
              />
              <textarea
                value={bridgeForm.desc_zh}
                onChange={(event) => handleFormChange("desc_zh", event.target.value)}
                placeholder={text.formDescZh}
                aria-label={text.formDescZh}
              />
              <button className="primary-button" type="submit">
                {text.addBridge}
              </button>
              {saveMessage ? <p className="save-message">{saveMessage}</p> : null}
            </form>
          </section>

          {filtered.length === 0 ? <div className="empty-state">{text.empty}</div> : null}

          <div className="bridge-grid">
            {filtered.map((bridge) => {
              const isFavorite = favorites.includes(bridge.id);
              const isCompared = compareIds.includes(bridge.id);

              return (
                <article key={bridge.id} className="bridge-card">
                  <button className="card-surface" onClick={() => setSelected(bridge)}>
                    <BridgeImage bridge={bridge} className="bridge-card-image" />
                    <div className="bridge-card-body">
                      <div className="bridge-card-header">
                        <h3>{lang === "zh" ? bridge.zh : bridge.name}</h3>
                        <span>{bridge.year}</span>
                      </div>
                      <p>{bridge.location}</p>
                    </div>
                  </button>

                  <button
                    className={`favorite-button favorite-inline ${isFavorite ? "is-active" : ""}`}
                    onClick={() => toggleFavorite(bridge.id)}
                  >
                    {isFavorite ? text.saved : text.save}
                  </button>

                  <div className="card-actions">
                    <button
                      className={`ghost-button compare-inline ${isCompared ? "is-active" : ""}`}
                      onClick={() => toggleCompare(bridge.id)}
                    >
                      {isCompared ? text.removeCompare : text.compareAction}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </section>
    </main>
  );
}

export default App;
