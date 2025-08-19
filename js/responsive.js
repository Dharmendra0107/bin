// Enhanced Responsive JavaScript for Portfolio

document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile menu toggle enhancement
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Close mobile menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navbarCollapse.classList.remove('show');
            }
        });
    });
    
    // Responsive particle density
    function adjustParticleCount() {
        if (typeof particlesJS !== 'undefined' && window.pJSDom && window.pJSDom.length > 0) {
            const particleInstance = window.pJSDom[0].pJS;
            if (particleInstance && particleInstance.particles) {
                const particles = particleInstance.particles;
                const screenWidth = window.innerWidth;
                
                let newCount;
                if (screenWidth <= 576) {
                    newCount = 30; // Fewer particles on small screens
                } else if (screenWidth <= 768) {
                    newCount = 50;
                } else if (screenWidth <= 1200) {
                    newCount = 80;
                } else {
                    newCount = 120; // Full particle count on large screens
                }
                
                // Update particle count if different and methods exist
                if (particles.array && particles.array.length !== newCount) {
                    if (particles.number) {
                        particles.number.value = newCount;
                    }
                    // Check if the method exists before calling
                    if (particles.fn && typeof particles.fn.particlesCreate === 'function') {
                        particles.fn.particlesCreate();
                    } else if (particles.fn && typeof particles.fn.particlesRefresh === 'function') {
                        particles.fn.particlesRefresh();
                    }
                }
            }
        }
    }
    
    // Responsive image loading
    function handleResponsiveImages() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            // Add loading="lazy" for better performance on mobile
            if (!img.hasAttribute('loading')) {
                img.setAttribute('loading', 'lazy');
            }
            
            // Optimize image sizes based on screen size
            img.addEventListener('load', function() {
                if (window.innerWidth <= 768 && this.naturalWidth > 800) {
                    this.style.maxWidth = '100%';
                    this.style.height = 'auto';
                }
            });
        });
    }
    
    // Responsive scroll behavior
    function handleResponsiveScroll() {
        const skipButton = document.querySelector('.skip-to-main-link');
        const isVisible = window.pageYOffset > 300;
        
        if (skipButton) {
            skipButton.style.display = isVisible ? 'flex' : 'none';
            
            // Adjust position for mobile
            if (window.innerWidth <= 768) {
                skipButton.style.bottom = '20px';
                skipButton.style.right = '20px';
            } else {
                skipButton.style.bottom = '30px';
                skipButton.style.right = '30px';
            }
        }
    }
    
    // Touch gesture support for mobile
    function addTouchSupport() {
        if ('ontouchstart' in window) {
            const flipBoxes = document.querySelectorAll('.flip-box');
            
            flipBoxes.forEach(box => {
                let touchStartTime = 0;
                
                box.addEventListener('touchstart', function(e) {
                    touchStartTime = Date.now();
                });
                
                box.addEventListener('touchend', function(e) {
                    const touchDuration = Date.now() - touchStartTime;
                    
                    // If touch was quick (like a tap), toggle flip
                    if (touchDuration < 300) {
                        this.classList.toggle('flipped');
                    }
                });
            });
        }
    }
    
    // Responsive form validation
    function enhanceFormResponsiveness() {
        const form = document.querySelector('.contact-form');
        const inputs = form?.querySelectorAll('input, textarea');
        
        if (inputs) {
            inputs.forEach(input => {
                // Better mobile keyboard experience
                if (input.type === 'email') {
                    input.setAttribute('inputmode', 'email');
                }
                if (input.type === 'tel' || input.name === 'phone') {
                    input.setAttribute('inputmode', 'tel');
                }
                
                // Auto-resize textarea on mobile
                if (input.tagName === 'TEXTAREA' && window.innerWidth <= 768) {
                    input.style.minHeight = '120px';
                }
            });
        }
    }
    
    // Handle orientation change
    function handleOrientationChange() {
        // Small delay to allow for viewport changes
        setTimeout(() => {
            adjustParticleCount();
            handleResponsiveScroll();
            
            // Recalculate AOS animations
            if (typeof AOS !== 'undefined') {
                AOS.refresh();
            }
        }, 300);
    }
    
    // Responsive performance optimization
    function optimizeForMobile() {
        if (window.innerWidth <= 768) {
            // Reduce animation duration on mobile for better performance
            const animatedElements = document.querySelectorAll('[data-aos]');
            animatedElements.forEach(element => {
                const currentDuration = element.getAttribute('data-aos-duration');
                if (!currentDuration) {
                    element.setAttribute('data-aos-duration', '500');
                }
            });
            
            // Disable complex animations on low-end devices
            if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2) {
                document.body.classList.add('reduced-motion');
            }
        }
    }
    
    // Initialize responsive features
    function initResponsive() {
        try {
            adjustParticleCount();
            handleResponsiveImages();
            addTouchSupport();
            enhanceFormResponsiveness();
            optimizeForMobile();
        } catch (error) {
            console.warn('Responsive features initialization error:', error);
            // Continue with other features even if particles fail
            handleResponsiveImages();
            addTouchSupport();
            enhanceFormResponsiveness();
            optimizeForMobile();
        }
    }
    
    // Event listeners
    window.addEventListener('resize', debounce(() => {
        try {
            adjustParticleCount();
            handleResponsiveScroll();
        } catch (error) {
            console.warn('Resize handler error:', error);
            // Continue with responsive scroll even if particles fail
            handleResponsiveScroll();
        }
    }, 250));
    
    window.addEventListener('orientationchange', handleOrientationChange);
    window.addEventListener('scroll', throttle(handleResponsiveScroll, 100));
    
    // Utility functions
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
    
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
    
    // Initialize everything with proper timing
    function safeInitialize() {
        // Wait for particles.js to be fully loaded
        if (typeof particlesJS !== 'undefined') {
            // Add a small delay to ensure particles are fully initialized
            setTimeout(() => {
                initResponsive();
            }, 500);
        } else {
            // Retry after a short delay if particles.js isn't loaded yet
            setTimeout(safeInitialize, 100);
        }
    }
    
    // Start initialization
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', safeInitialize);
    } else {
        safeInitialize();
    }
    
    // Re-run optimization after page load
    window.addEventListener('load', () => {
        setTimeout(initResponsive, 500);
    });
    
});
