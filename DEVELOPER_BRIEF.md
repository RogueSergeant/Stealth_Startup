# Impulse Card Landing Page - Developer Brief

## Executive Summary

Build a high-converting, single-page landing page for **Impulse Card** - an AI-powered spending control card that blocks impulse purchases before they happen. The primary goal is to collect 2,000+ waitlist signups to validate demand for this product targeting people who struggle with impulse spending, particularly those with ADHD.

**Key Requirements:**
- Pure static site (HTML/CSS/JavaScript only - no frameworks, no build tools)
- Dark mode only with vibrant purple/amber gradient design system
- Interactive phone mockup with animated chat demonstration
- Form integration with Formspree (for waitlist collection)
- Google Analytics 4 integration (commented out by default)
- Mobile-first responsive design
- Accessibility-first principles
- Target: 90+ Lighthouse score across all categories
- Page load time: <2 seconds

---

## 1. Project Context & Business Requirements

### Product Overview
Impulse Card is a prepaid debit card with AI-powered spending controls that:
- Blocks purchases over user-defined thresholds
- Requires users to justify purchases via an in-app chat interface
- Evaluates justifications using AI and approves, delays, or declines transactions
- Provides external accountability for people who struggle with willpower-based budgeting

### Target Audience
**Primary:** People with ADHD or executive function challenges who struggle with impulse spending
**Secondary:** Anyone who experiences impulse buying behavior (late-night shoppers, hobby cyclers, emotional spenders)

**Messaging Strategy:** Lead with the universal problem (impulse spending), then highlight ADHD as a key use case without making it ADHD-exclusive.

### Business Goals
1. **Primary:** Collect 2,000+ waitlist signups
2. **Secondary:** Pre-qualify 30% of signups for 20-minute user interviews (incentivized with £10 Amazon vouchers)
3. Gather data on:
   - Monthly impulse spending amounts
   - ADHD status (diagnosed/self-identified)
   - Referral sources
   - Interview willingness

### Success Metrics
- **Conversion Rate:** 20-30% (visitors → signups)
- **Bounce Rate:** <50%
- **Time on Page:** 2+ minutes
- **Page Load:** <2 seconds
- **Lighthouse Score:** 90+ all categories

### Research Foundation
Built on insights from 127 user interviews revealing:
- Average monthly impulse spending: £143
- 73% would use this as their primary card
- 81% have tried Monzo/Revolut budgets and failed
- Pain point is external accountability, not spending awareness

---

## 2. Technical Architecture

### Technology Stack
- **Frontend:** Pure HTML5, CSS3, Vanilla JavaScript ES6+
- **Hosting:** GitHub Pages (free tier)
- **Form Backend:** Formspree (free tier: 50 submissions/month)
- **Analytics:** Google Analytics 4 (optional, commented out by default)
- **Fonts:** Google Fonts (Inter family)
- **Domain:** Custom domain support via CNAME (impulsecard.co.uk)

### Browser Support
- Chrome/Edge (last 2 versions)
- Safari (last 2 versions)
- Firefox (last 2 versions)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

### Performance Requirements
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1
- First Input Delay: <100ms
- Total page weight: <500KB (excluding external fonts)

### No Build Tools Required
The site must work by simply opening index.html in a browser. No npm, webpack, or any build process.

---

## 3. Design System

### Color Palette (Dark Mode Only)

**Brand Colors:**
```css
--primary-electric: #C084FC;    /* Electric purple */
--primary-violet: #A855F7;      /* Deep violet */
--primary-amber: #FBBF24;       /* Amber/yellow accent */
--accent-coral: #FF8585;        /* Coral pink */
--accent-orange: #FB923C;       /* Bright orange */
```

**Backgrounds:**
```css
--bg-primary: #0A0E1A;          /* Main dark background */
--bg-secondary: #111827;        /* Alternate sections */
--card-bg: #1A1F2E;            /* Card backgrounds */
```

**Text:**
```css
--text-primary: #FAFAFA;        /* Primary text (white) */
--text-secondary: #9CA3AF;      /* Secondary text (gray) */
--text-tertiary: #E5E7EB;       /* Tertiary text (lighter gray) */
```

**Gradients:**
```css
--gradient-primary: linear-gradient(135deg, #A855F7 0%, #C084FC 50%, #FBBF24 100%);
--gradient-accent: linear-gradient(135deg, #FF8585 0%, #FB923C 100%);
--gradient-hero: linear-gradient(165deg, #0A0E1A 0%, #0E1219 50%, #0A0E1A 100%);
```

**Borders:**
```css
--card-border: rgba(168, 85, 247, 0.3);  /* Semi-transparent purple */
```

### Typography

**Font Family:** Inter (weights: 400, 600, 700, 800)
- Load via Google Fonts with preconnect optimization

**Desktop Typography:**
- H1: 56px, weight 800, line-height 1.1, letter-spacing -0.02em
- H2: 42px, weight 700, line-height 1.2, letter-spacing -0.01em
- H3: 24px, weight 600
- Body: 18px, line-height 1.6
- Subheadline: 22px

**Mobile Typography (768px and below):**
- H1: 42px
- H2: 32px
- H3: 22px
- Body: 17px
- Subheadline: 19px

**Mobile Typography (480px and below):**
- H1: 34px
- H2: 28px
- Body: 16px

### Spacing System
- Container max-width: 1200px
- Section padding (desktop): 100px vertical, 20px horizontal
- Section padding (mobile): 72px vertical, 20px horizontal
- Card padding (desktop): 40-48px
- Card padding (mobile): 32px
- Grid gap: 40-48px

