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

if (form) {
    form.addEventListener('submit', function(e) {
        // Track form submission with Google Analytics (if configured)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'submit', {
                'event_category': 'Form',
                'event_label': 'Waitlist Signup'
            });
        }

        // Check if interview checkbox is checked
        const interviewCheckbox = form.querySelector('input[name="interview_volunteer"]');

        // Note: Formspree will handle the actual form submission
        // This code prepares the thank you message

        // After successful submission (Formspree redirects or shows success)
        // You can handle the thank you message display here if needed

        // For better UX, you might want to use AJAX submission
        // Here's an example of AJAX form submission:
        /*
        e.preventDefault();

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

                // Scroll to thank you message
                thankYouMessage.scrollIntoView({ behavior: 'smooth' });
            } else {
                throw new Error('Form submission failed');
            }
        }).catch(error => {
            console.error('Error:', error);
            alert('Oops! There was a problem submitting your form. Please try again.');
        });
        */
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
