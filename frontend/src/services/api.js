const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL ||
  (process.env.NODE_ENV === "development" ? "http://localhost:8080" : "");

async function request(path, options = {}) {
  if (typeof fetch !== "function") {
    throw new Error("Fetch API is unavailable.");
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}

export async function fetchBackendHealth() {
  return request("/health");
}

export async function fetchCustomBridges() {
  const payload = await request("/api/custom-bridges");
  return payload.items || [];
}

export async function createCustomBridge(bridge) {
  const payload = await request("/api/custom-bridges", {
    method: "POST",
    body: JSON.stringify(bridge),
  });
  return payload.item;
}

export async function removeCustomBridge(bridgeId) {
  return request(`/api/custom-bridges/${encodeURIComponent(bridgeId)}`, {
    method: "DELETE",
  });
}
