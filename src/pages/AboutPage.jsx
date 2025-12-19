/**
 * =============================================================================
 * About Page
 * =============================================================================
 * 
 * Photographer biography with animated entrance.
 * 
 * LAYOUT:
 * - Two-column grid on desktop (portrait + bio)
 * - Single column on mobile (stacked)
 * 
 * ANIMATIONS:
 * - Portrait slides in from left
 * - Text fades up with slight delay
 * - Triggered by intersection observer
 * 
 * SEO:
 * - Location keywords (NYC, LA) in content
 * - Service keywords naturally integrated
 * - Descriptive alt text on portrait
 * 
 * @module pages/AboutPage
 */

import React from 'react';
import { useInView } from '../hooks';
import aboutContent from '../data/about';
import '../styles/About.css';

/**
 * About page component
 */
const AboutPage = () => {
  // Track when image enters viewport for animation trigger
  const [imageRef, imageVisible] = useInView();

  return (
    <main id="main-content" className="main about" tabIndex="-1">
      <div className="about__wrapper">
        {/* Portrait image with entrance animation */}
        <figure
          ref={imageRef}
          className={`about__image ${imageVisible ? 'about__image--visible' : ''}`}
        >
          <img
            src={aboutContent.image.src}
            alt={aboutContent.image.alt}
            loading="eager"
          />
        </figure>

        {/* Biography text with entrance animation */}
        <article
          className={`about__text ${imageVisible ? 'about__text--visible' : ''}`}
        >
          <h1>{aboutContent.title}</h1>
          <p className="about__subtitle">{aboutContent.subtitle}</p>

          {aboutContent.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </article>
      </div>
    </main>
  );
};

export default AboutPage;
