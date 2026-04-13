import { getStore, json, options, readCustomBridges, validateBridge, writeCustomBridges } from "../_lib/custom-bridges";

export function onRequestOptions() {
  return options();
}

export async function onRequestGet(context) {
  const items = await readCustomBridges(context.env);

  return json({
    items,
    storageReady: Boolean(getStore(context.env)),
  });
}

export async function onRequestPost(context) {
  let bridge;

  try {
    bridge = await context.request.json();
  } catch {
    return json({ error: "Invalid JSON body." }, 400);
  }

  const validationError = validateBridge(bridge);

  if (validationError) {
    return json({ error: validationError }, 400);
  }

  if (!getStore(context.env)) {
    return json({ error: "CUSTOM_BRIDGES KV binding is not configured." }, 503);
  }

  const bridges = await readCustomBridges(context.env);
  const nextBridges = [bridge, ...bridges.filter((item) => item.id !== bridge.id)];
  await writeCustomBridges(context.env, nextBridges);

  return json({ item: bridge }, 201);
}
