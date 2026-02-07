# Netlify Visual Editor - Implementation Guide

## Overview
This website is now equipped with Netlify Visual Editor, providing fine-grained control over visual presentation and content editing directly in the browser.

## Features Enabled

### 1. **Inline Editing**
- Click-to-edit functionality for text elements
- Real-time preview of changes
- Hover highlights to identify editable elements
- Visual indicators for editable fields

### 2. **Editable Components**

#### Hero Section
- **Subtitle**: Main hero subtitle text (`data-netlify-field="hero.subtitle"`)
- **CTAs**: Call-to-action buttons and links
- **Character limit**: 200 characters

#### Content Sections (1-9)
Each section headline is independently editable:
- Section 1: "YOUR DEEP DIVE INTO CLIMATE CHANGE SOLUTIONS"
- Section 2: "EXPLORE GLOBAL INNOVATIONS"
- Section 3: "NETWORK WITH GAMECHANGERS AND PROJECTS"
- Section 4: "REGISTER AND SHOWCASE YOUR VISION"
- Section 5: "JOIN THE MOVEMENT OF CHANGE"
- Section 6: "TOGETHER, WE CAN SAVE OUR PLANET"
- Section 7: "START MAKING AN IMPACT IN 2025"
- Section 8: "FOLLOW OUR JOURNEY AND PROTECT THE EARTH"
- Section 9: "CLIMATE ACTION NETWORK"

#### Section 7 Special Features
- **Background Color**: Editable via color picker
- **Type**: Color field with transparency support

#### Form Section
- **Title**: Form section heading
- **Description**: Subtitle/description text

### 3. **Visual Editor Configuration**

#### Theme Settings
```javascript
theme: {
    primaryColor: '#208380',    // Teal primary color
    accentColor: '#5E5240'      // Brown secondary color
}
```

#### Features
- ✅ Inline text editing
- ✅ Image replacement
- ✅ Link editing
- ✅ Color picker
- ✅ Style editor
- ✅ Layout controls
- ✅ Component outlines
- ✅ Hover highlight
- ✅ Click to edit
- ✅ Context menu
- ✅ Undo/Redo
- ✅ Auto-save (30-second interval)
- ✅ Live preview

#### Permissions
- ✅ Text editing allowed
- ✅ Image replacement allowed
- ✅ Link editing allowed
- ✅ Color editing allowed
- ✅ Style tweaks allowed
- ❌ Layout changes restricted
- ❌ Script editing restricted
- ❌ Approval not required

### 4. **Content Validation**

#### Text Fields
- Automatic whitespace trimming
- Empty value prevention
- Maximum length enforcement
- Character limits per field

#### Image Fields
- Max file size: 5 MB
- Allowed formats: JPG, JPEG, PNG, WebP, AVIF
- Alt text required for accessibility

#### Video Fields
- Max file size: 50 MB
- Allowed formats: MP4, WebM
- Optional poster images

#### Color Fields
- Format: HEX
- Transparency: Supported
- Color picker interface

### 5. **Preview Modes**

The Visual Editor supports multiple device breakpoints:
- **Mobile**: 375px (smartphone)
- **Tablet**: 768px
- **Desktop**: 1440px (default)
- **Wide**: 1920px (TV/large monitors)

### 6. **Version Control**
- Auto-save enabled (every 30 seconds)
- Version history (up to 50 versions)
- Undo/Redo functionality
- Save indicator displayed

## Implementation Details

### Data Attributes Used

#### Editable Elements
```html
data-netlify-visual="editable"
data-netlify-field="[section].[fieldname]"
data-netlify-type="[text|image|video|color|component]"
```

#### Example Usage
```html
<!-- Text editing -->
<h2 data-netlify-visual="editable" 
    data-netlify-field="section1.headline" 
    data-netlify-type="text">
    YOUR DEEP DIVE INTO CLIMATE CHANGE SOLUTIONS
</h2>

<!-- Color editing -->
<section data-netlify-visual="editable" 
         data-netlify-field="section7.backgroundColor" 
         data-netlify-type="color" 
         style="background-color: #f5f5f5;">
```

### Configuration Files

#### 1. netlify.toml
Contains Visual Editor environment variables and redirects:
```toml
[context.production.environment]
  NETLIFY_VISUAL_EDITOR = "true"
  VISUAL_EDITOR_MODE = "enabled"

[[redirects]]
  from = "/api/netlify-visual/*"
  to = "/.netlify/functions/visual-editor/:splat"
  status = 200
```

