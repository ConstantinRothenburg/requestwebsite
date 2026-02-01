// Section Definitions with Background Videos/Images
// Auto-generates HTML structure and handles lazy loading

const SECTIONS = [
  {
    id: 'hero',
    type: 'hero',
    headline: 'REQUEST',
    subheadline: 'Connect with projects that cut emissions. Get matched in days, not months.',
    backgroundType: 'color',
    backgroundColor: '#ff005a',
    hasButton: true,
    buttonText: 'Register Now',
    menuVisible: false
  },
  {
    id: 'section-1',
    type: 'overlay',
    headline: 'YOUR DEEP DIVE INTO CLIMATE CHANGE SOLUTIONS',
    backgroundType: 'video',
    videoPath: '/assets/videos/istock-batch-1/iStock-1178114955.mp4',
    imagePath: '/assets/images/thumbnails/section-1-thumb.jpg',
    overlayText: true,
    scrollableOverlay: true,
    autoplayVideo: true,
    lazy: true
  },
  {
    id: 'section-2',
    type: 'overlay',
    headline: 'EXPLORE GLOBAL INNOVATIONS',
    backgroundType: 'video',
    videoPath: '/assets/videos/istock-batch-1/iStock-1408030770.mp4',
    imagePath: '/assets/images/thumbnails/section-2-thumb.jpg',
    overlayText: true,
    scrollableOverlay: true,
    autoplayVideo: false,
    lazy: true
  },
  {
    id: 'section-3',
    type: 'overlay',
    headline: 'NETWORK WITH GAMECHANGERS AND PROJECTS',
    backgroundType: 'video',
    videoPath: '/assets/videos/istock-batch-1/iStock-864464298.mp4',
    imagePath: '/assets/images/thumbnails/section-3-thumb.jpg',
    overlayText: true,
    scrollableOverlay: true,
    autoplayVideo: false,
    lazy: true
  },
  {
    id: 'section-4',
    type: 'overlay',
    headline: 'REGISTER AND SHOWCASE YOUR VISION',
    backgroundType: 'video',
    videoPath: '/assets/videos/istock-batch-2/iStock-1165689962.mp4',
    imagePath: '/assets/images/thumbnails/section-4-thumb.jpg',
    overlayText: true,
    scrollableOverlay: true,
    autoplayVideo: false,
    lazy: true
  },
  {
    id: 'section-5',
    type: 'overlay',
    headline: 'JOIN THE MOVEMENT OF CHANGE',
    backgroundType: 'video',
    videoPath: '/assets/videos/istock-batch-2/iStock-1176767088.mp4',
    imagePath: '/assets/images/thumbnails/section-5-thumb.jpg',
    overlayText: true,
    scrollableOverlay: true,
    autoplayVideo: false,
    lazy: true
  },
  {
    id: 'section-6',
    type: 'overlay',
    headline: 'TOGETHER, WE CAN SAVE OUR PLANET',
    backgroundType: 'image',
    imagePath: '/assets/images/iStock-2165344692.jpg',
    overlayText: true,
    scrollableOverlay: true,
    lazy: true
  },
  {
    id: 'section-7',
    type: 'overlay',
    headline: 'START MAKING AN IMPACT IN 2025',
    backgroundType: 'color',
    backgroundColor: '#f0f0f0',
    overlayText: true,
    scrollableOverlay: false,
    lazy: false
  },
  {
    id: 'section-8',
    type: 'overlay',
    headline: 'FOLLOW OUR JOURNEY AND PROTECT THE EARTH',
    backgroundType: 'video',
    videoPath: '/assets/videos/istock-batch-1/iStock-1178114955.mp4',
    imagePath: '/assets/images/thumbnails/section-8-thumb.jpg',
    overlayText: true,
    scrollableOverlay: true,
    autoplayVideo: false,
    lazy: true
  },
  {
    id: 'section-9',
    type: 'overlay',
    headline: 'CLIMATE ACTION NETWORK',
    backgroundType: 'image',
    imagePath: '/assets/images/iStock-2165344692.jpg',
    overlayText: true,
    scrollableOverlay: true,
    lazy: true
  },
  {
    id: 'section-10',
    type: 'overlay',
    headline: 'BE PART OF THE SOLUTION',
    backgroundType: 'color',
    backgroundColor: '#ff005a',
    textColor: 'white',
    overlayText: true,
    scrollableOverlay: false,
    lazy: false,
    hasButton: true,
    buttonText: 'Get Started'
  }
];

// Export for use in HTML generation and JS
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SECTIONS;
}
