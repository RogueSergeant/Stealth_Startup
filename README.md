# Impulse Card - Landing Page

An AI-powered spending control card that blocks impulse purchases before they happen.

## Overview

This is the pre-launch landing page for Impulse Card - a prepaid debit card with AI-powered spending controls designed to help people (especially those with ADHD) manage impulse spending.

**Live Site:** [impulsecard.co.uk](https://impulsecard.co.uk)

## Technology Stack

- **Frontend:** Pure HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Hosting:** GitHub Pages
- **Form Backend:** Formspree
- **Analytics:** Plausible Analytics (privacy-focused)
- **Fonts:** Google Fonts (Inter family)

## Project Status

**Pre-Launch** - This product doesn't exist yet. The landing page is designed to:
- Validate demand through founding member signups
- Build a community of early adopters
- Recruit user research participants
- Gather insights about impulse spending challenges

## Features

- 🎨 Dark mode only with vibrant purple/amber gradient design
- 📱 Fully responsive (mobile-first design)
- ♿ Accessibility-first (WCAG AA compliant)
- 🎬 Interactive phone mockup with animated chat demo
- 📊 Privacy-focused analytics (cookieless)
- ⚡ Fast loading (<2 seconds target)
- 🎯 No frameworks, no build tools - just clean, semantic HTML/CSS/JS

## Local Development

### Option 1: Python HTTP Server
```bash
python3 -m http.server 8000
open http://localhost:8000
```

### Option 2: Node.js HTTP Server
```bash
npx http-server -p 8000
open http://localhost:8000
```

### Option 3: VS Code Live Server
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

## File Structure

```
/
├── index.html          # Single-page application
├── css/
│   └── style.css      # Complete design system and styles
├── js/
│   └── main.js        # Interactive functionality
├── CNAME              # Custom domain configuration
├── README.md          # This file
└── SETUP_GUIDE.md     # Deployment instructions
```

## Key Sections

1. **Hero** - Interactive phone mockup demonstration
2. **Founding Member Value** - Why join now
3. **Problem Stories** - Relatable impulse spending scenarios
4. **How It Works** - 3-step process explanation
5. **Founder Story** - Personal context and authenticity
6. **Differentiation** - vs. traditional banking apps
7. **Target Audience** - Who this is for
8. **Pricing** - Transparent, honest pricing
9. **How You Can Help** - Multiple ways to participate
10. **Trust & Transparency** - Honest about pre-launch status
11. **Waitlist Form** - Founding member signup
12. **FAQ** - Common questions addressed

## Design System

### Colors
- Primary: Electric Purple (#C084FC), Violet (#A855F7), Amber (#FBBF24)
- Accents: Coral (#FF8585), Orange (#FB923C)
- Backgrounds: Dark (#0A0E1A), Secondary (#111827), Card (#1A1F2E)

### Typography
- Font: Inter (Google Fonts)
- Weights: 400 (Regular), 600 (Semibold), 700 (Bold), 800 (Extrabold)
- Base size: 18px desktop, 16px mobile

### Key Features
- Generous spacing for ADHD-friendly reading
- High contrast (WCAG AAA where possible)
- Smooth animations (respects prefers-reduced-motion)
- Keyboard navigation fully supported

## Analytics Events Tracked

- `page_view` - Page loads
- `scroll_25/50/75/100` - Scroll depth
- `signup_started` - Form focused
- `signup_completed` - Form submitted
- `interview_volunteered` - Interview checkbox checked
- `cta_clicked` - CTA button clicks
- `demo_started/completed` - Phone mockup interaction
- `nav_clicked` - Navigation link clicks

## Performance Targets

- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1
- Lighthouse Score: 90+ (all categories)
- Page Weight: <500KB (excluding external fonts)

## Deployment

This site is automatically deployed via GitHub Pages. Any push to the `main` branch triggers a rebuild (1-2 minutes).

See [SETUP_GUIDE.md](SETUP_GUIDE.md) for detailed deployment instructions.

## Browser Support

- Chrome/Edge (last 2 versions)
- Safari (last 2 versions)
- Firefox (last 2 versions)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

## Contributing

This is a solo project by Alfie Roberts, but feedback is welcome!

**Email:** alfie@impulsecard.co.uk

## License

© 2025 Impulse Card. All rights reserved.

---

Built with honesty, for people who need external accountability to stop overspending before it happens.
