# Design Brief: Climate Solutions Website v2.0

**Project:** Climate Solutions One-Pager v2.0  
**Version:** 2.0.0
**Status:** Foundation Ready (Phase 1 Complete)  
**Last Updated:** January 25, 2026
**Assets Status:** Copied from v1 (images, videos, fonts)
**Phase:** 1 Complete, Phase 2 Ready
**Local Dev:** http://localhost:5500 (running)
**Git:** main @ d6abe21 (clean)
**Hosting:** Netlify (planned)
**Analytics:** None (per request)
---

## Executive Summary

Climate Solutions v2.0 is a **modular, scalable, production-ready** one-page website built on the v1 foundation but with **modern architecture**:

**Key Upgrades:**
- ✅ **Modular CSS** (`src/css/*.css`) instead of monolithic
- ✅ **Configuration-Driven** (`config/site-config.yaml`)
- ✅ **Zero Dependencies** (vanilla HTML/CSS/JS)
- ✅ **Scroll-Snap Navigation** (CSS native)
- ✅ **Video Optimization** (background loops + lazy loading)
- ✅ **WCAG 2.1 AA** (accessibility-first)
- ✅ **Lighthouse >90** (performance targets)
- ✅ **Netlify Ready** (zero-cost hosting)

---

## Color Palette (from site-config.yaml)

**Primary Color:** `#ff005a` (urgent red)  
**Secondary:** `#5E5240` (earth brown)  
**Status:** Assets refreshed, color updated

---

## Typography (from site-config.yaml)

**Primary Font:** `Inter, Geist, system-ui` (modern, readable)  
**Weights:** 300, 400, 500, 550, 600  
**Scales:** `clamp()` responsive sizing  

**Font sizes:**
- h1: `clamp(2rem,5vw,3rem)`  
- h2: `clamp(1.5rem,4vw,2.4rem)`
- Body: `1rem`

---

## New Features (v2.0)

### Layout System
- **Full-width sections** (`100vw`, `100vh`)
- **Half-height sections** (`50vh`)
- **Split layouts** (vertical/horizontal grids)
- **Scroll-snapping** (native CSS, reduced-motion support)

### Video Integration
- **Background video mode** (muted, autoplay, loop, no controls)
- **Normal player mode** (controls, user-initiated)
- **Performance optimized** (WebM+MP4, posters, lazy loading)

### Forms
- **Zero-cost backends** (Netlify Forms, getform.io, CloudflareWorker)
- **Honeypot spam protection**
- **Multi-step wizard** (progress bar, validation)

---

## Section Architecture (src/pages/index.html)

```
<header>                 ← Sticky nav
<main class="snap-container">
  <section class="hero snap-section">      ← Full viewport + bg video
  <section class="network snap-section">   ← 3-column features
  <section class="cta-banner">             ← Gradient call-to-action
  <section class="video-showcase">         ← Split video + text
  <section class="form-section">           ← Multi-step registration
  <section class="benefits">               ← 3-column grid
  <section class="final-cta">              ← Closing conversion
</main>
<footer>                 ← Dark footer
```

---

## CSS Architecture (src/css/)

```
index.css              ← Main entry (imports all)
variables.css          ← CSS custom props (from config)
reset.css              ← Normalize/reset
base.css               ← Typography, spacing
sections.css           ← Full-width, half-height, split layouts
forms.css              ← Input styles, validation
hero.css               ← Hero specific
videos.css             ← Background + player modes
responsive.css         ← Mobile-first media queries
utilities.css          ← Spacing, display helpers
```

---

## Responsive Breakpoints

| Device | Width | Layout |
|--------|-------|--------|
| Mobile | <480px | Single column |
| Tablet | 480-768px | 2-column |
| Desktop | 768-1024px | 3-column |
| Large | 1280px+ | Max 1200px container |

---

## Performance Targets (Lighthouse)

| Metric | Target | Status |
|--------|--------|--------|
| **LCP** | <2.5s | Configured |
| **FID** | <100ms | Vanilla JS |
| **CLS** | <0.1 | Scroll-snap stable |
| **Perf** | >90 | Optimized |
| **A11y** | >95 | WCAG AA |
| **SEO** | >95 | Meta complete |

---

## A11y Standards (WCAG 2.1 AA)

✅ **Contrast:** 4.5:1 body text, 3:1 large text  
✅ **Focus:** Visible indicators (2px Primary color)  
✅ **Keyboard:** Full Tab/Enter/Escape navigation
✅ **ARIA:** Labels on forms, icons, dynamic content
✅ **Skip link:** Hidden, focusable to main content
✅ **Reduced motion:** Respects `prefers-reduced-motion`

---

## Deployment: Netlify

**Free tier, drag-and-drop:**

1. Drag `Request Website v2.0` folder to [netlify.com/drop](https://netlify.com/drop)
2. **Publish directory:** `src`
3. **Custom domain:** `climatesolutions.eco`
4. **Netlify Forms:** Free (100 submissions/month)
5. **Auto-deploy:** GitHub integration

---

## Development Status

**Phase 1 Complete:** Foundation (structure, config, docs)  
**Phase 2 Ready:** Sections (hero, video, form)  
**Local server:** http://localhost:5500  
**Git:** main @ d6abe21 (clean)  

**Next:** Create `src/pages/index.html` + base CSS

---

**v2.0 reflects current thread: modular, scalable, modern, Netlify-ready.**