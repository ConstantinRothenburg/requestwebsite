/**
 * Lazy Loading Strategy for Videos & Images
 * - Uses Intersection Observer for viewport-based loading
 * - Fallback images show until video loads
 * - Progressive enhancement
 */

// Lazy load videos with Intersection Observer
if ('IntersectionObserver' in window) {
  const videoObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        
        if (entry.isIntersecting) {
          // Load video when in viewport
          if (video.dataset.lazy) {
            video.autoplay = true;
            video.play();
            video.removeAttribute('data-lazy');
            videoObserver.unobserve(video);
            console.log('📹 Video loaded:', video.src);
          }
        }
      });
    },
    {
      rootMargin: '100px', // Start loading 100px before entering viewport
      threshold: 0.1
    }
  );

  // Observe all lazy-load videos
  document.querySelectorAll('video[data-lazy]').forEach((video) => {
    videoObserver.observe(video);
  });
}

// Responsive image loading (adaptive srcset)
function setupResponsiveImages() {
  const imageElements = document.querySelectorAll('img[data-src]');
  
  imageElements.forEach((img) => {
    const src = img.dataset.src;
    const srcset = img.dataset.srcset || '';
    
    img.src = src;
    if (srcset) img.srcset = srcset;
    img.removeAttribute('data-src');
    img.removeAttribute('data-srcset');
  });
}

// Auto-play videos on scroll (section overlay config)
function setupVideoAutoplay() {
  const sections = document.querySelectorAll('[data-bg-type="video"]');
  
  sections.forEach((section) => {
    const video = section.querySelector('video');
    if (!video) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (video.paused) {
              video.play().catch((err) => console.log('Video play prevented:', err));
            }
          } else {
            if (!video.paused) {
              video.pause();
            }
          }
        });
      },
      { threshold: 0.5 }
    );
    
    observer.observe(section);
  });
}

// Scroll-triggered overlay hide on video sections
function setupScrollableOverlays() {
  const sections = document.querySelectorAll('.section-bg');
  
  sections.forEach((section) => {
    const overlay = section.querySelector('.section-overlay');
    const headline = section.querySelector('.section-headline');
    
    if (!overlay || !headline) return;
    
    window.addEventListener('scroll', () => {
      const rect = section.getBoundingClientRect();
      const scrollProgress = 1 - (rect.top / window.innerHeight);
      
      // Fade out overlay as you scroll down
      overlay.style.opacity = Math.max(0, 1 - scrollProgress);
      
      // Fade out headline proportionally
      headline.style.opacity = Math.max(0, 1 - scrollProgress * 0.5);
    }, { passive: true });
  });
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    setupResponsiveImages();
    setupVideoAutoplay();
    setupScrollableOverlays();
  });
} else {
  setupResponsiveImages();
  setupVideoAutoplay();
  setupScrollableOverlays();
}

console.log('✅ Lazy loading initialized');
