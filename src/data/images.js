/**
 * =============================================================================
 * IMAGE LIBRARY
 * =============================================================================
 * 
 * Centralized image management for easy updates and CDN migration.
 * 
 * HOW TO REPLACE WITH YOUR OWN IMAGES:
 * 1. Upload images to your preferred CDN (Cloudinary, AWS S3, etc.)
 * 2. Update URLs in the arrays below
 * 3. Update corresponding alt text for accessibility and SEO
 * 
 * RECOMMENDED IMAGE SPECIFICATIONS:
 * - Portfolio images: 1600px width, 85% quality, JPG or WebP
 * - Loader thumbnails: 400px width, 60% quality
 * - About photo: 1000px width, 85% quality
 * - OG/Social image: 1200x630px
 * 
 * IMAGE NAMING CONVENTION:
 * - Use descriptive names: "dance-ballet-leap-01.jpg" not "IMG_1234.jpg"
 * - Include category and subject for organization
 * 
 * @module data/images
 */

/**
 * Portfolio images organized by category
 * Each category array should match the categories in navigation.js
 */
export const portfolioImages = {
  // ---------------------------------------------------------------------------
  // DANCE PHOTOGRAPHY
  // Movement, ballet, contemporary, modern dance
  // ---------------------------------------------------------------------------
  dance: [
    'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=1600&q=85',
    'https://images.unsplash.com/photo-1547153760-18fc86324498?w=1600&q=85',
    'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=1600&q=85',
    'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=1600&q=85',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=85',
    'https://images.unsplash.com/photo-1509670572852-8a7e835c5f16?w=1600&q=85',
  ],

  // ---------------------------------------------------------------------------
  // FASHION + EDITORIAL
  // High fashion, runway, editorial spreads
  // ---------------------------------------------------------------------------
  fashion: [
    'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600&q=85',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1600&q=85',
    'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1600&q=85',
    'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1600&q=85',
    'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=1600&q=85',
  ],

  // ---------------------------------------------------------------------------
  // BEAUTY
  // Portraits, close-ups, beauty editorial
  // ---------------------------------------------------------------------------
  beauty: [
    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1600&q=85',
    'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=1600&q=85',
    'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1600&q=85',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&q=85',
    'https://images.unsplash.com/photo-1503104834685-7205e8607eb9?w=1600&q=85',
  ],

  // ---------------------------------------------------------------------------
  // NATURE
  // Landscapes, flora, fauna, environmental
  // ---------------------------------------------------------------------------
  nature: [
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=85',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&q=85',
    'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1600&q=85',
    'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1600&q=85',
    'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=1600&q=85',
  ],

  // ---------------------------------------------------------------------------
  // ANALOG / FILM
  // Shot on film, vintage cameras, analog aesthetic
  // ---------------------------------------------------------------------------
  analog: [
    'https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=1600&q=85',
    'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1600&q=85',
    'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1600&q=85',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=85',
  ],

  // ---------------------------------------------------------------------------
  // MOTION / VIDEO
  // Stills from video work, behind-the-scenes
  // ---------------------------------------------------------------------------
  motion: [
    'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1600&q=85',
    'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1600&q=85',
    'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1600&q=85',
    'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1600&q=85',
  ],
};

/**
 * SEO-OPTIMIZED ALT TEXT
 * 
 * Alt text serves dual purposes:
 * 1. Accessibility - Screen readers announce this to visually impaired users
 * 2. SEO - Search engines use this to understand image content
 * 
 * BEST PRACTICES:
 * - Be descriptive of actual image content
 * - Include target keywords naturally (NYC, LA, dance photographer, etc.)
 * - Keep under 125 characters for optimal screen reader experience
 * - Don't start with "Image of..." or "Photo of..." - it's redundant
 * 
 * Arrays must match the order of images in portfolioImages
 */
export const altText = {
  dance: [
    'Dance photographer NYC: dancer suspended mid-leap against white backdrop',
    'Contemporary dance: two performers in dramatic partnering, NYC studio',
    'Ballet photography: dancer en pointe in stillness, professional shoot',
    'Modern dance: fluid embrace between dancers, movement captured',
    'Movement photographer: performer mid-spin with flowing fabric',
    'Dance documentation: modern dancer grounded in contemplation',
  ],
  fashion: [
    'Fashion photographer NYC: model with coat mid-swing, dynamic editorial',
    'Editorial photography LA: high fashion model against urban architecture',
    'Fashion editorial: diagonal composition with bold styling',
    'Movement in fashion: fabric at peak flutter, captured in motion',
    'LA fashion photographer: editorial silhouette at golden hour',
  ],
  beauty: [
    'Beauty photographer NYC: close portrait with soft natural light',
    'Professional beauty photography: profile with dramatic shadow play',
    'Beauty editorial: natural skin texture in studio lighting',
    'Portrait photographer NYC: contour lighting on model',
    'Beauty photographer LA: intimate close-up with soft focus',
  ],
  nature: [
    'Nature photographer: forest light filtering through canopy',
    'Landscape photography: mountain silhouette at dawn',
    'Nature detail: morning dew on vegetation, macro shot',
    'Waterfall photography: long exposure creating silky water effect',
    'Atmospheric nature: trees emerging from morning fog',
  ],
  analog: [
    'Film photographer: medium format portrait with natural grain',
    'Analog photography: golden hour scene captured on 35mm',
    'Film photography: intimate moment with analog warmth and texture',
    'Expired film photography: dreamlike quality and soft colors',
  ],
  motion: [
    'Dance videographer NYC: still from contemporary dance film',
    'Video production: dance videography frame capture',
    'Cinematic dance: wide frame from short film production',
    'Dance videographer LA: performer transitioning positions on camera',
  ],
};

/**
 * Loader/intro animation images
 * Smaller versions for faster initial load
 */
export const loaderImages = [
  'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=400&q=60',
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=60',
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=60',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=60',
  'https://images.unsplash.com/photo-1547153760-18fc86324498?w=400&q=60',
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=60',
];

/**
 * About page portrait image
 */
export const aboutImage = {
  src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1000&q=85',
  alt: 'Claire Sersun, dance and movement photographer based in NYC and LA',
};

/**
 * Helper function to get images and alt text for a category
 * @param {string} category - The category ID
 * @returns {{ images: string[], alts: string[] }}
 */
export const getCategoryContent = (category) => {
  return {
    images: portfolioImages[category] || [],
    alts: altText[category] || [],
  };
};
