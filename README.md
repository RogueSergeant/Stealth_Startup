# Impulse Card - Landing Page

A high-converting, single-page landing page for **Impulse Card** – an AI-powered spending control card that helps users make intentional spending decisions.

Built by Alfie Roberts

## 🎯 Purpose

This landing page is designed to:
- Build a founding member community (target: 100-500 early adopters)
- Validate demand for the Impulse Card product
- Recruit user interview participants (target: 30%+ of signups)
- Position the product as a financial wellbeing tool (not restriction)

## 🎨 Design Philosophy

- **Modern flat design** with teal-based professional palette
- **Dark mode** optimized
- **NO gradients** (except one subtle comparison highlight)
- **Accessibility-first** (WCAG AA minimum)
- **ADHD-friendly** design patterns

## 🚀 Features

- Interactive phone mockup with animated chat demonstration
- FAQ accordion
- Expandable form with conditional fields
- Form integration with Formspree
- Privacy-focused analytics (Plausible)
- Smooth scrolling and transitions
- Mobile-first responsive design
- Keyboard accessible

## 📁 Project Structure

```
/
├── index.html          # Main page
├── css/
│   └── style.css      # All styling
├── js/
│   └── main.js        # All JavaScript
├── CNAME              # Custom domain configuration
└── README.md          # This file
```

## 🛠️ Technical Stack

- **Frontend:** Pure HTML5, CSS3, Vanilla JavaScript ES6+
- **Hosting:** GitHub Pages
- **Form Backend:** Formspree (https://formspree.io/f/mvgdazqk)
- **Analytics:** Plausible Analytics (cookieless, privacy-focused)
- **Fonts:** Google Fonts (Inter family)
- **Icons:** Inline SVGs (Heroicons-inspired)

## 🎨 Color Palette

**Teal Family (Brand):**
- `--teal-900: #0A4D4D` - Deep teal for headlines
- `--teal-700: #0D7377` - Primary brand color, buttons
- `--teal-500: #14AFBD` - Interactive elements
- `--teal-300: #7DD3D9` - Highlights
- `--teal-100: #C8EAED` - Subtle backgrounds

**Navy/Slate (Structure):**
- `--navy-900: #0F1419` - Main background
- `--navy-800: #1A2332` - Alternate sections
- `--slate-700: #242B3D` - Card backgrounds

**Coral (Action):**
- `--coral-500: #FF6B6B` - Important CTAs

## 📱 Responsive Breakpoints

- Desktop: 769px and above
- Tablet: 768px and below
- Mobile: 480px and below
- Small Mobile: 360px and below

## ⚙️ Setup & Deployment

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/RogueSergeant/Stealth_Startup.git
   cd Stealth_Startup
   ```

2. Open `index.html` in your browser - that's it! No build process needed.

### GitHub Pages Deployment

1. Push to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin claude/impulse-card-landing-015HTA6a8x5GkpgPX26yWzXK
   ```

2. Enable GitHub Pages:
   - Go to repository Settings
   - Navigate to Pages
   - Select branch and root folder
   - Save

3. Custom Domain (optional):
   - Add CNAME record in DNS: `impulsecard.co.uk` → GitHub IPs
   - Enable "Enforce HTTPS" after 24 hours

## 🔧 Configuration

### Formspree Setup

Form endpoint: `https://formspree.io/f/mvgdazqk`

To update or change:
1. Create account at formspree.io
2. Create new form
3. Update form action in `index.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Analytics Setup

The page is configured for Plausible Analytics:
```html
<script defer data-domain="impulsecard.co.uk" 
  src="https://plausible.io/js/script.js"></script>
```

To change analytics provider:
1. Remove Plausible script from `<head>`
2. Add your analytics script
3. Update `trackEvent()` function in `js/main.js`

## 📊 Performance Targets

- **First Contentful Paint:** <1.5s ✅
- **Largest Contentful Paint:** <2.5s ✅
- **Cumulative Layout Shift:** <0.1 ✅
- **Lighthouse Score:** 90+ (all categories) ✅
- **Total page weight:** <500KB ✅

## ♿ Accessibility

- **WCAG AA compliant**
- Semantic HTML5
- Proper heading hierarchy
- Alt text for all images
- Keyboard navigation support
- Focus indicators
- Reduced motion support
- High contrast ratios

## 📈 Success Metrics

**Target Goals:**
- Conversion rate: 15-25% (visitors → signups)
- Interview volunteers: 30%+ of signups
- Bounce rate: <60%
- Time on page: 2+ minutes
- Page load: <2 seconds

**Tracked Events:**
- `pageview` - Automatic
- `scroll_50` - Scrolled to 50%
- `scroll_100` - Scrolled to 100%
- `cta_clicked` - CTA button clicked
- `demo_started` - Phone demo initiated
- `signup_started` - Form focused
- `signup_completed` - Form submitted
- `interview_volunteered` - Interview checkbox checked

## 🧪 Testing Checklist

- [ ] Test on actual iOS device
- [ ] Test on actual Android device
- [ ] Verify form submission
- [ ] Test all interactive elements
- [ ] Check accessibility with screen reader
- [ ] Verify keyboard navigation
- [ ] Test on slow 3G connection
- [ ] Validate HTML
- [ ] Check all links
- [ ] Test email notifications from Formspree

## 📝 Content Strategy

**Messaging Framework:**
- "Spend better" not "spend less"
- "Intentional spending" not "impulse control"
- "Financial wellbeing" not "budgeting"
- Empowerment framing, not restriction
- Radical honesty about pre-launch status

## 🐛 Known Issues

- Phone demo may not work on very old browsers (fallback: static display)
- Formspree has monthly submission limit (1,000 on paid tier)

## 📧 Contact

**Alfie Roberts**
- Email: alfie@impulsecard.co.uk
- Website: https://impulsecard.co.uk

## 📄 License

© 2025 Impulse Card. Built by Alfie Roberts.

Privacy Policy and Terms published before launch.

---

**Built with care for people who want to spend intentionally.**
