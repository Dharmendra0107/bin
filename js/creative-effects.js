// Creative Effects JavaScript

// Matrix Rain Effect
function createMatrixRain() {
    const matrixContainer = document.getElementById('matrix-rain');
    const characters = '01';
    const columns = Math.floor(window.innerWidth / 20);
    
    function createColumn() {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = Math.random() * window.innerWidth + 'px';
        column.style.animationDuration = (Math.random() * 3 + 2) + 's';
        column.style.animationDelay = Math.random() * 2 + 's';
        
        let text = '';
        for (let i = 0; i < Math.random() * 10 + 5; i++) {
            text += characters[Math.floor(Math.random() * characters.length)] + '<br>';
        }
        column.innerHTML = text;
        
        matrixContainer.appendChild(column);
        
        setTimeout(() => {
            column.remove();
        }, 5000);
    }
    
    setInterval(createColumn, 200);
}

// Floating Icons Effect
function createFloatingIcons() {
    const iconsContainer = document.getElementById('floating-icons');
    const icons = ['💻', '🚀', '⚡', '🌟', '💡', '🔥', '⭐', '🎯', '🔧', '📱'];
    
    function createIcon() {
        const icon = document.createElement('div');
        icon.className = 'floating-icon';
        icon.innerHTML = icons[Math.floor(Math.random() * icons.length)];
        icon.style.left = Math.random() * window.innerWidth + 'px';
        icon.style.animationDuration = (Math.random() * 10 + 10) + 's';
        icon.style.animationDelay = Math.random() * 5 + 's';
        
        iconsContainer.appendChild(icon);
        
        setTimeout(() => {
            icon.remove();
        }, 15000);
    }
    
    setInterval(createIcon, 2000);
}

// Cursor Trail Effect
function createCursorTrail() {
    const trails = [];
    const trailLength = 5;
    
    document.addEventListener('mousemove', (e) => {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.left = e.pageX + 'px';
        trail.style.top = e.pageY + 'px';
        
        document.body.appendChild(trail);
        trails.push(trail);
        
        if (trails.length > trailLength) {
            const oldTrail = trails.shift();
            oldTrail.remove();
        }
        
        setTimeout(() => {
            if (trail.parentNode) {
                trail.remove();
            }
        }, 1000);
    });
}

// Text Sparkle Effect
function createTextSparkle() {
    const sparkleElements = document.querySelectorAll('.name-dk, .animated-item');
    
    sparkleElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    const sparkle = document.createElement('span');
                    sparkle.innerHTML = '✨';
                    sparkle.style.position = 'absolute';
                    sparkle.style.pointerEvents = 'none';
                    sparkle.style.animation = 'sparkle 1s ease-out forwards';
                    sparkle.style.left = Math.random() * element.offsetWidth + 'px';
                    sparkle.style.top = Math.random() * element.offsetHeight + 'px';
                    
                    element.style.position = 'relative';
                    element.appendChild(sparkle);
                    
                    setTimeout(() => {
                        sparkle.remove();
                    }, 1000);
                }, i * 100);
            }
        });
    });
}

// Color Wave Effect on Scroll
function createColorWave() {
    const sections = document.querySelectorAll('section');
    const colors = ['#8a2be2', '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'];
    
    window.addEventListener('scroll', () => {
        const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
        const colorIndex = Math.floor(scrollPercent * colors.length);
        const color = colors[colorIndex] || colors[0];
        
        document.documentElement.style.setProperty('--primary-color', color);
    });
}

// Parallax Elements
function createParallaxEffect() {
    const parallaxElements = document.querySelectorAll('.home-image img, .about-me img');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        
        parallaxElements.forEach(element => {
            element.style.transform = `translateY(${parallax}px)`;
        });
    });
}

// Interactive Button Effects
function enhanceButtons() {
    const buttons = document.querySelectorAll('.btn, .custom-btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.1) rotate(2deg)';
            button.style.boxShadow = '0 10px 25px rgba(138, 43, 226, 0.4)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1) rotate(0deg)';
            button.style.boxShadow = '';
        });
        
        button.addEventListener('click', (e) => {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = e.offsetX + 'px';
            ripple.style.top = e.offsetY + 'px';
            button.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Dynamic Gradient Background
function createDynamicGradient() {
    let gradientAngle = 0;
    
    setInterval(() => {
        gradientAngle += 1;
        document.body.style.background = `linear-gradient(${gradientAngle}deg, 
            rgba(138, 43, 226, 0.1) 0%, 
            rgba(0, 255, 255, 0.1) 50%, 
            rgba(255, 107, 107, 0.1) 100%)`;
    }, 100);
}

// Initialize all creative effects
document.addEventListener('DOMContentLoaded', () => {
    createMatrixRain();
    createFloatingIcons();
    createCursorTrail();
    createTextSparkle();
    createColorWave();
    createParallaxEffect();
    enhanceButtons();
    createDynamicGradient();
    
    // Add sparkle animation styles
    const sparkleStyles = `
        @keyframes sparkle {
            0% {
                opacity: 1;
                transform: scale(0) rotate(0deg);
            }
            50% {
                opacity: 1;
                transform: scale(1) rotate(180deg);
            }
            100% {
                opacity: 0;
                transform: scale(0) rotate(360deg);
            }
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = sparkleStyles;
    document.head.appendChild(styleSheet);
});

// Responsive adjustments
window.addEventListener('resize', () => {
    // Clear existing effects and recreate for new screen size
    document.getElementById('matrix-rain').innerHTML = '';
    document.getElementById('floating-icons').innerHTML = '';
});
