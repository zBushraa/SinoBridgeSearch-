# SinoBridge Search

SinoBridge Search is a bilingual React application for exploring historic Chinese bridges through search, rich detail pages, optimized image galleries, comparison tools, and custom bridge entries. The original core bridge-search experience remains intact, while the surrounding product has been expanded with more informative content, lightweight backend support, and deployment-ready infrastructure.

## What The App Does

- Search bridges by English name, Chinese name, location, or year
- Switch between Chinese and English interface modes
- Open image-first bridge detail pages with longer descriptions
- Browse optimized galleries with lighter `.webp` delivery
- Save favorites and reopen recent searches
- Compare two bridges side by side
- Add custom bridge entries from the built-in form
- Copy Chinese names and addresses for easier map use in China
- Review dynamic bridge insights such as the oldest, newest, and regional spread of the current result set

## Product Highlights

### Core Search Experience

- Fast bilingual bridge discovery
- Card-based browsing with image previews
- Detail pages that keep the image visible first
- Long-form Chinese and English descriptions

### Informative Features

- Bridge detail metadata for year, location, dynasty, alias, type, and visual features
- Travel-oriented China-use tips for map search and local naming context
- Bridge Insights panel that summarizes the filtered result set
- Region-aware browsing for educational comparison across locations

### Personalization

- Favorites saved in local storage
- Recent searches saved locally
- Custom bridge creation with local fallback support

### Media and Performance

- Optimized gallery images
- `.webp` delivery for lighter image transfer
- Lazy-loaded cards and thumbnail-first gallery flow
- Mobile-friendly layout with sidebar tools and compact stats

## Tech Stack

- Frontend: React + Create React App
- Styling: Custom CSS
- Testing: React Testing Library
- Local backend: Node.js HTTP server
- Edge-ready deployment: Cloudflare Pages + Pages Functions
- Optional persistence: Cloudflare KV

## Project Structure

```text
.
├── backend/
│   ├── data/
│   │   └── custom-bridges.json
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   │   ├── images/
│   │   ├── _headers
│   │   ├── _redirects
│   │   ├── robots.txt
│   │   └── sitemap.xml
│   ├── src/
│   └── package.json
├── functions/
│   ├── _lib/
│   ├── api/
│   └── health.js
├── CLOUDFLARE.md
├── jsconfig.json
├── package.json
├── wrangler.toml
└── README.md
```

## Local Development

Run everything from the project root if you want the simplest workflow.

### Frontend

```bash
npm start
```

This root command forwards to the real React app inside `frontend/`.

### Backend

```bash
npm run backend
```

Default backend URL:

```text
http://localhost:8080
```

If you want the frontend to call the backend in development, use the existing frontend environment setup and local API flow.

## Useful Scripts

### Root

```bash
npm start
npm test
npm run build
```

### Cloudflare

```bash
npm run cf:build
npm run cf:dev
```

### Backend

```bash
npm run backend
```

## API Overview

The project supports both a local Node backend and Cloudflare Pages Functions with the same route shape.

### `GET /health`

Returns runtime health information.

### `GET /api/custom-bridges`

Returns saved custom bridge entries.

### `POST /api/custom-bridges`

Creates or updates a custom bridge entry.

### `DELETE /api/custom-bridges/:id`

Removes a custom bridge entry.

Example payload:

```json
{
  "id": "custom-test-bridge-123",
  "name": "Test Bridge",
  "zh": "测试桥",
  "year": 2024,
  "location": "Shanghai, China",
  "img": "https://example.com/bridge.webp",
  "gallery": ["https://example.com/bridge.webp"],
  "desc_en": "A modern test bridge.",
  "desc_zh": "一座用于测试的现代桥梁。",
  "isCustom": true
}
```

## Cloudflare Deployment

This repository is now prepared for Cloudflare Pages.

- Build output: `frontend/build`
- Config file: `wrangler.toml`
- Edge routes: `functions/`
- Static headers: `frontend/public/_headers`

For persistent custom bridge storage on Cloudflare:

1. Create a KV namespace named for custom bridge storage.
2. Add the namespace IDs to `wrangler.toml`.
3. Redeploy the project.

If KV is not configured, the app still works because custom bridge actions fall back to local storage on the client.

More setup notes are available in `CLOUDFLARE.md`.

## China Readiness

The project is designed to be more practical for Chinese-language use cases.

- Chinese bridge names and addresses are available for direct copy
- Chinese mode reduces unnecessary English leakage
- Bridge records include local naming context and China-use tips
- Metadata, robots, and sitemap support are already included
- The interface is optimized for mobile browsing

For stronger China availability in production, pair the codebase with fast hosting, HTTPS, and a stable production domain.

## Verification

The current project has been verified with:

- `npm test`
- `npm run build`
- `npm --prefix frontend test -- --watch=false`
- `npm --prefix frontend run build`
- `node --check backend/server.js`

## Roadmap

Recommended next upgrades:

- cloud-persistent bridge management with KV or D1
- admin authentication
- image upload flow
- map provider options for China-specific navigation
- richer bridge timelines and historical references
- stronger content sourcing for research-grade bridge entries

## Repository

GitHub repository:

```text
https://github.com/zBushraa/SinoBridgeSearch-.git
```
