/**
 * =============================================================================
 * useScrollProgress Hook
 * =============================================================================
 * 
 * Tracks scroll progress of an element through the viewport.
 * Used for parallax effects and scroll-based animations.
 * 
 * FEATURES:
 * - Tracks element position relative to viewport
 * - Returns progress value from 0 (entering) to 1+ (leaving)
 * - Combines IntersectionObserver for visibility with scroll listener for progress
 * - Passive scroll listener for performance
 * 
 * USAGE:
 *   const [ref, progress, isVisible] = useScrollProgress();
 *   
 *   const transform = `translateY(${(1 - progress) * 25}px)`;
 *   
 *   return (
 *     <div ref={ref} style={{ transform }}>
 *       Content
 *     </div>
 *   );
 * 
 * PROGRESS VALUES:
 * - 0.0: Element just entering bottom of viewport
 * - 0.5: Element centered in viewport
 * - 1.0: Element at top of viewport
 * - 1.5: Element leaving top of viewport (clamped)
 * 
 * PERFORMANCE NOTES:
 * - Scroll listener is passive (doesn't block scrolling)
 * - Progress is clamped to prevent extreme values
 * - Consider debouncing if many elements use this hook
 * 
 * ACCESSIBILITY NOTES:
 * - Animations should respect prefers-reduced-motion
 * - Content should be accessible without animations
 * 
 * @module hooks/useScrollProgress
 */

import { useState, useEffect, useRef } from 'react';
import { config } from '../data';

/**
 * Clamp a value between min and max
 * @param {number} value 
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

/**
 * Custom hook for tracking scroll progress
 * 
 * @param {Object} options - Configuration options
 * @param {number} [options.maxProgress=1.5] - Maximum progress value (for clamping)
 * @returns {[React.RefObject, number, boolean]} - [ref, progress, isVisible]
 */
const useScrollProgress = (options = {}) => {
  const { maxProgress = 1.5 } = options;
  
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = ref.current;
    
    // Guard: No element to observe
    if (!element) return;

    // Guard: IntersectionObserver not supported
    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    /**
     * Intersection Observer for initial visibility detection
     * This prevents scroll calculations for off-screen elements
     */
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: config.images.observerThreshold,
        rootMargin: config.images.observerRootMargin,
      }
    );

    observer.observe(element);

    /**
     * Scroll handler for progress calculation
     * Uses passive listener for performance
     */
    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      /**
       * Progress calculation:
       * - When element.top = windowHeight (just entering): progress = 0
       * - When element.top = 0 (at top of viewport): progress = 1
       * - Clamped to prevent extreme values
       */
      const scrollProgress = 1 - (rect.top / windowHeight);
      setProgress(clamp(scrollProgress, 0, maxProgress));
    };

    // Add scroll listener with passive flag
    // Passive listeners can't call preventDefault, allowing browser optimizations
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial calculation
    handleScroll();

    // Cleanup
    return () => {
      observer.unobserve(element);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [maxProgress]);

  return [ref, progress, isVisible];
};

export default useScrollProgress;
