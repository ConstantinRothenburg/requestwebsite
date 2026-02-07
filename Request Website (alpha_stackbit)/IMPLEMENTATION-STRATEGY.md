# Climate Request v2.0 - STRATEGIC IMPLEMENTATION ROADMAP

## 🎯 Phase-Based Deployment Strategy

**Goal:** Production-ready site with 10 background video/image sections + optimized performance  
**Timeline:** This session → Deployment ready

---

## Phase 1: Architecture & Config (15 mins)

### 1.1 Create Configuration System
- `src/config/sections-config.js` - Section definitions (headline, bg, text, overlay behavior)
- Template for each section type:
  ```js
  {
    id: 'section-1',
    headline: 'YOUR DEEP DIVE INTO CLIMATE CHANGE SOLUTIONS',
    backgroundType: 'video', // video | image
    backgroundPath: '/assets/videos/...',
    imagePath: '/assets/images/...', // Fallback
    overlayText: true,
    autoplayVideo: true,
    scrollableOverlay: true
  }
  ```

### 1.2 Image Generation Strategy
- Extract frame from each video (thumbnail at 00:00 + 1sec)
- Generate responsive sizes: 320px, 640px, 1024px, 1440px
- Script: `scripts/generate-thumbnails.sh` (ffmpeg-based)
- Store in `/assets/images/thumbnails/`

### 1.3 Lazy Loading Strategy
- Intersection Observer for videos below fold
- Load only on viewport entry
- Fallback image shows until video ready
- Progressive enhancement

---

## Phase 2: HTML Restructure (20 mins)

### 2.1 Section Template
```html
<section class="section section-bg" data-section-id="section-1": 