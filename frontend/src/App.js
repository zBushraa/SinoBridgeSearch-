import { useDeferredValue, useEffect, useRef, useState } from "react";
import "./App.css";
import { bridges } from "./data/bridges";
import { createCustomBridge, fetchBackendHealth, fetchCustomBridges, removeCustomBridge } from "./services/api";
import { loadCustomBridges, saveCustomBridges } from "./services/bridgeStore";
import { getTimelineSummary, searchBridges } from "./utils/search";

const FAVORITES_STORAGE_KEY = "sinobridge-favorites";
const RECENT_SEARCHES_STORAGE_KEY = "sinobridge-recent-searches";
const THEME_STORAGE_KEY = "sinobridge-theme";
const SOUND_STORAGE_KEY = "sinobridge-sound";
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
    switchLanguage: "切换到英文",
    eyebrow: "中国古桥检索",
    title: "中国古桥",
    subtitle: "保留你的核心搜索体验，并补上更完整的浏览、收藏、后台与信息层。",
    heroBody: "在更现代、更沉浸的界面里浏览中国古桥的图像、年代、地域与文化信息，同时保留原本的核心检索方式。",
    exploreNow: "开始探索",
    heroGallery: "画廊漫游",
    themeToggle: "切换深浅模式",
    soundToggleOn: "关闭交互音效",
    soundToggleOff: "开启交互音效",
    themeLight: "浅色",
    themeDark: "深色",
    soundOn: "音效开",
    soundOff: "音效关",
    navbarLabel: "桥梁档案馆",
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
    insightsTitle: "桥梁速览",
    insightsBody: "根据当前筛选结果，快速查看最早、最晚和覆盖地区等关键信息。",
    oldestBridge: "最早桥梁",
    newestBridge: "最晚桥梁",
    regionCount: "覆盖地区",
    regionUnit: "个地区",
    noInsight: "暂无数据",
    favoritesOnly: "只看收藏",
    clearFilters: "清除筛选",
    allBridgesLabel: "全部桥梁",
    resultSummary: "当前显示 {count} 座桥",
    sortNow: "当前排序",
    activeFilters: "当前筛选",
    controlsTitle: "检索工具",
    quickList: "桥梁列表",
    regions: "地区筛选",
    allRegions: "全部地区",
    compare: "对比桥梁",
    compareHint: "最多选择两座桥做快速对比。",
    compareEmpty: "先在卡片上点击“对比”来选择桥梁。",
    compareSelected: "已选择 {count}/2 座桥梁进行对比。",
    compareAction: "对比",
    removeCompare: "取消对比",
    customTitle: "添加自定义桥梁",
    customBody: "像一个轻量后台一样，把你自己的桥梁数据存进本地或后端。",
    addBridge: "添加桥梁",
    formName: "英文名",
    formZh: "中文名",
    formYear: "年份",
    formLocation: "地点",
    formImage: "图片链接",
    formDescEn: "英文介绍",
    formDescZh: "中文介绍",
    customSaved: "已加入桥梁列表",
    customSavedOffline: "已保存到本地，后端暂不可用。",
    customList: "自定义桥梁",
    deleteCustom: "删除",
    backendOnline: "后端已连接",
    backendOffline: "仅本地模式",
    backendChecking: "检查后端中",
    requiredFields: "请先填写名称、中文名、年份和地点。",
    customBadge: "自定义",
    imagePending: "该桥图片待核实，暂以中性占位图显示。",
    dynasty: "时代背景",
    alias: "别称",
    travelTip: "中国使用建议",
    copyName: "复制中文名",
    copyAddress: "复制中文地址",
    copied: "已复制",
    galleryCountUnit: "图",
    saved: "已收藏",
    save: "收藏",
    back: "返回",
    year: "年份",
    location: "地点",
    bridgeType: "桥梁类型",
    visualFeature: "画面特征",
    listen: "朗读介绍",
    map: "查看地图",
    gallery: "桥梁画廊",
    surprise: "随机看看",
    speechUnsupported: "当前浏览器不支持朗读功能。",
  },
  en: {
    switchLanguage: "切换到中文",
    eyebrow: "SinoBridge Search",
    title: "SinoBridge",
    subtitle: "Your original bridge search stays intact, now with stronger browsing, saved items, backend sync, and richer structure.",
    heroBody: "Browse historic Chinese bridges in a more immersive interface with image-led storytelling, timeline context, and polished exploration tools while keeping the same core search flow.",
    exploreNow: "Explore now",
    heroGallery: "Gallery tour",
    themeToggle: "Toggle light and dark mode",
    soundToggleOn: "Turn interaction sound off",
    soundToggleOff: "Turn interaction sound on",
    themeLight: "Light",
    themeDark: "Dark",
    soundOn: "Sound on",
    soundOff: "Sound off",
    navbarLabel: "Bridge archive",
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
    insightsTitle: "Bridge insights",
    insightsBody: "See the oldest, newest, and regional spread of the current result set at a glance.",
    oldestBridge: "Oldest bridge",
    newestBridge: "Newest bridge",
    regionCount: "Regions covered",
    regionUnit: "regions",
    noInsight: "No data yet",
    favoritesOnly: "Favorites only",
    clearFilters: "Clear filters",
    allBridgesLabel: "All bridges",
    resultSummary: "{count} bridges currently shown",
    sortNow: "Sort mode",
    activeFilters: "Active filters",
    controlsTitle: "Explore tools",
    quickList: "Bridge list",
    regions: "Region filter",
    allRegions: "All regions",
    compare: "Compare bridges",
    compareHint: "Choose up to two bridges for a quick comparison.",
    compareEmpty: "Pick bridges with the compare button on each card.",
    compareSelected: "{count}/2 bridges selected for comparison.",
    compareAction: "Compare",
    removeCompare: "Remove",
    customTitle: "Add a custom bridge",
    customBody: "Use this lightweight backend-style panel to save your own bridge entries.",
    addBridge: "Add bridge",
    formName: "English name",
    formZh: "Chinese name",
    formYear: "Year",
    formLocation: "Location",
    formImage: "Image URL",
    formDescEn: "English description",
    formDescZh: "Chinese description",
    customSaved: "Added to the collection",
    customSavedOffline: "Saved locally because the backend is unavailable.",
    customList: "Custom bridges",
    deleteCustom: "Delete",
    backendOnline: "Backend connected",
    backendOffline: "Local-only mode",
    backendChecking: "Checking backend",
    requiredFields: "Please fill in the name, Chinese name, year, and location first.",
    customBadge: "Custom",
    imagePending: "Verified bridge image pending. A neutral placeholder is shown for now.",
    dynasty: "Dynasty",
    alias: "Alias",
    travelTip: "China-use tip",
    copyName: "Copy Chinese name",
    copyAddress: "Copy Chinese address",
    copied: "Copied",
    galleryCountUnit: "images",
    saved: "Saved",
    save: "Save",
    back: "Back",
    year: "Year",
    location: "Location",
    bridgeType: "Bridge type",
    visualFeature: "Visual feature",
    listen: "Listen",
    map: "View map",
    gallery: "Gallery",
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
    isCustom: bridge.isCustom || false,
  };
}

