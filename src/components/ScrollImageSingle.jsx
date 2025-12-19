/**
 * =============================================================================
 * Scroll Image Single
 * =============================================================================
 * 
 * Full-width image with scroll-based transform effects.
 * 
 * SUPPORTED EFFECTS:
 * - full-parallax: Vertical offset creates depth illusion
 * - full-scale: Zoom out as user scrolls through
 * - full-drift: Horizontal slide, alternating direction
 * 
 * PERFORMANCE:
 * - Uses CSS transforms (GPU accelerated)
 * - will-change hint for browser optimization
 * - Lazy loading for images below the fold
 * - Passive scroll listener (in hook)
 * 
 * ACCESSIBILITY:
 * - Decorative transforms don't affect content
 * - Alt text provides image description
 * - prefers-reduced-motion disables transforms via CSS
 * 
 * @module components/ScrollImageSingle
 */

import React, { useMemo } from 'react';
import { useScrollProgress } from '../hooks';
import { config } from '../data';
import '../styles/ScrollImage.css';

/**
 * Calculate transform based on effect type and scroll progress
 * 
 * @param {string} effect - Effect type
 * @param {number} progress - Scroll progress (0-1.5)
 * @param {number} index - Image index (for alternating effects)
 * @returns {string} CSS transform value
 */
const calculateTransform = (effect, progress, index) => {
  switch (effect) {
    case 'full-parallax': {
      // Vertical offset creates depth illusion
      // Moves up to 25px as element scrolls through viewport
      const parallaxY = (1 - progress) * 25;
      return `translateY(${parallaxY}px) scale(1.02)`;
    }

    case 'full-scale': {
      // Zoom out as user scrolls through
      // Starts at 1.12x, settles to 1.0x
      const scale = 1.12 - progress * 0.12;
      return `scale(${Math.max(1, scale)})`;
    }

    case 'full-drift': {
      // Horizontal slide, alternating left/right by index
      const direction = index % 2 === 0 ? -1 : 1;
      const drift = (1 - progress) * 6 * direction;
      return `translateX(${drift}%) scale(1.03)`;
    }

    default:
      return 'scale(1.02)';
  }
};

/**
 * Single full-width scroll image component
 * 
 * @param {Object} props
 * @param {string} props.src - Image source URL
 * @param {string} props.alt - Image alt text
 * @param {number} props.index - Image index in sequence
 * @param {string} props.effect - Effect type ('full-parallax', 'full-scale', 'full-drift')
 */
const ScrollImageSingle = ({ src, alt, index, effect }) => {
  const [ref, progress, isVisible] = useScrollProgress();

  // Memoize transform calculation to prevent unnecessary recalculation
  const transform = useMemo(
    () => calculateTransform(effect, progress, index),
    [effect, progress, index]
  );

  // Determine loading strategy
  // First few images load eagerly for LCP, rest lazy load
  const loadingStrategy = index < config.images.eagerLoadCount ? 'eager' : 'lazy';

  return (
    <figure
      ref={ref}
      className={`scroll-single ${isVisible ? 'scroll-single--visible' : ''}`}
    >
      <div
        className="scroll-single__inner"
        style={{ transform }}
      >
        <img
          src={src}
          alt={alt}
          loading={loadingStrategy}
          decoding="async"
        />
      </div>
    </figure>
  );
};

export default ScrollImageSingle;
