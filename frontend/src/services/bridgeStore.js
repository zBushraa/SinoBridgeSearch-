const CUSTOM_BRIDGES_STORAGE_KEY = "sinobridge-custom-bridges";

function safelyRead(key, fallback) {
  try {
    const rawValue = window.localStorage.getItem(key);
    return rawValue ? JSON.parse(rawValue) : fallback;
  } catch {
    return fallback;
  }
}

export function loadCustomBridges() {
  return safelyRead(CUSTOM_BRIDGES_STORAGE_KEY, []);
}

export function saveCustomBridges(bridges) {
  window.localStorage.setItem(CUSTOM_BRIDGES_STORAGE_KEY, JSON.stringify(bridges));
}
