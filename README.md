# SinoBridge Search

SinoBridge Search is a bilingual web application for exploring historic Chinese bridges through search, rich detail pages, image galleries, comparison tools, and custom bridge entries. The original core experience remains simple and accessible, while the surrounding product has been upgraded with stronger UI, optional backend support, and deployment-ready project structure.

## Highlights

- Bilingual interface in Chinese and English
- Search by bridge name, Chinese title, location, or year
- Image-first bridge detail pages with gallery, map link, and speech playback
- Favorites, recent searches, region filtering, and random discovery
- Compare up to two bridges side by side
- Local admin-style custom bridge creation
- Optional backend API for persistent custom bridge storage
- Netlify-ready frontend deployment
- Baidu and China-focused SEO preparation

## Tech Stack

- Frontend: React, Create React App
- Styling: Custom CSS
- Testing: React Testing Library
- Backend: Node.js built-in HTTP server
- Data storage: JSON file for custom bridge entries

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
│   ├── src/
│   ├── .env.example
│   └── package.json
├── netlify.toml
└── README.md
```

## Features

### Core Experience

- Explore a curated collection of Chinese historic bridges
- Switch instantly between Chinese and English
- Open bridge cards for detailed information and gallery views
- Listen to bridge descriptions with browser speech synthesis

### Discovery and Browsing

- Smart search across names, Chinese labels, locations, and years
- Sort by name, oldest first, or newest first
- Filter by region
- Use the random bridge action for quick exploration

### Personalization

- Save favorite bridges
- Reopen recent searches
- Add your own custom bridges through the built-in form

### Comparison and Data Management

- Compare two bridges in a quick summary panel
- Store custom bridges locally by default
- Sync custom bridges with the optional backend when available

## Local Development

### Frontend

```bash
cd frontend
npm install
npm start
```

### Backend

The backend uses only built-in Node.js modules, so there are no external backend dependencies to install.

```bash
cd backend
npm start
```

Default backend URL:

```text
http://localhost:8080
```

To connect the frontend to the backend in development, create a local environment file:

```bash
cp frontend/.env.example frontend/.env
```

## Available Scripts

### Frontend

```bash
cd frontend
npm test -- --watch=false
npm run build
```

### Backend

```bash
cd backend
npm start
```

## Backend API

### `GET /health`

Returns backend health status.

### `GET /api/custom-bridges`

Returns all saved custom bridge entries.

### `POST /api/custom-bridges`

Creates or updates a custom bridge entry.

Example payload:

```json
{
  "id": "custom-test-bridge-123",
  "name": "Test Bridge",
  "zh": "测试桥",
  "year": 2024,
  "location": "Shanghai, China",
  "img": "https://example.com/bridge.jpg",
  "gallery": ["https://example.com/bridge.jpg"],
  "desc_en": "A modern test bridge.",
  "desc_zh": "一座用于测试的现代桥梁。",
  "isCustom": true
}
```

### `DELETE /api/custom-bridges/:id`

Removes a custom bridge entry.

## Deployment

### Netlify

This repository already includes Netlify configuration in `netlify.toml`.

Recommended settings:

- Base directory: `frontend`
- Build command: `npm run build`
- Publish directory: `build`

The frontend also includes:

- SPA redirect support via `frontend/public/_redirects`
- sitemap via `frontend/public/sitemap.xml`
- robots configuration via `frontend/public/robots.txt`

## SEO and China Readiness

The project has been prepared for broader discoverability with:

- bilingual metadata
- improved page title and description
- Open Graph metadata
- structured data in `index.html`
- sitemap support
- robots support

### Baidu Preparation

For Baidu visibility after deployment:

1. Add the deployed domain to Baidu Search Resource Platform.
2. Complete site verification.
3. Submit the sitemap.
4. Submit important URLs manually through Baidu tools when needed.
5. Keep the site fast, stable, and available over HTTPS.

### Important Hosting Note

The codebase is prepared for China-focused visibility, but true mainland China reliability depends on infrastructure, not only code.

- Netlify may work globally, but access speed and consistency in mainland China can vary.
- For stronger China availability, use a China-friendly or Asia-optimized host and a custom domain.
- If you host directly in mainland China, you may need ICP filing depending on your hosting and domain setup.
- Update the sitemap and canonical URL after final production domain selection.

## Verification

The current project has been verified with:

- `npm test -- --watch=false`
- `npm run build`
- `node --check backend/server.js`

## Roadmap

Recommended next upgrades for production:

- database-backed storage
- authentication for admin actions
- image upload support
- editable bridge management dashboard
- SSR or prerendered content for stronger SEO
- China-optimized production hosting strategy

## Repository Setup

Target GitHub repository:

```text
https://github.com/zBushraa/SinoBridgeSearch-.git
```

Before pushing, make sure the project is stored as a single Git repository and not as a nested repository inside `frontend/`.
