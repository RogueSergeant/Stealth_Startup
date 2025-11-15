# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static landing page for **Impulse Card** - an AI-powered spending control card that blocks impulse purchases before they happen. The product is designed for anyone who struggles with impulse spending, with particular focus on people with ADHD or executive function challenges. The project is a pure HTML/CSS/JavaScript site hosted on GitHub Pages for rapid validation and waitlist collection.

**Primary Goal:** Collect 2,000+ waitlist signups to validate demand
**Secondary Goal:** Pre-qualify users for interviews (30% conversion target)

## Development Commands

### Local Development
```bash
# Serve locally with Python 3
python -m http.server 8000

# Or with Node.js
npx http-server

# Then visit http://localhost:8000
```

### Deployment
All deployments happen automatically via GitHub Pages when pushing to the main branch:
```bash
git add .
git commit -m "Description of changes"
git push origin main
# Wait 1-2 minutes for GitHub Pages to rebuild
```

### Testing
```bash
# Run Lighthouse audit from Chrome DevTools (F12 > Lighthouse tab)
# Target scores: 90+ for all categories

# Test responsive design
# Chrome DevTools: F12 > Toggle device toolbar (Ctrl+Shift+M)
```

## Architecture & Structure

### Technology Stack
- **Pure static site**: No build tools, no frameworks, no backend
- **Hosting**: GitHub Pages (free tier)
- **Form backend**: Formspree (50 submissions/month on free tier)
- **Analytics**: Google Analytics 4 (configured but commented out in index.html:28-36)

### Key Files
- `index.html` - Single-page landing page (all content)
- `css/style.css` - All styling (ADHD-friendly design principles)
- `js/main.js` - Analytics tracking, form handling, smooth scrolling
- `CNAME` - Custom domain configuration (impulsecard.co.uk)

### Design System
The site follows accessibility-first design principles (originally inspired by ADHD-friendly design but beneficial for all users):
- High contrast text for readability
- Generous white space to reduce cognitive overwhelm
- Clear visual hierarchy
- Information chunked into digestible sections
- No auto-playing media
- Mobile-first responsive design

**Color Palette:**
- Primary: `#0066CC` (trust blue)
- CTA: `#FF6B35` (coral orange)
- Success: `#00C853` (green)
- Dark mode only (light mode removed in recent commit)

**Typography:** Inter font family, 18px body text (16px mobile), 1.6 line-height

### Target Audience
The landing page positions Impulse Card for anyone who struggles with impulse purchases, including but not limited to:
- People with ADHD or executive function challenges (key demographic)
- Late-night emotional shoppers
- "Hobby cyclers" who buy everything for new interests then move on
- Anyone who knows budgeting apps don't work for them

**Messaging Strategy:** Lead with the universal problem (impulse spending), then highlight ADHD as a key use case in the "Especially helpful if you" section. This inclusive approach expands the addressable market while still resonating with the core ADHD demographic.

### Analytics Tracking
The site tracks these events via Google Analytics (when configured):
- Form submissions
- CTA button clicks
- Scroll depth (25%, 50%, 75%, 100%)
- Time on page
- Page load performance

All tracking code is in `js/main.js` using `gtag` events.

## Common Development Tasks

### Update Waitlist Counter
Edit `js/main.js:20`:
```javascript
let waitlistCount = 847; // Update this number
```

### Configure Formspree
1. Get form ID from formspree.io dashboard
2. Update `index.html` form action attribute with your form ID
3. Look for: `action="https://formspree.io/f/YOUR_FORM_ID"`

### Enable Google Analytics
1. Uncomment the GA4 script in `index.html:28-36`
2. Replace `G-XXXXXXXXXX` with your Measurement ID (appears twice)

### Add/Update Content
All content is in `index.html` - it's a single-page application with these sections:
- Hero (with phone mockup visualization)
- Problem cards
- How It Works
- Who It's For (personal story)
- Features
- FAQ
- Waitlist form
- Footer

### Form Submission Flow
Currently uses Formspree's default redirect behavior. For AJAX submission with better UX, uncomment the AJAX code in `js/main.js:75-121`.

## Important Context

### Target Metrics
- **Conversion Rate:** 20-30% (visitors → signups)
- **Bounce Rate:** <50%
- **Time on Page:** 2+ minutes
- **Page Load:** <2 seconds
- **Lighthouse Score:** 90+ all categories

### User Research Foundation
This landing page was built after 127 user interviews with people who struggle with impulse spending (many with ADHD, many without). The messaging, problem cards, and feature set directly reflect actual user pain points. The research revealed that impulse spending is a universal challenge - ADHD amplifies it but doesn't cause it exclusively. Maintain this authentic, research-backed tone when making content changes.

**Key insight from research:** 73% of participants would use this as their primary card, and 81% have tried traditional budgeting apps (Monzo/Revolut) and failed. The pain point is external accountability, not awareness of spending.

### Legal/Compliance
The form includes GDPR-compliant consent checkboxes and privacy promises. When making form changes, maintain these compliance elements.

### Domain Configuration
Custom domain (impulsecard.co.uk) is configured via CNAME file and DNS A records pointing to GitHub Pages servers (185.199.108-111.153).

## Testing Checklist

Before any significant changes:
- [ ] Test on mobile devices (actual devices preferred)
- [ ] Test in Chrome, Safari, Firefox
- [ ] Verify form submission works
- [ ] Run Lighthouse audit (target: 90+)
- [ ] Check social media preview at socialsharepreview.com
- [ ] Verify analytics tracking (if enabled)
- [ ] Test all internal anchor links

## Performance Optimization

Current optimizations:
- Minimal JavaScript (vanilla JS, no frameworks)
- Single CSS file, no unused styles
- Font preloading for Inter
- SVG favicon (no additional HTTP request)

The site is intentionally kept simple for maximum performance and reliability. Avoid adding:
- Heavy JavaScript frameworks
- External dependencies beyond Google Fonts and Analytics
- Image carousels or auto-playing media
- Complex animations

## Contact Information

When updating contact details, search for these strings:
- `alfie@impulsecard.co.uk` (appears in multiple places)
- Personal story in "Who This Is For" section (founder is Alfie Roberts, software engineer at Deliveroo with ADHD)