### Visual Effects

**Shadows:**
- Card shadow: `0 10px 40px rgba(0, 107, 125, 0.15)`
- Hover shadow: `0 20px 60px rgba(0, 240, 255, 0.3)`
- Button shadow: `0 10px 40px rgba(0, 240, 255, 0.5)`

**Border Radius:**
- Cards: 20px
- Buttons: 12px (standard), 16px (large)
- Inputs: 12px
- Phone mockup: 36px (outer), 28px (screen)

**Transitions:**
- Standard: `all 0.3s ease`
- Button: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`
- Card hover: `all 0.3s ease`

**Animations:**
1. **Float (phone mockup):** 6s ease-in-out infinite, translateY(-20px) at 50%
2. **Shimmer (emphasized text):** 3s ease-in-out infinite, opacity 1 → 0.85 → 1
3. **Pulse-glow (hero background):** 4s ease-in-out infinite, scale 1 → 1.1
4. **Fade-in (cards):** 0.5s ease-out with staggered delays
5. **Sparkle-rotate (CTA buttons on hover):** 1s ease-in-out infinite
6. **Scan (dark mode body overlay):** 8s linear infinite
7. **Glitch (logo hover):** 0.3s ease-in-out

### Accessibility Features

**ADHD-Friendly Design Principles:**
- High contrast text (WCAG AAA where possible)
- Generous white space to reduce cognitive overwhelm
- Clear visual hierarchy with size and color
- Information chunked into digestible sections
- No auto-playing media or distracting animations
- Meaningful hover states for all interactive elements

**Keyboard Navigation:**
- All interactive elements keyboard accessible
- Focus states: 3px solid outline with 3px offset
- Focus-visible support for keyboard vs. mouse distinction
- Skip-to-content links (if needed)

**Reduced Motion:**
- Respect `prefers-reduced-motion` media query
- Disable all animations and set duration to 0.01ms
- Disable scroll-behavior smooth

**Screen Readers:**
- Semantic HTML5 elements (header, nav, section, footer)
- Proper heading hierarchy (H1 → H2 → H3)
- Alt text for all images (currently using inline SVGs)
- ARIA labels where needed
- Form labels properly associated

---

## 4. Page Structure & Content

### Sections (in order)

#### 1. Header (Sticky)
**Elements:**
- Logo: "💳 Impulse Card" with gradient text
- Navigation: "How It Works" link + "Join Waitlist" CTA button
- Sticky positioning with glassmorphism effect
- Border bottom with gradient

**Behavior:**
- Remains fixed at top on scroll
- Background: semi-transparent with backdrop blur
- Mobile: Hide "How It Works" nav link (<768px)

#### 2. Hero Section
**Layout:** Centered, dark gradient background with animated glow effect

**Content:**
- H1: "Stop Overspending Before It Happens"
- Subheadline: "An AI-powered card that makes you pause before impulse purchases. Justify why you need it. Get approved, delayed, or gently declined—all in 10 seconds."
- Interactive phone mockup (detailed below)
- CTA button: "Join 847 People on the Waitlist"
- Trust signal: "✓ Created by a software engineer who lost over £5,000 last year to impulse purchases"

**Background Effects:**
- Gradient overlay
- Animated radial gradient glow (top-right, pulsing)
- Scan line animation (dark mode)

#### 3. Interactive Phone Mockup
**Design:**
- iPhone-style frame (340px × 600px screen area)
- Notch at top
- Dark gradient background matching app theme
- Floating animation (6s loop)

**Initial State (Notification Card):**
- Icon: 🤔 emoji with amber glow
- Title: "Hold on a sec..." (amber color #FBBF24)
- Merchant: "Amazon.co.uk"
- Amount: "£127.99" (large, white)
- Message: "This exceeds your discretionary budget. Want to explain why you need this?"
- Button: "Tell me why you need this" (gradient background)

**Interactive Demo Flow:**
When user clicks button:
1. Notification fades out, chat interface slides in
2. Chat header shows: back arrow, "Justify Purchase" title, £127.99 amount
3. Input field appears at bottom
4. After 800ms delay, simulate user typing: "I feel like this would bring me a lot of joy"
5. Text appears character by character (50ms per character)
6. After 400ms, animate send button press
7. Message moves to chat area as user bubble (gradient background)
8. After 1200ms, show AI typing indicator (3 bouncing dots)
9. After 2000ms, replace with AI response typed out (25ms per character):
   "Declined - you've asked me to help you focus on purchases that are actually going to bring something to your life. Instead of buying this, how about you text a friend to go for a walk with you?"
10. AI message has red border to indicate decline
11. Back arrow allows reset to initial state
12. Clicking chat area also restarts demo

**Chat Interface Styling:**
- User messages: gradient background, right-aligned
- AI messages: semi-transparent white background, left-aligned
- Typing indicator: 3 dots with staggered bounce animation
- Input field: contenteditable div with placeholder, gradient border
- Send button: circular, gradient background with send icon SVG

#### 4. Problem Section
**Heading:** "If This Sounds Familiar, You're Not Alone"

**3 Problem Cards (Grid layout):**

**Card 1: The Late-Night Drone**
- Icon: Moon SVG (purple stroke)
- Story: "2:47am. Can't sleep. Scrolling Amazon. 'This drone will definitely make me happy.' One click. £127 gone. Morning: email receipt. Drone? What drone? Scroll order history. Oh. That drone. Delivery Thursday. Thursday: it arrives. You open it once. It's in your cupboard now. £127 in a cupboard."

**Card 2: The Mid-week Blackout**
- Icon: Bell SVG (purple stroke)
- Story: "Friday night: new hobby idea. Mechanical keyboards. 'This is it. This is the thing.' Order £89 keycaps. £140 switches. £200 custom case. Monday morning: banking app notification. 'You spent £680 this weekend.' The keyboard parts are still in boxes. Unopened. You've moved on to fountain pens now."

**Card 3: The Friday Night Fever**
- Icon: Refresh SVG (purple stroke)
- Story: "'I'll buy everyone drinks, don't even worry about it.' £100, gone. 'Yes, don't worry, your money isn't good here.' Another £140. 'Ah, don't sweat it, I've got this drink' £30. You did this three times tonight. Next week, you repeat the same old habits. 'Just one more drink guys.' You end up being owed 13 drinks that are never paid back."

**Closing Line:** "Banks track spending *after* you overspend. Impulse Card blocks spending *before* you regret it."
- Emphasized text uses gradient background clip

**Card Styling:**
- Dark card background (#1A1F2E)
- Purple border with glow
- Hover: translateY(-8px), enhanced shadow, gradient top border
- Icons change color on hover (purple → amber)

#### 5. Solution Section ("How It Works")
**Heading:** "How It Works"
**Subheading:** "Not a budget tracker. A spending *blocker*."

**3 Steps (Grid layout):**

**Step 1:**
- Number badge: "1" (gradient background, floating above card)
- Icon: Settings gear SVG
- Title: "Set Your Rules Once"
- Description: "One-time setup: 'Block purchases over £40 unless I justify them. Groceries unlimited. Block ASOS and Amazon after 10pm.'"

**Step 2:**
- Number badge: "2"
- Icon: Shield with checkmark SVG
- Title: "Card Blocks Automatically"
- Description: "Try to buy that £89 keyboard at 11pm? Declined. You get a notification: 'Why do you need this right now?' Open the app to justify it."

**Step 3:**
- Number badge: "3"
- Icon: Lightning bolt SVG
- Title: "AI Evaluates in 10 Seconds"
- Description: "Type your reason. AI checks it against your goals and spending patterns. Result: approved immediately, delayed 7 days for reflection, or kindly declined with a reason why."

**Step Card Styling:**
- Same as problem cards
- Number badge floats at top center
- Hover effects: translateY, shadow, icon color change

#### 6. Pricing Section
**Heading:** "Simple, Honest Pricing"

**Pricing Card (Single, centered):**
- Large: "£15/month" (gradient text)
- Subtext: "1-month free trial. Cancel anytime."
- Section: "The Math That Matters"
- Value comparison (side by side):
  - Left: "£15/month" - "Subscription cost"
  - VS
  - Right (highlighted): "£143/month" - "Average impulse spending (from our research)"
- ROI Callout: "= £128/month saved" + "That's 9x ROI in your first month"

**Styling:**
- Gradient border (using border-box technique)
- Enhanced shadow with glow
- Hover: lift effect

#### 7. Differentiation Section
**Heading:** "Why Not Just Use Monzo or Revolut?"

**2 Columns (Grid):**

**Left - Traditional Banks:**
- Show damage after you've spent
- Require you to remember to check budget
- Rely on willpower and self-control
- Assume you'll remember to check budget
- Bullets with ✕ marks (gray)

**Right - Impulse Card (Highlighted):**
- Stops you before transaction completes
- Creates mandatory pause before purchase
- External accountability built into payment
- Built for real life when willpower fails
- Bullets with ✓ marks (green)
- Gradient background overlay
- Enhanced visual prominence

#### 8. Trust & Value Section
**Heading:** "The Numbers Don't Lie"

**Value Proposition (2 stats with arrow):**
- Stat 1: "£1,716" - "Average yearly impulse spending (research from 127 interviews)"
- Arrow: →
- Stat 2 (highlighted): "£600+" - "Saved per year by blocking just £50/month in impulse purchases"

**Cost Breakdown (Centered box):**
- "£15/month subscription pays for itself if you prevent just one £60 impulse purchase every 4 months."
- "For most people, that's 9x ROI in the first year." (gradient text)

**Trust Badges (4-column grid):**
1. Shield icon - "Bank-grade security"
2. Lock icon - "GDPR compliant"
3. X icon - "Your data never sold"
4. Trash icon - "Delete your data anytime"

#### 9. Target Audience Section ("Who This Is For")
**Heading:** "Who This Is For"

**Introduction:** "This is for you if you've ever:"

**List (in styled card):**
- Bought something expensive on impulse and regretted it the next morning
- Checked your budget, then forgot about it 5 minutes later when you saw something you wanted
- Felt the excitement fade before the package even arrived
- Tried "just being more careful" or "setting a budget" but it never sticks
- Spent money you didn't have because future-you would "figure it out"
- Deleted shopping apps in a moment of clarity, only to reinstall them the next day

**Emphasis:** "...this is for you."

**Secondary List:** "Especially helpful if you:"
- Have ADHD or struggle with executive function
- Shop late at night when you're tired or emotional
- Find yourself stuck in "hobby cycling" - buying everything for a new interest, then moving on
- Know budgeting apps don't work for you because you need external accountability

**Personal Story (Highlighted card with gradient border):**
- H3: "Why I'm Building This" (gradient text)
- "I'm Alfie Roberts, a software engineer. Last year, I lost £1,623 to impulse purchases..."
- Mentions: £89 keyboard used twice, three unread Kindle books, £140 productivity course never started
- Tried Monzo pots, budget apps, hiding cards - nothing worked because they rely on in-the-moment self-control
- "So I'm building the card I needed: One that stops me before I overspend, not just tells me about it after."
- ADHD disclosure, 127 interviews, universal pain point
- Credentials: "Software engineer at Deliveroo • alfie@impulsecard.co.uk" (link)

#### 10. Social Proof Section
**Heading:** "What People Are Saying"

**Traction Box (Centered):**
- "Research conducted with 127 people who struggle with impulse spending:"
- Bullet list with checkmarks:
  - Average monthly impulse spending: £143
  - 73% would use this as their primary card
  - 81% have tried Monzo/Revolut budgets and failed
  - 847 people now on the waitlist

**Testimonials (3-column grid, gradient borders):**

**Testimonial 1:**
- Quote: "I spent £400 on a camera last month that I've used once. If I'd had to justify it to an AI, I would have realised I was just bored and wanted dopamine. This would have saved me."
- Attribution: "— Research participant, interview #47"

**Testimonial 2:**
- Quote: "Monzo shows me I've overspent, then I feel bad, then I do it again next week. I don't need guilt, I need someone to physically stop me."
- Attribution: "— Research participant, interview #63"

**Testimonial 3:**
- Quote: "The justification part is brilliant. Sometimes I know I'm making an impulse purchase but I do it anyway. Having to write it down would make me actually stop and think."
- Attribution: "— Research participant, interview #91"

**Styling:**
- Large opening quote mark (gradient, low opacity)
- Gradient borders
- Hover lift effect

#### 11. Waitlist Section
**Background:** Dark with gradient overlay and pulsing glow (bottom-left)

**Heading:** "Join the Waitlist" (white with glow)
**Subheading:** "Get early access + 2 months free when we launch. Early access for first 1,000 signups (847 spots taken)"

**Form Fields (in dark card container):**

Required:
- Email address (type="email", required)
- Marketing consent checkbox (required)

Optional:
- First name (text input)
- Referral source (dropdown):
  - Options: Twitter, LinkedIn, Friend/Word of mouth, Reddit, Search engine, ADHD community/forum, Other
  - If "Other" selected, show text input: "Please specify:"

**Expandable Section:** "Want to help shape the product? (Optional)"
When expanded:
- Monthly impulse spending (dropdown): £0-50, £50-100, £100-200, £200+
- Checkbox: "I have ADHD (diagnosed or self-identified)"
- Checkbox: "I'm happy to do a 20-min interview (£10 Amazon voucher)"

**Submit Button:** "Get Early Access" (full-width, large gradient button)

**Privacy Note:** "📧 One email when we launch. No spam. Unsubscribe anytime. We'll never sell your data."

**Form Behavior:**
- On submit: POST to Formspree endpoint (https://formspree.io/f/mvgdazqk)
- Show loading state: "Submitting..."
- On success:
  - Hide form
  - Show thank you message (centered card)
  - Increment waitlist counter
  - Track conversion event in GA4
  - Scroll to center thank you message
- On error: Alert user, restore button

**Thank You Message:**
- Heading: "🎉 You're on the list!"
- "Thanks for joining! We'll email you with:"
  - Early access when we launch
  - Updates on development
  - Opportunities to shape the product
- "Check your inbox in the next few minutes for a confirmation email."
- If interview checkbox was checked: "We'll be in touch soon about scheduling a chat. You'll get a £10 Amazon voucher as thanks!"
- Signature: "— Alfie Roberts"

**Form Styling:**
- Dark card with gradient border glow
- Input fields: dark background, purple border
- Focus states: glowing purple border with animation
- Dropdown custom styling
- Checkboxes: larger touch targets (20px × 20px)
- Expandable section: arrow indicator, smooth expand/collapse

**Honeypot Field:**
- Hidden field "_gotcha" for spam protection
- Position: absolute, left: -5000px

#### 12. FAQ Section
**Heading:** "Questions You Might Have"

**10 FAQ Items (Accordion-style layout):**

1. **Won't this be embarrassing in public?**
   - Decline looks normal, discreet notification, 10-second approval, no explanation needed

2. **What if I just game the AI with the right words?**
   - Pattern tracking, human review trigger, but "gaming" still creates friction which is the point

3. **Can my partner/spouse see my spending?**
   - No, personal accountability only, optional sharing

4. **Is this like parental control, but for adults?**
   - No, you set rules and approve yourself, it's an accountability partner not a parent

5. **What if I need to make an emergency purchase?**
   - Instant override in app, permanent merchant approval, "urgent—review later" option

6. **What if I just use my other bank card instead?**
   - Requires commitment, designed for people desperate for external accountability (73% would make it primary)

7. **How much does it cost?**
   - £15/month, 1-month free trial, pays for itself 3x if saves £50/month

8. **When will this launch?**
   - Pilot Q1 2026 (100 users), Public Q2 2026, waitlist gets priority + 2 months free

9. **Is my data safe?**
   - Encrypted, never sold, GDPR compliant, one-click deletion

10. **What banks do you work with?**
    - Prepaid Mastercard/Visa via licensed partner, works everywhere, top up from any UK bank

**FAQ Styling:**
- Each item in dark card
- H3 questions with gradient text
- Body text in gray
- Hover: lift effect, border color change
- Spacing between items

#### 13. Footer
**Layout:** Dark background with gradient, thick gradient top border

**Content (2-column layout):**
- Left: Logo + tagline ("Stop overspending before it happens")
- Right: Email link (alfie@impulsecard.co.uk)

**Legal (centered, below):**
- "© 2025 Impulse Card. All rights reserved."
- Placeholder comments for Privacy Policy and Terms when ready

**Footer Styling:**
- Gradient top border (4px)
- Footer links with underline animation on hover
- Gray text for legal

---

## 5. JavaScript Functionality

### Core Features

#### 1. Smooth Scrolling
- All anchor links with href="#..." scroll smoothly
- Uses native `scrollIntoView({ behavior: 'smooth', block: 'start' })`

#### 2. Waitlist Counter
- Variable: `waitlistCount = 847`
- Updates text content of element with id="waitlist-count" (if it exists)
- Increments on successful form submission
- Note: Counter display removed from visible UI but functionality remains

#### 3. Form Handling
**Referral Source Toggle:**
- When "Other" selected in referral_source dropdown:
  - Show referral_other_container
  - Hide and clear when other option selected

**Form Submission:**
- Prevent default submission
- Track with GA4 if configured
- Show loading state: disable button, change text to "Submitting..."
- Fetch to Formspree with form data
- On success:
  - Hide form
  - Show thank you message
  - Conditionally show interview note if checkbox checked
  - Increment counter
  - Track conversion in GA4
  - Scroll to thank you message (centered, after 50ms delay)
- On error:
  - Alert user
  - Restore button state

**Email Validation Enhancement:**
- On blur: validate with regex, show red border if invalid
- On focus: blue border

#### 4. Analytics Tracking (if GA4 configured)
**Events:**
- Form submission attempt
- Form submission success (conversion)
- CTA button clicks (with button text as label)
- Scroll depth: 25%, 50%, 75%, 100%
- Page load time (performance timing API)
- Time on page (beforeunload event)

**Implementation:**
- All events check `if (typeof gtag !== 'undefined')`
- Use gtag() function with event name, category, label

#### 5. Interactive Phone Mockup Demo
**State Management:**
- `chatAnimationInProgress` flag prevents overlapping animations

**Event Handlers:**
- Justify button click: `startChatAnimation()`
- Chat back button click: `resetDemo()`
- Chat interface click: restart demo (if not in progress)

**Animation Sequence:**
1. Fade out notification card (opacity 0, translateY -20px, 300ms)
2. Hide notification, show chat interface
3. Wait 500ms
4. Show input container
5. Wait 800ms
6. Type user message character by character (50ms intervals)
   - "I feel like this would bring me a lot of joy"
7. Wait 400ms
8. Animate send button (scale 0.9 → 1.0)
9. Wait 200ms
10. Hide input, move message to chat area (user bubble)
11. Wait 1200ms
12. Show typing indicator (3 bouncing dots)
13. Wait 2000ms
14. Remove typing indicator
15. Add AI message bubble with decline styling
16. Type AI response character by character (25ms intervals)
    - Long message about decline with alternative suggestion
17. Auto-scroll chat to bottom throughout

**Helper Functions:**
- `createMessage(text, isUser, isTyping)`: Creates message DOM element
- `typeText(element, text, speed)`: Returns promise, types text character by character
- `runConversation()`: Async function with full demo sequence
- `resetDemo()`: Resets to initial state

**Typing Indicator:**
- 3 dots with staggered animation delays (0s, 0.2s, 0.4s)
- Bounce animation: translateY(0 → -8px → 0)

#### 6. Social Share Functions (Optional, not linked)
- `shareOnTwitter()`: Pre-filled tweet with URL
- `shareOnLinkedIn()`: LinkedIn share dialog

#### 7. Console Message
- Branded console.log messages (styled with %c)
- Impulse Card logo in blue
- Tagline and contact email

### Code Organization
- All code in single `js/main.js` file
- Sections clearly marked with comments
- No dependencies, pure vanilla JavaScript
- ES6 syntax (const, let, arrow functions, async/await, template literals)

---

## 6. File Structure

```
/
├── index.html              # Single-page application (all content)
├── css/
│   └── style.css          # All styling (2400+ lines)
├── js/
│   └── main.js            # All JavaScript functionality (463 lines)
├── CNAME                   # Custom domain: impulsecard.co.uk
├── README.md               # Project documentation
├── SETUP_GUIDE.md          # Deployment guide
├── CLAUDE.md               # Developer context for Claude Code
└── DEVELOPER_BRIEF.md      # This file
```

**Note:** No images directory currently - using inline SVGs and emoji icons

---

## 7. Deployment & Configuration

### GitHub Pages Setup
1. Repository must be public
2. Enable Pages in Settings → Pages
3. Source: main branch, root folder
4. Auto-deploys on push to main (1-2 minute build time)

### Custom Domain (Optional)
1. Create CNAME file with domain: `impulsecard.co.uk`
2. Configure DNS A records to GitHub Pages IPs:
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153
3. CNAME record for www: `username.github.io`
4. Enable in GitHub Pages settings
5. Enable "Enforce HTTPS" after 24 hours

### Formspree Configuration
1. Create account at formspree.io (free tier: 50 submissions/month)
2. Create new form, get form ID
3. Update form action in index.html: `https://formspree.io/f/mvgdazqk`
4. Configure email notifications in Formspree dashboard

