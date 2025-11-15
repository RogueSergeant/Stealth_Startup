/* ========================================
   IMPULSE CARD - MAIN JAVASCRIPT
   ======================================== */

// Global state
let chatAnimationInProgress = false;

/* ========================================
   CONSOLE MESSAGE
   ======================================== */

console.log(
    '%c💳 Impulse Card',
    'color: #C084FC; font-size: 20px; font-weight: bold;'
);
console.log(
    '%cBuilt by Alfie Roberts | alfie@impulsecard.co.uk',
    'color: #9CA3AF; font-size: 12px;'
);
console.log(
    '%cWant to help build this? Get in touch.',
    'color: #FBBF24; font-size: 12px;'
);

/* ========================================
   ANALYTICS HELPER
   ======================================== */

function trackEvent(eventName, props = {}) {
    // Plausible Analytics
    if (typeof plausible !== 'undefined') {
        plausible(eventName, { props: props });
    }

    // Simple Analytics (alternative)
    if (typeof sa_event !== 'undefined') {
        sa_event(eventName);
    }

    // Log to console in development
    console.log('Analytics Event:', eventName, props);
}

/* ========================================
   SMOOTH SCROLLING
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Don't prevent default for empty anchors
            if (href === '#') return;

            e.preventDefault();

            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Track navigation clicks
                trackEvent('nav_clicked', { destination: targetId });
            }
        });
    });

    // Track CTA button clicks
    document.querySelectorAll('.cta-button, .btn-primary').forEach(button => {
        button.addEventListener('click', () => {
            const label = button.getAttribute('data-label') || button.textContent.trim();
            trackEvent('cta_clicked', { button_text: label });
        });
    });
});

/* ========================================
   INTERVIEW BUTTON - AUTO EXPAND & HIGHLIGHT
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
    const interviewBtn = document.getElementById('interviewBtn');

    if (interviewBtn) {
        interviewBtn.addEventListener('click', function() {
            // Let the default scroll behavior happen first
            setTimeout(() => {
                const expandToggle = document.getElementById('expandToggle');
                const expandContent = document.getElementById('expandContent');
                const interviewCheckboxLabel = document.querySelector('label.form-checkbox:has(#interviewVolunteer)');

                // Expand the optional section if it's not already expanded
                if (expandToggle && expandContent && expandContent.style.display !== 'block') {
                    expandContent.style.display = 'block';
                    expandToggle.classList.add('active');
                }

                // Add glow effect to the interview checkbox
                if (interviewCheckboxLabel) {
                    interviewCheckboxLabel.classList.add('glow-checkbox');

                    // Scroll the checkbox into view smoothly
                    setTimeout(() => {
                        interviewCheckboxLabel.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center'
                        });
                    }, 300);

                    // Remove the glow class after animation completes (2s * 3 iterations = 6s)
                    setTimeout(() => {
                        interviewCheckboxLabel.classList.remove('glow-checkbox');
                    }, 6000);
                }

                // Track this interaction
                trackEvent('interview_button_clicked');
            }, 800);
        });
    }
});

/* ========================================
   SCROLL DEPTH TRACKING
   ======================================== */

let scrollDepthTracked = {
    '25': false,
    '50': false,
    '75': false,
    '100': false
};

function trackScrollDepth() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

    // Track milestone depths
    ['25', '50', '75', '100'].forEach(depth => {
        if (scrollPercent >= parseInt(depth) && !scrollDepthTracked[depth]) {
            trackEvent(`scroll_${depth}`);
            scrollDepthTracked[depth] = true;
        }
    });
}

// Debounce scroll events
let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(trackScrollDepth, 100);
});

/* ========================================
   FORM HANDLING
   ======================================== */

const waitlistForm = document.getElementById('waitlistForm');
const referralSourceSelect = document.getElementById('referral_source');
const referralOtherContainer = document.getElementById('referral_other_container');
const expandToggle = document.getElementById('expandToggle');
const expandContent = document.getElementById('expandContent');
const emailInput = document.getElementById('email');
const submitBtn = document.getElementById('submitBtn');
const formContainer = document.getElementById('waitlistFormContainer');
const thankYouMessage = document.getElementById('thankYouMessage');
const interviewVolunteer = document.getElementById('interviewVolunteer');
const interviewNote = document.getElementById('interviewNote');

// Referral source toggle
if (referralSourceSelect) {
    referralSourceSelect.addEventListener('change', (e) => {
        if (e.target.value === 'other') {
            referralOtherContainer.style.display = 'block';
        } else {
            referralOtherContainer.style.display = 'none';
            document.getElementById('referral_other').value = '';
        }
    });
}

