/**
 * =============================================================================
 * Navigation Component
 * =============================================================================
 * 
 * Sidebar navigation with responsive mobile drawer.
 * 
 * STRUCTURE:
 * - Desktop: Fixed sidebar on left (always visible)
 * - Mobile: Hidden drawer that slides in from left
 * - Mobile header bar with hamburger toggle
 * 
 * ACCESSIBILITY FEATURES:
 * - Semantic <nav> element with aria-label
 * - aria-current="page" on active link
 * - aria-expanded on mobile toggle
 * - aria-controls linking toggle to nav
 * - Keyboard navigation support
 * - Focus management on mobile open/close
 * 
 * @module components/Navigation
 */

import React, { useCallback, useRef, useEffect } from 'react';
import { 
  portfolioCategories, 
  projectCategories, 
  secondaryPages 
} from '../data';
import ThemeToggle from './ThemeToggle';
import '../styles/Navigation.css';

/**
 * Active navigation indicator dot
 * Purely decorative, indicates current page
 */
const ActiveDot = () => (
  <span className="nav-dot" aria-hidden="true">
    •
  </span>
);

/**
 * Navigation component
 * 
 * @param {Object} props
 * @param {string} props.currentPage - ID of current page
 * @param {Function} props.setPage - Function to navigate to page
 * @param {string} props.theme - Current theme preference
 * @param {Function} props.setTheme - Function to update theme
 * @param {boolean} props.isOpen - Whether mobile nav is open
 * @param {Function} props.setIsOpen - Function to toggle mobile nav
 */
const Navigation = ({
  currentPage,
  setPage,
  theme,
  setTheme,
  isOpen,
  setIsOpen,
}) => {
  // Ref for focus management
  const navRef = useRef(null);
  const firstLinkRef = useRef(null);

  /**
   * Navigate to page and close mobile drawer
   * Uses useCallback to prevent unnecessary re-renders
   */
  const navigateTo = useCallback(
    (pageId) => {
      setPage(pageId);
      setIsOpen(false);
    },
    [setPage, setIsOpen]
  );

  /**
   * Handle keyboard navigation within nav
   */
  const handleKeyDown = useCallback(
    (event) => {
      // Escape closes mobile nav
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    },
    [isOpen, setIsOpen]
  );

  /**
   * Focus first link when mobile nav opens
   * Important for keyboard users
   */
  useEffect(() => {
    if (isOpen && firstLinkRef.current) {
      // Small delay to allow CSS transition to start
      setTimeout(() => {
        firstLinkRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  /**
   * Render a navigation group
   */
  const renderNavGroup = (items, isFirstGroup = false) => (
    <ul className="nav-group">
      {items.map(({ id, label }, index) => {
        const isActive = currentPage === id;
        const isFirstLink = isFirstGroup && index === 0;

        return (
          <li key={id}>
            <button
              ref={isFirstLink ? firstLinkRef : null}
              className={`nav-link ${isActive ? 'nav-link--active' : ''}`}
              onClick={() => navigateTo(id)}
              aria-current={isActive ? 'page' : undefined}
            >
              {isActive && <ActiveDot />}
              <span>{label}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      {/* ================================================================
          MOBILE HEADER BAR
          Visible only on small screens (< 860px)
          ================================================================ */}
      <header className="mobile-header">
        <button
          className="mobile-header__logo"
          onClick={() => navigateTo('dance')}
          aria-label="Go to homepage"
        >
          Claire Sersun
        </button>

        <button
          className="mobile-header__toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="main-navigation"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </header>

      {/* ================================================================
          SIDEBAR NAVIGATION
          Fixed on desktop, slide-in drawer on mobile
          ================================================================ */}
      <nav
        ref={navRef}
        id="main-navigation"
        className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}
        aria-label="Main navigation"
        onKeyDown={handleKeyDown}
      >
        <div className="sidebar__inner">
          {/* Logo / Home link (hidden on mobile - redundant with header) */}
          <button
            className="sidebar__logo"
            onClick={() => navigateTo('dance')}
            aria-label="Go to homepage"
          >
            Claire Sersun
          </button>

          {/* Portfolio categories */}
          {renderNavGroup(portfolioCategories, true)}

          {/* Personal projects */}
          {renderNavGroup(projectCategories)}

          {/* Secondary pages */}
          {renderNavGroup(secondaryPages)}

          {/* Theme toggle at bottom */}
          <div className="sidebar__footer">
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </div>
        </div>
      </nav>

      {/* ================================================================
          MOBILE OVERLAY
          Darkens background when nav is open, closes nav on click
          ================================================================ */}
      {isOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navigation;
