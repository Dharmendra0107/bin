// Global Particle Background Configuration
// Enhanced particle.js setup for full-page coverage

particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 120,
      "density": {
        "enable": true,
        "value_area": 1000
      }
    },
    "color": {
      "value": "#ffc200"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#ffc200"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.4,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 4,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0.5,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 120,
      "color": "#ffc200",
      "opacity": 0.3,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 200,
        "line_linked": {
          "opacity": 0.8
        }
      },
      "bubble": {
        "distance": 300,
        "size": 8,
        "duration": 2,
        "opacity": 0.8,
        "speed": 3
      },
      "repulse": {
        "distance": 150,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

// Enhanced CSS for global particles
function addGlobalParticleStyles() {
  const style = document.createElement('style');
  style.textContent = `
    #particles-js {
      position: fixed !important;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background: transparent;
      pointer-events: none;
    }
    
    /* Ensure particles work well with dark mode */
    .dark-mode #particles-js {
      opacity: 0.8;
    }
    
    /* Responsive particle adjustments */
    @media (max-width: 768px) {
      #particles-js canvas {
        opacity: 0.6;
      }
    }
    
    /* Ensure content is above particles */
    body > *:not(#particles-js) {
      position: relative;
      z-index: 1;
    }
    
    /* Make sure navbar, sections, and footer are above particles */
    .navbar,
    section,
    .footer {
      position: relative;
      z-index: 2;
    }
  `;
  document.head.appendChild(style);
}

// Apply styles when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  addGlobalParticleStyles();
  
  // Adjust particle density based on screen size
  function adjustParticlesForDevice() {
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth <= 1024 && window.innerWidth > 768;
    
    if (isMobile) {
      // Reduce particle count on mobile for better performance
      pJSDom[0].pJS.particles.number.value = 60;
      pJSDom[0].pJS.particles.line_linked.distance = 100;
    } else if (isTablet) {
      pJSDom[0].pJS.particles.number.value = 90;
    }
    
    // Refresh particles
    if (pJSDom[0]) {
      pJSDom[0].pJS.fn.particlesRefresh();
    }
  }
  
  // Call on resize
  window.addEventListener('resize', adjustParticlesForDevice);
  
  // Initial adjustment
  setTimeout(adjustParticlesForDevice, 100);
});

// Optional: Add scroll-based color changes
function addScrollEffects() {
  let ticking = false;
  
  function updateParticleColor() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        // Change particle color based on section
        let newColor = '#ffc200'; // default
        
        switch(section.id) {
          case 'about':
            newColor = '#00d4ff';
            break;
          case 'skills':
            newColor = '#ff6b6b';
            break;
          case 'projects':
            newColor = '#4ecdc4';
            break;
          case 'contact':
            newColor = '#45b7d1';
            break;
          default:
            newColor = '#ffc200';
        }
        
        // Apply color change if particles are loaded
        if (pJSDom[0]) {
          pJSDom[0].pJS.particles.color.value = newColor;
          pJSDom[0].pJS.particles.line_linked.color = newColor;
          pJSDom[0].pJS.fn.particlesRefresh();
        }
      }
    });
    
    ticking = false;
  }
  
  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateParticleColor);
      ticking = true;
    }
  }
  
  // Enable scroll effects (uncomment to activate)
  // window.addEventListener('scroll', requestTick);
}

// Initialize scroll effects
// addScrollEffects();
