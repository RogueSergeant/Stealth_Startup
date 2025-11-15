// Impulse Card Landing Page - Main JavaScript

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== WAITLIST COUNTER =====
// Update this number regularly based on actual signups
// You can also fetch this from a backend API or Google Sheets
let waitlistCount = 847;

function updateWaitlistCount() {
    const countElement = document.getElementById('waitlist-count');
    if (countElement) {
        countElement.textContent = waitlistCount;
    }
}

// Initialize counter on page load
updateWaitlistCount();

// Optional: Fetch live count from an API
// Uncomment and configure when you have a backend
/*
async function fetchWaitlistCount() {
    try {
        const response = await fetch('YOUR_API_ENDPOINT');
        const data = await response.json();
        waitlistCount = data.count;
        updateWaitlistCount();
    } catch (error) {
        console.error('Error fetching waitlist count:', error);
    }
}

// Fetch count on load
fetchWaitlistCount();
*/

// ===== FORM HANDLING =====
const form = document.getElementById('waitlist-form');
const thankYouMessage = document.getElementById('thank-you');
const formContainer = document.getElementById('form-container');

// ===== REFERRAL SOURCE "OTHER" FIELD TOGGLE =====
const referralSourceSelect = document.getElementById('referral_source');
const referralOtherContainer = document.getElementById('referral_other_container');

if (referralSourceSelect && referralOtherContainer) {
    referralSourceSelect.addEventListener('change', function() {
        if (this.value === 'other') {
            referralOtherContainer.style.display = 'block';
        } else {
            referralOtherContainer.style.display = 'none';
            // Clear the "other" text field when hidden
            const referralOtherInput = document.getElementById('referral_other');
            if (referralOtherInput) {
                referralOtherInput.value = '';
            }
        }
    });
}

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Track form submission with Google Analytics (if configured)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'submit', {
                'event_category': 'Form',
                'event_label': 'Waitlist Signup'
            });
        }

        // Get submit button and show loading state
        const submitButton = form.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = 'Submitting...';

        // Check if interview checkbox is checked
        const interviewCheckbox = form.querySelector('input[name="interview_volunteer"]');

        const formData = new FormData(form);

        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                // Hide form, show thank you message
                form.style.display = 'none';
                thankYouMessage.style.display = 'block';

                // Show interview note if checkbox was checked
                if (interviewCheckbox && interviewCheckbox.checked) {
                    const interviewNote = thankYouMessage.querySelector('.interview-note');
                    if (interviewNote) {
                        interviewNote.style.display = 'block';
                    }
                }

                // Increment waitlist counter
                waitlistCount++;
                updateWaitlistCount();

                // Track successful submission
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'conversion', {
                        'event_category': 'Form',
                        'event_label': 'Waitlist Signup Success'
                    });
                }

                // Scroll to form container centered in viewport after brief delay to let layout settle
                setTimeout(() => {
                    if (formContainer) {
                        formContainer.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center'
                        });
                    }
                }, 50);
            } else {
                throw new Error('Form submission failed');
            }
        }).catch(error => {
            console.error('Error:', error);
            alert('Oops! There was a problem submitting your form. Please try again.');

            // Reset button state on error
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        });
    });
}

// ===== TRACK CTA CLICKS =====
document.querySelectorAll('.cta-button, .cta-button-large').forEach(button => {
    button.addEventListener('click', function() {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'click', {
                'event_category': 'CTA',
                'event_label': this.textContent.trim()
            });
        }
    });
});

// ===== SCROLL DEPTH TRACKING =====
// Track how far users scroll down the page
let scrollTracked = {
    25: false,
    50: false,
    75: false,
    100: false
};

window.addEventListener('scroll', function() {
    const scrollPercent = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100;

    Object.keys(scrollTracked).forEach(threshold => {
        if (scrollPercent >= threshold && !scrollTracked[threshold]) {
            scrollTracked[threshold] = true;
            if (typeof gtag !== 'undefined') {
                gtag('event', 'scroll', {
                    'event_category': 'Engagement',
                    'event_label': `${threshold}% scroll`
                });
            }
        }
    });
});

// ===== FAQ ACCORDION (OPTIONAL ENHANCEMENT) =====
// Uncomment this if you want to make FAQ items collapsible
/*
document.querySelectorAll('.faq-item h3').forEach(question => {
    question.style.cursor = 'pointer';
    question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        if (answer.style.display === 'none') {
            answer.style.display = 'block';
        } else {
            answer.style.display = 'none';
        }
    });
});
*/

// ===== PAGE LOAD TIME TRACKING =====
window.addEventListener('load', function() {
    // Track page load time
    if (typeof gtag !== 'undefined' && window.performance) {
        const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
        gtag('event', 'timing_complete', {
            'name': 'load',
            'value': loadTime,
            'event_category': 'Page Performance'
        });
    }
});

// ===== FORM VALIDATION ENHANCEMENT =====
// Add real-time validation feedback
const emailInput = document.getElementById('email');
if (emailInput) {
    emailInput.addEventListener('blur', function() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (this.value && !emailRegex.test(this.value)) {
            this.style.borderColor = '#DD2C00';
        } else {
            this.style.borderColor = '#E0E0E0';
        }
    });

    emailInput.addEventListener('focus', function() {
        this.style.borderColor = '#0066FF';
    });
}

// ===== SOCIAL SHARE FUNCTIONS (OPTIONAL) =====
// Add these if you want to add share buttons later
function shareOnTwitter() {
    const text = "I just joined the waitlist for Impulse Card - an AI-powered card that blocks impulse purchases before they happen. Check it out!";
    const url = window.location.href;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
}

function shareOnLinkedIn() {
    const url = window.location.href;
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
}

