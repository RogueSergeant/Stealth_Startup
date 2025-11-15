# Impulse Card - Setup & Deployment Guide

Complete guide for deploying and configuring the Impulse Card landing page.

## Table of Contents

1. [GitHub Pages Setup](#github-pages-setup)
2. [Custom Domain Configuration](#custom-domain-configuration)
3. [Formspree Setup](#formspree-setup)
4. [Analytics Setup](#analytics-setup)
5. [Testing Checklist](#testing-checklist)
6. [Troubleshooting](#troubleshooting)

---

## GitHub Pages Setup

### Prerequisites
- GitHub account
- Repository with landing page code

### Steps

1. **Make Repository Public** (required for free GitHub Pages)
   - Go to repository Settings
   - Scroll to "Danger Zone"
   - Click "Change visibility"
   - Select "Public"

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Under "Source", select:
     - Branch: `main`
     - Folder: `/ (root)`
   - Click "Save"

3. **Wait for Deployment**
   - GitHub will build and deploy automatically
   - Build time: 1-2 minutes
   - Check status in "Actions" tab

4. **Verify Deployment**
   - Visit `https://[username].github.io/[repository-name]`
   - Page should load successfully

### Auto-Deployment

Every push to `main` branch automatically triggers a rebuild:
```bash
git add .
git commit -m "Update content"
git push origin main
# Wait 1-2 minutes, then visit site
```

---

## Custom Domain Configuration

### DNS Configuration (at Domain Registrar)

1. **A Records** (for apex domain: impulsecard.co.uk)
   Add these four A records pointing to GitHub Pages:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153

   Type: A
   Name: @
   Value: 185.199.109.153

   Type: A
   Name: @
   Value: 185.199.110.153

   Type: A
   Name: @
   Value: 185.199.111.153
   ```

2. **CNAME Record** (for www subdomain)
   ```
   Type: CNAME
   Name: www
   Value: [username].github.io
   ```

### GitHub Pages Custom Domain

1. Go to repository Settings → Pages
2. Under "Custom domain", enter: `impulsecard.co.uk`
3. Click "Save"
4. Wait 24 hours for DNS propagation
5. **Enable "Enforce HTTPS"** (after DNS is verified)

### CNAME File

The `CNAME` file in the repository root must contain:
```
impulsecard.co.uk
```

**Important:** Don't delete this file - it tells GitHub Pages which domain to serve.

---

## Formspree Setup

### Sign Up

1. Go to [formspree.io](https://formspree.io)
2. Create account
3. Subscribe to **Basic plan** (£8/month - 1,000 submissions)

### Create Form

1. Click "New Form"
2. Form name: "Impulse Card Waitlist"
3. Copy form ID (e.g., `mvgdazqk`)
4. Update form action in `index.html`:
   ```html
   <form action="https://formspree.io/f/mvgdazqk" method="POST">
   ```

### Configure Form Settings

1. **Email Notifications**
   - Recipient: alfie@impulsecard.co.uk
   - Subject: "New Founding Member Signup"
   - Enable instant notifications

2. **Auto-Responder** (Optional)
   - Enable confirmation email to submitter
   - Subject: "Welcome to Impulse Card Founding Members"
   - Template:
     ```
     Hi {{name}},

     Thanks for joining the Impulse Card founding members!

     You'll hear from me when:
     - Pilot programme opens (Q1 2026)
     - I need feedback on early designs
     - Major updates happen

     Looking forward to building this with you.

     — Alfie
     alfie@impulsecard.co.uk
     ```

3. **Spam Filtering**
   - Enable reCAPTCHA (optional)
   - Honeypot field already implemented in form (`_gotcha`)

4. **Integrations** (Optional)
   - Google Sheets export
   - Webhook to analytics platform

### Testing Form Submission

1. Submit test form on local development
2. Check Formspree dashboard for submission
3. Verify email notification received
4. Test auto-responder (if configured)

---

## Analytics Setup

### Option 1: Plausible Analytics (Recommended)

**Cost:** £9/month (10K pageviews)

1. **Sign Up**
   - Go to [plausible.io](https://plausible.io)
   - Create account and subscribe

2. **Add Website**
   - Click "Add website"
   - Domain: `impulsecard.co.uk`
   - Timezone: Europe/London

3. **Install Script**
   - Copy tracking script
   - Add to `index.html` in `<head>`:
     ```html
     <script defer data-domain="impulsecard.co.uk" src="https://plausible.io/js/script.js"></script>
     ```

4. **Verify Installation**
   - Visit your site
   - Check Plausible dashboard for pageview
   - Should appear within 1 minute

5. **Configure Goals** (Custom Events)
   - In Plausible dashboard, go to Settings → Goals
   - Add custom events:
     - `signup_started`
     - `signup_completed`
     - `interview_volunteered`
     - `cta_clicked`
     - `demo_started`
     - `demo_completed`
     - `nav_clicked`

### Option 2: Simple Analytics (Alternative)

**Cost:** €9/month

1. **Sign Up**
   - Go to [simpleanalytics.com](https://simpleanalytics.com)
   - Create account

2. **Add Website & Script**
   - Add `impulsecard.co.uk`
   - Install tracking script in `<head>`:
     ```html
     <script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
     <noscript><img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" referrerpolicy="no-referrer-when-downgrade" /></noscript>
     ```

### Privacy Benefits

Both Plausible and Simple Analytics are:
- ✅ Cookieless (no cookie consent banner needed)
- ✅ GDPR compliant by default
- ✅ Privacy-friendly
- ✅ Lightweight (<1KB script)
- ✅ No cross-site tracking

### Uncomment Analytics Code

In `index.html`, uncomment the analytics script:
```html
<!-- Analytics (Plausible) - Add when configured -->
<script defer data-domain="impulsecard.co.uk" src="https://plausible.io/js/script.js"></script>
```

Remove the HTML comment markers (`<!--` and `-->`).

---

## Testing Checklist

### Pre-Launch Testing

**Functionality:**
- [ ] Page loads correctly (desktop & mobile)
- [ ] All sections render properly
- [ ] Navigation links scroll smoothly
- [ ] Phone mockup demo plays correctly
- [ ] Chat animation completes without errors
- [ ] Form validation works
- [ ] Form submission succeeds
- [ ] Thank you message displays
- [ ] Referral source dropdown shows "Other" field
- [ ] Expandable form section toggles
- [ ] No console errors

**Responsive Design:**
- [ ] Desktop (1920px, 1440px, 1280px)
- [ ] Tablet (768px)
- [ ] Mobile (375px, 360px)
- [ ] No horizontal scrolling
- [ ] Text readable without zooming
- [ ] Touch targets adequate size (44×44px minimum)

**Performance:**
- [ ] Page loads in <2s (desktop, good connection)
- [ ] Page loads in <5s (mobile, 3G)
- [ ] Lighthouse score 90+ (all categories)
- [ ] No layout shift on load (CLS <0.1)
- [ ] Images optimized (when added)

**Accessibility:**
- [ ] Keyboard navigation works throughout
- [ ] Focus indicators visible
- [ ] Screen reader announces content correctly
- [ ] Colour contrast meets WCAG AA (use WebAIM checker)
- [ ] Form labels properly associated
- [ ] Skip-to-content link works
- [ ] All interactive elements have accessible names

**Browser Testing:**
- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

**Form Testing:**
- [ ] Email validation works
- [ ] Required fields enforce requirement
- [ ] Honeypot field catches spam
- [ ] Formspree receives submission
- [ ] Email notification arrives
- [ ] Auto-responder sends (if configured)
- [ ] Thank you message shows interview note when applicable

**Analytics Testing:**
- [ ] Page view tracked
- [ ] Scroll depth events fire
- [ ] CTA clicks tracked
- [ ] Form events tracked
- [ ] Demo interaction tracked
- [ ] Events appear in analytics dashboard

### Tools for Testing

**Performance:**
- Chrome DevTools (Lighthouse)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

**Accessibility:**
- [WAVE](https://wave.webaim.org/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- Chrome Lighthouse Accessibility audit
- [Colour Contrast Checker](https://webaim.org/resources/contrastchecker/)

**Responsiveness:**
- Chrome DevTools Device Mode
- [Responsive Design Checker](https://responsivedesignchecker.com/)
- Real devices (iOS, Android)

**Validation:**
- [W3C HTML Validator](https://validator.w3.org/)
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)

---

## Troubleshooting

### GitHub Pages not deploying

**Problem:** Changes pushed but site not updating

**Solutions:**
1. Check Actions tab for build errors
2. Ensure branch is set to `main` in Pages settings
3. Verify repository is public
4. Wait 2-3 minutes for propagation
5. Hard refresh browser (Cmd+Shift+R / Ctrl+Shift+R)

### Custom domain not working

**Problem:** Domain shows 404 or doesn't load

**Solutions:**
1. Verify CNAME file exists in root
2. Check DNS records at domain registrar
3. Wait 24-48 hours for DNS propagation
4. Use `dig impulsecard.co.uk` to verify DNS
5. Disable and re-enable custom domain in GitHub settings
6. Don't enable HTTPS until DNS is fully propagated

### Form not submitting

**Problem:** Form submission fails or shows error

**Solutions:**
1. Verify Formspre form ID is correct
2. Check form action URL
3. Ensure Formspree account is active (paid plan)
4. Check browser console for errors
5. Verify internet connection
6. Test with Formspree's test mode first

### Analytics not tracking

**Problem:** Events not appearing in dashboard

**Solutions:**
1. Verify analytics script is uncommented
2. Check script URL is correct
3. Ensure ad blocker is disabled (for testing)
4. Check browser console for errors
5. Wait 1-5 minutes for events to appear
6. Verify domain matches exactly in analytics settings

### Phone demo not working

**Problem:** Chat animation doesn't play or breaks

**Solutions:**
1. Check browser console for JavaScript errors
2. Verify all DOM elements exist (IDs match)
3. Test in different browser
4. Check if animations are disabled (reduced motion preference)
5. Ensure JavaScript file is loaded correctly

### Performance issues

**Problem:** Lighthouse score below 90 or slow loading

**Solutions:**
1. Optimize images (compress, use WebP)
2. Enable text compression (GitHub Pages does this automatically)
3. Minimize third-party scripts
4. Defer non-critical JavaScript
5. Check for render-blocking resources
6. Test on slow 3G throttling

---

## Post-Launch Monitoring

### Weekly Checks

- [ ] Review analytics dashboard
- [ ] Check Formspree submissions
- [ ] Monitor for errors in GitHub Actions
- [ ] Test form submission still works
- [ ] Review email notifications

### Monthly Maintenance

- [ ] Review and respond to signups
- [ ] Schedule user interviews
- [ ] Update content based on feedback
- [ ] Check for broken links
- [ ] Review performance metrics
- [ ] Optimize based on user behaviour

---

## Support

**Questions?** Email alfie@impulsecard.co.uk

**Documentation:**
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Formspree Docs](https://help.formspree.io/)
- [Plausible Docs](https://plausible.io/docs)

---

Built with care for the Impulse Card founding community.
