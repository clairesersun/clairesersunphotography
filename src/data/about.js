/**
 * =============================================================================
 * ABOUT PAGE CONTENT
 * =============================================================================
 * 
 * Biographical content with SEO keywords naturally integrated.
 * Location mentions (NYC, LA) support local SEO.
 * 
 * @module data/about
 */

const aboutContent = {
  // ---------------------------------------------------------------------------
  // HEADER
  // ---------------------------------------------------------------------------
  title: 'Claire Sersun',
  subtitle: 'Movement Photographer',

  // ---------------------------------------------------------------------------
  // BIOGRAPHY
  // Each paragraph is rendered separately for better readability
  // SEO keywords are naturally integrated: NYC, LA, dance, movement, etc.
  // ---------------------------------------------------------------------------
  paragraphs: [
    `I photograph the body in motion. Based between New York City and Los Angeles, I travel wherever the work takes me.`,
    
    `My background as a dancer and choreographer shapes everything I do. I anticipate movement before it happens. I know when a gesture will peak, when fabric will catch air, when a breath will land. This is what sets my work apart.`,
    
    `I work across dance, fashion, beauty, and nature photography, as well as motion and video. I collect vintage film cameras and shoot analog whenever I can. When I am not working, I am hiking, practicing somatics, or finding stillness in nature.`,
    
    `I bring warmth, patience, and deep attention to every collaboration.`,
  ],

  // ---------------------------------------------------------------------------
  // IMAGE
  // Alt text includes location keywords for SEO
  // ---------------------------------------------------------------------------
  image: {
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1000&q=85',
    alt: 'Claire Sersun, dance and movement photographer based in NYC and LA',
  },
};

export default aboutContent;