### Google Analytics 4 (Optional)
1. Create GA4 property at analytics.google.com
2. Get Measurement ID (format: G-XXXXXXXXXX)
3. Uncomment GA script in index.html head (lines 28-36)
4. Replace placeholder ID with real ID (appears twice)

### Environment Variables
**None required** - all configuration is hardcoded or commented out

---

## 8. Content Requirements

### Copy Tone & Voice
- **Conversational:** Write like talking to a friend who gets it
- **Empathetic:** Acknowledge the struggle without judgment
- **Specific:** Use real examples with actual prices and scenarios
- **Honest:** Admit this requires commitment (not a magic solution)
- **Research-backed:** Reference 127 interviews throughout
- **Founder-led:** Personal story from Alfie creates authenticity

### Content Principles
1. **Show, don't tell:** Problem cards use storytelling, not bullet points
2. **Address objections:** FAQ section handles every "but what about..."
3. **Social proof:** Real quotes, real numbers, real research
4. **Value-driven:** Focus on ROI and emotional benefit, not features
5. **Inclusive messaging:** ADHD-friendly without being ADHD-exclusive

### SEO Requirements
**Title Tag:** "Impulse Card - Stop Overspending Before It Happens"

**Meta Description:** "AI-powered spending control that blocks impulse purchases before they happen. The prepaid card that makes you pause before you pay."

