/**
 * =============================================================================
 * Theme Toggle Icons
 * =============================================================================
 * 
 * SVG icons for the theme toggle button.
 * Three states: light (bulb on), dark (bulb off), system (bulb half)
 * 
 * ACCESSIBILITY:
 * - All icons have aria-hidden="true" as they are decorative
 * - Meaning is conveyed via button's aria-label, not icon
 * 
 * @module components/ThemeIcons
 */

import React from 'react';

/**
 * Bulb "on" icon - Used for light mode
 * Shows a bright, radiating bulb
 */
export const BulbOnIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M9 18h6M10 22h4M12 2v2M4.93 4.93l1.41 1.41M2 12h2M4.93 19.07l1.41-1.41M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z" />
    <circle cx="12" cy="12" r="2.5" fill="currentColor" opacity="0.4" />
  </svg>
);

/**
 * Bulb "off" icon - Used for dark mode
 * Shows a dim, unlit bulb
 */
export const BulbOffIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M9 18h6M10 22h4M12 6a5 5 0 0 1 5 5c0 1.5-.5 2.8-1.4 3.8-.4.5-.6 1-.6 1.5V17H9v-.7c0-.5-.2-1-.6-1.5A5 5 0 0 1 12 6z" />
  </svg>
);

/**
 * Bulb "half" icon - Used for system preference
 * Shows a partially lit bulb
 */
export const BulbHalfIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M9 18h6M10 22h4M12 6a5 5 0 0 1 5 5c0 1.5-.5 2.8-1.4 3.8-.4.5-.6 1-.6 1.5V17H9v-.7c0-.5-.2-1-.6-1.5A5 5 0 0 1 12 6z" />
    <circle cx="12" cy="11" r="1.5" fill="currentColor" opacity="0.5" />
  </svg>
);
