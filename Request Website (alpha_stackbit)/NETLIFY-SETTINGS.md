# Netlify Project Settings & Configuration
## Request Website v2.0 - Climate Action Platform

**Last Updated:** February 5, 2026  
**Production Domain:** `fascinating-hummingbird-07da62.netlify.app`  
**Site ID:** `fascinating-hummingbird-07da62`  
**GitHub Repo:** `oytla/Request-Website-v2.0`  

---

## ⚙️ Critical Netlify Settings

### Build Configuration
| Setting | Value | Purpose |
|---------|-------|---------|
| **Build Command** | *(empty - static site)* | No build needed for HTML/CSS/JS |
| **Publish Directory** | `src` | Where built files are served from |
| **Base Directory** | *(root)* | Netlify looks for netlify.toml here |
| **Node Version** | 18+ | For build tools and CLI |

### Deploy Settings
| Feature | Status | Details |
|---------|--------|---------|
| **Auto Publishing** | ✅ Enabled | Main/visual-editor-preview deploy automatically |
| **Deployment Notifications** | ✅ Enabled | GitHub checks + deploy status |
| **Branch Deploy** | ✅ visual-editor-preview | Visual editor staging URL |
| **Deploy Preview** | ✅ Enabled | PR preview builds |
| **Rollback Deployments** | ✅ Available | One-click rollback to previous deploy |

### Git Integration
| Setting | Value |
|---------|-------|
| **Repository** | `https://github.com/oytla/Request-Website-v2.0.git` |
| **Default Branch** | `main` (production) |
| **Staging Branch** | `visual-editor-preview` |
| **Preview Branch** | `preview` (empty, staging only) |
| **Build Branch** | `main` |
| **Automatic Deploys** | On every push to connected branches |

### Environment Variables
**Scope: All (Production, Deploy Preview, Branch Deploy)**

```env
NETLIFY_VISUAL_EDITOR=true
VISUAL_EDITOR_MODE=enabled
STACKBIT_ENABLE=true
STACKBIT_PROJECT_ID=6984a776bac46400c3290ee2
```

**How to Add/Update:**
1. Go to: `https://app.netlify.com/sites/fascinating-hummingbird-07da62/settings/deploys`
2. Scroll to "Environment variables"
3. Add or update each variable
4. Redeploy for changes to take effect

---

## 🌐 URL Routing & Redirects

### Core Redirects (netlify.toml)
```toml
# Root path redirect
[[redirects]]
  from = "/"
  to = "/pages/index.html"
  status = 200

# Preview server health check
[[redirects]]
  from = "/preview-server-status/*"
  to = "/pages/index.html"
  status = 200

# Force HTTPS
[[redirects]]
  from = "http://*"
  to = "https://:splat"
  status = 301
  force = true
```

### Accessible Pages
```
/pages/index.html       → Homepage
/pages/imprint.html     → Legal/Imprint
/pages/privacy.html     → Privacy Policy
/api/netlify-visual/*   → Visual Editor API
```

### Important: No SPA Catch-All
- ❌ NOT using `/* → /index.html` redirect (breaks multi-page navigation)
- ✅ Each page accessible at its direct path
- ✅ Root `/` redirects to `/pages/index.html` (200 status, transparent)

---

## 🔐 Security Headers

### Content Security Policy (CSP)
```
default-src 'self'
script-src 'self' 'unsafe-inline' https://cdn.netlify.com https://identity.netlify.com https://unpkg.com
style-src 'self' 'unsafe-inline'
img-src 'self' data: https:
font-src 'self' data:
connect-src 'self' https://*.netlify.com https://api.netlify.com
frame-src 'self' https://app.netlify.com
frame-ancestors 'self' https://app.netlify.com https://create.netlify.com
```

**Why These Directives:**
- Allows Netlify Identity authentication
- Allows Netlify CDN resources
- Blocks external scripts (XSS protection)
- Allows Studio editor frame (create.netlify.com)

### Other Security Headers
| Header | Value | Purpose |
|--------|-------|---------|
| **X-Frame-Options** | DENY | Prevent clickjacking |
| **X-XSS-Protection** | 1; mode=block | Legacy XSS protection |
| **X-Content-Type-Options** | nosniff | Prevent MIME type sniffing |
| **Referrer-Policy** | strict-origin-when-cross-origin | Privacy |
| **Permissions-Policy** | Block geolocation, microphone, camera | Privacy/Security |
| **HSTS** | max-age=31536000; includeSubDomains; preload | Force HTTPS for 1 year |

---

## 💾 Caching Strategy

