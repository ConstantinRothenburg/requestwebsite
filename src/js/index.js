/* ========================================
   VANILLA JAVASCRIPT - FORM & INTERACTIONS
   ======================================== */

// Get form element
const form = document.getElementById('climate-form');

// Form validation
if (form) {
  form.addEventListener('submit', () => {
    // Let Netlify handle form submission
    // Vanilla validation on blur if needed
  });

  // Real-time validation on blur
  const inputs = form.querySelectorAll('input, select, textarea');
  inputs.forEach((input) => {
    input.addEventListener('blur', () => {
      validateField(input);
    });
  });
}

// Validate individual field
function validateField(field) {
  const value = field.value.trim();
  const isRequired = field.required;
  const type = field.type;

  if (isRequired && !value) {
    field.classList.add('invalid');
    field.classList.remove('valid');
    return false;
  }

  if (type === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      field.classList.add('invalid');
      field.classList.remove('valid');
      return false;
    }
  }

  if (type === 'tel' && value) {
    const phoneRegex = /^[\d\s+\-()]+$/;
    if (!phoneRegex.test(value)) {
      field.classList.add('invalid');
      field.classList.remove('valid');
      return false;
    }
  }

  field.classList.remove('invalid');
  field.classList.add('valid');
  return true;
}

// Header scroll behavior - glassy nav + logo color switching
const header = document.querySelector('.header');
const heroSection = document.getElementById('hero');
const logoSvg = document.querySelector('.logo-svg');

if (header && heroSection) {
  const heroHeight = heroSection.offsetHeight;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    // Glassy effect after hero
    if (scrollY > heroHeight * 0.2) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
    
    // Logo color: white over dark sections, primary red over light sections
    if (logoSvg) {
      const sections = document.querySelectorAll('.section-bg, .section-color');
      let logoColor = 'white'; // Default
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 60 && rect.bottom >= 60) {
          // Header is over this section
          const bgColor = window.getComputedStyle(section).backgroundColor;
          // If bg is light, use primary red; if dark, use white
          logoColor = isLightBackground(bgColor) ? '#ff005a' : 'white';
        }
      });
      
      logoSvg.style.fill = logoColor;
      logoSvg.style.color = logoColor;
    }
  }, { passive: true });
}

// Helper function to determine if background color is light or dark
function isLightBackground(rgbColor) {
  // Extract RGB values
  const match = rgbColor.match(/\d+/g);
  if (!match || match.length < 3) return false;
  
  const r = parseInt(match[0]);
  const g = parseInt(match[1]);
  const b = parseInt(match[2]);
  
  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5; // Light if luminance > 0.5
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Optional: IntersectionObserver for lazy loading videos below fold
if ('IntersectionObserver' in window) {
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const video = entry.target;
        if (video.dataset.src && !video.src) {
          video.src = video.dataset.src;
        }
        videoObserver.unobserve(video);
      }
    });
  });

  // Observe all videos
  document.querySelectorAll('video').forEach((video) => {
    videoObserver.observe(video);
  });
}

// Console message
console.log('🌍 Climate Request v2.0 loaded successfully!');
