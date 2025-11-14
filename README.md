# Impulse Card - Landing Page

A high-converting landing page for Impulse Card, an AI-powered spending control card designed specifically for ADHD adults.

## 🎯 Project Overview

**Purpose:** Validate demand for an AI-powered spending control card that prevents overspending before it happens

**Primary Goal:** Collect 2,000+ waitlist signups with high-quality leads

**Secondary Goal:** Pre-qualify users for interviews (30% conversion rate target)

## 🚀 Quick Start

### View the Live Site

Once deployed, your site will be available at:
- **GitHub Pages URL:** `https://yourusername.github.io/repository-name`
- **Custom Domain:** `https://impulsecard.co.uk` (if configured)

### Local Development

1. Clone this repository:
```bash
git clone https://github.com/yourusername/impulse-card-landing.git
cd impulse-card-landing
```

2. Open `index.html` in your browser:
```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

Or use a local server for best results:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if you have http-server installed)
npx http-server
```

Then visit `http://localhost:8000` in your browser.

## 📁 Repository Structure

```
impulse-card-landing/
├── index.html          # Main landing page
├── css/
│   └── style.css      # All styling (ADHD-friendly design)
├── js/
│   └── main.js        # Interactive functionality & analytics
├── images/            # Images and assets (add your own)
│   ├── (Add hero image)
│   ├── (Add mockups)
│   └── (Add social share image)
├── CNAME              # Custom domain configuration (optional)
└── README.md          # This file
```

## 🔧 Configuration Steps

### 1. Set Up Formspree (Waitlist Form)

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form and get your form ID
3. Open `index.html` and find line with `action="https://formspree.io/f/YOUR_FORM_ID"`
4. Replace `YOUR_FORM_ID` with your actual Formspree form ID

**Free tier:** 50 submissions/month
**Paid tier:** £8/month for 1,000 submissions

### 2. Set Up Google Analytics 4

1. Create a Google Analytics 4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (format: `G-XXXXXXXXXX`)
3. Open `index.html` and find the commented-out Analytics section in `<head>`
4. Uncomment it and replace `G-XXXXXXXXXX` with your actual ID

### 3. Update Waitlist Counter

In `js/main.js`, update the `waitlistCount` variable:

```javascript
let waitlistCount = 247; // Update this number regularly
```

You can:
- Update manually as signups come in
- Connect to a Google Sheets API
- Build a simple backend to track this automatically

### 4. Add Images

Add the following images to the `images/` folder:

- **Hero image/mockup:** Product screenshot or mockup (recommended: 1200x800px)
- **Social share image:** For social media previews (required: 1200x630px)
- **Logo:** SVG or PNG (optional, currently using emoji)
- **Favicon:** 32x32px icon (optional, currently using emoji)

Then update references in `index.html`.

## 🌐 GitHub Pages Deployment

### Option 1: Standard GitHub Pages (Free)

1. **Push your code to GitHub:**
```bash
git add .
git commit -m "Initial landing page"
git push origin main
```

2. **Enable GitHub Pages:**
   - Go to repository Settings
   - Navigate to "Pages" section
   - Source: Deploy from `main` branch
   - Folder: `/ (root)`
   - Click Save

3. **Access your site:**
   - Wait 1-2 minutes for deployment
   - Visit `https://yourusername.github.io/repository-name`

### Option 2: Custom Domain

1. **Create CNAME file in root:**
```bash
echo "impulsecard.co.uk" > CNAME
```

2. **Configure DNS (at your domain registrar):**

Add A records pointing to GitHub Pages:
```
Type: A
Host: @
Value: 185.199.108.153

Type: A
Host: @
Value: 185.199.109.153

Type: A
Host: @
Value: 185.199.110.153

Type: A
Host: @
Value: 185.199.111.153
```

Add CNAME record for www:
```
Type: CNAME
Host: www
Value: yourusername.github.io
```

3. **Enable in GitHub Pages settings:**
   - Enter custom domain: `impulsecard.co.uk`
   - Check "Enforce HTTPS" (wait 24 hours for SSL certificate)

4. **DNS propagation:**
   - Wait 24-48 hours for full DNS propagation
   - Test with: `dig impulsecard.co.uk`

## 📊 Analytics & Tracking

The landing page tracks:

- ✅ **Page views** - Total visitors
- ✅ **Form submissions** - Waitlist signups
- ✅ **CTA clicks** - Button engagement
- ✅ **Scroll depth** - 25%, 50%, 75%, 100%
- ✅ **Time on page** - Engagement metric
- ✅ **Page load time** - Performance monitoring

### Key Metrics to Monitor

**Traffic:**
- Target: 1,000-2,000 visitors in first month
- Track sources: Reddit, Facebook, LinkedIn

**Conversion Rate:**
- Target: 20-30% (visitors → signups)
- Industry average: 10-15%

**Bounce Rate:**
- Target: <50%
- Lower is better

**Time on Page:**
- Target: 2+ minutes
- Indicates engagement with content

## 🎨 Design Principles

The landing page follows ADHD-friendly design principles:

- **High contrast text** - Easy to read
- **Generous white space** - Reduces overwhelm
- **Clear visual hierarchy** - Obvious what's important
- **Chunked information** - Bite-sized sections
- **No auto-playing media** - Prevents distraction
- **Mobile-first responsive** - Works on all devices

