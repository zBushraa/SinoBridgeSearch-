const STORAGE_KEY = "custom-bridges";

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,DELETE,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Cache-Control": "no-store",
    "Content-Type": "application/json; charset=utf-8",
  };
}

export function json(payload, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: corsHeaders(),
  });
}

export function options() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders(),
  });
}

export function getStore(env) {
  if (!env || !env.CUSTOM_BRIDGES || typeof env.CUSTOM_BRIDGES.get !== "function") {
    return null;
  }

  return env.CUSTOM_BRIDGES;
}

export async function readCustomBridges(env) {
  const store = getStore(env);

  if (!store) {
    return [];
  }

  const raw = await store.get(STORAGE_KEY);

  if (!raw) {
    return [];
  }

  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export async function writeCustomBridges(env, bridges) {
  const store = getStore(env);

  if (!store) {
    return false;
  }

  await store.put(STORAGE_KEY, JSON.stringify(bridges));
  return true;
}

export function validateBridge(bridge) {
  if (!bridge || typeof bridge !== "object") {
    return "Bridge payload is required.";
  }

  if (!bridge.id || !bridge.name || !bridge.zh || !bridge.location) {
    return "Bridge id, English name, Chinese name, and location are required.";
  }

  if (!bridge.year || Number.isNaN(Number(bridge.year))) {
    return "Bridge year must be a number.";
  }

  return null;
}