// Expandable section toggle
if (expandToggle) {
    expandToggle.addEventListener('click', () => {
        const isExpanded = expandContent.style.display === 'block';

        if (isExpanded) {
            expandContent.style.display = 'none';
            expandToggle.classList.remove('active');
        } else {
            expandContent.style.display = 'block';
            expandToggle.classList.add('active');
        }
    });
}

// Email validation
if (emailInput) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    emailInput.addEventListener('blur', () => {
        if (emailInput.value && !emailRegex.test(emailInput.value)) {
            emailInput.classList.add('error');
        } else {
            emailInput.classList.remove('error');
        }
    });

    emailInput.addEventListener('focus', () => {
        emailInput.classList.remove('error');
    });

    // Track when form is started
    emailInput.addEventListener('focus', () => {
        trackEvent('signup_started');
    }, { once: true });
}

// Track interview volunteer checkbox
if (interviewVolunteer) {
    interviewVolunteer.addEventListener('change', (e) => {
        if (e.target.checked) {
            trackEvent('interview_volunteered');
        }
    });
}

// Form submission
if (waitlistForm) {
    waitlistForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Validate honeypot field
        const honeypot = waitlistForm.querySelector('[name="_gotcha"]');
        if (honeypot && honeypot.value) {
            console.log('Spam detected, submission blocked');
            return;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            alert('Please enter a valid email address');
            emailInput.focus();
            return;
        }

        // Show loading state
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting...';

        try {
            // Submit to Formspree
            const formData = new FormData(waitlistForm);
            const response = await fetch(waitlistForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Track successful signup
                trackEvent('signup_completed');

                // Show thank you message
                formContainer.style.display = 'none';
                thankYouMessage.style.display = 'block';

                // Show interview note if volunteered
                const interviewCheckbox = document.querySelector('[name="interview_volunteer"]');
                if (interviewCheckbox && interviewCheckbox.checked) {
                    interviewNote.style.display = 'block';
                }

                // Scroll to thank you message
                setTimeout(() => {
                    thankYouMessage.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                }, 50);

            } else {
                throw new Error('Form submission failed');
            }

        } catch (error) {
            console.error('Form submission error:', error);
            alert('Sorry, there was a problem submitting the form. Please try again or email alfie@impulsecard.co.uk directly.');

            // Restore button state
            submitBtn.disabled = false;
            submitBtn.textContent = 'Join Founding Members';
        }
    });
}

/* ========================================
   INTERACTIVE PHONE MOCKUP DEMO
   ======================================== */

const justifyBtn = document.getElementById('justifyBtn');
const chatBack = document.getElementById('chatBack');
const notificationCard = document.getElementById('notificationCard');
const chatInterface = document.getElementById('chatInterface');
const chatMessages = document.getElementById('chatMessages');
const chatInputContainer = document.getElementById('chatInputContainer');
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');

// User message text
const userMessage = "I feel like this would bring me a lot of joy";

// AI response text
const aiResponse = "Declined - you've asked me to help you focus on purchases that are actually going to bring something to your life. Instead of buying this, how about you text a friend to go for a walk with you?";

// Helper function to create message element
function createMessage(text, isUser, isTyping = false, isDeclined = false) {
    const messageDiv = document.createElement('div');

    if (isTyping) {
        messageDiv.className = 'typing-indicator';
        messageDiv.innerHTML = `
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        `;
    } else {
        messageDiv.className = `chat-message ${isUser ? 'user' : 'ai'}${isDeclined ? ' declined' : ''}`;
        messageDiv.textContent = text;
    }

    return messageDiv;
}

// Helper function to type text character by character
function typeText(element, text, speed = 50) {
    return new Promise((resolve) => {
        let index = 0;
        element.textContent = '';

        const interval = setInterval(() => {
            if (index < text.length) {
                element.textContent += text[index];
                index++;

                // Auto-scroll to bottom
                chatMessages.scrollTop = chatMessages.scrollHeight;
            } else {
                clearInterval(interval);
                resolve();
            }
        }, speed);
    });
}

