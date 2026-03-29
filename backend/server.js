const http = require("http");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");

const PORT = Number(process.env.PORT || 8080);
const DATA_DIR = path.join(__dirname, "data");
const CUSTOM_BRIDGES_FILE = path.join(DATA_DIR, "custom-bridges.json");

function ensureDataFile() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  if (!fs.existsSync(CUSTOM_BRIDGES_FILE)) {
    fs.writeFileSync(CUSTOM_BRIDGES_FILE, "[]\n", "utf8");
  }
}

function readCustomBridges() {
  ensureDataFile();

  try {
    return JSON.parse(fs.readFileSync(CUSTOM_BRIDGES_FILE, "utf8"));
  } catch {
    return [];
  }
}

function writeCustomBridges(bridges) {
  ensureDataFile();
  fs.writeFileSync(CUSTOM_BRIDGES_FILE, `${JSON.stringify(bridges, null, 2)}\n`, "utf8");
}

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,DELETE,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Cache-Control": "no-store",
  });
  response.end(JSON.stringify(payload));
}

function collectJson(request) {
  return new Promise((resolve, reject) => {
    let body = "";

    request.on("data", (chunk) => {
      body += chunk;
    });

    request.on("end", () => {
      if (!body) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(error);
      }
    });

    request.on("error", reject);
  });
}

function validateBridge(bridge) {
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

const server = http.createServer(async (request, response) => {
  const url = new URL(request.url, `http://${request.headers.host || "localhost"}`);

  if (request.method === "OPTIONS") {
    response.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,DELETE,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    });
    response.end();
    return;
  }

  if (url.pathname === "/health" && request.method === "GET") {
    sendJson(response, 200, {
      status: "ok",
      service: "sinobridge-backend",
      timestamp: new Date().toISOString(),
    });
    return;
  }

  if (url.pathname === "/api/custom-bridges" && request.method === "GET") {
    sendJson(response, 200, {
      items: readCustomBridges(),
    });
    return;
  }

  if (url.pathname === "/api/custom-bridges" && request.method === "POST") {
    try {
      const bridge = await collectJson(request);
      const validationError = validateBridge(bridge);

      if (validationError) {
        sendJson(response, 400, { error: validationError });
        return;
      }

      const bridges = readCustomBridges();
      const nextBridges = [bridge, ...bridges.filter((item) => item.id !== bridge.id)];
      writeCustomBridges(nextBridges);
      sendJson(response, 201, { item: bridge });
    } catch {
      sendJson(response, 400, { error: "Invalid JSON body." });
    }
    return;
  }

  if (url.pathname.startsWith("/api/custom-bridges/") && request.method === "DELETE") {
    const bridgeId = decodeURIComponent(url.pathname.replace("/api/custom-bridges/", ""));
    const bridges = readCustomBridges();
    const nextBridges = bridges.filter((bridge) => bridge.id !== bridgeId);

    writeCustomBridges(nextBridges);
    sendJson(response, 200, { removedId: bridgeId });
    return;
  }

  sendJson(response, 404, { error: "Route not found." });
});

server.listen(PORT, () => {
  console.log(`SinoBridge backend running on http://localhost:${PORT}`);
});
