# CONTRIBUTING.md

## Contributing to Request Website v2.0

Thanks for your interest in contributing! This guide explains how to set up, code, and submit changes.

---

## Code of Conduct

- Be respectful and inclusive
- Focus on climate action mission
- Constructive feedback only
- No spam, harassment, or discrimination

---

## Getting Started

### Prerequisites

- Git (for version control)
- A text editor (VS Code, Sublime, Vim, etc.)
- A modern browser (Chrome, Firefox, Safari, Edge)
- Python 3 or Node.js (optional, for local server)

### Setup

1. **Fork** the repo on GitHub
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/request-website-v2.git
   cd "Request Website v2.0"
   ```
3. **Add upstream** remote:
   ```bash
   git remote add upstream https://github.com/climate-request/request-website-v2.git
   ```
4. **Start local server:**
   ```bash
   python3 -m http.server 5500 --directory src
   # Visit http://localhost:5500
   ```

---

## Development Workflow

### 1. Pick an Issue

- Look for `good first issue` or `help wanted` labels
- Comment on issue to claim it
- Or create new issue for bug/feature

### 2. Create Feature Branch

```bash
# Sync with upstream
git fetch upstream
git checkout main
git pull upstream main

# Create feature branch
git checkout -b feature/ISSUE-NUMBER-short-description

# Examples:
# git checkout -b feature/123-fix-form-validation
# git checkout -b feature/456-add-dark-mode
```

### 3. Make Changes

**Always make small, focused commits:**

```bash
# Edit files
# ...

# Stage changes
git add src/pages/index.html src/css/forms.css

# Commit with clear message
git commit -m "fix: improve form validation error display"

# Format:
# feat: add new feature
# fix: bug fix
# docs: documentation
# refactor: code restructure (no feature change)
# style: formatting, whitespace
# test: test updates
# chore: dependencies, config changes
```

### 4. Test Before Pushing

**HTML Validation:**
- Open DevTools → check console for errors
- Run W3C validator: https://validator.w3.org/

**CSS Quality:**
- Check for unused classes
- No hardcoded colors (use CSS variables)
- Mobile-first media queries only

**JavaScript Quality:**
- No console errors
- Vanilla JS only (no jQuery, frameworks)
- No `localStorage` or `sessionStorage` (breaks in sandbox)
- Proper error handling for form submissions

**Performance:**
- Open DevTools → Lighthouse
- Run audit for Performance, A11y, SEO
- Target scores: Performance >90, A11y >95, SEO >95

**Accessibility:**
- Install axe DevTools extension
- Run scan on pages you modified
- Fix all violations (not just warnings)
- Test keyboard navigation: Tab, Enter, Escape
- Check with screen reader (VoiceOver on Mac)

**Responsive Design:**
- DevTools → Responsive Design Mode
- Test at 320px, 768px, 1024px, 1440px, 1920px
- Ensure text readable, images load, buttons clickable

**Forms:**
- Test form submission with valid/invalid data
- Verify honeypot spam field works
- Check success/error messages display
- Test on slow network (DevTools → Throttle to 3G)

### 5. Push & Open PR

```bash
# Push to your fork
git push origin feature/123-fix-form-validation

# Go to GitHub and open Pull Request
# Title: "Fix form validation error display" (same as commit message)
# Description:
# - What problem does this solve?
# - How does it solve it?
# - Screenshots (if UI change)
# - Link to issue: Fixes #123
```

### 6. Code Review

- Maintainers will review within 2-3 days
- Respond to feedback respectfully
- Make requested changes and push again
- PR auto-updates when you push new commits

### 7. Merge & Celebrate 🎉

- Maintainers merge when approved
- Your code is now in `main` branch
- Next deployment will include your changes

---

## Coding Standards

### HTML

```html
<!-- ✅ DO -->
<section class="hero">
  <h1>Main Heading</h1>
  <p>Descriptive paragraph.</p>
  <img src="/assets/images/logo.svg" alt="Company logo" />
  <button type="button" aria-label="Close menu">X</button>
</section>

<!-- ❌ DON'T -->
<div id="main-section">
  <h1>Main Heading</h1>
  <p>Descriptive paragraph.</p>
  <img src="/assets/images/logo.svg" />  <!-- Missing alt -->
  <button onclick="closeMenu()">X</button>  <!-- Inline event -->
