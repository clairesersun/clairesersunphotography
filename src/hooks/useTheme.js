/**
 * =============================================================================
 * useTheme Hook
 * =============================================================================
 * 
 * Manages theme state with system preference detection and persistence.
 * 
 * FEATURES:
 * - Persists user preference to localStorage
 * - Respects system preference when set to 'system'
 * - Listens for system preference changes in real-time
 * - Provides resolved theme value for actual rendering
 * 
 * USAGE:
 *   const { theme, resolved, setTheme } = useTheme();
 *   
 *   // theme: 'light' | 'dark' | 'system' (user's selection)
 *   // resolved: 'light' | 'dark' (actual theme to render)
 *   // setTheme: Function to update theme preference
 * 
 * ACCESSIBILITY NOTES:
 * - System preference respects user's OS-level accessibility settings
 * - Some users set dark mode for reduced eye strain or light sensitivity
 * - Always providing a toggle respects user autonomy
 * 
 * @module hooks/useTheme
 */

import { useState, useEffect, useCallback } from 'react';

// Storage key for theme preference
const STORAGE_KEY = 'claire-sersun-theme';

// Valid theme values
const VALID_THEMES = ['light', 'dark', 'system'];

/**
 * Custom hook for theme management
 * @returns {{ theme: string, resolved: string, setTheme: Function }}
 */
const useTheme = () => {
  // User's selected preference: 'light', 'dark', or 'system'
  const [theme, setThemeState] = useState('system');
  
  // Resolved/actual theme to render: 'light' or 'dark'
  const [resolved, setResolved] = useState('dark');

  /**
   * Load saved preference from localStorage on mount
   * Falls back to 'system' if no saved preference or invalid value
   */
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && VALID_THEMES.includes(saved)) {
        setThemeState(saved);
      }
    } catch (error) {
      // localStorage might be unavailable (private browsing, etc.)
      console.warn('Unable to access localStorage for theme preference');
    }
  }, []);

  /**
   * Resolve system preference and listen for changes
   * When theme is 'system', we need to detect the OS preference
   */
  useEffect(() => {
    // Check if window is available (SSR safety)
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    /**
     * Update resolved theme based on current selection and system preference
     */
    const updateResolved = () => {
      if (theme === 'system') {
        setResolved(mediaQuery.matches ? 'dark' : 'light');
      } else {
        setResolved(theme);
      }
    };

    // Initial resolution
    updateResolved();

    // Listen for system preference changes
    // This fires when user changes OS dark mode setting
    mediaQuery.addEventListener('change', updateResolved);

    return () => {
      mediaQuery.removeEventListener('change', updateResolved);
    };
  }, [theme]);

  /**
   * Set theme preference with persistence
   * @param {string} newTheme - 'light', 'dark', or 'system'
   */
  const setTheme = useCallback((newTheme) => {
    if (!VALID_THEMES.includes(newTheme)) {
      console.warn(`Invalid theme value: ${newTheme}`);
      return;
    }

    setThemeState(newTheme);

    try {
      localStorage.setItem(STORAGE_KEY, newTheme);
    } catch (error) {
      // localStorage might be unavailable
      console.warn('Unable to save theme preference to localStorage');
    }
  }, []);

  return { theme, resolved, setTheme };
};

export default useTheme;
