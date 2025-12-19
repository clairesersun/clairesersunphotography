/**
 * =============================================================================
 * Press Page
 * =============================================================================
 * 
 * Exhibitions, publications, awards, and press mentions.
 * 
 * STRUCTURE:
 * - Sections for each category
 * - Chronological within sections (newest first)
 * - Optional links to external sources
 * 
 * ACCESSIBILITY:
 * - Semantic heading hierarchy (h1 → h2)
 * - External links open in new tab with appropriate rel attributes
 * - Links styled with visible hover states
 * 
 * @module pages/PressPage
 */

import React from 'react';
import pressData from '../data/press';
import '../styles/Press.css';

/**
 * Press/Exhibitions page component
 */
const PressPage = () => {
  return (
    <main id="main-content" className="main press" tabIndex="-1">
      <h1>Exhibitions and Press</h1>

      {pressData.map((section) => (
        <section key={section.title} className="press-section">
          <h2>{section.title}</h2>
          
          <ul>
            {section.items.map((item, index) => (
              <li key={index}>
                <span className="press-section__year">{item.year}</span>
                
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.text}
                    {/* Screen reader only: indicate external link */}
                    <span className="sr-only"> (opens in new tab)</span>
                  </a>
                ) : (
                  <span>{item.text}</span>
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
};

export default PressPage;