#### 2. netlify-visual-editor.config.json
Comprehensive configuration file with:
- Editor settings and theme
- Feature flags
- Permissions
- Content field definitions
- Section metadata
- Preview breakpoints
- Validation rules
- Publishing settings

#### 3. HTML Pages
All pages include the Visual Editor script:
```html
<script>
window.NetlifyVisualEditorConfig = {
    enableVisualEditing: true,
    apiEndpoint: '/api/netlify-visual',
    livePreview: true,
    autoSave: true,
    theme: {
        primaryColor: '#208380',
        accentColor: '#5E5240'
    },
    features: {
        inlineEditing: true,
        componentOutlines: true,
        editableIndicators: true,
        contextMenu: true
    }
};
</script>
<script async src="https://cdn.netlify.com/visual-editor/v1/editor.js"></script>
```

## How to Use

### Accessing the Visual Editor

1. **Development Mode**
   - Open your site in Netlify Deploy Preview
   - Visual Editor will automatically load
   - Look for the editing toolbar

2. **Production Mode**
   - Visual Editor enabled for authenticated Netlify users
   - Access via Netlify dashboard → Site → Visual Editor

### Editing Content

1. **Text Editing**
   - Hover over editable text (outline appears)
   - Click to enter edit mode
   - Type your changes
   - Press Enter or click outside to save

2. **Color Editing**
   - Click on color-editable elements
   - Color picker will appear
   - Select new color
   - Changes apply immediately

3. **Image/Video Replacement**
   - Click on media elements
   - Upload new media from toolbar
   - Automatic optimization applied

### Best Practices

#### Content Guidelines
- Keep headlines concise and impactful
- Maintain consistent tone across sections
- Follow character limits for optimal display
- Test on multiple breakpoints

#### Performance
- Optimize images before upload (5 MB max)
- Use WebP format when possible
- Compress videos (50 MB max)
- Test page load times after changes

#### Accessibility
- Always provide alt text for images
- Maintain sufficient color contrast
- Use semantic heading hierarchy
- Test with screen readers

## Advanced Features

### Custom Field Types

The configuration supports various field types:
- `text`: Simple text input
- `richtext`: Formatted text (future)
- `image`: Image upload with validation
- `video`: Video upload with validation
- `color`: Color picker
- `component`: Editable component groups

### Notifications

When enabled, notifications will be sent via:
- Email (to configured addresses)
- Webhook (to configured endpoints)

### Publishing Workflow

Current settings:
- Auto-publish: **Disabled** (manual control)
- Require review: **Disabled** (immediate publishing)
- Can be changed in config file

## Troubleshooting

### Visual Editor Not Loading
1. Check browser console for errors
2. Verify script is loading: `https://cdn.netlify.com/visual-editor/v1/editor.js`
3. Ensure you're authenticated with Netlify
4. Check environment variables in Netlify dashboard

### Changes Not Saving
1. Check auto-save indicator
2. Verify network connection
3. Check browser console for API errors
4. Ensure proper permissions in Netlify

### Elements Not Editable
1. Verify `data-netlify-visual="editable"` attribute
2. Check `data-netlify-field` is unique
3. Ensure field is defined in config
4. Verify permissions in config file

## Security Considerations

- Script editing is **disabled** for security
- Layout changes are **restricted** to prevent breakage
- All changes are logged with version history
- Only authenticated Netlify users can edit
- Form submission still requires proper validation

## File Structure

```
/
├── netlify.toml                          # Netlify config with Visual Editor settings
├── netlify-visual-editor.config.json     # Visual Editor configuration
├── src/
│   ├── pages/
│   │   ├── index.html                    # Main page with editable elements
│   │   ├── imprint.html                  # Imprint with Visual Editor
│   │   └── privacy.html                  # Privacy with Visual Editor
│   ├── css/                              # Styles (not directly editable)
│   └── js/                               # Scripts (not directly editable)
└── docs/
    └── NETLIFY-VISUAL-EDITOR.md         # This documentation
```

## Future Enhancements

Consider adding:
- Rich text editing for paragraphs
- Multi-language support
- A/B testing capabilities
- Analytics integration
- Advanced image editing tools
- Video thumbnail generation
- Custom component library
- Role-based permissions
- Scheduled publishing
- Content templates

## Support

For issues or questions:
1. Check Netlify Visual Editor documentation
2. Review browser console logs
3. Test in different browsers
4. Contact Netlify support with specific error messages

## Version History

- **v1.0.0** (2026-02-05): Initial implementation
  - Inline text editing for all sections
  - Color editing for Section 7
  - Form title/description editing
  - Auto-save functionality
  - Multi-device preview
  - Version control enabled