</div>
```

**Rules:**
- Use semantic HTML (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Meaningful alt text for all images
- `type="button"` on button elements (don't use divs)
- Accessible labels on form inputs
- Avoid inline styles; use CSS classes instead

### CSS

```css
/* ✅ DO */
:root {
  --color-primary: #208380;
  --space-md: 1rem;
}

.button {
  background-color: var(--color-primary);
  padding: var(--space-md);
  border-radius: 8px;
  transition: background-color 250ms ease;
}

.button:hover {
  background-color: #177367;
}

@media (max-width: 768px) {
  .button {
    font-size: 14px;
  }
}

/* ❌ DON'T */
.button {
  background: #208380;  /* Hardcoded color */
  padding: 16px;        /* Magic number */
  border-radius: 8px;
}

.button:hover {
  background: #177367;
}

/* Media queries not mobile-first */
@media (min-width: 768px) {
  .button {
    font-size: 16px;
  }
}
```

**Rules:**
- Use CSS custom properties (`:root` variables)
- Mobile-first approach (start with mobile, add media queries up)
- Use `clamp()` for responsive font sizes
- Consistent spacing scale (4px base unit)
- No ID selectors (use classes)
- BEM-inspired naming (`.component__element--modifier`)

### JavaScript

```javascript
// ✅ DO
const formElement = document.getElementById('join-form');
const handleSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(formElement);
  const email = formData.get('email');
  
  if (!email.includes('@')) {
    console.error('Invalid email');
    return;
  }
  
  fetch('/api/submit', { method: 'POST', body: formData })
    .then(res => res.json())
    .catch(err => console.error('Submit failed:', err));
};

formElement.addEventListener('submit', handleSubmit);

// ❌ DON'T
var form = document.getElementById('join-form');
form.onsubmit = function(e) {  // Old syntax, inline handler
  var email = document.getElementById('email').value;
  // No error handling
  fetch('/api/submit', { method: 'POST' });
};
```

**Rules:**
- ES6+ syntax only (const/let, arrow functions, template literals)
- No frameworks (vanilla JavaScript)
- No `localStorage`, `sessionStorage`, `document.cookie`
- Always error-handle fetch() calls
- Use `const` by default, `let` when reassigning
- Descriptive variable names (not `x`, `data`, `temp`)
- Comments only for complex logic
- No global variables

### File Naming

```
# HTML files (kebab-case)
index.html
404.html
privacy-policy.html

# CSS files (kebab-case)
variables.css
base.css
forms.css
hero.css

# JS files (kebab-case)
form-handler.js
scroll-snap.js
video-lazy-load.js

# Images (kebab-case + dimensions)
hero-image-1920x1080.jpg
hero-image-1920x1080.webp
poster-hero-1280x720.jpg
logo.svg
icon-benefits-1.svg

# Videos (kebab-case + duration)
hero-bg-8s.mp4
hero-bg-8s.webm
demo-video-15s.mp4

# Config (kebab-case.yaml or .json)
site-config.yaml
forms-config.yaml
```

---

## Pull Request Checklist

Before submitting PR, ensure:

- [ ] Code follows style guide (HTML/CSS/JS)
- [ ] No console errors (DevTools)
- [ ] Lighthouse scores: Performance >90, A11y >95, SEO >95
- [ ] All links work (internal + external)
- [ ] Forms submit successfully
- [ ] Responsive design tested (320px-1920px)
- [ ] Keyboard navigation works (Tab, Enter, Escape)
- [ ] axe DevTools scan has no violations
- [ ] Images optimized (WebP/AVIF with fallback)
- [ ] No hardcoded colors (use CSS variables)
- [ ] No unused CSS or JS
- [ ] Comments are clear and minimal
- [ ] Commit messages are descriptive
- [ ] PR description links to issue (#123)

---

## Documentation Style

When writing documentation:

- Use clear, conversational tone
- Include code examples
- Add screenshots for UI changes
- Link to related docs
- Keep line length <100 chars for readability

---

## Questions?

- Open GitHub Discussion
- Email [contact]
- Read existing issues/PRs for context

**Thank you for contributing to climate action! 🌐**
