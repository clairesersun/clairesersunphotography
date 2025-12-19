/**
 * =============================================================================
 * Contact Page
 * =============================================================================
 * 
 * Contact information with obfuscated email.
 * 
 * ANTI-SPAM:
 * - Email address is split in config (user + domain)
 * - Reconstructed only at render time
 * - Not visible in static HTML source
 * - Bots typically scrape static content
 * 
 * ACCESSIBILITY:
 * - Clear heading hierarchy
 * - Descriptive link text
 * - Sufficient color contrast
 * 
 * @module pages/ContactPage
 */

import React from 'react';
import { config } from '../data';
import { getEmail, getInstagramUrl } from '../utils';
import '../styles/Contact.css';

/**
 * Contact page component
 */
const ContactPage = () => {
  return (
    <main id="main-content" className="main contact" tabIndex="-1">
      <h1>Contact</h1>
      
      <p className="contact__subheadline">
        For bookings, collaborations, or inquiries.
      </p>

      {/* Email link - reconstructed on render to prevent scraping */}
      <a
        href={`mailto:${getEmail()}`}
        className="contact__email"
      >
        {getEmail()}
      </a>

      {/* Instagram link */}
      <a
        href={getInstagramUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="contact__instagram"
      >
        @{config.contact.instagram}
        <span className="sr-only"> (opens Instagram in new tab)</span>
      </a>

      <p className="contact__location">
        {config.contact.location}
      </p>
    </main>
  );
};

export default ContactPage;
