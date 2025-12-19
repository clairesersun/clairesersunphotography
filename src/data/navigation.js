/**
 * =============================================================================
 * NAVIGATION CONFIGURATION
 * =============================================================================
 * 
 * Defines the site navigation structure.
 * 
 * HOW TO ADD A NEW NAVIGATION ITEM:
 * 1. Add entry to the appropriate array below
 * 2. For portfolio categories: also add images to images.js
 * 3. For projects: also add project data to projects.js
 * 
 * @module data/navigation
 */

/**
 * Portfolio category definitions
 * These display with varied scroll behaviors (parallax, pairs, scale, drift)
 * 
 * @property {string} id - Unique identifier, used for routing
 * @property {string} label - Display text in navigation
 * @property {boolean} [isDefault] - If true, this is the homepage
 */
export const portfolioCategories = [
  { id: 'dance', label: 'Dance', isDefault: true },
  { id: 'fashion', label: 'Fashion + Editorial' },
  { id: 'beauty', label: 'Beauty' },
  { id: 'nature', label: 'Nature' },
  { id: 'analog', label: 'Analog' },
  { id: 'motion', label: 'Motion' },
];

/**
 * Personal project definitions
 * These display with parallax-only scroll for cleaner presentation
 * 
 * NOTE: Project IDs must be prefixed with 'p-' to distinguish from categories
 * 
 * @property {string} id - Unique identifier, prefixed with 'p-'
 * @property {string} label - Display text in navigation
 */
export const projectCategories = [
  { id: 'p-home', label: 'HOME' },
  { id: 'p-museum-mile', label: 'Museum Mile' },
  { id: 'p-illusion', label: 'Illusion' },
];

/**
 * Secondary/info pages
 * Non-gallery pages like About, Press, Contact
 * 
 * @property {string} id - Unique identifier
 * @property {string} label - Display text in navigation
 */
export const secondaryPages = [
  { id: 'about', label: 'About' },
  { id: 'press', label: 'Exhibitions / Press' },
  { id: 'contact', label: 'Contact' },
];

/**
 * Get the default page ID
 * @returns {string} The ID of the default/homepage
 */
export const getDefaultPage = () => {
  const defaultCategory = portfolioCategories.find(cat => cat.isDefault);
  return defaultCategory ? defaultCategory.id : 'dance';
};

/**
 * Check if a page ID is a portfolio category
 * @param {string} pageId - The page ID to check
 * @returns {boolean}
 */
export const isPortfolioCategory = (pageId) => {
  return portfolioCategories.some(cat => cat.id === pageId);
};

/**
 * Check if a page ID is a personal project
 * @param {string} pageId - The page ID to check
 * @returns {boolean}
 */
export const isProject = (pageId) => {
  return pageId.startsWith('p-');
};
