# Netlify Studio Setup - Request Website v2.0

## ✅ Setup Complete

**Studio URL:** https://create.netlify.com/studio/6984a776bac46400c3290ee2

**Working Branch:** `visual-editor-preview`

**Site URL:** https://fascinating-hummingbird-07da62.netlify.app

---

## Quick Start

### Option 1: Cloud Studio (No Local Dev Needed)

1. Open Studio: https://create.netlify.com/studio/6984a776bac46400c3290ee2
2. Ensure working branch is `visual-editor-preview`
3. Edit content via visual interface
4. Changes auto-commit to GitHub
5. Netlify auto-deploys branch (wait ~3-5 min for preview)

### Option 2: Local Development + Studio

```bash
cd "/Users/cobe/Projects/Request Website v2.0"
./start-studio.sh
```

**Access Points:**
- Local site: http://localhost:9999
- Local Stackbit UI: http://localhost:8090/_stackbit
- Cloud Studio: https://create.netlify.com/studio/6984a776bac46400c3290ee2

**Stop servers:**
```bash
./stop-studio.sh
```

---

## Editable Content

### Hero Section
- **Subtitle:** Main value proposition text
- **CTAs:** Call-to-action buttons (text, URL, style)

### Content Sections (1-9)
- **Section 1:** Deep Dive into Climate Solutions
- **Section 2:** Explore Global Innovations
- **Section 3:** Network with Gamechangers
- **Section 4:** Register & Showcase
- **Section 5:** Join Movement
- **Section 6:** Save Planet
- **Section 7:** Impact 2025
- **Section 8:** (Additional content)
- **Section 9:** Climate Action Network

Each section supports:
- Headline text
- Background video (MP4/WebM)
- Video poster image
- Background image (section 6)
- Background color (section 7)

### Registration Form
- Form title
- Form description
- Success message

---

## Configuration Files

### stackbit.config.ts
Comprehensive model definitions mapping all editable fields to HTML `data-netlify-field` attributes.

**Models include:**
- `homepage` (page type)
  - `hero` (object with subtitle + ctas)
  - `section1` through `section9` (objects with headlines, videos, images)
  - `form` (object with title, description, successMessage)

### netlify.toml
Netlify deployment and dev server configuration:
- **Publish directory:** `src`
- **Dev server:** Python HTTP server on port 9999 → 5501
- **Branch deploys:** `main` (production), `visual-editor-preview` (Studio)
- **Visual Editor:** Enabled for all deploy contexts

### .env (local only, in .gitignore)
Environment variables for local development:
```env
STACKBIT_PROJECT_ID=6984a776bac46400c3290ee2
GITHUB_OWNER=oytla
GITHUB_REPO=Request-Website-v2.0
GITHUB_BRANCH=visual-editor-preview
NETLIFY_SITE_ID=fascinating-hummingbird-07da62
```

---

## Branch Strategy

### Production Branch: `main`
- **Purpose:** Live production site
- **Deploy:** Netlify production (auto-deploy on push)
- **URL:** https://fascinating-hummingbird-07da62.netlify.app (production)

### Working Branch: `visual-editor-preview`
- **Purpose:** Visual editing, content updates, Studio work
- **Deploy:** Netlify branch deploy (auto-deploy on push)
- **URL:** https://visual-editor-preview--fascinating-hummingbird-07da62.netlify.app
- **Studio:** Linked to this branch for live/preview editing

### Development Branch: `dev`
- **Purpose:** Code experiments, feature development
- **Deploy:** Optional (can enable branch deploy if needed)

### Workflow
1. Content edits → `visual-editor-preview` (via Studio or Decap CMS)
2. Code changes → `dev` → PR to `visual-editor-preview` or `main`
3. Release to production → Merge `visual-editor-preview` to `main`

---

## CMS Options

### 1. Netlify Studio (Visual Editor)
- **URL:** https://create.netlify.com/studio/6984a776bac46400c3290ee2
- **Type:** Visual click-to-edit interface
- **Requires:** Preview Server (currently experimental) or branch deploys
- **Best for:** Non-technical editors, quick visual tweaks

### 2. Decap CMS (Git-based)
- **URL (local):** http://localhost:9999/admin/
- **URL (production):** https://fascinating-hummingbird-07da62.netlify.app/admin/
- **Type:** Form-based content editor
- **Requires:** Netlify Identity enabled
- **Best for:** Structured content editing, all sections

### 3. Direct Code Editing
- Edit `src/pages/index.html` directly
- Commit and push to `visual-editor-preview`
- Best for developers

---

