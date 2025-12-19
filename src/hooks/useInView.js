/**
 * =============================================================================
 * useInView Hook
 * =============================================================================
 * 
 * Intersection Observer hook for detecting when elements enter the viewport.
 * Used for scroll-triggered animations and lazy loading.
 * 
 * FEATURES:
 * - Lightweight visibility detection
 * - Configurable threshold and root margin
 * - Option to observe once or continuously
 * - Automatic cleanup on unmount
 * 
 * USAGE:
 *   const [ref, isVisible] = useInView();
 *   
 *   return (
 *     <div ref={ref} className={isVisible ? 'visible' : ''}>
 *       Content
 *     </div>
 *   );
 * 
 * ACCESSIBILITY NOTES:
 * - This hook is purely visual; animations should be subtle
 * - prefers-reduced-motion should be respected in CSS
 * - Content should be accessible even without animations
 * 
 * @module hooks/useInView
 */

import { useState, useEffect, useRef } from 'react';
import { config } from '../data';

/**
 * Custom hook for viewport visibility detection
 * 
 * @param {Object} options - Configuration options
 * @param {boolean} [options.once=true] - If true, stops observing after first intersection
 * @param {number} [options.threshold] - Percentage of element visible to trigger (0-1)
 * @param {string} [options.rootMargin] - Margin around root for early/late trigger
 * @returns {[React.RefObject, boolean]} - [ref to attach, visibility state]
 */
const useInView = (options = {}) => {
  const {
    once = true,
    threshold = config.images.observerThreshold,
    rootMargin = '0px',
  } = options;

  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    
    // Guard: No element to observe
    if (!element) return;

    // Guard: IntersectionObserver not supported (very old browsers)
    if (typeof IntersectionObserver === 'undefined') {
      // Fallback: Just show the element
      setIsVisible(true);
      return;
    }

    /**
     * Callback fired when intersection changes
     * @param {IntersectionObserverEntry[]} entries
     */
    const handleIntersection = ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        
        // Stop observing if we only need to detect once
        if (once) {
          observer.unobserve(element);
        }
      } else if (!once) {
        // Only reset if we're continuously observing
        setIsVisible(false);
      }
    };

    // Create observer instance
    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin,
    });

    // Start observing
    observer.observe(element);

    // Cleanup on unmount
    return () => {
      observer.unobserve(element);
    };
  }, [once, threshold, rootMargin]);

  return [ref, isVisible];
};

export default useInView;