function mergeBridges(primary, secondary) {
  const seen = new Set();

  return [...primary, ...secondary].filter((bridge) => {
    if (seen.has(bridge.id)) {
      return false;
    }

    seen.add(bridge.id);
    return true;
  });
}

function getDisplayLocationForLang(bridge, lang) {
  return lang === "zh" ? bridge.location_zh || bridge.location : bridge.location;
}

function BridgeImage({ bridge, className, loading = "lazy", fetchPriority = "auto", srcOverride }) {
  const initialSrc = srcOverride || bridge.img || FALLBACK_IMAGE;
  const [src, setSrc] = useState(initialSrc);

  useEffect(() => {
    setSrc(srcOverride || bridge.img || FALLBACK_IMAGE);
  }, [bridge.img, srcOverride]);

  return (
    <img
      src={src}
      alt={bridge.name}
      className={className}
      loading={loading}
      decoding="async"
      fetchPriority={fetchPriority}
      onError={() => setSrc(FALLBACK_IMAGE)}
    />
  );
}

function playUiTone(kind = "soft") {
  if (typeof window === "undefined") {
    return;
  }

  const AudioContextClass = window.AudioContext || window.webkitAudioContext;

  if (!AudioContextClass) {
    return;
  }

  const presets = {
    soft: { frequency: 392, endFrequency: 440, duration: 0.08 },
    open: { frequency: 523.25, endFrequency: 659.25, duration: 0.12 },
    success: { frequency: 659.25, endFrequency: 783.99, duration: 0.14 },
    compare: { frequency: 493.88, endFrequency: 587.33, duration: 0.12 },
  };

  const preset = presets[kind] || presets.soft;
  const context = new AudioContextClass();
  const oscillator = context.createOscillator();
  const gainNode = context.createGain();
  const now = context.currentTime;

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(preset.frequency, now);
  oscillator.frequency.exponentialRampToValueAtTime(preset.endFrequency, now + preset.duration);
  gainNode.gain.setValueAtTime(0.0001, now);
  gainNode.gain.exponentialRampToValueAtTime(0.05, now + 0.02);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, now + preset.duration);
  oscillator.connect(gainNode);
  gainNode.connect(context.destination);
  oscillator.start(now);
  oscillator.stop(now + preset.duration);
  oscillator.onended = () => {
    context.close().catch(() => {});
  };
}

