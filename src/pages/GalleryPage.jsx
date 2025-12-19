/**
 * =============================================================================
 * Gallery Page
 * =============================================================================
 * 
 * Portfolio category display with varied scroll behaviors.
 * Used for Dance, Fashion, Beauty, Nature, Analog, and Motion pages.
 * 
 * FEATURES:
 * - Varied scroll effects (parallax, pairs, scale, drift)
 * - Responsive layout (pairs stack on mobile)
 * - Lazy loading for performance
 * - SEO-optimized alt text
 * 
 * LAYOUT SEQUENCE:
 * Images alternate between different display modes based on
 * the pattern defined in utils/getLayoutSequence:
 * - Full parallax: Vertical float effect
 * - Pair scroll: Two side-by-side with horizontal scroll
 * - Full scale: Zoom out on scroll
 * - Full drift: Horizontal slide
 * 
 * @module pages/GalleryPage
 */

import React, { useMemo } from 'react';
import { ScrollImageSingle, ScrollImagePair } from '../components';
import { getCategoryContent } from '../data';
import { getLayoutSequence } from '../utils';
import '../styles/Gallery.css';

/**
 * Gallery page for portfolio categories
 * 
 * @param {Object} props
 * @param {string} props.category - Category ID ('dance', 'fashion', etc.)
 */
const GalleryPage = ({ category }) => {
  // Get images and alt text for this category
  const { images, alts } = getCategoryContent(category);

  // Generate layout sequence - memoized to prevent recalculation
  const sequence = useMemo(
    () => getLayoutSequence(images.length),
    [images.length]
  );

  return (
    <main id="main-content" className="main gallery" tabIndex="-1">
      {sequence.map((item, index) => {
        // Paired images
        if (item.type === 'pair') {
          return (
            <ScrollImagePair
              key={`pair-${index}`}
              images={[images[item.indices[0]], images[item.indices[1]]]}
              alts={[
                alts[item.indices[0]] || `${category} photograph`,
                alts[item.indices[1]] || `${category} photograph`,
              ]}
              startIndex={item.indices[0]}
            />
          );
        }

        // Single full-width image
        return (
          <ScrollImageSingle
            key={`single-${index}`}
            src={images[item.indices[0]]}
            alt={alts[item.indices[0]] || `${category} photograph`}
            index={item.indices[0]}
            effect={item.type}
          />
        );
      })}
    </main>
  );
};

export default GalleryPage;
