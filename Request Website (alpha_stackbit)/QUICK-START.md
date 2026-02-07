# 🚀 Quick Start Guide - Climate Request v2.0

## Directory Structure
```
Request Website v2.0/
├── src/
│   ├── pages/
│   │   ├── index.html          ✅ Main site
│   │   ├── imprint.html        ✅ Legal - Impressum
│   │   └── privacy.html        ✅ Legal - Datenschutz
│   ├── css/
│   │   ├── index.css           ✅ Main (imports all)
│   │   ├── variables.css       ✅ Colors, spacing, fonts
│   │   ├── sections-bg.css     ✅ NEW: Background sections
│   │   ├── hero.css
│   │   ├── forms.css
│   │   └── responsive.css
│   ├── js/
│   │   ├── index.js            ✅ Main JS
│   │   ├── lazy-load.js        ✅ NEW: Lazy loading
│   │   └── config/
│   │       └── sections.js
│   └── assets/
│       ├── videos/
│       ├── images/
│       └── fonts/
├── netlify.toml
├── DEPLOYMENT-READY.md
└── QUICK-START.md (this file)
```

## Local Development

### Option 1: Python (Recommended)
```bash
cd "Request Website v2.0"
python3 -m http.server 5500
# Open http://localhost:5500
```

### Option 2: Node.js
```bash
npx http-server src -p 5500
# Open http://localhost:5500
```

### Option 3: VS Code Live Server
```
1. Right-click index.html
2. "Open with Live Server"
3. Browser opens automatically
```

## Making Changes

### Add a New Section
1. Open `src/pages/index.html`
2. Copy any existing `<section id="section-X" class="section section-bg">` block
3. Update:
   - `id` (unique)
   - `data-bg-src` (video or image path)
   - `.section-headline` text
4. Save → Browser refreshes automatically

### Change Button Colors/Styles
1. Edit `src/css/sections.css`
2. Find `.btn` class
3. Update `border-radius`, `background-color`, `color`
4. Save → Refresh

### Update Logo
1. Replace SVG in `src/pages/index.html` `<svg class="hero-logo">` block
2. Or change `.logo-svg` fill color in `src/css/hero.css`

### Modify Hero Background
1. Edit `src/css/hero.css`
2. Find `.hero-bg` class
3. Update `background` property

### Change Form Fields
1. Edit `src/pages/index.html` `#section-form` area
2. Add/remove `<input>` or `<select>` fields
3. Ensure all have `name` attribute for Netlify Forms

## Deployment to Netlify (60 Seconds)

### Method 1: Drag & Drop (Easiest)
```
1. Go to netlify.com/drop
2. Drag "Request Website v2.0" folder
3. Site goes LIVE instantly
4. Copy .netlify.app URL
```

### Method 2: Git Integration
```bash
1. Push to GitHub
2. Connect repository to Netlify
3. Deploy branch: main
4. Publish dir: src
5. Auto-deploys on push
```

### Method 3: Netlify CLI
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=src
# Follow prompts
```

## Custom Domain Setup

1. **Buy domain** (Google Domains, Namecheap, etc.)
2. **In Netlify:**
   - Go to Domain settings
   - Add custom domain
   - Copy nameservers
3. **In domain registrar:**
   - Update nameservers
   - Wait 24-48 hours
4. **HTTPS:** Auto-enabled (Let's Encrypt)

## Forms & Submissions

### Receive Form Submissions
1. In Netlify dashboard
2. Forms → [Your Site]
3. See all submissions

### Email Notifications
1. Dashboard → Forms
2. Click form name
3. Settings → Notifications
4. Add email address
5. Emails on new submission

### Connect to 3rd Party
- Zapier
- Slack
- Discord
- Google Sheets
- Mailchimp

## Performance Optimization

### Monitor Speed
1. **DevTools:** F12 → Lighthouse
2. **External:** pagespeed.web.dev
3. **Netlify:** Analytics tab

### Optimize Images
```bash
# Install ImageMagick
brew install imagemagick

# Generate responsive sizes
for img in src/assets/images/*.jpg; do
  convert "$img" -resize 320x320 "${img%.*}-320.jpg"
  convert "$img" -resize 640x640 "${img%.*}-640.jpg"
  convert "$img" -resize 1024x1024 "${img%.*}-1024.jpg"
done
```

### Compress Videos
```bash
# Install ffmpeg
brew install ffmpeg

# Compress video for web
ffmpeg -i video.mp4 -c:v libx264 -crf 23 -preset medium \
  -c:a aac -b:a 128k output.mp4
```

## Common Issues & Fixes

### Videos not loading
- [ ] Check file paths (relative vs absolute)
- [ ] Verify MP4 codec support
- [ ] Try uploading to CDN
- [ ] Add fallback image

### Logo not showing on header
- [ ] Check SVG path
- [ ] Verify fill color (white vs red)
- [ ] Test with browser DevTools

### Form not submitting
- [ ] Verify `netlify` attribute on `<form>`
- [ ] Check all field `name` attributes
- [ ] Test honeypot field
- [ ] View Netlify Forms tab

### Slow performance
- [ ] Enable gzip compression (Netlify: automatic)
- [ ] Optimize images (< 100 KB each)
- [ ] Lazy load videos
- [ ] Check Core Web Vitals

### CORS errors on videos
- [ ] Use same domain
- [ ] Or enable CORS headers in netlify.toml
- [ ] Use CDN with CORS support

## SEO & Analytics

### Add Google Analytics
```html
<!-- Add before </head> in index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Add Meta Tags
```html
<!-- Already in index.html, update: -->
<meta name="description" content="Your description">
<meta property="og:title" content="Your title">
<meta property="og:image" content="/og-image.jpg">
```

## Maintenance Checklist

- [ ] Monthly: Check form submissions
- [ ] Monthly: Monitor performance (PageSpeed)
- [ ] Quarterly: Update content/copy
- [ ] Quarterly: Review analytics
- [ ] Annually: Update legal pages
- [ ] Annually: Renew SSL (auto in Netlify)

## Support Links

- **Netlify Docs:** https://docs.netlify.com
- **CSS Variables:** https://developer.mozilla.org/docs/Web/CSS/--*
- **Intersection Observer:** https://developer.mozilla.org/docs/Web/API/Intersection_Observer_API
- **Netlify Forms:** https://docs.netlify.com/forms/setup

---

**Site is 100% production-ready. Deploy now!** 🚀
