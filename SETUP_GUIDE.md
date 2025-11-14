# Impulse Card Landing Page - Setup Guide

Complete step-by-step guide to get your landing page live in 2-3 hours.

## ⏱ Timeline

- **Total time:** 2-3 hours
- **Step 1:** 15 minutes (GitHub setup)
- **Step 2:** 30 minutes (Formspree & Analytics)
- **Step 3:** 15 minutes (Content customization)
- **Step 4:** 30 minutes (Testing)
- **Step 5:** 30 minutes (Going live)
- **Step 6:** 30 minutes (Post-launch setup)

---

## Step 1: GitHub Repository Setup (15 mins)

### 1.1 Create GitHub Account (if needed)
- Go to [github.com](https://github.com)
- Sign up for a free account
- Verify your email

### 1.2 Create Repository
```bash
# Option A: Create on GitHub.com
# 1. Click "New repository"
# 2. Name: "impulse-card-landing"
# 3. Make it PUBLIC (required for free GitHub Pages)
# 4. Don't initialize with README (we already have one)

# Option B: Push this existing code
git init
git add .
git commit -m "Initial landing page commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/impulse-card-landing.git
git push -u origin main
```

### 1.3 Enable GitHub Pages
1. Go to repository **Settings**
2. Scroll to **Pages** section (left sidebar)
3. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**
5. Wait 1-2 minutes
6. Your site will be live at: `https://YOUR_USERNAME.github.io/impulse-card-landing`

**✅ Checkpoint:** Visit your GitHub Pages URL and verify the page loads.

---

## Step 2: Configure Form & Analytics (30 mins)

### 2.1 Set Up Formspree (15 mins)

1. **Create account:**
   - Go to [formspree.io](https://formspree.io)
   - Sign up (free tier: 50 submissions/month)
   - Verify your email

2. **Create form:**
   - Click "New Form"
   - Name it: "Impulse Card Waitlist"
   - Click "Create Form"

3. **Get Form ID:**
   - Copy the form ID (looks like: `mxxxxxxx`)
   - Your endpoint: `https://formspree.io/f/mxxxxxxx`

4. **Update index.html:**
   - Open `index.html`
   - Find line ~230: `<form id="waitlist-form" action="https://formspree.io/f/YOUR_FORM_ID"`
   - Replace `YOUR_FORM_ID` with your actual form ID
   - Save the file

5. **Configure notifications (optional):**
   - In Formspree dashboard, go to "Notifications"
   - Add your email to receive signup notifications
   - Choose notification frequency

6. **Test the form:**
   - Submit a test entry on your live site
   - Check Formspree dashboard for the submission
   - Check your email for notification

**✅ Checkpoint:** Submit test form, verify it appears in Formspree.

### 2.2 Set Up Google Analytics (15 mins)

1. **Create account:**
   - Go to [analytics.google.com](https://analytics.google.com)
   - Sign in with Google account
   - Click "Start measuring"

2. **Create property:**
   - Account name: "Impulse Card"
   - Property name: "Landing Page"
   - Reporting time zone: Your timezone
   - Currency: GBP

3. **Set up data stream:**
   - Platform: **Web**
   - Website URL: Your GitHub Pages URL (or custom domain)
   - Stream name: "Landing Page"
   - Click "Create stream"

4. **Get Measurement ID:**
   - Copy your Measurement ID (format: `G-XXXXXXXXXX`)

5. **Update index.html:**
   - Open `index.html`
   - Find the commented Analytics section (around line 22)
   - Uncomment the script
   - Replace `G-XXXXXXXXXX` with your actual ID (appears twice)
   - Save the file

6. **Deploy changes:**
```bash
git add index.html
git commit -m "Configure Formspree and Google Analytics"
git push origin main
```

7. **Test tracking:**
   - Wait 2 minutes for deployment
   - Visit your live site
   - In Google Analytics, go to Reports → Realtime
   - You should see yourself as 1 active user

**✅ Checkpoint:** See yourself in Google Analytics Realtime report.

---

## Step 3: Customize Content (15 mins)

### 3.1 Update Contact Information

In `index.html`, search for and update:
- Email: `sam@impulsecard.co.uk` → Your email
- Personal story in "Who It's For" section (optional)
- Footer information

### 3.2 Update Waitlist Counter

In `js/main.js`, line 10:
```javascript
let waitlistCount = 247; // Change to your starting number (or 0)
```

### 3.3 Review and Edit Content

Read through `index.html` and customize:
- Company name (if different)
- Personal story (make it yours)
- Testimonials (use real ones when you have them)
- FAQ answers (adjust based on your offering)

### 3.4 Deploy Changes
```bash
git add .
git commit -m "Customize content and contact info"
git push origin main
```

**✅ Checkpoint:** Verify changes appear on live site.

---

## Step 4: Testing (30 mins)

### 4.1 Mobile Testing

Test on actual devices:
- iPhone (Safari)
- Android (Chrome)

Or use browser dev tools:
- Chrome: F12 → Toggle device toolbar (Ctrl+Shift+M)
- Test various screen sizes

**Check:**
- [ ] Text is readable
- [ ] Buttons are tappable
- [ ] Form works
- [ ] No horizontal scrolling
- [ ] Images load (if added)

### 4.2 Browser Testing

Test in multiple browsers:
- [ ] Chrome
- [ ] Safari
- [ ] Firefox
- [ ] Edge

### 4.3 Functionality Testing

- [ ] Click all navigation links
- [ ] Submit waitlist form
- [ ] Verify form submission in Formspree
- [ ] Check Google Analytics tracks visit
- [ ] Test all radio buttons and checkboxes
- [ ] Try submitting form without required fields

### 4.4 Performance Testing

Run Lighthouse audit:
1. Open Chrome DevTools (F12)
2. Go to "Lighthouse" tab
3. Select "Desktop" and all categories
4. Click "Generate report"

**Target scores:**
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

If scores are low:
- Compress images (use [tinypng.com](https://tinypng.com))
- Check for console errors
- Ensure all images have alt text

### 4.5 Social Share Preview Testing

1. Go to [socialsharepreview.com](https://socialsharepreview.com)
2. Enter your page URL
3. Check how it looks on Twitter, Facebook, LinkedIn
4. If you added a social share image, verify it appears

**✅ Checkpoint:** All tests pass, Lighthouse score 90+.

---

## Step 5: Going Live (30 mins)

### 5.1 Final Pre-Launch Checklist

Content:
- [ ] All text proofread (no typos)
- [ ] All links work
- [ ] Contact email is correct
- [ ] Personal story is authentic

Technical:
- [ ] Formspree configured and tested
- [ ] Google Analytics working
- [ ] Mobile responsive
- [ ] Page loads in <2 seconds
- [ ] All forms validate properly

Legal (basic):
- [ ] Privacy statement in form (already included)
- [ ] Consent checkbox (already included)
- [ ] Unsubscribe promise (already included)

### 5.2 Optional: Custom Domain Setup

If you purchased a custom domain (e.g., impulsecard.co.uk):

1. **Create CNAME file:**
```bash
echo "impulsecard.co.uk" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push origin main
```

2. **Configure DNS at your domain registrar:**

At Namecheap/GoDaddy/etc., add these records:

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

Type: CNAME
Host: www
Value: YOUR_USERNAME.github.io
```

3. **Enable in GitHub Pages:**
- Go to repository Settings → Pages
- Enter custom domain: `impulsecard.co.uk`
- Save
- Wait 24 hours, then enable "Enforce HTTPS"

4. **Wait for DNS propagation:**
- Takes 24-48 hours
- Test: `dig impulsecard.co.uk`

**✅ Checkpoint:** Site is live and accessible!

---

## Step 6: Post-Launch Setup (30 mins)

### 6.1 Create Sharing Assets

1. **Write social media posts:**

**LinkedIn:**
```
I've just launched the waitlist for Impulse Card - an AI-powered spending control card built specifically for ADHD adults.

If you've ever made a late-night purchase you regretted, this is for you.

Unlike traditional banking apps that show you what you spent AFTER it happens, Impulse Card stops you BEFORE you overspend.

Join 247+ people on the waitlist: [YOUR_URL]

#ADHD #FinTech #MentalHealth
```

**Reddit (r/ADHD):**
```
[Title] I'm building a spending control card for ADHD adults - would love your feedback

[Body]
Hey everyone! I have ADHD and last year I lost £1,600 to impulse purchases I regretted.

I tried every budgeting app, but they all showed me the problem AFTER I'd already spent the money. Not helpful when executive function fails in the moment.

So I'm building something different: a prepaid card that blocks impulse purchases in real-time, and makes you justify why you need something before approving it.

I've done 100 interviews with the ADHD community and 73% said they'd use this as their primary card.

I'd love your thoughts - and if you're interested, I've set up a waitlist: [YOUR_URL]

Happy to answer any questions!
```

2. **Prepare your email list:**
- Export Formspree submissions weekly
- Import to a spreadsheet
- Track: email, ADHD status, spending amount, interview willingness

### 6.2 Schedule First Week Activities

**Day 1 (Launch Day):**
- [ ] Post on LinkedIn
- [ ] Post on r/ADHD (read rules first!)
- [ ] Email 20 close friends/family asking for shares
- [ ] Share in 3 ADHD Facebook groups

**Day 2:**
- [ ] Post on r/UKPersonalFinance (if relevant)
- [ ] Share in relevant ADHD Discord servers
- [ ] Respond to all comments/questions

**Day 3:**
- [ ] Update waitlist counter on site
- [ ] Thank early signups via email (optional)
- [ ] Analyze first analytics data

**Day 4-7:**
- [ ] Keep engaging with comments
- [ ] Share progress updates ("25 signups in 48 hours!")
- [ ] Reach out to interview volunteers

### 6.3 Set Up Monitoring

Create a simple tracking spreadsheet:

| Date | Visitors | Signups | Conversion % | Traffic Source |
|------|----------|---------|--------------|----------------|
| Day 1| 150      | 42      | 28%          | Reddit         |
| Day 2| 89       | 18      | 20%          | LinkedIn       |

**Daily tasks:**
- [ ] Check Google Analytics
- [ ] Check Formspree submissions
- [ ] Update waitlist counter
- [ ] Respond to questions

**Weekly tasks:**
- [ ] Export signups to spreadsheet
- [ ] Update waitlist number on site
- [ ] Share progress update on social
- [ ] Contact interview volunteers

### 6.4 Create Response Templates

Save these for common questions:

**"When will this launch?"**
> Thanks for your interest! We're in the research phase now - if we get strong waitlist demand (our target is 2,000+ signups), we're aiming to launch in 6-9 months. Everyone on the waitlist gets early access!

**"How is this different from Monzo pots?"**
> Great question! Monzo pots are passive - you have to remember to move money. Impulse Card actively prevents overspending in real-time, before the transaction completes. It's designed specifically for ADHD brains that struggle with impulse control in the moment.

**"Is my data safe?"**
> Absolutely. Your spending data is encrypted and never sold. We're GDPR compliant from day one, and you can request to delete all your data at any time. We only use your data to make spending approval decisions.

**✅ Checkpoint:** You're fully launched and ready to scale!

---

## 🎯 Success Targets

### Week 1
- 100-200 signups
- 20-30% conversion rate
- <50% bounce rate

### Month 1
- 500-1,000 signups
- 50+ interview volunteers
- Proof of concept validated

### Month 3
- 2,000+ signups
- 100+ interviews completed
- Ready for pilot program

---

## 🆘 Common Issues & Solutions

### Issue: Form submissions not showing in Formspree
**Solution:**
- Check form ID is correct
- Verify form action URL
- Check Formspree spam folder
- Test in incognito mode

### Issue: Google Analytics not tracking
**Solution:**
- Verify Measurement ID is correct
- Check script is uncommented
- Wait 24 hours for data to appear
- Disable ad blockers

### Issue: Site not updating after git push
**Solution:**
- Clear browser cache (Ctrl+Shift+R)
- Wait 2-3 minutes for deployment
- Check GitHub Actions for build errors

### Issue: High bounce rate (>60%)
**Solution:**
- Check page load speed (should be <2s)
- Improve hero section headline
- Make CTA more prominent
- Test on mobile devices

### Issue: Low conversion rate (<10%)
**Solution:**
- Simplify form (remove optional fields)
- Strengthen value proposition
- Add more social proof
- Improve trust signals

---

## 📞 Next Steps After Launch

1. **Collect 100 signups** - Validates initial interest
2. **Complete 30 interviews** - Deep user research
3. **Build MVP** - Simple prototype
4. **Run pilot** - 50 beta users
5. **Full launch** - Scale to 2,000+

---

## 🎉 You're Ready!

You now have:
- ✅ Professional landing page
- ✅ Working waitlist form
- ✅ Analytics tracking
- ✅ Clear launch plan

**Time to launch!** 🚀

Remember: Done is better than perfect. Launch now, iterate later.

---

**Questions?** Email: sam@impulsecard.co.uk (or your email!)

Good luck! 💙
