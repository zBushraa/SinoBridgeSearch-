import { getStore, json, options } from "./_lib/custom-bridges";

export function onRequestOptions() {
  return options();
}

export function onRequestGet(context) {
  return json({
    status: "ok",
    service: "sinobridge-cloudflare",
    runtime: context.env.SINOBRIDGE_RUNTIME || "cloudflare-pages",
    storage: getStore(context.env) ? "kv" : "fallback",
    timestamp: new Date().toISOString(),
  });
}