// ===== TRACK TIME ON PAGE =====
let startTime = new Date();
let timeOnPageTracked = false;

window.addEventListener('beforeunload', function() {
    if (!timeOnPageTracked && typeof gtag !== 'undefined') {
        const timeOnPage = Math.round((new Date() - startTime) / 1000);
        gtag('event', 'time_on_page', {
            'event_category': 'Engagement',
            'event_label': 'Time on page',
            'value': timeOnPage
        });
        timeOnPageTracked = true;
    }
});

// ===== LAZY LOAD IMAGES (IF NEEDED) =====
// Uncomment when you add images
/*
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img.lazy').forEach(img => {
        imageObserver.observe(img);
    });
}
*/

// ===== CONSOLE MESSAGE =====
console.log('%cImpulse Card', 'font-size: 24px; font-weight: bold; color: #0066CC;');
console.log('%cStop overspending before it happens 💙', 'font-size: 14px; color: #666;');
console.log('Interested in the code? Email: alfie@impulsecard.co.uk');

// ===== INTERACTIVE CHAT DEMO =====
const justifyButton = document.getElementById('justify-button');
const notificationCard = document.querySelector('.notification-card');
const chatInterface = document.getElementById('chat-interface');
const chatMessages = document.getElementById('chat-messages');
const chatInputContainer = document.getElementById('chat-input-container');
const chatInput = document.getElementById('chat-input-text');
const chatSendButton = document.getElementById('chat-send-button');
const chatBackButton = document.querySelector('.chat-back-button');

let chatAnimationInProgress = false;

// Function to create a message bubble
function createMessage(text, isUser = false, isTyping = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${isUser ? 'user' : 'ai'}`;

    if (isTyping) {
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'typing-indicator';
        typingIndicator.innerHTML = `
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        `;
        messageDiv.appendChild(typingIndicator);
    } else {
        const bubble = document.createElement('div');
        bubble.className = 'message-bubble';
        bubble.textContent = text;
        messageDiv.appendChild(bubble);
    }

    return messageDiv;
}

// Function to type text character by character
function typeText(element, text, speed = 30) {
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

// Main chat animation sequence
async function startChatAnimation() {
    if (chatAnimationInProgress) return;
    chatAnimationInProgress = true;

    // Hide notification card
    notificationCard.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    notificationCard.style.opacity = '0';
    notificationCard.style.transform = 'translateY(-20px)';

    // Show chat interface after a short delay
    setTimeout(() => {
        notificationCard.style.display = 'none';
        chatInterface.style.display = 'flex';

        // Start the conversation animation
        runConversation();
    }, 300);
}

async function runConversation() {
    // Clear any existing messages
    chatMessages.innerHTML = '';

    // Step 1: Show input field (500ms delay)
    await new Promise(resolve => setTimeout(resolve, 500));
    chatInputContainer.style.display = 'block';

    // Step 2: Simulate user typing (1 second delay before starting)
    await new Promise(resolve => setTimeout(resolve, 800));
    const userMessage = "I feel like this would bring me a lot of joy";

    // Show the text appearing in the input field
    if (chatInput) {
        chatInput.textContent = '';
        for (let i = 0; i <= userMessage.length; i++) {
            chatInput.textContent = userMessage.substring(0, i);
            await new Promise(resolve => setTimeout(resolve, 50));
        }
    }

    // Step 3: Wait a moment, then click send (animate button)
    await new Promise(resolve => setTimeout(resolve, 400));
    if (chatSendButton) {
        chatSendButton.style.transform = 'scale(0.9)';
        setTimeout(() => {
            chatSendButton.style.transform = 'scale(1)';
        }, 100);
    }

    // Step 4: Move message to chat area
    await new Promise(resolve => setTimeout(resolve, 200));
    chatInputContainer.style.display = 'none';

    const userMessageBubble = createMessage(userMessage, true);
    chatMessages.appendChild(userMessageBubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Step 5: Show AI typing indicator (1.5 second delay)
    await new Promise(resolve => setTimeout(resolve, 1200));
    const typingIndicator = createMessage('', false, true);
    chatMessages.appendChild(typingIndicator);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Step 6: Replace typing indicator with AI response
    await new Promise(resolve => setTimeout(resolve, 2000));
    typingIndicator.remove();

    const aiResponse = "Declined - you've asked me to help you focus on purchases that are actually going to bring something to your life. Instead of buying this, how about you text a friend to go for a walk with you?";
    const aiMessageBubble = createMessage('', false);
    const bubble = aiMessageBubble.querySelector('.message-bubble');
    bubble.classList.add('ai-declined-message');
    chatMessages.appendChild(aiMessageBubble);

    // Type out the AI response
    await typeText(bubble, aiResponse, 25);

    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;

    chatAnimationInProgress = false;
}

// Reset the demo to initial state
function resetDemo() {
    chatAnimationInProgress = false;
    chatInterface.style.display = 'none';
    notificationCard.style.display = 'block';
    notificationCard.style.opacity = '1';
    notificationCard.style.transform = 'translateY(0)';
    chatMessages.innerHTML = '';
    chatInputContainer.style.display = 'none';
    if (chatInput) chatInput.textContent = '';
}

// Event listeners
if (justifyButton) {
    justifyButton.addEventListener('click', startChatAnimation);
}

if (chatBackButton) {
    chatBackButton.addEventListener('click', resetDemo);
}

// Allow restarting the animation by clicking the chat interface (optional)
if (chatInterface) {
    chatInterface.addEventListener('click', (e) => {
        // Only restart if clicking on the chat area, not on buttons
        if (e.target === chatInterface || e.target === chatMessages) {
            if (!chatAnimationInProgress) {
                resetDemo();
                setTimeout(() => startChatAnimation(), 100);
            }
        }
    });
}
