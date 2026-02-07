# Netlify Visual Editor - Quick Reference

## 🎨 What's Editable?

### ✅ Editable Elements

| Section | Element | Field Name | Type | Max Length |
|---------|---------|------------|------|------------|
| Hero | Subtitle | `hero.subtitle` | text | 200 chars |
| Hero | CTAs | `hero.ctas` | component | - |
| Section 1 | Headline | `section1.headline` | text | 100 chars |
| Section 2 | Headline | `section2.headline` | text | 100 chars |
| Section 3 | Headline | `section3.headline` | text | 100 chars |
| Section 4 | Headline | `section4.headline` | text | 100 chars |
| Section 5 | Headline | `section5.headline` | text | 100 chars |
| Section 6 | Headline | `section6.headline` | text | 100 chars |
| Section 7 | Headline | `section7.headline` | text | 100 chars |
| Section 7 | Background Color | `section7.backgroundColor` | color | - |
| Section 8 | Headline | `section8.headline` | text | 100 chars |
| Section 9 | Headline | `section9.headline` | text | 100 chars |
| Form | Title | `form.title` | text | 100 chars |
| Form | Description | `form.description` | text | 300 chars |

### ❌ Not Editable (by design)

- HTML structure
- CSS styles (except color picker)
- JavaScript code
- Form fields
- Navigation structure
- Footer links

## 🚀 Quick Start

### Enable Visual Editor (3 steps)

1. **Deploy to Netlify**
   ```bash
   # Connect your repo to Netlify
   # Visual Editor auto-activates on deploy
   ```

2. **Access Editor**
   - Navigate to your Netlify site dashboard
   - Click "Visual Editor" in the sidebar
   - Or open any Deploy Preview URL

3. **Start Editing**
   - Hover over content (outline appears)
   - Click to edit
   - Changes save automatically

## 🎯 Common Tasks

### Edit Section Headline
```
1. Hover over headline
2. Click when outline appears
3. Type new text (max 100 chars)
4. Click outside or press Enter
5. Auto-saves in 30 seconds
```

### Change Section 7 Background Color
```
1. Click on Section 7
2. Color picker appears
3. Select new color
4. Preview updates instantly
5. Auto-saves automatically
```

### Edit Form Title
```
1. Scroll to registration form
2. Hover over "Join 100+ organizations"
3. Click to edit
4. Update text (max 100 chars)
5. Save automatically
```

## ⚙️ Configuration Files

### Main Config: `netlify-visual-editor.config.json`
```json
{
  "editor": {
    "enabled": true,
    "theme": { "primaryColor": "#208380" },
    "features": { "inlineEditing": true }
  }
}
```

### Netlify Config: `netlify.toml`
```toml
[context.production.environment]
  NETLIFY_VISUAL_EDITOR = "true"
```

### HTML Integration: All `.html` files
```html
<script>
window.NetlifyVisualEditorConfig = {
    enableVisualEditing: true,
    autoSave: true
};
</script>
<script async src="https://cdn.netlify.com/visual-editor/v1/editor.js"></script>
```

## 📱 Preview Modes

| Device | Width | Icon |
|--------|-------|------|
| Mobile | 375px | 📱 |
| Tablet | 768px | 📱 |
| Desktop | 1440px | 💻 (default) |
| Wide | 1920px | 🖥️ |

## 🛡️ Validation Rules

### Text Fields
- ✅ Whitespace auto-trimmed
- ✅ Empty values prevented
- ✅ Max length enforced
- ✅ HTML tags stripped

### Images
- 📏 Max size: 5 MB
- 🎨 Formats: JPG, PNG, WebP, AVIF
- ♿ Alt text required

### Videos
- 📏 Max size: 50 MB
- 🎥 Formats: MP4, WebM
- 🖼️ Poster optional

### Colors
- 🎨 Format: HEX
- 🔍 Transparency: Supported
- 🎨 Picker: Built-in

## ⚡ Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Undo | `Cmd/Ctrl + Z` |
| Redo | `Cmd/Ctrl + Shift + Z` |
| Save | Auto-save (30s) |
| Cancel Edit | `Esc` |
| Submit Edit | `Enter` |

## 🔧 Troubleshooting

### Editor Not Showing?
```bash
# Check these:
1. Are you logged into Netlify?
2. Is site deployed on Netlify?
3. Check browser console (F12)
4. Clear cache and refresh
```

### Changes Not Saving?
```bash
# Verify:
1. Network connection active?
2. Check auto-save indicator
3. Look for error in console
4. Try manual browser refresh
```

### Element Not Editable?
```bash
# Check element has:
1. data-netlify-visual="editable"
2. data-netlify-field="unique.name"
3. data-netlify-type="text|color|etc"
4. Field defined in config.json
```

## 📊 Features Overview

| Feature | Status | Description |
|---------|--------|-------------|
| Inline Editing | ✅ Enabled | Click-to-edit text |
| Image Replace | ✅ Enabled | Upload new images |
| Color Picker | ✅ Enabled | Visual color selection |
| Auto-Save | ✅ Enabled | 30-second interval |
| Live Preview | ✅ Enabled | Real-time updates |
| Undo/Redo | ✅ Enabled | History tracking |
| Version Control | ✅ Enabled | 50 versions max |
| Device Preview | ✅ Enabled | 4 breakpoints |
| Script Editing | ❌ Disabled | Security measure |
| Layout Changes | ❌ Disabled | Prevent breakage |

## 📞 Support Resources

- 📚 [Full Documentation](./NETLIFY-VISUAL-EDITOR.md)
- 🌐 [Netlify Docs](https://docs.netlify.com/visual-editor/)
- 💬 [Netlify Support](https://support.netlify.com)
- 🐛 [Report Issues](https://github.com/netlify/visual-editor/issues)

## 🎓 Best Practices

1. **Before Editing**
   - ✅ Test in Deploy Preview first
   - ✅ Have original text ready
   - ✅ Check character limits

2. **During Editing**
   - ✅ Keep text concise
   - ✅ Maintain brand voice
   - ✅ Preview on mobile

3. **After Editing**
   - ✅ Test all breakpoints
   - ✅ Check accessibility
   - ✅ Verify auto-save worked

## 🔐 Security

- 🔒 Authenticated users only
- 🔒 Script editing disabled
- 🔒 Layout changes restricted
- 🔒 Version history logged
- 🔒 Form validation unchanged

## 📈 Performance

- ⚡ Auto-save: 30s interval
- ⚡ Script: Async loaded
- ⚡ No performance impact when not editing
- ⚡ Lazy loads editor assets

---

**Last Updated**: February 5, 2026  
**Version**: 1.0.0  
**Maintainer**: Request Climate Platform Team
