/**
 * =============================================================================
 * Skip Link Component
 * =============================================================================
 * 
 * Accessibility feature that allows keyboard users to skip navigation
 * and jump directly to main content.
 * 
 * BEHAVIOR:
 * - Hidden visually until focused
 * - Becomes visible when user tabs to it
 * - Clicking/activating moves focus to main content
 * 
 * WHY THIS MATTERS:
 * - Screen reader users hear navigation on every page
 * - Keyboard users must tab through all nav links
 * - Skip link provides efficient shortcut
 * 
 * WCAG 2.1 SUCCESS CRITERIA:
 * - 2.4.1 Bypass Blocks (Level A)
 * 
 * @module components/SkipLink
 */

import React from 'react';
import '../styles/SkipLink.css';

/**
 * Skip to content link
 * 
 * @param {Object} props
 * @param {string} [props.targetId='main-content'] - ID of element to skip to
 * @param {string} [props.children='Skip to content'] - Link text
 */
const SkipLink = ({ 
  targetId = 'main-content', 
  children = 'Skip to content' 
}) => {
  /**
   * Handle click - move focus to target element
   * Using href alone doesn't always move focus, so we do it manually
   */
  const handleClick = (event) => {
    event.preventDefault();
    
    const target = document.getElementById(targetId);
    if (target) {
      // Make target focusable if it isn't already
      if (!target.hasAttribute('tabindex')) {
        target.setAttribute('tabindex', '-1');
      }
      
      // Move focus to target
      target.focus();
      
      // Scroll into view
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <a
      href={`#${targetId}`}
      className="skip-link"
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

export default SkipLink;
