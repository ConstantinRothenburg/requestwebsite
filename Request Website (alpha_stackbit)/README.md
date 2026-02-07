# README.md

## Request Website v2.0 - Climate Action Platform

**Live URL:** (TBD) `request-climate.com`  
**Status:** In Development (Phases 1-2)  
**Last Updated:** 2026-01-25

### Project Overview

Request Website v2.0 is a clean, modern, high-performance landing page for a climate action platform. The site connects users with vetted climate projects, matches them within days, and drives registrations through an optimized multi-step form.

**Key Features:**
- ✅ Full-width hero section with background video
- ✅ Responsive section layouts (full-width, half-height, split grid)
- ✅ Scroll-snap navigation for smooth storytelling
- ✅ Zero-cost form backend (Getform, CloudflareWorker, or GoogleAppsScript)
- ✅ Optimized video embedding (autoplay loop + normal player modes)
- ✅ WCAG 2.1 AA accessibility standards
- ✅ Lighthouse Performance >90, A11y >95, SEO >95
- ✅ Mobile-first responsive design (320px-1920px)
- ✅ Zero dependencies (HTML/CSS/vanilla JS)

---

## Quick Start

### Clone & Setup

```bash
# Clone the repository
git clone https://github.com/yourorg/request-website-v2.git
cd "Request Website v2.0"

# Open in local server (no build step required)
# Option 1: Python 3
python3 -m http.server 5500 --directory src

# Option 2: Node.js (http-server)
npm install -g http-server
http-server src -p 5500

# Option 3: VS Code Live Server extension
# Open src/pages/index.html → Right-click → Open with Live Server
```

Then visit: `http://localhost:5500`

### Build (Optional - for minification)

If adding a build step for CSS/JS minification:

```bash
# Install build tools (optional)
npm install --save-dev postcss postcss-cli cssnano

# Minify CSS
postcss src/css/index.css -o build/css/index.min.css

# Minify JS (if using terser)
npm install --save-dev terser
terser src/js/index.js -o build/js/index.min.js
```

---

## Project Structure

See [`docs/FOLDER_STRUCTURE.md`](./docs/FOLDER_STRUCTURE.md) for detailed tree.

**Key directories:**

```
Request Website v2.0/
├── config/              # site-config.yaml (colors, fonts, spacing)
├── src/
│   ├── pages/          # HTML files (index.html, 404.html)
│   ├── css/            # Modular stylesheets
│   ├── js/             # Vanilla JS (form, scroll snap, analytics)
│   └── assets/         # Images, videos, fonts
├── docs/               # ACTION_PLAN.toon, deployment guides
└── README.md           # This file
```

---

## Configuration

### Site Config (`config/site-config.yaml`)

All global settings live here:

- **Branding:** Primary color `#208380`, secondary `#5E5240`
- **Typography:** Inter (or system fonts), font sizes via clamp()
- **Spacing:** 4px base unit, sections use clamp(2.5rem, 4vw, 5rem)
- **SEO:** Meta descriptions, Open Graph tags, structured data
- **Performance:** Target LCP <2.5s, FID <100ms, CLS <0.1
- **A11y:** WCAG 2.1 AA, contrast 4.5:1, keyboard nav, ARIA labels
- **Deployment:** Cloudflare Pages or Vercel

**To use config values in CSS:**

```css
/* src/css/variables.css */
:root {
  --color-primary: #208380;
  --color-secondary: #5E5240;
  --font-size-h1: clamp(2rem, 5vw, 3rem);
  --space-md: 1rem;
}
```

---

## Forms Integration

**Zero-cost backend options:**

1. **Getform.io** (Free tier: 50 submissions/month)
   - Sign up at getform.io
   - Create form endpoint
   - Update `action="https://getform.io/f/YOUR_ID"` in HTML

2. **CloudflareWorker** (Free tier, unlimited)
   - Deploy Worker to handle POST requests
   - Store in D1 (SQLite) or KV store
   - Send email via Brevo/Resend (free trials)

3. **GoogleAppsScript** (Free, unlimited)
   - Deploy published web app
   - Form submissions → Google Sheet
   - Email notifications via Apps Script

**Current setup:** TBD (to be decided during Phase 3.2)

See [`docs/API_ENDPOINTS.md`](./docs/API_ENDPOINTS.md) for detailed setup.

---

## Development Workflow

### Git Workflow

```bash
# Create feature branch from main
git checkout -b feature/hero-section

# Make changes, commit with clear messages
git add src/pages/index.html src/css/hero.css
git commit -m "feat: add hero section with background video"

# Push and create pull request
git push origin feature/hero-section
```

### Code Style

- **HTML:** Semantic elements (`<header>`, `<main>`, `<section>`), meaningful alt text
- **CSS:** BEM-inspired naming, CSS custom properties, mobile-first media queries
- **JS:** ES6+ (const/let, arrow functions), vanilla only, no frameworks
- **Files:** kebab-case names, no spaces

### Testing Before Commit

1. Run **Lighthouse** locally (DevTools → Lighthouse)
2. Check **responsive design** (DevTools → Responsive Design Mode)
3. Test **keyboard navigation** (Tab, Enter, Escape)
4. Run **axe DevTools** (accessibility scan)
5. Verify **form submission** end-to-end

