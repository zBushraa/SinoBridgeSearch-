import { getStore, json, options, readCustomBridges, writeCustomBridges } from "../../_lib/custom-bridges";

export function onRequestOptions() {
  return options();
}

export async function onRequestDelete(context) {
  if (!getStore(context.env)) {
    return json({ error: "CUSTOM_BRIDGES KV binding is not configured." }, 503);
  }

  const bridgeId = context.params.id;
  const bridges = await readCustomBridges(context.env);
  const nextBridges = bridges.filter((bridge) => bridge.id !== bridgeId);

  await writeCustomBridges(context.env, nextBridges);

  return json({ removedId: bridgeId });
}
