/* ============================================
   HERO SECTION - JAVASCRIPT
   ============================================ */

/**
 * Initialize Hero Section Animations
 * Handles smooth fade-in effects and interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    initializeHeroAnimations();
    setupButtonInteractions();
});

/**
 * Initialize Hero Animations on Page Load
 * Adds smooth entrance animations to hero elements
 */
function initializeHeroAnimations() {
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero__content');
    const heroImage = document.querySelector('.hero__image');

    // Ensure animations are visible
    if (hero) {
        hero.style.opacity = '1';
    }

    if (heroContent) {
        heroContent.style.animation = 'slideInLeft 0.8s ease-out 0.2s both';
    }

    if (heroImage) {
        heroImage.style.animation = 'slideInRight 0.8s ease-out 0.4s both';
    }

    // Trigger reflow to ensure animations play
    void hero?.offsetWidth;
}

/**
 * Setup Interactive Button Behaviors
 * Adds ripple effects and smooth transitions
 */
function setupButtonInteractions() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach((button) => {
        // Add mouse down event for ripple effect
        button.addEventListener('mousedown', function (event) {
            createRipple(event);
        });

        // Add focus event for accessibility
        button.addEventListener('focus', function () {
            console.log(`Button focused: ${this.textContent.trim()}`);
        });

        // Add click event for feedback
        button.addEventListener('click', function (event) {
            const buttonText = this.getAttribute('aria-label') || this.textContent.trim();
            console.log(`Button clicked: ${buttonText}`);

            // Trigger haptic feedback if available
            if (navigator.vibrate) {
                navigator.vibrate(10);
            }
        });
    });
}

/**
 * Create Ripple Effect on Button Click
 * Adds visual feedback for button interactions
 * @param {MouseEvent} event - The click event
 */
function createRipple(event) {
    const button = event.currentTarget;

    // Check if ripple already exists
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');

    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';

    // Add ripple to button if not already present
    const existingRipple = button.querySelector('.ripple');
    if (existingRipple) {
        existingRipple.remove();
    }

    button.appendChild(ripple);

    // Remove ripple after animation completes
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

/**
 * Smooth Scroll to Section
 * Useful for future navigation links
 * @param {string} selector - CSS selector of target element
 */
function smoothScrollTo(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

/**
 * Handle Button Click Actions
 * Add event listeners to primary and secondary buttons
 */
function handleButtonActions() {
    const hireBtn = document.querySelector('.btn--primary');
    const resumeBtn = document.querySelector('.btn--secondary');

    if (hireBtn) {
        hireBtn.addEventListener('click', () => {
            // Scroll to contact section (when implemented)
            // smoothScrollTo('#contact');
            console.log('Hire Me button clicked - Implement contact action');
        });
    }

    if (resumeBtn) {
        resumeBtn.addEventListener('click', () => {
            // Trigger resume download
            // downloadResume();
            console.log('Download Resume button clicked - Implement download action');
        });
    }
}

/**
 * Observer for Lazy Load and Scroll Animations
 * Triggers animations when elements enter viewport
 */
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all hero elements
    const elements = document.querySelectorAll(
        '.hero__content, .hero__image, .btn'
    );
    elements.forEach((element) => {
        observer.observe(element);
    });
}

/**
 * Download Resume Function
 * Can be connected to actual resume file
 */
function downloadResume() {
    // Replace with actual resume file path
    const resumeUrl = '/assets/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Nonsang_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

/**
 * Add Ripple CSS Styles Dynamically
 * Injects ripple animation styles into the page
 */
function injectRippleStyles() {
    if (document.querySelector('style[data-ripple]')) {
        return; // Already injected
    }

    const style = document.createElement('style');
    style.setAttribute('data-ripple', 'true');
    style.textContent = `
        .btn {
            position: relative;
            overflow: hidden;
        }

        .ripple {
            position: absolute;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.5);
            transform: scale(0);
            animation: ripple-animation 0.6s ease-out;
            pointer-events: none;
        }

        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

/**
 * Initialize all interactive features
 */
function initializeHeroFeatures() {
    injectRippleStyles();
    setupButtonInteractions();
    handleButtonActions();
    setupIntersectionObserver();

    // Log initialization
    console.log('Hero Section initialized successfully');
}

// Initialize on DOM load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeHeroFeatures);
} else {
    initializeHeroFeatures();
}