---

## Deployment

See [`docs/DEPLOYMENT.md`](./docs/DEPLOYMENT.md) for step-by-step guides.

### Deploy to Cloudflare Pages (Recommended)

```bash
# 1. Connect GitHub repo in Cloudflare Pages dashboard
# 2. Set build output folder to 'src/'
# 3. On git push to main, site auto-deploys

git push origin main  # Triggers production build
```

### Deploy to Vercel

```bash
# 1. Import repo in Vercel
# 2. Set root directory to 'src/'
# 3. On git push to main, site auto-deploys

git push origin main  # Vercel auto-deploys
```

### Domain & DNS

1. Register domain (or use existing)
2. Point DNS to hosting provider's nameservers
3. HTTPS automatic with Cloudflare / Vercel
4. Setup email forwarding (optional)

---

## Performance & SEO

### Lighthouse Targets

- **Performance:** >90 (LCP <2.5s, FID <100ms, CLS <0.1)
- **Accessibility:** >95 (WCAG 2.1 AA)
- **Best Practices:** >90
- **SEO:** >95 (meta tags, structured data, mobile-friendly)

### Image Optimization

- Use WebP/AVIF with JPEG fallback
- Responsive images with `srcset`
- Lazy-load below-fold images
- Compress with TinyPNG, ImageOptim, or Squoosh

### Video Optimization

- Short loops (5-15s) for background video
- Low resolution (1280×720) for web
- Bitrate ~1500-2500 kbps
- Provide .webm + .mp4 sources
- Lazy-load below-fold videos

### SEO Checklist

- ✅ Meta descriptions (155 chars max)
- ✅ Open Graph tags (og:title, og:image, og:url)
- ✅ robots.txt and sitemap.xml
- ✅ Structured data (schema.org Organization)
- ✅ Mobile-friendly (responsive, touch targets 48×48px)
- ✅ Core Web Vitals pass

---

## Accessibility (A11y)

We aim for **WCAG 2.1 AA compliance:**

### Checklist

- ✅ Color contrast: 4.5:1 for body text, 3:1 for large text
- ✅ Focus indicators: Visible on all interactive elements
- ✅ Keyboard navigation: All features accessible via Tab/Enter/Escape
- ✅ ARIA labels: Form inputs, icon buttons, dynamic content
- ✅ Alt text: Descriptive for all images
- ✅ Skip link: Hidden, focusable, jumps to main content
- ✅ Reduced motion: Respects `prefers-reduced-motion: reduce`
- ✅ Screen reader: Tested with VoiceOver (Mac), NVDA (Windows)

**Testing:**

```bash
# Run axe DevTools extension in Chrome
# Scan page → Fix violations → Retest

# Or test with automated CI tool
# npm install --save-dev @axe-core/cli
# axe http://localhost:5500
```

See [`docs/ACCESSIBILITY.md`](./docs/ACCESSIBILITY.md) for full checklist.

---

## Analytics

**Chosen provider:** (TBD during Phase 5.2)

**Options:**

1. **Plausible Analytics** (Privacy-first, EU-friendly, paid tier ~$10/mo)
2. **Google Analytics 4** (Free, requires cookie banner)
3. **Fathom Analytics** (Privacy-first, paid tier)

**Tracking goals:**
- Page views (all pages)
- Form submissions (success + errors)
- Video plays (hero, demo)
- CTA clicks

---

## Support & Issues

### Reporting Bugs

1. Open GitHub Issue with clear title
2. Include:
   - Browser + OS version
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if visual issue

### Feature Requests

Create GitHub Discussion or Issue tagged `enhancement`.

### Security Issues

Please report privately to [security email] instead of public issue.

---

## Documentation

Full docs in `docs/`:

- [`ACTION_PLAN.toon`](./docs/ACTION_PLAN.toon) — 10-phase project timeline
- [`DEPLOYMENT.md`](./docs/DEPLOYMENT.md) — Deploy to Cloudflare/Vercel
- [`API_ENDPOINTS.md`](./docs/API_ENDPOINTS.md) — Form backend setup
- [`ACCESSIBILITY.md`](./docs/ACCESSIBILITY.md) — A11y testing checklist
- [`SEO.md`](./docs/SEO.md) — SEO strategy + checklist
- [`PERFORMANCE.md`](./docs/PERFORMANCE.md) — Optimization notes
- [`BRAND_GUIDELINES.md`](./docs/BRAND_GUIDELINES.md) — Visual identity
- [`FOLDER_STRUCTURE.md`](./docs/FOLDER_STRUCTURE.md) — Directory tree + rules

---

## License

MIT License — See LICENSE file for details.

---

## Contributors

- **Design Lead:** [Name]
- **Frontend Dev:** [Name]
- **QA Lead:** [Name]
- **Product Lead:** [Name]

---

## Changelog

**v2.0** (2026-02)
- Initial release
- Full-width sections with snapping
- Zero-cost form backend
- Video optimization
- WCAG 2.1 AA accessibility
- Lighthouse >90 performance

See [`CHANGELOG.md`](./CHANGELOG.md) for detailed history.

---

**Questions?** See docs/ folder or open a GitHub Issue.