// Main conversation animation
async function runConversation() {
    if (chatAnimationInProgress) return;
    chatAnimationInProgress = true;

    try {
        // Clear any previous messages
        chatMessages.innerHTML = '';
        chatInput.textContent = '';

        // Show input container
        chatInputContainer.style.display = 'flex';

        // Wait a moment
        await new Promise(resolve => setTimeout(resolve, 800));

        // Type user message in input
        await typeText(chatInput, userMessage, 50);

        // Wait
        await new Promise(resolve => setTimeout(resolve, 400));

        // Animate send button
        chatSend.style.transform = 'scale(0.9)';
        await new Promise(resolve => setTimeout(resolve, 100));
        chatSend.style.transform = 'scale(1)';

        await new Promise(resolve => setTimeout(resolve, 200));

        // Move message to chat area
        chatInputContainer.style.display = 'none';
        const userMsgElement = createMessage(userMessage, true);
        chatMessages.appendChild(userMsgElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Wait
        await new Promise(resolve => setTimeout(resolve, 1200));

        // Show typing indicator
        const typingIndicator = createMessage('', false, true);
        chatMessages.appendChild(typingIndicator);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Wait
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Remove typing indicator
        chatMessages.removeChild(typingIndicator);

        // Add AI message bubble (empty first)
        const aiMsgElement = createMessage('', false, false, true);
        chatMessages.appendChild(aiMsgElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Type AI response
        await typeText(aiMsgElement, aiResponse, 25);

        chatAnimationInProgress = false;

    } catch (error) {
        console.error('Chat animation error:', error);
        chatAnimationInProgress = false;
    }
}

// Reset demo to initial state
function resetDemo() {
    chatAnimationInProgress = false;
    notificationCard.style.opacity = '1';
    notificationCard.style.transform = 'translateY(0)';
    notificationCard.style.display = 'flex';
    chatInterface.style.display = 'none';
    chatMessages.innerHTML = '';
    chatInput.textContent = '';
    chatInputContainer.style.display = 'none';
}

// Start chat animation
async function startChatAnimation() {
    if (chatAnimationInProgress) return;

    trackEvent('demo_started');

    // Fade out notification card
    notificationCard.style.transition = 'all 0.3s ease';
    notificationCard.style.opacity = '0';
    notificationCard.style.transform = 'translateY(-20px)';

    await new Promise(resolve => setTimeout(resolve, 300));

    // Hide notification, show chat
    notificationCard.style.display = 'none';
    chatInterface.style.display = 'flex';

    await new Promise(resolve => setTimeout(resolve, 500));

    // Run conversation
    await runConversation();

    trackEvent('demo_completed');
}

// Event listeners for phone demo
if (justifyBtn) {
    justifyBtn.addEventListener('click', startChatAnimation);
}

if (chatBack) {
    chatBack.addEventListener('click', resetDemo);
}

// Allow clicking anywhere in chat to restart
if (chatInterface) {
    chatInterface.addEventListener('click', (e) => {
        // Don't restart if clicking back button
        if (e.target.closest('.chat-back')) return;

        // Only restart if animation is complete
        if (!chatAnimationInProgress) {
            resetDemo();
        }
    });
}

/* ========================================
   PERFORMANCE MONITORING
   ======================================== */

window.addEventListener('load', () => {
    // Track page load time
    if (window.performance && window.performance.timing) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;

        trackEvent('page_load', { duration: pageLoadTime });

        console.log(`Page load time: ${pageLoadTime}ms`);
    }

    // Track initial page view
    trackEvent('page_view');
});

/* ========================================
   ERROR TRACKING
   ======================================== */

window.addEventListener('error', (event) => {
    console.error('JavaScript error:', event.error);

    // Track error in analytics (optional)
    trackEvent('js_error', {
        message: event.message,
        filename: event.filename,
        line: event.lineno
    });
});

/* ========================================
   DETECT ANIMATION SUPPORT (Future Enhancement)
   ======================================== */

function detectAnimationSupport() {
    // Check for basic animation support
    const hasRAF = typeof window.requestAnimationFrame !== 'undefined';

    // Check for CSS animation support
    const testElement = document.createElement('div');
    const hasAnimations = 'animation' in testElement.style ||
                         'webkitAnimation' in testElement.style;

    return hasRAF && hasAnimations;
}

// Log support status
console.log('Animation support:', detectAnimationSupport());

/* ========================================
   REDUCED MOTION PREFERENCE
   ======================================== */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    console.log('User prefers reduced motion - animations disabled via CSS');
}

// Listen for changes
prefersReducedMotion.addEventListener('change', (e) => {
    if (e.matches) {
        console.log('Reduced motion preference enabled');
    } else {
        console.log('Reduced motion preference disabled');
    }
});

/* ========================================
   UTILITY: DEBOUNCE FUNCTION
   ======================================== */

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/* ========================================
   DEVELOPMENT HELPERS
   ======================================== */

if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('%cDevelopment mode active', 'color: #10B981; font-weight: bold;');

    // Expose useful functions globally for debugging
    window.impulseCard = {
        resetDemo,
        startChatAnimation,
        trackEvent
    };
}