**Open Graph:**
- og:title: Same as title tag
- og:description: "AI-powered spending control that blocks impulse purchases before they happen. Join 2,000+ on the waitlist."
- og:image: https://impulsecard.co.uk/images/social-share.svg
- og:url: https://impulsecard.co.uk
- twitter:card: summary_large_image

**Heading Hierarchy:**
- Single H1: "Stop Overspending Before It Happens"
- H2s for each section heading
- H3s for card titles, steps, FAQ questions

---

## 9. Interactive Elements

### Hover States
**Buttons:**
- Scale: 1.02
- Lift: translateY(-3px or -4px)
- Enhanced shadow/glow
- Gradient overlay fade-in

**Cards:**
- Lift: translateY(-8px)
- Enhanced shadow
- Border color change (gray → purple)
- Gradient top bar animation (scaleX 0 → 1)
- Icon color change (purple → amber)

**Links:**
- Underline animation (width 0 → 100%)
- Color change
- Smooth transition

### Focus States
**All Interactive Elements:**
- 3px solid purple outline
- 3px offset
- Additional shadow for emphasis
- Only show for keyboard navigation (focus-visible)

### Active States
**Send Button (Chat):**
- Scale: 0.95 on click

**Form Submit:**
- Disabled + loading text during submission

### Loading States
**Form Submission:**
- Button text: "Get Early Access" → "Submitting..."
- Button disabled
- Restore on error

