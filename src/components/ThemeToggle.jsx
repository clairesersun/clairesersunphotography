/**
 * =============================================================================
 * Theme Toggle Button
 * =============================================================================
 * 
 * Button component for cycling through theme options.
 * Cycles: light → dark → system → light
 * 
 * ACCESSIBILITY:
 * - Clear aria-label announcing current state and action
 * - Visible focus indicator (defined in CSS)
 * - Sufficient touch target size (44x44px minimum)
 * 
 * @module components/ThemeToggle
 */

import React from 'react';
import { BulbOnIcon, BulbOffIcon, BulbHalfIcon } from './ThemeIcons';
import '../styles/ThemeToggle.css';

/**
 * Theme labels for accessibility announcements
 */
const THEME_LABELS = {
  light: 'Light mode',
  dark: 'Dark mode',
  system: 'System preference',
};

/**
 * Theme cycle order
 */
const NEXT_THEME = {
  light: 'dark',
  dark: 'system',
  system: 'light',
};

/**
 * Theme toggle button component
 * 
 * @param {Object} props
 * @param {string} props.theme - Current theme ('light', 'dark', or 'system')
 * @param {Function} props.setTheme - Function to update theme
 */
const ThemeToggle = ({ theme, setTheme }) => {
  /**
   * Handle click - cycle to next theme
   */
  const handleClick = () => {
    setTheme(NEXT_THEME[theme]);
  };

  /**
   * Handle keyboard interaction
   * Space and Enter should activate the button (default behavior)
   */
  const handleKeyDown = (event) => {
    // Allow arrow keys to cycle themes directly
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault();
      setTheme(NEXT_THEME[theme]);
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault();
      // Cycle backwards
      const prevTheme = { light: 'system', dark: 'light', system: 'dark' };
      setTheme(prevTheme[theme]);
    }
  };

  return (
    <button
      className="theme-toggle"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={`Current theme: ${THEME_LABELS[theme]}. Click to change.`}
      title={`Theme: ${THEME_LABELS[theme]}`}
    >
      {theme === 'light' && <BulbOnIcon />}
      {theme === 'dark' && <BulbOffIcon />}
      {theme === 'system' && <BulbHalfIcon />}
    </button>
  );
};

export default ThemeToggle;
