/**
 * =============================================================================
 * SITE CONFIGURATION
 * =============================================================================
 * 
 * Central configuration for the entire application.
 * Edit these values to customize site behavior without touching component code.
 * 
 * @module data/config
 */

const config = {
  // ---------------------------------------------------------------------------
  // SITE IDENTITY
  // ---------------------------------------------------------------------------
  siteName: 'Claire Sersun Photography',
  siteTagline: 'Dance & Movement Photographer',
  
  // ---------------------------------------------------------------------------
  // SEO METADATA
  // Used in meta tags and structured data
  // ---------------------------------------------------------------------------
  seo: {
    title: 'Claire Sersun Photography | Dance & Fashion Photographer NYC & LA',
    description: 'Professional dance, fashion, beauty, and movement photographer based in New York City and Los Angeles. Available worldwide for commercial and editorial work.',
    keywords: [
      'dance photographer',
      'fashion photographer', 
      'NYC photographer',
      'LA photographer',
      'movement photography',
      'editorial photographer',
      'beauty photographer',
      'analog photography',
      'film photographer',
    ],
    // Update with your actual domain
    canonicalUrl: 'https://www.clairesersun.com',
  },

  // ---------------------------------------------------------------------------
  // CONTACT INFORMATION
  // Email is split to prevent spam scraping. Reconstructed at render time.
  // ---------------------------------------------------------------------------
  contact: {
    emailUser: 'claire.sersun',
    emailDomain: 'gmail.com',
    instagram: 'clairesersunphotography',
    location: 'Based in New York City and Los Angeles. Available worldwide.',
  },

  // ---------------------------------------------------------------------------
  // LAYOUT SETTINGS
  // ---------------------------------------------------------------------------
  layout: {
    sidebarWidth: 220, // pixels
    mobileBreakpoint: 860, // pixels
  },

  // ---------------------------------------------------------------------------
  // ANIMATION SETTINGS
  // All durations in milliseconds
  // ---------------------------------------------------------------------------
  animation: {
    loaderDuration: 3200,
    transitionFast: 150,
    transitionMedium: 300,
    transitionSlow: 600,
  },

  // ---------------------------------------------------------------------------
  // IMAGE LOADING STRATEGY
  // ---------------------------------------------------------------------------
  images: {
    // Number of images to load immediately (eager) for LCP optimization
    eagerLoadCount: 2,
    // Intersection Observer settings for lazy loading
    observerThreshold: 0.1,
    observerRootMargin: '50px',
  },
};

export default config;
