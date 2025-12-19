/**
 * =============================================================================
 * APP COMPONENT
 * =============================================================================
 * 
 * Main application shell.
 * Handles routing, theme management, and loading state.
 * 
 * ARCHITECTURE:
 * - Uses state-based routing (no React Router needed for this SPA)
 * - Theme managed via useTheme hook with localStorage persistence
 * - Loading screen plays once on initial load
 * 
 * ACCESSIBILITY:
 * - Skip link for keyboard navigation
 * - Proper heading hierarchy maintained across pages
 * - Theme toggle accessible via keyboard
 * 
 * @module App
 */

import React, { useState, useEffect, useCallback } from 'react';

// Hooks
import { useTheme } from './hooks';

// Components
import { Navigation, LoadingScreen, SkipLink } from './components';

// Pages
import { 
  GalleryPage, 
  ProjectPage, 
  AboutPage, 
  PressPage, 
  ContactPage 
} from './pages';

// Data
import { 
  getDefaultPage, 
  isPortfolioCategory, 
  isProject 
} from './data';

// Styles
import './styles/global.css';

/**
 * Main App component
 */
function App() {
  // ---------------------------------------------------------------------------
  // STATE
  // ---------------------------------------------------------------------------
  
  // Loading screen state (shows once on initial load)
  const [isLoading, setIsLoading] = useState(true);
  
  // Current page state (acts as router)
  const [currentPage, setCurrentPage] = useState(getDefaultPage());
  
  // Mobile menu state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Theme state (via custom hook)
  const { theme, resolved: resolvedTheme, setTheme } = useTheme();

  // ---------------------------------------------------------------------------
  // EFFECTS
  // ---------------------------------------------------------------------------
  
  /**
   * Scroll to top on page change
   * Using 'instant' behavior to avoid jarring smooth scroll during navigation
   */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage]);

  /**
   * Close mobile menu on escape key
   */
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  // ---------------------------------------------------------------------------
  // HANDLERS
  // ---------------------------------------------------------------------------
  
  /**
   * Handle loading screen completion
   */
  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  // ---------------------------------------------------------------------------
  // ROUTING
  // ---------------------------------------------------------------------------
  
  /**
   * Page router - renders appropriate component based on current page
   */
  const renderPage = () => {
    // Personal projects (prefixed with 'p-')
    if (isProject(currentPage)) {
      return <ProjectPage projectId={currentPage} />;
    }

    // Portfolio categories
    if (isPortfolioCategory(currentPage)) {
      return <GalleryPage category={currentPage} />;
    }

    // Secondary pages
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'press':
        return <PressPage />;
      case 'contact':
        return <ContactPage />;
      default:
        // Fallback to default gallery
        return <GalleryPage category={getDefaultPage()} />;
    }
  };

  // ---------------------------------------------------------------------------
  // RENDER
  // ---------------------------------------------------------------------------
  
  return (
    <div className={`app app--${resolvedTheme}`}>
      {/* Loading screen - unmounts after animation completes */}
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      {/* Skip to content link for accessibility */}
      <SkipLink />

      {/* Navigation sidebar */}
      <Navigation
        currentPage={currentPage}
        setPage={setCurrentPage}
        theme={theme}
        setTheme={setTheme}
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
      />

      {/* Page content */}
      {renderPage()}
    </div>
  );
}

export default App;
