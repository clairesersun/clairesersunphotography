/**
 * =============================================================================
 * UTILITY FUNCTIONS
 * =============================================================================
 * 
 * Helper functions used throughout the application.
 * 
 * @module utils
 */

import { config } from '../data';

/**
 * =============================================================================
 * SCROLL LAYOUT UTILITIES
 * =============================================================================
 */

/**
 * Scroll pattern sequence for gallery layouts
 * Creates varied, non-predictable pattern of full-width and paired images
 * 
 * Patterns:
 * - 'full-parallax': Full-width with vertical parallax movement
 * - 'pair-scroll': Two images side-by-side with horizontal scroll
 * - 'full-scale': Full-width with zoom-out effect
 * - 'full-drift': Full-width with horizontal drift
 */
const SCROLL_PATTERNS = [
  'full-parallax',
  'pair-scroll',
  'full-scale',
  'pair-scroll',
  'full-drift',
  'full-parallax',
  'pair-scroll',
  'full-scale',
  'full-drift',
  'pair-scroll',
];

/**
 * Generates layout sequence for gallery pages
 * Determines which images display full-width vs paired
 * 
 * @param {number} totalImages - Total number of images in gallery
 * @returns {Array<{type: string, indices: number[]}>} Layout sequence
 * 
 * @example
 * const sequence = getLayoutSequence(5);
 * // Returns: [
 * //   { type: 'full-parallax', indices: [0] },
 * //   { type: 'pair', indices: [1, 2] },
 * //   { type: 'full-scale', indices: [3] },
 * //   { type: 'pair', indices: [4, 5] },
 * //   ...
 * // ]
 */
export const getLayoutSequence = (totalImages) => {
  const sequence = [];
  let imageIndex = 0;
  let patternIndex = 0;

  while (imageIndex < totalImages) {
    const pattern = SCROLL_PATTERNS[patternIndex % SCROLL_PATTERNS.length];

    // Pair-scroll consumes 2 images if available
    if (pattern === 'pair-scroll' && imageIndex + 1 < totalImages) {
      sequence.push({
        type: 'pair',
        indices: [imageIndex, imageIndex + 1],
      });
      imageIndex += 2;
    } else {
      // Single image, or fallback to parallax if not enough for pair
      const effectType = pattern === 'pair-scroll' ? 'full-parallax' : pattern;
      sequence.push({
        type: effectType,
        indices: [imageIndex],
      });
      imageIndex += 1;
    }

    patternIndex++;
  }

  return sequence;
};

/**
 * =============================================================================
 * CONTACT UTILITIES
 * =============================================================================
 */

/**
 * Reconstructs email address from obfuscated parts
 * Email is stored in two parts to prevent scraping by bots
 * 
 * @returns {string} Complete email address
 */
export const getEmail = () => {
  return `${config.contact.emailUser}@${config.contact.emailDomain}`;
};

/**
 * Generates mailto link
 * @param {string} [subject] - Optional email subject
 * @returns {string} mailto: URL
 */
export const getMailtoLink = (subject) => {
  const email = getEmail();
  if (subject) {
    return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  }
  return `mailto:${email}`;
};

/**
 * Generates Instagram profile URL
 * @returns {string} Instagram URL
 */
export const getInstagramUrl = () => {
  return `https://instagram.com/${config.contact.instagram}`;
};

/**
 * =============================================================================
 * MATH UTILITIES
 * =============================================================================
 */

/**
 * Clamps a number between min and max values
 * 
 * @param {number} value - Value to clamp
 * @param {number} min - Minimum bound
 * @param {number} max - Maximum bound
 * @returns {number} Clamped value
 * 
 * @example
 * clamp(150, 0, 100); // Returns 100
 * clamp(-50, 0, 100); // Returns 0
 * clamp(50, 0, 100);  // Returns 50
 */
export const clamp = (value, min, max) => {
  return Math.max(min, Math.min(max, value));
};

/**
 * Linear interpolation between two values
 * 
 * @param {number} start - Start value
 * @param {number} end - End value
 * @param {number} t - Progress (0-1)
 * @returns {number} Interpolated value
 */
export const lerp = (start, end, t) => {
  return start + (end - start) * t;
};

/**
 * =============================================================================
 * ACCESSIBILITY UTILITIES
 * =============================================================================
 */

/**
 * Check if user prefers reduced motion
 * Respects OS-level accessibility setting
 * 
 * @returns {boolean} True if user prefers reduced motion
 */
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Generate unique ID for ARIA relationships
 * 
 * @param {string} prefix - Prefix for the ID
 * @returns {string} Unique ID
 */
export const generateId = (prefix = 'id') => {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};