## Netlify Identity (for Decap CMS)

### Enable Identity
1. Go to: https://app.netlify.com/projects/fascinating-hummingbird-07da62
2. **Site settings** → **Identity**
3. Click **Enable Identity**
4. **Registration:** Set to "Invite only"
5. **Services** → Enable **Git Gateway**

### Invite Admin User
1. In Identity settings, click **Invite users**
2. Enter your email
3. Check email for invitation link
4. Set password
5. Access CMS at `/admin/`

---

## Troubleshooting

### Studio shows "Git connection not configured"
**Cause:** Missing `STACKBIT_PROJECT_ID` environment variable

**Fix:**
1. Check: https://app.netlify.com/projects/fascinating-hummingbird-07da62/configuration/env
2. Verify `STACKBIT_PROJECT_ID = 6984a776bac46400c3290ee2` exists
3. Scope should be "All deploy contexts"

### Studio shows "No stackbit dev process"
**Cause:** Local Stackbit dev server not running OR Preview Server failed

**Fix Option 1 (Local):**
```bash
./start-studio.sh
```

**Fix Option 2 (Cloud):**
- Netlify Dashboard → Preview Servers
- Start Preview Server for `visual-editor-preview` branch
- If it fails, check stackbit.config.ts syntax

### "Address already in use" error
**Cause:** Port conflict (5501, 8090, or 9999 in use)

**Fix:**
```bash
lsof -ti:5501,8090,9999 | xargs kill -9
./start-studio.sh
```

### Decap CMS login fails
**Cause:** Netlify Identity not enabled

**Fix:**
1. Enable Identity (see section above)
2. Invite yourself as admin
3. Accept invitation email
4. Try logging in again at `/admin/`

### Preview Server fails to start
**Cause:** Stackbit config incompatibility

**Status:** Known issue, currently being addressed

**Workaround:**
- Use branch deploys instead (3-5 min delay for preview)
- OR use local `netlify dev` for instant preview
- Studio still works for editing, just no live preview

---

## File Structure

```
Request Website v2.0/
├── .env                          # Local env vars (not in Git)
├── .gitignore                    # Git ignore rules
├── netlify.toml                  # Netlify config
├── stackbit.config.ts            # Stackbit/Studio models
├── package.json                  # Node dependencies
├── start-studio.sh               # Start dev servers
├── stop-studio.sh                # Stop dev servers
├── STUDIO-SETUP.md               # This file
├── src/
│   ├── admin/                    # Decap CMS
│   │   ├── index.html
│   │   └── config.yml
│   ├── assets/                   # Images, videos, fonts
│   │   ├── images/
│   │   ├── videos/
│   │   └── fonts/
│   ├── css/                      # Stylesheets
│   ├── js/                       # JavaScript
│   ├── pages/
│   │   └── index.html            # Main page (editable)
│   └── config/
│       └── sections.js
├── netlify/
│   └── functions/                # Serverless functions
└── docs/                         # Documentation
```

---

## Next Steps

### Immediate
1. ✅ **Test Studio access**
   - Open: https://create.netlify.com/studio/6984a776bac46400c3290ee2
   - Verify branch: `visual-editor-preview`
   - Try editing hero subtitle

2. ✅ **Enable Netlify Identity** (for Decap CMS)
   - Follow steps in "Netlify Identity" section above
   - Invite yourself as admin

3. ✅ **Test local development**
   ```bash
   ./start-studio.sh
   ```
   - Visit http://localhost:9999
   - Check if site loads correctly

### Optional Enhancements
1. **Add more content models**
   - Footer content
   - Navigation links
   - SEO metadata

2. **Set up GitHub Actions**
   - Auto-deploy on merge to main
   - Run tests before deploy

3. **Configure custom domain**
   - Netlify Dashboard → Domain settings
   - Add custom domain (e.g., request-climate.com)

4. **Enable forms backend**
   - Currently using Netlify Forms
   - Could switch to Getform, Cloudflare Workers, or Google Apps Script

---

## Support Resources

- **Netlify Docs:** https://docs.netlify.com/
- **Netlify Visual Editor:** https://docs.netlify.com/manage/visual-editor/
- **Decap CMS Docs:** https://decapcms.org/docs/
- **Stackbit Docs:** https://docs.stackbit.com/
- **Project Repository:** https://github.com/oytla/Request-Website-v2.0
- **Netlify Dashboard:** https://app.netlify.com/projects/fascinating-hummingbird-07da62

---

**Last Updated:** 2026-02-05 16:45 CET
**Maintained by:** AI Assistant + Project Team