### Color Palette

- **Primary:** `#0066CC` (trust blue)
- **Accent/CTA:** `#FF6B35` (coral orange)
- **Success:** `#00C853` (green)
- **Background:** `#FFFFFF` (white)
- **Secondary bg:** `#F8F9FA` (light grey)
- **Text:** `#333333` (dark grey)

### Typography

- **Font:** Inter (Google Fonts)
- **H1:** 48px desktop, 32px mobile
- **H2:** 36px desktop, 28px mobile
- **Body:** 18px (16px mobile)
- **Line height:** 1.6

## ✅ Pre-Launch Checklist

Before sharing your landing page:

### Content
- [ ] All text reviewed for typos/grammar
- [ ] Email address updated to yours
- [ ] Formspree form ID configured
- [ ] Waitlist counter number updated
- [ ] FAQ answers reviewed
- [ ] All links tested

### Technical
- [ ] Google Analytics configured
- [ ] Form submissions tested
- [ ] Mobile responsiveness checked
- [ ] Page load speed tested (<2s target)
- [ ] All images optimized
- [ ] HTTPS enabled (if using custom domain)

### Testing
- [ ] Test on Chrome, Safari, Firefox
- [ ] Test on mobile device
- [ ] Test form submission
- [ ] Test all internal links
- [ ] Check social media preview (use [socialsharepreview.com](https://socialsharepreview.com))
- [ ] Run Lighthouse audit (target: 90+)

### Legal (when ready)
- [ ] Privacy policy created
- [ ] Terms of service created
- [ ] Cookie consent (if using tracking beyond GA)
- [ ] GDPR compliance verified

## 🚦 Performance Optimization

### Current Features

- ✅ Minimal JavaScript (vanilla JS, no frameworks)
- ✅ Static site (no backend required)
- ✅ Optimized CSS (no unused styles)
- ✅ Font preloading
- ✅ Smooth scrolling
- ✅ Mobile-optimized

### Future Enhancements

- [ ] Add lazy loading for images
- [ ] Minify CSS and JS
- [ ] Use WebP format for images
- [ ] Add service worker for offline support
- [ ] Implement critical CSS inline

### Run Lighthouse Audit

```bash
# Chrome DevTools
# 1. Open Chrome DevTools (F12)
# 2. Go to "Lighthouse" tab
# 3. Click "Generate report"
# 4. Target scores: 90+ for all categories
```

## 📈 Post-Launch Actions

### Week 1
- [ ] Share on Reddit (r/ADHD, r/UKPersonalFinance)
- [ ] Post in ADHD Facebook groups
- [ ] LinkedIn post
- [ ] Email friends/family
- [ ] Monitor analytics daily

### Week 2
- [ ] Update signup count
- [ ] Analyze traffic sources
- [ ] Refine messaging based on feedback
- [ ] Reach out to interview volunteers

### Ongoing
- [ ] Update waitlist number weekly
- [ ] Add testimonials as you collect them
- [ ] Test different headlines (A/B testing)
- [ ] Share progress updates

## 🔍 Testing Tools

- **PageSpeed Insights:** https://pagespeed.web.dev/
- **Mobile-Friendly Test:** https://search.google.com/test/mobile-friendly
- **Social Share Preview:** https://socialsharepreview.com/
- **GTmetrix:** https://gtmetrix.com/
- **WAVE (Accessibility):** https://wave.webaim.org/

## 🛠 Troubleshooting

### Form Not Working

1. Check Formspree form ID is correct
2. Verify form action URL: `https://formspree.io/f/YOUR_FORM_ID`
3. Test in incognito mode (browser extensions can block)
4. Check Formspree dashboard for submissions

### Analytics Not Tracking

1. Verify Google Analytics ID is correct
2. Check that script is uncommented in HTML
3. Disable ad blockers during testing
4. Check GA4 Real-Time reports

### Page Not Loading on GitHub Pages

1. Verify repository is public
2. Check GitHub Pages is enabled in settings
3. Ensure main branch is selected
4. Wait 1-2 minutes after enabling
5. Clear browser cache

### Custom Domain Not Working

1. Verify DNS records are correct
2. Wait 24-48 hours for DNS propagation
3. Check CNAME file exists in repository root
4. Verify custom domain in GitHub Pages settings

## 📝 Making Updates

To update content:

1. Edit `index.html` for text changes
2. Edit `css/style.css` for styling changes
3. Edit `js/main.js` for functionality changes

To deploy updates:

```bash
git add .
git commit -m "Description of changes"
git push origin main
```

GitHub Pages will automatically rebuild in 1-2 minutes.

## 💡 Tips for Success

1. **Keep it simple** - Don't over-engineer
2. **Launch quickly** - Imperfect and live > perfect and pending
3. **Test with real users** - Get feedback early
4. **Update regularly** - Keep waitlist counter current
5. **Monitor analytics** - Make data-driven improvements
6. **Be authentic** - Personal story matters

## 📧 Support

For questions or issues:
- **Email:** sam@impulsecard.co.uk
- **GitHub Issues:** (Create an issue in this repository)

## 📄 License

© 2025 Impulse Card. All rights reserved.

---

**Built with ❤️ for the ADHD community**

Good luck with your launch! 🚀