**Chat Demo:**
- Typing indicator with bouncing dots
- Character-by-character text appearance
- Smooth transitions between states

---

## 10. Responsive Design

### Breakpoints
- **Desktop:** 769px and above (default styles)
- **Tablet:** 768px and below
- **Mobile:** 480px and below

### Mobile Adaptations (768px and below)
- Typography scales down (see Typography section)
- Section padding: 72px vertical
- Hero padding: 100px top, 80px bottom
- Single column layouts:
  - Problem cards grid → 1 column
  - How it works grid → 1 column
  - Comparison grid → 1 column (remove scale transform)
  - Testimonials grid → 1 column
  - Trust badges grid → 1 column (later)
- Hide "How It Works" nav link
- Nav gaps reduced: 32px → 16px
- Phone mockup: 300px max-width, 540px screen height
- Footer: column layout, centered text
- Value arrow hidden, stats stack vertically
- Form padding: 40px 32px

### Mobile Adaptations (480px and below)
- Further typography reduction
- Container padding: 0 16px
- CTA button: smaller text and padding
- Form padding: 32px 24px
- Card padding: 32px
- Phone mockup: 240px width, 150px height (for card mockup if added)

### Touch Targets
- All buttons minimum 44×44px (iOS/Android guideline)
- Form checkboxes: 20×20px
- Adequate spacing between tap targets

