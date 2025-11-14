# Images Directory

This directory should contain all images and visual assets for your landing page.

## Required Images

### 1. Hero Image / Product Mockup
**Filename:** `hero-image.jpg` or `hero-mockup.png`
**Dimensions:** 1200x800px (or similar 3:2 ratio)
**Purpose:** Main visual in the hero section
**Ideas:**
- Mockup of phone showing the app interface
- Mockup of the card with app screenshot
- Illustration of the spending control concept
- Clean, professional product photography

**Tools to create:**
- Canva (canva.com) - has free mockup templates
- Figma (figma.com) - for custom mockups
- Mockuphone (mockuphone.com) - phone mockups
- Smartmockups (smartmockups.com) - product mockups

### 2. Social Share Image
**Filename:** `social-share.jpg`
**Dimensions:** 1200x630px (Facebook/LinkedIn/Twitter standard)
**Purpose:** Preview image when sharing on social media
**Must include:**
- Logo or branding
- Main tagline: "Stop Overspending Before It Happens"
- Clean, readable text
- High contrast

**Test your image:**
- https://socialsharepreview.com/

### 3. Logo (Optional)
**Filename:** `logo.svg` or `logo.png`
**Dimensions:** SVG (scalable) or 200x200px PNG
**Purpose:** Header logo (currently using emoji 💳)
**Style:** Simple, professional, ADHD-friendly

### 4. Favicon (Optional)
**Filename:** `favicon.ico` or `favicon.png`
**Dimensions:** 32x32px or 16x16px
**Purpose:** Browser tab icon (currently using emoji)

**Generate favicon:**
- https://favicon.io/
- https://realfavicongenerator.net/

## Free Image Resources

### Stock Photos
- **Unsplash** (unsplash.com) - Free high-quality photos
- **Pexels** (pexels.com) - Free stock photos
- **Pixabay** (pixabay.com) - Free images

### Illustrations
- **unDraw** (undraw.co) - Free illustrations
- **Humaaans** (humaaans.com) - Mix-and-match illustrations
- **DrawKit** (drawkit.com) - Free vector illustrations

### Icons
- **Font Awesome** (fontawesome.com) - Icon library
- **Heroicons** (heroicons.com) - Beautiful icons
- **Feather Icons** (feathericons.com) - Simple icons

### Design Tools
- **Canva** (canva.com) - Easy graphic design
- **Figma** (figma.com) - Professional design tool
- **Photopea** (photopea.com) - Free Photoshop alternative

## Image Optimization

Before uploading, optimize images to ensure fast page load:

### Online Tools
- **TinyPNG** (tinypng.com) - Compress PNG/JPG
- **Squoosh** (squoosh.app) - Google's image optimizer
- **ImageOptim** (imageoptim.com) - Mac app

### Best Practices
- Use JPG for photos (smaller file size)
- Use PNG for graphics with transparency
- Use SVG for logos and icons (scalable)
- Use WebP for best compression (modern browsers)
- Keep file sizes under 200KB when possible
- Use descriptive filenames (e.g., `impulse-card-mockup.jpg`)

## Adding Images to HTML

Once you've added images here, update `index.html`:

```html
<!-- Hero section -->
<img src="images/hero-mockup.png" alt="Impulse Card app interface showing transaction approval">

<!-- Open Graph meta tag -->
<meta property="og:image" content="https://impulsecard.co.uk/images/social-share.jpg">

<!-- Logo -->
<img src="images/logo.svg" alt="Impulse Card logo">

<!-- Favicon -->
<link rel="icon" href="images/favicon.png">
```

## Current Status

Currently, the landing page uses:
- 💳 Emoji as logo (no image needed)
- 💳 Emoji as favicon (no image needed)
- No hero image (text-focused hero)
- No social share image (will use default)

The page works perfectly without images, but adding professional visuals will increase conversion rates by 20-40%.

## Priority

**Must have (before major launch):**
1. Social share image - improves click-through from social media

**Should have (for professional appearance):**
2. Hero image/mockup - shows the product visually
3. Logo - builds brand recognition

**Nice to have:**
4. Favicon - professional polish
5. Additional section images - visual variety

---

**Remember:** Launch first, polish later. You don't need perfect images to validate demand!