function App() {
  const resultsRef = useRef(null);
  const [lang, setLang] = useState("zh");
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    return window.localStorage.getItem(THEME_STORAGE_KEY) || "light";
  });
  const [soundEnabled, setSoundEnabled] = useState(() => {
    if (typeof window === "undefined") {
      return true;
    }

    return window.localStorage.getItem(SOUND_STORAGE_KEY) !== "off";
  });
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [sortBy, setSortBy] = useState("name");
  const [region, setRegion] = useState("all");
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [favorites, setFavorites] = useState(() => readStoredJson(FAVORITES_STORAGE_KEY, []));
  const [recentSearches, setRecentSearches] = useState(() => readStoredJson(RECENT_SEARCHES_STORAGE_KEY, []));
  const [customBridges, setCustomBridges] = useState(() => loadCustomBridges().map((bridge) => shapeBridge({ ...bridge, isCustom: true })));
  const [compareIds, setCompareIds] = useState([]);
  const [bridgeForm, setBridgeForm] = useState(EMPTY_BRIDGE_FORM);
  const [saveMessage, setSaveMessage] = useState("");
  const [backendStatus, setBackendStatus] = useState("checking");
  const [selectedGalleryImage, setSelectedGalleryImage] = useState("");
  const [copyMessage, setCopyMessage] = useState("");
  const deferredSearch = useDeferredValue(search);

  const text = copy[lang];
  const allBridges = [...bridges, ...customBridges];
  const regions = Array.from(new Set(allBridges.map((bridge) => getDisplayLocationForLang(bridge, lang).split(",")[0].trim()))).sort();
  const searched = searchBridges(allBridges, deferredSearch, sortBy);
  const regionFiltered = searched.filter((bridge) => {
    if (region === "all") {
      return true;
    }

    const currentLocation = getDisplayLocationForLang(bridge, lang);
    return currentLocation.startsWith(region);
  });
  const filtered = favoritesOnly ? regionFiltered.filter((bridge) => favorites.includes(bridge.id)) : regionFiltered;
  const timeline = getTimelineSummary(filtered);
  const compared = compareIds
    .map((id) => allBridges.find((bridge) => bridge.id === id))
    .filter(Boolean)
    .slice(0, 2);
  const oldestBridge = filtered.reduce((earliest, bridge) => (!earliest || bridge.year < earliest.year ? bridge : earliest), null);
  const newestBridge = filtered.reduce((latest, bridge) => (!latest || bridge.year > latest.year ? bridge : latest), null);
  const regionCount = new Set(filtered.map((bridge) => getDisplayLocationForLang(bridge, lang).split(",")[0].trim())).size;
  const sortLabelMap = {
    name: text.sortName,
    "year-asc": text.sortYearAsc,
    "year-desc": text.sortYearDesc,
  };
  const activeFilterChips = [
    deferredSearch.trim() ? deferredSearch.trim() : null,
    region !== "all" ? region : null,
    favoritesOnly ? text.favoritesOnly : null,
  ].filter(Boolean);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.dataset.theme = theme;
      document.documentElement.lang = lang;
    }

    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [lang, theme]);

  useEffect(() => {
    window.localStorage.setItem(SOUND_STORAGE_KEY, soundEnabled ? "on" : "off");
  }, [soundEnabled]);

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
    let isActive = true;

    if (process.env.NODE_ENV === "test" || typeof fetch !== "function") {
      setBackendStatus("offline");
      return undefined;
    }

    async function syncBackend() {
      try {
        await fetchBackendHealth();
        const remoteBridges = await fetchCustomBridges();

        if (!isActive) {
          return;
        }

        setCustomBridges((current) =>
          mergeBridges(
            remoteBridges.map((bridge) => shapeBridge({ ...bridge, isCustom: true })),
            current
          )
        );
        setBackendStatus("online");
      } catch {
        if (isActive) {
          setBackendStatus("offline");
        }
      }
    }

    syncBackend();

    return () => {
      isActive = false;
    };
  }, []);

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

  const triggerSound = (kind) => {
    if (!soundEnabled) {
      return;
    }

    playUiTone(kind);
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
    triggerSound("open");
    setSelected(source[randomIndex]);
  };

  const handleFormChange = (field, value) => {
    setBridgeForm((current) => ({ ...current, [field]: value }));
  };

  const resetFilters = () => {
    setSearch("");
    setSortBy("name");
    setRegion("all");
    setFavoritesOnly(false);
  };

  const scrollToResults = () => {
    resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    triggerSound("soft");
  };

  const getDisplayLocation = (bridge) => getDisplayLocationForLang(bridge, lang);

  const getCompareStatusText = () => text.compareSelected.replace("{count}", String(compared.length));

  const handleOpenBridge = (bridge) => {
    triggerSound("open");
    setSelected(bridge);
  };

  const handleFavoriteClick = (bridgeId) => {
    triggerSound(favorites.includes(bridgeId) ? "soft" : "success");
    toggleFavorite(bridgeId);
  };

  const handleCompareClick = (bridgeId) => {
    triggerSound("compare");
    toggleCompare(bridgeId);
  };

  const handleCopy = async (value) => {
    if (!value) {
      return;
    }

    try {
      await navigator.clipboard.writeText(value);
      setCopyMessage(text.copied);
      window.setTimeout(() => setCopyMessage(""), 1800);
    } catch {
      setCopyMessage("");
    }
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
      isCustom: true,
    });

    if (!nextBridge.name || !nextBridge.zh || !nextBridge.location || !nextBridge.year) {
      setSaveMessage(text.requiredFields);
      return;
    }

    setCustomBridges((current) => [nextBridge, ...current]);
    setBridgeForm(EMPTY_BRIDGE_FORM);
    setSaveMessage(text.customSaved);

    if (backendStatus === "online") {
      createCustomBridge(nextBridge).catch(() => {
        setBackendStatus("offline");
        setSaveMessage(text.customSavedOffline);
      });
    } else {
      setSaveMessage(text.customSavedOffline);
    }
  };

  const handleDeleteCustomBridge = (bridgeId) => {
    setCustomBridges((current) => current.filter((bridge) => bridge.id !== bridgeId));
    setCompareIds((current) => current.filter((id) => id !== bridgeId));
    setFavorites((current) => current.filter((id) => id !== bridgeId));

    if (backendStatus === "online") {
      removeCustomBridge(bridgeId).catch(() => {
        setBackendStatus("offline");
      });
    }
  };

  useEffect(() => {
    if (!selected) {
      setSelectedGalleryImage("");
      return;
    }

    setSelectedGalleryImage(selected.img || selected.gallery[0] || FALLBACK_IMAGE);
  }, [selected]);

  if (selected) {
    const selectedDescription = lang === "zh" ? selected.desc_zh : selected.desc_en;
    const isFavorite = favorites.includes(selected.id);

    return (
      <main className="app-shell">
        <div className="floating-navbar">
          <div className="nav-brand">
            <span className="nav-dot" />
            <div>
              <strong>{text.navbarLabel}</strong>
              <small>{text.eyebrow}</small>
            </div>
          </div>
          <div className="nav-actions">
            <button
              className="ghost-button nav-toggle"
              aria-label={text.themeToggle}
              onClick={() => setTheme((current) => (current === "light" ? "dark" : "light"))}
            >
              {theme === "light" ? text.themeDark : text.themeLight}
            </button>
            <button
              className={`ghost-button nav-toggle ${soundEnabled ? "is-active" : ""}`}
              aria-label={soundEnabled ? text.soundToggleOn : text.soundToggleOff}
              onClick={() => setSoundEnabled((current) => !current)}
            >
              {soundEnabled ? text.soundOn : text.soundOff}
            </button>
          </div>
        </div>
        <section className="detail-panel">
          <div className="detail-topbar">
            <button className="ghost-button" onClick={() => {
              triggerSound("soft");
              setSelected(null);
            }}>
              {text.back}
            </button>

            <button className={`favorite-button ${isFavorite ? "is-active" : ""}`} onClick={() => handleFavoriteClick(selected.id)}>
              {isFavorite ? text.saved : text.save}
            </button>
          </div>

          <div className="detail-hero">
            <BridgeImage
              bridge={selected}
              className="detail-cover"
              loading="eager"
              fetchPriority="high"
              srcOverride={selectedGalleryImage}
            />

            <div>
              <p className="eyebrow">{getDisplayLocation(selected)}</p>
              <h1>{lang === "zh" ? selected.zh : selected.name}</h1>
              <p className="detail-intro">{selectedDescription}</p>

              <div className="detail-meta">
                <span>
                  <strong>{text.year}</strong> {selected.year}
                </span>
                <span>
                  <strong>{text.location}</strong> {getDisplayLocation(selected)}
                </span>
                {selected.type_zh || selected.type_en ? (
                  <span>
                    <strong>{text.bridgeType}</strong> {lang === "zh" ? selected.type_zh : selected.type_en}
                  </span>
                ) : null}
                {selected.feature_zh || selected.feature_en ? (
                  <span>
                    <strong>{text.visualFeature}</strong> {lang === "zh" ? selected.feature_zh : selected.feature_en}
                  </span>
                ) : null}
                {selected.dynasty_zh || selected.dynasty_en ? (
                  <span>
                    <strong>{text.dynasty}</strong> {lang === "zh" ? selected.dynasty_zh : selected.dynasty_en}
                  </span>
                ) : null}
                {selected.alias_zh || selected.alias_en ? (
                  <span>
                    <strong>{text.alias}</strong> {lang === "zh" ? selected.alias_zh : selected.alias_en}
                  </span>
                ) : null}
              </div>

              <div className="detail-actions">
                <button className="primary-button" onClick={() => {
                  triggerSound("soft");
                  handleSpeak(selectedDescription);
                }}>
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
                <button className="ghost-button" onClick={() => handleCopy(selected.zh)}>
                  {text.copyName}
                </button>
                <button className="ghost-button" onClick={() => handleCopy(selected.location_zh || selected.location)}>
                  {text.copyAddress}
                </button>
              </div>
              {selected.tip_zh || selected.tip_en ? (
                <p className="image-note">
                  <strong>{text.travelTip}</strong> {lang === "zh" ? selected.tip_zh : selected.tip_en}
                </p>
              ) : null}
              {copyMessage ? <p className="image-note">{copyMessage}</p> : null}
              {!selected.img ? <p className="image-note">{text.imagePending}</p> : null}
            </div>
          </div>

          <section className="detail-section">
            <div className="section-heading">
              <h2>{text.gallery}</h2>
            </div>
            <div className="gallery-grid">
              {selected.gallery.map((image, index) => (
                <button
                  key={`${selected.id}-${index}`}
                  type="button"
                  className={`gallery-thumb ${selectedGalleryImage === image ? "is-active" : ""}`}
                  onClick={() => setSelectedGalleryImage(image)}
                >
                  <img
                    src={image}
                    alt={`${selected.name} ${index + 1}`}
                    className="gallery-image"
                    loading="lazy"
                    decoding="async"
                    onError={(event) => {
                      event.currentTarget.src = FALLBACK_IMAGE;
                    }}
                  />
                </button>
              ))}
            </div>
          </section>
        </section>
      </main>
    );
  }

  return (
    <main className="app-shell">
      <div className="floating-navbar">
        <div className="nav-brand">
          <span className="nav-dot" />
          <div>
            <strong>{text.navbarLabel}</strong>
            <small>{text.eyebrow}</small>
          </div>
        </div>
        <div className="nav-actions">
          <button
            className="ghost-button nav-toggle"
            aria-label={text.themeToggle}
            onClick={() => setTheme((current) => (current === "light" ? "dark" : "light"))}
          >
            {theme === "light" ? text.themeDark : text.themeLight}
          </button>
          <button
            className={`ghost-button nav-toggle ${soundEnabled ? "is-active" : ""}`}
            aria-label={soundEnabled ? text.soundToggleOn : text.soundToggleOff}
            onClick={() => setSoundEnabled((current) => !current)}
          >
            {soundEnabled ? text.soundOn : text.soundOff}
          </button>
        </div>
      </div>
      <section className="hero-panel">
        <div className="hero-topbar">
          <div>
            <p className="eyebrow">{text.eyebrow}</p>
            <h1>{text.title}</h1>
            <p className="hero-subtitle">{text.subtitle}</p>
            <p className="hero-story">{text.heroBody}</p>
            <p className={`backend-pill backend-${backendStatus}`}>
              {text[`backend${backendStatus.charAt(0).toUpperCase()}${backendStatus.slice(1)}`]}
            </p>
          </div>

          <button className="ghost-button" onClick={() => setLang(lang === "zh" ? "en" : "zh")}>
            {text.switchLanguage}
          </button>
        </div>

        <div className="hero-actions">
          <button className="primary-button" onClick={scrollToResults}>
            {text.exploreNow}
          </button>
          <button className="ghost-button hero-tour" onClick={openRandomBridge}>
            {text.heroGallery}
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
          <div className="sidebar-section">
            <h2>{text.controlsTitle}</h2>
            <div className="sidebar-controls">
              <label className="search-field sidebar-search">
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

              <button className="primary-button sidebar-random" onClick={openRandomBridge}>
                {text.surprise}
              </button>
              <button
                className={`ghost-button sidebar-toggle ${favoritesOnly ? "is-active" : ""}`}
                onClick={() => setFavoritesOnly((current) => !current)}
              >
                {text.favoritesOnly}
              </button>
              <button className="ghost-button sidebar-clear" onClick={resetFilters}>
                {text.clearFilters}
              </button>
            </div>
          </div>

          <div className="sidebar-section">
            <h2>{text.recentSearches}</h2>
            {recentSearches.length === 0 ? <p>{text.noRecentSearches}</p> : null}
            <div className="chip-list">
              {recentSearches.map((item) => (
                <button key={item} className="chip-button" onClick={() => setSearch(item)}>
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="sidebar-section">
            <h2>{text.quickList}</h2>
            <div className="quick-list">
              {filtered.map((bridge) => (
                <button key={bridge.id} className="quick-list-item" onClick={() => handleOpenBridge(bridge)}>
                  <span>{lang === "zh" ? bridge.zh : bridge.name}</span>
                  <small>{bridge.year}</small>
                </button>
              ))}
            </div>
          </div>
        </aside>

        <section className="results-panel" ref={resultsRef}>
          <div className="results-header">
            <div>
              <h2>{text.results}</h2>
              <p>{text.featuredBody}</p>
            </div>
            <div className="feature-card">
              <span className="eyebrow">{text.featuredTitle}</span>
              <p>{lang === "zh" ? bridges[0].zh : bridges[0].name}</p>
            </div>
          </div>

          <section className="summary-strip">
            <div className="summary-copy">
              <strong>{text.resultSummary.replace("{count}", String(filtered.length))}</strong>
              <span>
                {text.sortNow}: {sortLabelMap[sortBy]}
              </span>
            </div>
            <div className="summary-chips" aria-label={text.activeFilters}>
              <span className="summary-chip">{region === "all" ? text.allBridgesLabel : region}</span>
              {activeFilterChips.map((chip) => (
                <span key={chip} className="summary-chip is-active">
                  {chip}
                </span>
              ))}
            </div>
          </section>

          <div className="mobile-stats">
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

          <section className="insights-panel results-subpanel">
            <div className="section-heading">
              <div>
                <h3>{text.insightsTitle}</h3>
                <p>{text.insightsBody}</p>
              </div>
            </div>
            <div className="insight-grid">
              <article className="insight-card">
                <span>{text.oldestBridge}</span>
                <strong>{oldestBridge ? (lang === "zh" ? oldestBridge.zh : oldestBridge.name) : text.noInsight}</strong>
                <small>{oldestBridge ? `${oldestBridge.year} · ${getDisplayLocation(oldestBridge)}` : ""}</small>
              </article>
              <article className="insight-card">
                <span>{text.newestBridge}</span>
                <strong>{newestBridge ? (lang === "zh" ? newestBridge.zh : newestBridge.name) : text.noInsight}</strong>
                <small>{newestBridge ? `${newestBridge.year} · ${getDisplayLocation(newestBridge)}` : ""}</small>
              </article>
              <article className="insight-card">
                <span>{text.regionCount}</span>
                <strong>{regionCount}</strong>
                <small>{text.regionUnit}</small>
              </article>
            </div>
          </section>

          <section className="compare-panel results-subpanel">
            <div className="section-heading">
              <div>
                <h3>{text.compare}</h3>
                <p>{text.compareHint}</p>
                <p>{getCompareStatusText()}</p>
              </div>
            </div>
            {compared.length === 0 ? <div className="empty-state compare-empty">{text.compareEmpty}</div> : null}
            <div className="compare-grid">
              {compared.map((bridge) => (
                <article key={bridge.id} className="compare-card">
                  <h4>{lang === "zh" ? bridge.zh : bridge.name}</h4>
                  <p>{getDisplayLocation(bridge)}</p>
                  <p>
                    <strong>{text.year}</strong> {bridge.year}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {filtered.length === 0 ? <div className="empty-state">{text.empty}</div> : null}

          <div className="bridge-grid">
            {filtered.map((bridge) => {
              const isFavorite = favorites.includes(bridge.id);
              const isCompared = compareIds.includes(bridge.id);

              return (
                <article key={bridge.id} className="bridge-card">
                  <button className="card-surface" onClick={() => handleOpenBridge(bridge)}>
                    <BridgeImage bridge={bridge} className="bridge-card-image" loading="lazy" fetchPriority="low" />
                    <div className="bridge-card-body">
                      <div className="bridge-card-header">
                        <h3>{lang === "zh" ? bridge.zh : bridge.name}</h3>
                        <span>{bridge.year}</span>
                      </div>
                      <p>{getDisplayLocation(bridge)}</p>
                      <span className="entry-badge">
                        {bridge.galleryCount} {text.galleryCountUnit}
                      </span>
                      {bridge.isCustom ? <span className="entry-badge">{text.customBadge}</span> : null}
                      {!bridge.img ? <span className="entry-badge">{text.imagePending}</span> : null}
                    </div>
                  </button>

                  <button
                    className={`favorite-button favorite-inline ${isFavorite ? "is-active" : ""}`}
                    onClick={() => handleFavoriteClick(bridge.id)}
                  >
                    {isFavorite ? text.saved : text.save}
                  </button>

                  <div className="card-actions">
                    <button
                      className={`ghost-button compare-inline ${isCompared ? "is-active" : ""}`}
                      onClick={() => handleCompareClick(bridge.id)}
                    >
                      {isCompared ? text.removeCompare : text.compareAction}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          <section className="admin-panel results-subpanel">
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

            <div className="custom-bridge-list">
              <h4>{text.customList}</h4>
              {customBridges.map((bridge) => (
                <div key={bridge.id} className="custom-bridge-row">
                  <div>
                    <strong>{lang === "zh" ? bridge.zh : bridge.name}</strong>
                    <p>{getDisplayLocation(bridge)}</p>
                  </div>
                  <button className="ghost-button" onClick={() => handleDeleteCustomBridge(bridge.id)}>
                    {text.deleteCustom}
                  </button>
                </div>
              ))}
            </div>
          </section>
        </section>
      </section>
    </main>
  );
}

export default App;