### HTML Files
```
Cache-Control: public, max-age=0, must-revalidate
```
- **Reason:** Updated frequently via Studio edits
- **Browser Cache:** 0 seconds (always check for updates)
- **Netlify CDN:** Must revalidate each request

### CSS/JS Files
```
Cache-Control: public, max-age=31536000, immutable
Content-Type: text/css; charset=utf-8
```
- **Reason:** Versioned/immutable assets
- **Cache Duration:** 1 year
- **Effect:** Files cached indefinitely across browsers

### Images/Fonts
```
Cache-Control: public, max-age=31536000, immutable
```
- **Cache Duration:** 1 year (same as CSS/JS)

### Videos
```
Cache-Control: public, max-age=86400
```
- **Cache Duration:** 24 hours (may update frequently)

### Critical Resources (index.html)
```
Link: </css/index.css>; rel=preload; as=style
Link: </js/lazy-load.js>; rel=preload; as=script
```
- Preloads critical resources for faster page load

---

## 🔌 Functions & API

### Visual Editor Endpoint
**Path:** `netlify/functions/visual-editor.js`  
**Route:** `/api/netlify-visual/*`  
**Purpose:** Handles Studio preview server requests  
**Status:** ✅ Deployed

**Request/Response:**
```javascript
// Request
GET /api/netlify-visual/preview-server-status?path=/

// Response
{
  status: "ok",
  preview: "available",
  path: "/"
}
```

### Function Location in Dashboard
- **URL:** `https://app.netlify.com/sites/fascinating-hummingbird-07da62/functions`
- **Monitor:** Deploy logs show all function invocations
- **Debug:** Check function runtime and response times

---

## 📊 Forms & Submissions

**Status:** Netlify Forms ready  
**Location:** `src/pages/index.html` → Registration form  
**Submissions View:** `https://app.netlify.com/sites/fascinating-hummingbird-07da62/forms`

**Form Configuration:**
```html
<form name="registration" method="POST" netlify>
  <!-- Netlify auto-detects and enables form handling -->
</form>
```

**To Enable Submissions:**
1. Form must have `netlify` attribute
2. Form must have unique `name` attribute
3. Deploy to production
4. Netlify auto-detects and enables form in dashboard

---

## 🚀 Deployment Process

### Branch → URL Mapping
| Branch | URL | Auto Deploy |
|--------|-----|------------|
| `main` | `fascinating-hummingbird-07da62.netlify.app` | ✅ Yes (production) |
| `visual-editor-preview` | `visual-editor-preview--fascinating-hummingbird-07da62.netlify.app` | ✅ Yes (staging) |
| `preview` | `preview--fascinating-hummingbird-07da62.netlify.app` | ✅ Yes (empty) |
| Any PR branch | `deploy-preview-XX--fascinating-hummingbird-07da62.netlify.app` | ✅ Yes (temp) |

### Deploy Timeline
| Event | Duration | Next Step |
|-------|----------|-----------|
| Push to GitHub | Instant | Netlify detects |
| Build starts | ~10 seconds | Functions deployed |
| Files uploaded to CDN | ~2-3 minutes | Cache invalidated |
| **Total Deploy Time** | **~3-5 minutes** | Site live |

### Monitor Deployment
- **Dashboard:** `https://app.netlify.com/sites/fascinating-hummingbird-07da62/deploys`
- **Status:** Green checkmark = success
- **Logs:** Click deploy to see full build/deploy logs
- **Timing:** Shows build time and edge function execution time

---

## 🛠️ Common Maintenance Tasks

### Add Custom Domain
1. Go to: `https://app.netlify.com/sites/fascinating-hummingbird-07da62/settings/domain`
2. Click "Add custom domain"
3. Enter domain (e.g., `request-climate.com`)
4. Follow DNS setup (Netlify DNS or external)
5. SSL certificate auto-provisions

### Update Environment Variables
1. Go to: `https://app.netlify.com/sites/fascinating-hummingbird-07da62/settings/deploys`
2. Find "Environment variables" section
3. Add, edit, or delete variables
4. **Important:** Redeploy code for changes to apply
   ```bash
   git commit --allow-empty -m "Redeploy to apply env vars"
   git push origin main
   ```

### Rollback to Previous Deploy
1. Go to: `https://app.netlify.com/sites/fascinating-hummingbird-07da62/deploys`
2. Find deploy to rollback to
3. Click deploy
4. Click "Publish deploy" (if needed)
5. Within 1-2 minutes: Production reverted

### Check Function Logs
1. Go to: `https://app.netlify.com/sites/fascinating-hummingbird-07da62/functions`
2. Click function name
3. View invocation logs (last 100)
4. Check runtime and response times

