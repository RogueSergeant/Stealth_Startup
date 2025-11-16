/* ========================================
   IMPULSE CARD - MAIN JAVASCRIPT
   ======================================== */

(function() {
  'use strict';

  /* ========================================
     UTILITIES
     ======================================== */

  // Sleep utility for async delays
  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  // Track analytics event
  const trackEvent = (eventName) => {
    if (window.plausible) {
      window.plausible(eventName);
    }
    console.log('Event tracked:', eventName);
  };

  /* ========================================
     HEADER SCROLL EFFECT
     ======================================== */

  const header = document.getElementById('header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  });

  /* ========================================
     SMOOTH SCROLLING
     ======================================== */

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      // Skip if it's just "#"
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);

      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Track CTA clicks
        if (this.classList.contains('btn-primary')) {
          trackEvent('cta_clicked');
        }
      }
    });
  });

  /* ========================================
     SCROLL TRACKING
     ======================================== */

  let scrollTracked = {
    '50': false,
    '100': false
  };

  window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    if (scrollPercent >= 50 && !scrollTracked['50']) {
      trackEvent('scroll_50');
      scrollTracked['50'] = true;
    }

    if (scrollPercent >= 95 && !scrollTracked['100']) {
      trackEvent('scroll_100');
      scrollTracked['100'] = true;
    }
  });

  /* ========================================
     INTERACTIVE PHONE DEMO
     ======================================== */

  const phoneMockup = document.getElementById('phoneMockup');
  const notificationView = document.getElementById('notificationView');
  const chatView = document.getElementById('chatView');
  const startDemoBtn = document.getElementById('startDemoBtn');
  const backButton = document.getElementById('backButton');
  const chatMessages = document.getElementById('chatMessages');
  const chatInput = document.getElementById('chatInput');
  const sendButton = document.getElementById('sendButton');

  let demoInProgress = false;
  let demoCompleted = false;

  // Type out text character by character
  async function typeText(element, text, speed = 50) {
    element.textContent = '';
    for (let i = 0; i < text.length; i++) {
      element.textContent += text[i];
      await sleep(speed);
    }
  }

  // Add message to chat
  function addMessage(text, type) {
    const message = document.createElement('div');
    message.className = `chat-message ${type}`;
    message.textContent = text;
    chatMessages.appendChild(message);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Show typing indicator
  function showTypingIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'typing-indicator';
    indicator.id = 'typingIndicator';
    indicator.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
    chatMessages.appendChild(indicator);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Remove typing indicator
  function removeTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) {
      indicator.remove();
    }
  }

  // Run the demo sequence
  async function runDemo() {
    if (demoInProgress) return;

    demoInProgress = true;
    trackEvent('demo_started');

    // Transition to chat view
    notificationView.style.display = 'none';
    chatView.style.display = 'flex';

    // Clear any previous messages
    chatMessages.innerHTML = '';

    await sleep(800);

    // User types message
    const userMessage = "I feel like this would bring me a lot of joy";
    chatInput.removeAttribute('readonly');

    for (let i = 0; i < userMessage.length; i++) {
      chatInput.value += userMessage[i];
      await sleep(50);
    }

    await sleep(400);

    // Simulate send
    chatInput.value = '';
    chatInput.setAttribute('readonly', 'readonly');
    addMessage(userMessage, 'user');

    await sleep(1200);

    // AI typing indicator
    showTypingIndicator();
    await sleep(2000);
    removeTypingIndicator();

    // AI response
    const aiResponse = "Let's explore this together. You mentioned joy – what specifically about this purchase would bring that? Sometimes the anticipation feels better than the actual item. What if you bookmark this and revisit tomorrow?";
    addMessage(aiResponse, 'ai');

    demoInProgress = false;
    demoCompleted = true;
  }

  // Reset demo
  function resetDemo() {
    chatView.style.display = 'none';
    notificationView.style.display = 'flex';
    chatMessages.innerHTML = '';
    chatInput.value = '';
    chatInput.setAttribute('readonly', 'readonly');
    demoCompleted = false;
  }

  // Start demo on button click
  if (startDemoBtn) {
    startDemoBtn.addEventListener('click', runDemo);
  }

  // Back button resets demo
  if (backButton) {
    backButton.addEventListener('click', resetDemo);
  }

  // Click anywhere on phone to restart if completed
  if (phoneMockup) {
    phoneMockup.addEventListener('click', (e) => {
      if (demoCompleted && !demoInProgress) {
        resetDemo();
      }
    });
  }

  /* ========================================
     FAQ ACCORDION
     ======================================== */

  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all FAQs (optional: remove these lines to allow multiple open)
      faqItems.forEach(faq => {
        faq.classList.remove('active');
        faq.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      // Toggle current FAQ
      if (!isActive) {
        item.classList.add('active');
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ========================================
     FORM HANDLING
     ======================================== */

  const waitlistForm = document.getElementById('waitlistForm');
  const thankYouMessage = document.getElementById('thankYouMessage');
  const howFoundSelect = document.getElementById('howFound');
  const otherSourceGroup = document.getElementById('otherSourceGroup');
  const expandOptionalBtn = document.getElementById('expandOptional');
  const optionalFields = document.getElementById('optionalFields');
  const challengeTextarea = document.getElementById('challenge');
  const charCount = document.getElementById('charCount');
  const emailInput = document.getElementById('email');

  // Show/hide "Other" source field
  if (howFoundSelect) {
    howFoundSelect.addEventListener('change', (e) => {
      if (e.target.value === 'other') {
        otherSourceGroup.style.display = 'block';
      } else {
        otherSourceGroup.style.display = 'none';
      }
    });
  }

  // Expand optional fields
  if (expandOptionalBtn) {
    expandOptionalBtn.addEventListener('click', () => {
      const isExpanded = expandOptionalBtn.getAttribute('aria-expanded') === 'true';

      if (isExpanded) {
        expandOptionalBtn.setAttribute('aria-expanded', 'false');
        optionalFields.style.display = 'none';
      } else {
        expandOptionalBtn.setAttribute('aria-expanded', 'true');
        optionalFields.style.display = 'block';
      }
    });
  }

  // Character counter for challenge field
  if (challengeTextarea) {
    challengeTextarea.addEventListener('input', (e) => {
      charCount.textContent = e.target.value.length;
    });
  }

  // Track form engagement
  if (emailInput) {
    let formStarted = false;
    emailInput.addEventListener('focus', () => {
      if (!formStarted) {
        trackEvent('signup_started');
        formStarted = true;
      }
    });
  }

  // Track interview volunteer
  const interviewCheckbox = document.querySelector('input[name="interviewVolunteer"]');
  if (interviewCheckbox) {
    interviewCheckbox.addEventListener('change', (e) => {
      if (e.target.checked) {
        trackEvent('interview_volunteered');
      }
    });
  }

  // Form submission
  if (waitlistForm) {
    waitlistForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Get submit button
      const submitBtn = waitlistForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;

      // Show loading state
      submitBtn.disabled = true;
      submitBtn.textContent = 'Joining...';

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
          // Success!
          trackEvent('signup_completed');

          // Check if interview was volunteered
          const interviewNoteEl = document.getElementById('interviewNote');
          const interviewChecked = document.querySelector('input[name="interviewVolunteer"]')?.checked;
          if (interviewChecked && interviewNoteEl) {
            interviewNoteEl.style.display = 'block';
          }

          // Hide form, show thank you
          waitlistForm.style.display = 'none';
          thankYouMessage.style.display = 'block';

          // Scroll to thank you message
          thankYouMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          // Error
          const data = await response.json();
          alert('Oops! There was a problem submitting your form. Please try again or email alfie@impulsecard.co.uk directly.');
          console.error('Form submission error:', data);

          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        }
      } catch (error) {
        // Network error
        alert('Oops! There was a problem submitting your form. Please check your connection and try again.');
        console.error('Form submission error:', error);

        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    });
  }

  /* ========================================
     PERFORMANCE MONITORING
     ======================================== */

  window.addEventListener('load', () => {
    // Check if performance API is available
    if (window.performance && window.performance.timing) {
      const perfData = window.performance.timing;
      const loadTime = perfData.loadEventEnd - perfData.navigationStart;

      console.log('Page load time:', loadTime + 'ms');

      // Track slow loads (> 3 seconds)
      if (loadTime > 3000) {
        console.warn('Slow page load detected:', loadTime + 'ms');
      }
    }
  });

  /* ========================================
     KEYBOARD ACCESSIBILITY
     ======================================== */

  // Allow Enter key to submit expandable buttons
  if (expandOptionalBtn) {
    expandOptionalBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        expandOptionalBtn.click();
      }
    });
  }

  // FAQ keyboard navigation
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        question.click();
      }
    });
  });

  /* ========================================
     INITIALIZATION
     ======================================== */

  console.log('Impulse Card - Landing Page Loaded');
  console.log('Built by Alfie Roberts - alfie@impulsecard.co.uk');

})();
