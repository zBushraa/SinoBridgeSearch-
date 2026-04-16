export function searchBridges(bridges, query, sortBy = "name") {
  const normalizedQuery = (query || "").trim().toLowerCase();

  let filtered = Array.isArray(bridges) ? bridges : [];

  if (normalizedQuery) {
    filtered = filtered.filter((bridge) => {
      const searchableText = (
        bridge?.keywords ||
        [
          bridge?.name || "",
          bridge?.zh || "",
          bridge?.location || "",
          bridge?.location_zh || "",
          String(bridge?.year || ""),
          bridge?.desc_en || "",
          bridge?.desc_zh || "",
          bridge?.dynasty_en || "",
          bridge?.dynasty_zh || "",
          bridge?.alias_en || "",
          bridge?.alias_zh || "",
        ].join(" ")
      ).toLowerCase();

      return searchableText.includes(normalizedQuery);
    });
  }

  if (sortBy === "year-asc") {
    return [...filtered].sort((a, b) => (a.year || 0) - (b.year || 0));
  }

  if (sortBy === "year-desc") {
    return [...filtered].sort((a, b) => (b.year || 0) - (a.year || 0));
  }

  return [...filtered].sort((a, b) =>
    (a.name || "").localeCompare(b.name || "")
  );
}

export function getTimelineSummary(bridges) {
  if (bridges.length === 0) {
    return null;
  }

  const years = bridges.map((bridge) => bridge.year);

  return {
    oldest: Math.min(...years),
    newest: Math.max(...years),
  };
}