### Mobile Testing
- Test on actual iOS device (Safari)
- Test on actual Android device (Chrome)
- Test landscape and portrait
- Test form submission on mobile network

---

## 11. Performance Optimization

### Current Optimizations
- **No frameworks:** Vanilla JS only
- **No build process:** Direct HTML/CSS/JS
- **Font preloading:** Preconnect to Google Fonts
- **Minimal JavaScript:** <500 lines, no libraries
- **Inline SVGs:** No additional HTTP requests for icons
- **CSS organization:** No unused styles
- **Smooth scrolling:** Native browser feature

### Asset Optimization (if images added)
- Compress images (TinyPNG, Squoosh)
- Use WebP with fallbacks
- Implement lazy loading for below-fold images
- Add width/height attributes to prevent CLS

### Future Enhancements (Optional)
- Minify CSS and JS (when ready for production)
- Implement critical CSS inline
- Add service worker for offline support
- Use CSS containment for performance
- Defer non-critical JavaScript

### Performance Budget
- Total page weight: <500KB (excluding external fonts)
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1
- Time to Interactive: <3.5s

---

## 12. Browser & Device Testing

### Required Testing
**Desktop Browsers:**
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

**Mobile Devices:**
- iPhone (iOS 14+, Safari)
- Android phone (Android 10+, Chrome)
- iPad (Safari)

**Testing Checklist:**
- [ ] Page loads correctly
- [ ] All styles render properly
- [ ] Animations perform smoothly (60fps)
- [ ] Form submission works
- [ ] Phone mockup demo plays
- [ ] Smooth scrolling works
- [ ] All links navigate correctly
- [ ] Responsive breakpoints trigger correctly
- [ ] Touch targets adequate size
- [ ] No console errors

### Tools
- Chrome DevTools (Lighthouse, Performance, Mobile emulation)
- Firefox DevTools
- Safari Web Inspector
- Real devices (iOS, Android)
- PageSpeed Insights: https://pagespeed.web.dev/
- Mobile-Friendly Test: https://search.google.com/test/mobile-friendly
- WAVE (Accessibility): https://wave.webaim.org/

