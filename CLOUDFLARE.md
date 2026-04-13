# Cloudflare Deployment

## Frontend

This project is ready for Cloudflare Pages.

- Build command: `npm run cf:build`
- Output directory: `frontend/build`
- Root directory: leave empty
- Config file: `wrangler.toml`

## Live URL

Current Cloudflare Pages URL:

- `https://025d68d9.sinobridgesearch.pages.dev`

## Custom Domain

To connect a custom domain:

1. Open your Pages project in Cloudflare.
2. Go to `Custom domains`.
3. Click `Set up a custom domain`.
4. Enter your domain or subdomain.
5. Follow the DNS prompt shown by Cloudflare.
6. After the domain is active, update:
   - `frontend/public/index.html`
   - `frontend/public/sitemap.xml`
   - `frontend/public/robots.txt`

Until then, the project SEO files now point to the current `pages.dev` URL.

## API

Cloudflare Pages Functions mirror the existing API shape:

- `GET /health`
- `GET /api/custom-bridges`
- `POST /api/custom-bridges`
- `DELETE /api/custom-bridges/:id`

These functions live in the root `functions/` directory.

## Persistent storage

Custom bridges can be persisted with a Cloudflare KV binding named `CUSTOM_BRIDGES`.

1. Create a KV namespace in Cloudflare.
2. Add the namespace IDs to `wrangler.toml`.
3. Redeploy.

If the KV binding is not configured, the frontend still works because it falls back to local storage for custom bridge actions.

## Local Cloudflare preview

Use:

```bash
npm run cf:build
npx wrangler pages dev frontend/build
```
