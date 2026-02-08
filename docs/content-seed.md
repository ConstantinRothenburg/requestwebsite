# Content Seed (Prismic)

Use this as a quick reference when creating content in Prismic.

## site_settings (singleton)

Brand

- Primary Color: #E50051
- Secondary Color: #B0003A
- Accent Color: #FF4D7F
- Background Color: #FFFFFF
- Text Color: #0B0B0C

Typography

- Body Font Family: "Sora", sans-serif
- Heading Font Family: "Manrope", sans-serif
- Base Font Size: 16px
- Heading Scale: 1.25
- Line Height: 1.5

Layout

- Max Content Width: 1200px
- Section Spacing: Normal
- Default Border Radius: 16px

Header

- Header Logo: upload Request logo
- Header Nav Links: Home (/), About (/about), Request (/request)

Footer

- Footer Text: © 2026 Request
- Social Links: Instagram, LinkedIn
- Legal Links: Imprint (/imprint), Privacy (/privacy)

## page (repeatable)

### home (uid: home)

Suggested slice order:

1) Hero
2) FeaturesGrid
3) FullScreenSection
4) CTABanner
5) Footer

Hero

- Tagline: "Build the future of requests"
- Headline: "Request that gets things done"
- Subtitle: "Turn ideas into actionable requests with clarity and speed."
- Buttons: Primary "Get Started" -> /request, Secondary "Learn More" -> /about

FeaturesGrid

- 3-6 feature cards, each with title + description

FullScreenSection

- Video URL: optional

CTABanner

- Headline: "Ready to launch your first request?"
- Description: "Create, track, and ship requests in minutes."
- Button: "Start Now" -> /request

Footer

- Links: Imprint, Privacy, Contact

## imprint (singleton)

- Title: "Imprint"
- Content: legal imprint text
- Meta Title: "Imprint - Request"
- Meta Description: "Legal imprint information"

## privacy_policy (singleton)

- Title: "Privacy Policy"
- Content: privacy policy text
- Meta Title: "Privacy Policy - Request"
- Meta Description: "Privacy policy information"