---

## 13. Accessibility Testing

### WCAG Compliance Target
- Level AA minimum
- Level AAA where feasible (especially contrast)

### Testing Checklist
- [ ] Keyboard navigation (tab through all elements)
- [ ] Screen reader testing (VoiceOver, NVDA)
- [ ] Color contrast ratios meet WCAG AA
- [ ] Heading hierarchy is logical
- [ ] Form labels properly associated
- [ ] Focus indicators visible
- [ ] Alt text for images (when added)
- [ ] No information conveyed by color alone
- [ ] Animations respect prefers-reduced-motion
- [ ] Text resizable to 200% without breaking layout

### Tools
- WAVE Web Accessibility Tool
- axe DevTools
- Lighthouse Accessibility Audit
- Color contrast checker
- Screen reader (VoiceOver on Mac, NVDA on Windows)

---

## 14. Analytics & Tracking

### Events to Track (GA4)

**Form Events:**
- Event: `submit` | Category: Form | Label: Waitlist Signup
- Event: `conversion` | Category: Form | Label: Waitlist Signup Success

**Engagement Events:**
- Event: `click` | Category: CTA | Label: [button text]
- Event: `scroll` | Category: Engagement | Label: 25% scroll
- Event: `scroll` | Category: Engagement | Label: 50% scroll
- Event: `scroll` | Category: Engagement | Label: 75% scroll
- Event: `scroll` | Category: Engagement | Label: 100% scroll
- Event: `time_on_page` | Category: Engagement | Value: [seconds]

**Performance Events:**
- Event: `timing_complete` | Name: load | Category: Page Performance | Value: [milliseconds]

### Custom Dimensions (Optional)
- User ADHD status (from form)
- Interview volunteer status
- Spending bracket
- Referral source

### Conversion Goals
1. Waitlist form submission (primary)
2. CTA button clicks
3. Scroll to 75% (engagement)
4. Time on page >2 minutes (high engagement)

---

## 15. Post-Launch Optimization

### A/B Testing Ideas
1. **Headline variations:**
   - Current: "Stop Overspending Before It Happens"
   - Alt 1: "The Card That Says No When You Can't"
   - Alt 2: "Block Impulse Purchases Before You Regret Them"

2. **CTA button text:**
   - Current: "Join 847 People on the Waitlist"
   - Alt 1: "Get Early Access + 2 Months Free"
   - Alt 2: "Save Money Starting Today"

3. **Hero subheadline length:**
   - Test longer vs. shorter versions

4. **Pricing position:**
   - Test pricing section earlier vs. current position

5. **Form fields:**
   - Test minimal (email only) vs. current fields
   - Test inline form vs. current modal-style

### Metrics to Monitor Weekly
- Total signups
- Conversion rate
- Bounce rate
- Time on page
- Traffic sources
- Mobile vs. desktop ratio
- Scroll depth distribution

### Iteration Strategy
- Week 1: Monitor, don't change
- Week 2: Identify drop-off points
- Week 3: Implement small changes
- Week 4: Compare results

---

## 16. Legal & Compliance

### GDPR Compliance
**Required Elements (Already Implemented):**
- [ ] Marketing consent checkbox (required, explicit opt-in)
- [ ] Clear privacy promises ("We'll never sell your data")
- [ ] Unsubscribe information
- [ ] Data usage disclosure

**To Add Later:**
- [ ] Privacy Policy page
- [ ] Terms of Service page
- [ ] Cookie consent banner (if using cookies beyond GA)
- [ ] Data deletion process documentation

### Form Data Handling
- Formspree collects: email, name, referral source, spending amount, ADHD status, interview consent
- Stored in Formspree dashboard (GDPR compliant)
- No data stored on static site
- Honeypot field (_gotcha) for spam protection

### Cookie Policy
- Google Analytics uses cookies (if enabled)
- Must disclose in privacy policy
- May need cookie consent banner (EU visitors)

---

## 17. Content Management

### Updating Key Numbers
**Waitlist Count:** `js/main.js` line 20
```javascript
let waitlistCount = 847; // Update this number
```

**Form:** Update in multiple places:
- CTA button: index.html line 104
- Waitlist section: index.html line 400
- (Counter display removed from visible UI but variable still used)

**Launch Dates:** index.html FAQ section
- "Pilot program in Q1 2026"
- "Public launch Q2 2026"

**Pricing:** index.html pricing section
- "£15/month" appears multiple times

**Contact Email:** Search and replace
- `alfie@impulsecard.co.uk` appears in multiple locations

### Adding Testimonials
- Add to testimonials grid (index.html line 377)
- Follow existing structure (quote + attribution)
- Keep under 100 words per testimonial
- Use interview number format for attribution

### FAQ Updates
- Each FAQ item is a div.faq-item
- H3 for question (gets gradient styling)
- P for answer
- Add new items at end of .faq-list

---

## 18. Known Issues & Limitations

### Current Limitations
1. **No backend:** Relies on Formspree for form handling
2. **Static counter:** Waitlist count must be manually updated
3. **No images:** Using emojis and inline SVGs only
4. **No A/B testing:** Would require external service
5. **No email automation:** Manual follow-up required
6. **GA commented out:** Requires manual setup

### Future Enhancements
1. Build simple backend for:
   - Live waitlist counter
   - Email automation
   - Interview scheduling
