# gettako.dev

Official landing page and distribution endpoints for **Tako** (`https://gettako.dev`).

## Overview

This repository hosts:
1. **Developer Landing Page**: Modern, high-performance static website built with Next.js 16 (Turbopack) and Tailwind CSS 4.
2. **Control Plane Installer**: Served at `https://gettako.dev/install.sh`
3. **Worker Agent Installer**: Served at `https://gettako.dev/agent.sh`

## Features

- **Typography**: `Inter` for clean UI body/headings and `Iosevka` for developer code blocks, terminal outputs, and paths.
- **Theme**: Seamless Light and Dark mode with an instant theme toggle and flat design (zero faux shadows).
- **SEO & Discoverability**: Full OpenGraph, Twitter Card, JSON-LD (`schema.org/SoftwareApplication`), XML Sitemap (`/sitemap.xml`), and `robots.txt`.
- **Developer 404**: Terminal-grade custom not-found page with clear egress navigation.
- **Static Export**: Generates static HTML (`output: 'export'`) optimized for global edge CDN hosting on Cloudflare Pages.

## Local Development

```bash
# Install dependencies
bun install

# Run dev server
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Production Build

```bash
bun run build
```

This compiles a fully static export in the `out/` directory, ready to deploy to Cloudflare Pages.

## Cloudflare Pages Deployment

1. Connect this repository to **Cloudflare Pages**.
2. Set the build configuration:
   - **Framework preset**: None / Next.js (Static HTML Export)
   - **Build command**: `bun run build`
   - **Build output directory**: `out`
   - **Root directory**: `/`
3. Custom Domain: Assign `gettako.dev` (and `www.gettako.dev`).
4. Headers & Redirects are automatically handled via `public/_headers` and `public/_redirects`.

## Author & Credits

- Author: **Octopy ID** ([octopy.dev](https://octopy.dev))

## License

Apache License 2.0. See [LICENSE](LICENSE) for details.