### Monitor Performance
1. Go to: `https://app.netlify.com/sites/fascinating-hummingbird-07da62/analytics`
2. View bandwidth, requests, errors
3. Check CDN cache hit ratio
4. Monitor edge function execution time

---

## 📋 Checklist: Initial Netlify Setup

When setting up on new Netlify project:

- [ ] **Create new site** from GitHub repository
  - [ ] Select: `oytla/Request-Website-v2.0`
  - [ ] Select branch: `main`
  - [ ] Build command: *(leave empty)*
  - [ ] Publish directory: `src`

- [ ] **Configure Environment Variables**
  - [ ] `NETLIFY_VISUAL_EDITOR = true`
  - [ ] `VISUAL_EDITOR_MODE = enabled`
  - [ ] `STACKBIT_ENABLE = true`
  - [ ] `STACKBIT_PROJECT_ID = 6984a776bac46400c3290ee2`
  - [ ] Set scope: `All (production, deploy preview, branch deploy)`

- [ ] **Configure Branch Deploy**
  - [ ] Enable: `visual-editor-preview` branch
  - [ ] Deploy branch: ✅Enabled
  - [ ] Deploy path: Branch deploy (auto)

- [ ] **Upload netlify.toml**
  - [ ] File: `netlify.toml` (root directory)
  - [ ] Includes: Redirects, headers, functions config
  - [ ] Auto-loaded: Netlify uses it for deploy settings

- [ ] **Verify Deploy**
  - [ ] Primary URL accessible: `https://site-id.netlify.app`
  - [ ] Production deploy successful
  - [ ] Branch preview working
  - [ ] Forms receiving submissions

- [ ] **Set Git Integration**
  - [ ] GitHub connected
  - [ ] Default branch: `main`
  - [ ] Auto-deploy on push: ✅ Enabled
  - [ ] Webhook created in GitHub

- [ ] **Enable Netlify Studio**
  - [ ] Netlify Create dashboard: `https://create.netlify.com`
  - [ ] Project ID: `6984a776bac46400c3290ee2`
  - [ ] Git repo connected
  - [ ] Branch: `visual-editor-preview`

- [ ] **Test Full Workflow**
  - [ ] Edit in Studio
  - [ ] Changes commit to GitHub
  - [ ] Netlify detects and deploys
  - [ ] Changes live at branch URL (3-5 min)

---

## 🎯 Key Metrics & Monitoring

### Health Checks
- **Deploy Status:** Check every day in dashboard
- **Error Rate:** Monitor form submissions and functions
- **Bandwidth:** Critical if over tier limit
- **Build Log:** Review for warnings or failures

### Performance
- **HTML Load Time:** Should be < 1 second
- **CSS/JS Load:** Cached (should be immediate after)
- **Image Load:** Uses Netlify image optimization
- **CDN Cache Hit Ratio:** Should be > 90%

### Status Page
- **Netlify Status:** `https://www.netlifystat.us`
- Subscribe to notifications for outages
- Rarely affects stable deployments

---

## 📞 Support & Documentation

### Official Resources
- **Netlify Docs:** `https://docs.netlify.com`
- **Netlify Support:** `https://netlify.zendesk.com`
- **Community:** `https://community.netlify.com`
- **Status Page:** `https://www.netlifystat.us`

### Common Issues
| Issue | Solution |
|-------|----------|
| Deploy failed | Check build logs in dashboard |
| Environment vars not working | Redeploy code (`--allow-empty` commit) |
| HTTPS not working | Wait 60 seconds for cert provisioning |
| 404 errors on paths | Check netlify.toml redirects |
| Forms not working | Verify `netlify` attribute in form |

---

## 🔄 CI/CD Pipeline

### Current Setup
```
Git Push → GitHub → Netlify Webhook → Build → Deploy → CDN
```

### Branch Flow
```
visual-editor-preview (staging)
  ↓ (Manual PR)
main (production)
  ↓ (Auto-deploy)
Production URL (https://site-id.netlify.app)
```

### Deploy Triggers
- ✅ Push to `main` → Production deploy
- ✅ Push to `visual-editor-preview` → Branch preview
- ✅ Studio edits → Auto-commit to visual-editor-preview
- ✅ Pull requests → Deploy preview (temporary)

---

## 🎓 Next Steps

1. **Verify Production:** Test `https://fascinating-hummingbird-07da62.netlify.app`
2. **Add Custom Domain:** Points DNS to this Netlify site
3. **Monitor Performance:** Check analytics dashboard weekly
4. **Backup:** Git repository is your backup (Git clone = local backup)
5. **Documentation:** Share this file with team members

---

**Generated:** 2026-02-05  
**Version:** v2.0 (Post-Merge Configuration)
