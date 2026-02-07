Meta{protocol:TOON_v3,project:Request-Website-v2.0,document:FOLDER_STRUCTURE}:

RequestWebsiteV2.0_Tree:
```
Request Website v2.0/
├── .git/                                    # Git version control
├── .gitignore                               # Ignore node_modules, .env, .DS_Store, etc
├── README.md                                # Project overview, setup instructions
├── CONTRIBUTING.md                          # Contribution guidelines, coding standards
├── CHANGELOG.md                             # Version history and release notes
│
├── config/                                  # Configuration files
│   ├── site-config.yaml                     # Master config: metadata, colors, fonts, spacing
│   ├── forms-config.yaml                    # Form endpoints, validation rules
│   ├── analytics-config.yaml                # GA/Plausible tracking IDs
│   └── .env.example                         # Template for local environment vars
│
├── src/                                     # Source files
│   ├── pages/                               # HTML pages
│   │   ├── index.html                       # Main landing page
│   │   ├── 404.html                         # 404 error page
│   │   └── privacy-policy.html              # Privacy policy (optional)
│   │
│   ├── css/                                 # Stylesheets (modular approach)
│   │   ├── index.css                        # Main entry point (imports all below)
│   │   ├── variables.css                    # CSS custom properties from config
│   │   ├── reset.css                        # Normalize/reset base styles
│   │   ├── base.css                         # Typography, base elements
│   │   ├── sections.css                     # Section layouts (full-width, half-height, split)
│   │   ├── components.css                   # Reusable components (cards, buttons, modals)
│   │   ├── forms.css                        # Form styling and input states
│   │   ├── hero.css                         # Hero section specific styles
│   │   ├── videos.css                       # Video background and player styles
│   │   ├── animations.css                   # Transitions, keyframes, scroll snap
│   │   ├── utilities.css                    # Margin, padding, display helpers
│   │   └── responsive.css                   # Media queries, mobile-first
│   │
│   ├── js/                                  # JavaScript files
│   │   ├── index.js                         # Main entry point
│   │   ├── form-handler.js                  # Form submission + validation logic
│   │   ├── scroll-snap.js                   # Optional: IntersectionObserver for scroll snap effects
│   │   ├── video-lazy-load.js               # Optional: Lazy load videos below fold
│   │   ├── analytics.js                     # Analytics tracking (Plausible/GA)
│   │   └── utils.js                         # Helper functions
│   │
│   └── assets/                              # Media files
│       ├── images/
│       │   ├── favicon.ico                  # Site favicon
│       │   ├── webmanifest.json             # PWA manifest (optional)
│       │   ├── og-image-1200x630.jpg        # Open Graph image for social
│       │   ├── hero-image-1920x1080.jpg     # Hero section image
│       │   ├── hero-image-1920x1080.webp    # WebP version
│       │   ├── poster-hero-1280x720.jpg     # Video poster
│       │   ├── benefits-icon-1.svg          # Inline SVG icons
│       │   ├── benefits-icon-2.svg
│       │   ├── benefits-icon-3.svg
│       │   └── logo.svg                     # Company logo
│       │
│       ├── videos/
│       │   ├── hero-bg-8s.mp4               # Hero background video (H.264)
│       │   ├── hero-bg-8s.webm              # Hero background video (VP9)
│       │   ├── showcase-explain-15s.mp4     # Demo/explanation video
│       │   └── showcase-explain-15s.webm
│       │
│       └── fonts/
│           ├── inter-400.woff2              # System fallback OR if self-hosting
│           ├── inter-500.woff2
│           ├── inter-600.woff2
│           └── berkeley-mono-400.woff2      # Optional mono font
│
├── docs/                                    # Documentation
│   ├── ACTION_PLAN.toon                     # Detailed project timeline + milestones
│   ├── DEPLOYMENT.md                        # How to deploy to Cloudflare/Vercel
│   ├── API_ENDPOINTS.md                     # Form backend API documentation
│   ├── ACCESSIBILITY.md                     # A11y testing checklist
│   ├── SEO.md                               # SEO strategy and checklist
│   ├── PERFORMANCE.md                       # Performance optimization notes
│   └── BRAND_GUIDELINES.md                  # Visual identity guidelines
│
├── tests/                                   # (Optional) Testing files
│   ├── a11y-test.md                         # A11y manual testing checklist
│   └── browser-compat.md                    # Browser compatibility matrix
│
├── build/                                   # (Optional) Build output
│   ├── css/                                 # Minified CSS
│   ├── js/                                  # Minified JS
│   └── index.html                           # Processed HTML (if building)
│
└── .htaccess                                # Apache server config (gzip, cache headers)
   (or vercel.json for Vercel, _redirects for Cloudflare)
```

FolderStructure_Logic:
- config/:Centralized_settings,env_vars,external_API_keys
- src/:Source_code;organized_by_type_(pages,css,js,assets)
- docs/:User+developer_documentation,deployment_guides
- tests/:QA_checklists,manual_testing_protocols
- build/:Output_folder_for_minified/optimized_files_(generated,not_committed)

FileMaintenance_Rules:
- config/site-config.yaml:SINGLE_SOURCE_OF_TRUTH_for_colors,fonts,spacing
- src/css/variables.css:AUTO_GENERATED_from_config_or_manually_maintained
- src/css/index.css:IMPORTS_all_CSS_in_order_(reset→base→sections→components→responsive)
- src/js/index.js:IMPORTS_or_runs_all_JS_in_order
- assets/:NEVER_commit_unoptimized_images_or_videos
- docs/*:UPDATE_whenever_making_architecture_changes

Nameing_Convention_Compliance:
- HTML:kebab-case.html_(index.html,404.html,privacy-policy.html)
- CSS:kebab-case.css_(variables.css,hero.css,forms.css)
- JS:kebab-case.js_(form-handler.js,scroll-snap.js)
- Images:kebab-case-WIDTHxHEIGHT.jpg_(hero-image-1920x1080.jpg)
- Videos:kebab-case-DURATIONs.mp4_(hero-bg-8s.mp4)
- Config:kebab-case.yaml_(site-config.yaml,forms-config.yaml)

Git_Folder_Structure_Recommendation:
- main_branch:Production_ready,tested,deployed_code
- dev_branch:Development,feature_branches_merge_here
- feature/section-hero,feature/forms,feature/optimization:Feature_branches
- hotfix/xyz:Emergency_fixes_branching_from_main

Deployment_Output_Folders_PostLaunch:
- dist/:Cloudflare_Pages_build_output
- .vercel/:Vercel_cache_and_config_(if_using_Vercel)
- public/:Static_files_served_by_hosting

Searchability_Notes:
- All_file_and_folder_names_lowercase_kebab-case
- Use_clear_prefixes_for_similar_files_(e.g._hero-bg.mp4_vs_hero-image.jpg)
- Keep_asset_filenames_short_but_descriptive
- Video_files_include_duration_in_name_for_quick_reference