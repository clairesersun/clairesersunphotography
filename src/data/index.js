/**
 * =============================================================================
 * DATA MODULE INDEX
 * =============================================================================
 * 
 * Central export point for all data modules.
 * Import from here for cleaner imports throughout the app.
 * 
 * Usage:
 *   import { config, portfolioImages, aboutContent } from './data';
 * 
 * @module data
 */

// Configuration
export { default as config } from './config';

// Navigation structure
export { 
  portfolioCategories, 
  projectCategories, 
  secondaryPages,
  getDefaultPage,
  isPortfolioCategory,
  isProject,
} from './navigation';

// Images and alt text
export { 
  portfolioImages, 
  altText, 
  loaderImages, 
  aboutImage,
  getCategoryContent,
} from './images';

// Projects
export { default as projects, getProject, getProjectKeys } from './projects';

// Page content
export { default as aboutContent } from './about';
export { default as pressData } from './press';
