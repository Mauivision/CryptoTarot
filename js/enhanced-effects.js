/**
 * Enhanced Effects & Animations for Crypto Tarot
 * Adds particle effects, sound effects, and interactive enhancements
 */

// Particle system
class ParticleSystem {
  constructor(container) {
    this.container = container || document.body;
    this.particles = [];
    this.particleCount = 30;
    this.init();
  }

  init() {
    // Create particles container if it doesn't exist
    let container = document.querySelector('.particles-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'particles-container';
      this.container.appendChild(container);
    }

    // Create particles
    for (let i = 0; i < this.particleCount; i++) {
      this.createParticle(container);
    }
  }

  createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';

    // Random starting position
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';

    // Random delay
    particle.style.animationDelay = Math.random() * 15 + 's';

    container.appendChild(particle);
    this.particles.push(particle);
  }

  destroy() {
    const container = document.querySelector('.particles-container');
    if (container) {
      container.remove();
    }
    this.particles = [];
  }
}

// Sound effects (optional, user-controlled)
class SoundEffects {
  constructor() {
    this.enabled = localStorage.getItem('soundEnabled') !== 'false';
    this.audioContext = null;
    this.init();
  }

  init() {
    // Create audio context on user interaction
    document.addEventListener(
      'click',
      () => {
        if (!this.audioContext && this.enabled) {
          try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
          } catch (e) {
            console.warn('Audio context not supported');
          }
        }
      },
      { once: true }
    );
  }

  playTone(frequency, duration, type = 'sine') {
    if (!this.enabled || !this.audioContext) return;

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = type;

    gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);

    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + duration);
  }

  playCardFlip() {
    this.playTone(440, 0.1, 'sine');
    setTimeout(() => this.playTone(523.25, 0.1, 'sine'), 50);
  }

  playCardDraw() {
    this.playTone(330, 0.15, 'sine');
  }

  playShuffle() {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        this.playTone(200 + Math.random() * 200, 0.1, 'sine');
      }, i * 100);
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    localStorage.setItem('soundEnabled', this.enabled);
    return this.enabled;
  }
}

// Scroll reveal animations
class ScrollReveal {
  constructor() {
    this.elements = document.querySelectorAll('.reveal');
    this.observer = null;
    this.init();
  }

  init() {
    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              this.observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px',
        }
      );

      this.elements.forEach(el => this.observer.observe(el));
    } else {
      // Fallback: reveal all immediately
      this.elements.forEach(el => el.classList.add('revealed'));
    }
  }
}

// Scroll progress indicator
class ScrollProgress {
  constructor() {
    this.indicator = null;
    this.init();
  }

  init() {
    // Create scroll indicator
    const indicator = document.createElement('div');
    indicator.className = 'scroll-indicator';
    document.body.appendChild(indicator);
    this.indicator = indicator;

    // Update on scroll
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / scrollHeight;
      this.indicator.style.transform = `scaleX(${progress})`;
    });
  }
}

// Magnetic hover effect
class MagneticHover {
  constructor(selector = '.magnetic') {
    this.elements = document.querySelectorAll(selector);
    this.init();
  }

  init() {
    this.elements.forEach(el => {
      el.addEventListener('mousemove', e => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        const moveX = x * 0.1;
        const moveY = y * 0.1;

        el.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });

      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
      });
    });
  }
}

// Enhanced card interactions
class CardEnhancements {
  constructor() {
    this.soundEffects = new SoundEffects();
    this.init();
  }

  init() {
    // Add ripple effect to cards
    document.querySelectorAll('.card-tile, .reading-card').forEach(card => {
      card.classList.add('ripple');

      card.addEventListener('click', () => {
        this.soundEffects.playCardFlip();
      });
    });

    // Add magnetic effect to buttons
    document.querySelectorAll('.btn').forEach(btn => {
      btn.classList.add('magnetic');
    });

    // Enhanced shuffle button
    const shuffleBtn = document.getElementById('shuffleBtn');
    if (shuffleBtn) {
      shuffleBtn.addEventListener('click', () => {
        this.soundEffects.playShuffle();
      });
    }

    // Enhanced draw cards button
    const drawBtn = document.getElementById('drawCardsBtn');
    if (drawBtn) {
      drawBtn.addEventListener('click', () => {
        this.soundEffects.playCardDraw();
      });
    }
  }
}

// Parallax effect
class ParallaxEffect {
  constructor() {
    this.elements = document.querySelectorAll('.parallax');
    this.init();
  }

  init() {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      this.elements.forEach(el => {
        const speed = el.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        el.style.transform = `translateY(${yPos}px)`;
      });
    });
  }
}

// Initialize all enhancements when DOM is ready
function initEnhancedEffects() {
  // Particle system
  const particles = new ParticleSystem();

  // Sound effects
  const soundEffects = new SoundEffects();

  // Scroll reveal
  const scrollReveal = new ScrollReveal();

  // Scroll progress
  const scrollProgress = new ScrollProgress();

  // Magnetic hover
  const magneticHover = new MagneticHover();

  // Card enhancements
  const cardEnhancements = new CardEnhancements();

  // Parallax
  const parallax = new ParallaxEffect();

  // Add reveal class to sections
  document.querySelectorAll('section').forEach((section, index) => {
    section.classList.add('reveal');
    section.style.transitionDelay = `${index * 0.1}s`;
  });

  // Add gradient text to headings
  document.querySelectorAll('h1, h2').forEach(heading => {
    if (!heading.classList.contains('gradient-text')) {
      heading.classList.add('gradient-text');
    }
  });

  // Add pulse glow to primary buttons
  document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.classList.add('pulse-glow');
  });

  // Add sparkle to shuffle button
  const shuffleBtn = document.getElementById('shuffleBtn');
  if (shuffleBtn) {
    shuffleBtn.classList.add('sparkle');
  }

  // Add neon text to brand
  const brand = document.querySelector('.brand');
  if (brand) {
    brand.classList.add('neon-text');
  }

  // Sound toggle button (optional)
  const soundToggle = document.createElement('button');
  soundToggle.className = 'btn btn-outline';
  soundToggle.style.position = 'fixed';
  soundToggle.style.bottom = '20px';
  soundToggle.style.right = '20px';
  soundToggle.style.zIndex = '1000';
  soundToggle.textContent = soundEffects.enabled ? '🔊' : '🔇';
  soundToggle.title = 'Toggle sound effects';
  soundToggle.addEventListener('click', () => {
    const enabled = soundEffects.toggle();
    soundToggle.textContent = enabled ? '🔊' : '🔇';
  });
  document.body.appendChild(soundToggle);

  console.log('✨ Enhanced effects initialized!');
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initEnhancedEffects);
} else {
  initEnhancedEffects();
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    ParticleSystem,
    SoundEffects,
    ScrollReveal,
    ScrollProgress,
    MagneticHover,
    CardEnhancements,
    ParallaxEffect,
  };
}
