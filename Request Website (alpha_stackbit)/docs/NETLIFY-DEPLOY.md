# Netlify Deployment Config

## Automatic Deploy Settings

### Build Settings
```yaml
# netlify.toml (create at project root)
[build]
  publish = "src"
  command = ""

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "*.css"
  [headers.values]
    cache-control = "public, max-age=31536000, immutable"

[[headers]]
  for = "*.js"
  [headers.values]
    cache-control = "public, max-age=31536000, immutable"

[[headers]]
  for = "*.jpg *.jpeg *.png *.webp *.avif *.svg"
  [headers.values]
    cache-control = "public, max-age=31536000, immutable"

[[headers]]
  for = "*.woff *.woff2"
  [headers.values]
    cache-control = "public, max-age=31536000, immutable"
```

## Manual Deploy (Immediate)

1. **Drag & Drop:**
   - Go to [netlify.com/drop](https://netlify.com/drop)
   - Drag `Request Website v2.0` folder
   - **Publish directory:** `src`
   - Instant deploy ✅

2. **Netlify Forms Auto:**
   ```html
   <form netlify netlify-honeypot="website">  <!-- Already in index.html -->
   ```
   - 100 submissions/month FREE
   - Email notifications automatic

3. **Custom Domain:**
   ```bash
   # Add DNS records
   climatesolutions.eco → A 75.2.60.5
   # OR CNAME netlify.app
   ```

## GitHub + Netlify (Recommended)

1. **Push to GitHub private repo:**
   ```bash
   git remote add origin git@github.com:YOUR_USERNAME/climate-request-v2.git
   git push -u origin main
   ```

2. **Connect GitHub → Netlify:**
   - New site from Git → GitHub repo
   - **Build command:** (empty)
   - **Publish directory:** `src`
   - Auto-deploys on `git push`

## Production Headers (netlify.toml)

- CSS/JS: **1 year cache**
- Images/Fonts: **1 year immutable**
- HTML: **Browser cache**
- Forms: **Netlify auto**

## Expected Performance

| Metric | Expected |
|--------|----------|
| LCP | <1.5s |
| FID | <50ms |
| CLS | 0 |
| Perf Score | 95+ |

## Live URL Format

netlify.app/random-name.netlify.app
→ Add custom domain

**DEPLOYMENT READY - Drag folder now!** 🚀