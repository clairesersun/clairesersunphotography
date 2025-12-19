/**
 * =============================================================================
 * Scroll Image Pair
 * =============================================================================
 * 
 * Two images side-by-side with horizontal scroll effect.
 * Second image peeks in from right, then both scroll left as user scrolls down.
 * 
 * BEHAVIOR:
 * - Initial: First image visible, second peeking from right edge
 * - Scrolling: Track moves left, revealing second image
 * - Exit: First image exits left as user scrolls past
 * 
 * MOBILE:
 * - Stacks vertically (no horizontal scroll)
 * - Handled via CSS media query
 * 
 * ACCESSIBILITY:
 * - Both images have descriptive alt text
 * - Transform is purely decorative
 * - Content accessible at any scroll position
 * 
 * @module components/ScrollImagePair
 */

import React, { useMemo } from 'react';
import { useScrollProgress } from '../hooks';
import { config } from '../data';
import '../styles/ScrollImage.css';

/**
 * Paired images with horizontal scroll effect
 * 
 * @param {Object} props
 * @param {string[]} props.images - Array of two image URLs
 * @param {string[]} props.alts - Array of two alt texts
 * @param {number} props.startIndex - Index of first image in sequence
 */
const ScrollImagePair = ({ images, alts, startIndex }) => {
  const [ref, progress, isVisible] = useScrollProgress();

  /**
   * Calculate horizontal track position based on scroll progress
   * 
   * Track behavior:
   * - Starts at -10% (second image peeking)
   * - Moves to -54% as user scrolls (first image exits)
   * - Rate: 22% movement per 1.0 progress
   */
  const trackTransform = useMemo(() => {
    const scrollX = -10 - progress * 22;
    return `translateX(${scrollX}%)`;
  }, [progress]);

  // Determine loading strategy for first image
  const firstImageLoading =
    startIndex < config.images.eagerLoadCount ? 'eager' : 'lazy';

  return (
    <div
      ref={ref}
      className={`scroll-pair ${isVisible ? 'scroll-pair--visible' : ''}`}
    >
      <div
        className="scroll-pair__track"
        style={{ transform: trackTransform }}
      >
        {/* First image */}
        <figure className="scroll-pair__image">
          <img
            src={images[0]}
            alt={alts[0]}
            loading={firstImageLoading}
            decoding="async"
          />
        </figure>

        {/* Second image */}
        <figure className="scroll-pair__image">
          <img
            src={images[1]}
            alt={alts[1]}
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>
    </div>
  );
};

export default ScrollImagePair;