2. Add proper social share image (1200×630px)
3. Add hero image or mockup
4. Implement lazy loading for images
5. Add cookie consent banner
6. Create privacy policy and terms pages
7. Add social media links when accounts created
8. Implement proper error handling for offline scenarios

---

## 19. Development Workflow

### Local Development
```bash
# Serve with Python
python -m http.server 8000

# Or Node.js
npx http-server

# Visit http://localhost:8000
```

### Making Changes
1. Edit files directly (no build step)
2. Refresh browser to see changes
3. Test thoroughly
4. Commit and push to GitHub
5. Wait 1-2 minutes for GitHub Pages rebuild

### Git Workflow
```bash
git add .
git commit -m "Description of changes"
git push origin main
```

### Testing Before Deploy
1. Test locally first
2. Verify all links work
3. Test form submission (Formspree test mode)
4. Check responsive design
5. Run Lighthouse audit
6. Test in multiple browsers

---

## 20. Success Criteria

### Launch Readiness
- [ ] All content proofread
- [ ] Formspree configured and tested
- [ ] GA4 configured (optional)
- [ ] Mobile responsive on real devices
- [ ] Lighthouse score 90+ all categories
- [ ] Page load <2 seconds
- [ ] Form submissions working
- [ ] All links functional
- [ ] No console errors
- [ ] Social share preview looks good

### Post-Launch Metrics (First Month)
- [ ] 500+ waitlist signups
- [ ] 20%+ conversion rate
- [ ] <50% bounce rate
- [ ] 2+ min average time on page
- [ ] 30%+ interview volunteer rate
- [ ] Positive feedback from early signups

### Long-Term Goals
- [ ] 2,000+ waitlist signups
- [ ] 30+ scheduled interviews
- [ ] Validated problem/solution fit
- [ ] Clear path to MVP development
- [ ] Understanding of target segment distribution

---

## Appendix A: Design Assets Needed

### Images to Create (Optional Future Enhancement)
1. **Social Share Image:** 1200×630px
   - App screenshot or mockup
   - Branding and tagline
   - Use for og:image

2. **Hero Mockup:** 1200×800px
   - iPhone with app interface
   - Show notification or chat screen
   - Alternative to current CSS-only mockup

3. **Logo:** SVG format
   - Scalable vector
   - Currently using emoji (💳)

4. **Favicon:** 32×32px + 16×16px
   - Currently using emoji via data URI

### Brand Assets (Reference)
- Color palette defined in CSS variables
- Typography: Inter font family
- Gradient combinations specified
- Icon style: Heroicons (line style, 1.5 stroke-width)

---

## Appendix B: Third-Party Services

### Required (Free Tier)
1. **Formspree**
   - Purpose: Form handling
   - Plan: Free (50 submissions/month)
   - Setup: 5 minutes
   - Alternatives: Netlify Forms, FormKeep

2. **Google Fonts**
   - Purpose: Inter font family
   - Plan: Free
   - Fallback: System fonts

### Optional
1. **Google Analytics 4**
   - Purpose: Traffic and conversion tracking
   - Plan: Free
   - Setup: 10 minutes
   - Alternative: Plausible, Fathom, Simple Analytics

2. **GitHub Pages**
   - Purpose: Hosting
   - Plan: Free (for public repos)
   - Alternative: Netlify, Vercel, Cloudflare Pages

### Future Considerations
1. **Mailchimp/ConvertKit:** Email automation
2. **Calendly:** Interview scheduling
3. **Hotjar/FullStory:** User behavior analysis
4. **Optimizely/VWO:** A/B testing

---

## Appendix C: SVG Icons Used

All icons from Heroicons (MIT License), stroke style, 1.5 stroke-width:

1. **Moon** (late-night theme) - 24×24
2. **Bell** (notification theme) - 24×24
3. **Refresh** (cycle theme) - 24×24
4. **Settings/Gear** (configuration) - 64×64
5. **Shield Check** (protection) - 64×64
6. **Lightning Bolt** (speed) - 64×64
7. **Shield** (security badge) - 32×32
8. **Lock** (privacy badge) - 32×32
9. **X Circle** (no selling badge) - 32×32
10. **Trash** (deletion badge) - 32×32
11. **Send Arrow** (chat send button) - 20×20

Icons applied with `stroke="currentColor"` for easy color theming.

---

## Appendix D: Form Fields Reference

### Formspree Submission Structure
```json
{
  "email": "user@example.com",
  "name": "John Smith",
  "referral_source": "reddit",
  "referral_other": "",
  "spending": "100-200",
  "adhd_status": "yes",
  "interview_volunteer": "yes",
  "marketing_consent": "yes",
  "_gotcha": ""
}
```

### Field Validation
- Email: HTML5 email validation + regex on blur
- Marketing consent: Required (checkbox must be checked)
- All other fields: Optional
- Honeypot (_gotcha): Must be empty (spam filter)

---

## Summary

This brief provides complete specifications to build a production-ready landing page for Impulse Card from scratch. The implementation should result in a fast, accessible, conversion-optimized page that:

1. Loads in <2 seconds
2. Scores 90+ on Lighthouse
3. Converts 20-30% of visitors to signups
4. Works flawlessly on mobile and desktop
5. Provides engaging interactive demo
6. Handles form submissions reliably
7. Tracks key metrics (if GA configured)
8. Maintains ADHD-friendly design principles

**Total Development Estimate:** 20-30 hours for experienced developer

**Key Success Factor:** The interactive phone mockup demo - this is the "wow" factor that makes the product tangible and drives conversions. Ensure this works smoothly across all devices.

**Primary Metric:** Waitlist signups. Everything else is secondary.
