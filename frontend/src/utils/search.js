const normalize = (value) => value.trim().toLowerCase();

export function searchBridges(bridges, query, sortBy) {
  const normalizedQuery = normalize(query);

  const filtered = bridges.filter((bridge) => {
    if (!normalizedQuery) {
      return true;
    }

    return bridge.keywords.includes(normalizedQuery);
  });

  return [...filtered].sort((left, right) => {
    if (sortBy === "year-asc") {
      return left.year - right.year;
    }

    if (sortBy === "year-desc") {
      return right.year - left.year;
    }

    return left.name.localeCompare(right.name);
  });
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
