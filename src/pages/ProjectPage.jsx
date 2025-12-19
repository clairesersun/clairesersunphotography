/**
 * =============================================================================
 * Project Page
 * =============================================================================
 * 
 * Personal project display with parallax-only scroll.
 * Simpler than portfolio pages to let the narrative breathe.
 * 
 * DIFFERENCES FROM GALLERY PAGE:
 * - Includes header with title and description
 * - Uses only parallax scroll (no pairs, scale, or drift)
 * - Has its own curated image set with specific alt text
 * 
 * PROJECTS:
 * - HOME: Exploration of belonging and bodily memory
 * - Museum Mile: Fashion against cultural architecture
 * - Illusion: Perception and reality
 * 
 * @module pages/ProjectPage
 */

import React from 'react';
import { ScrollImageSingle } from '../components';
import { getProject } from '../data';
import '../styles/Project.css';

/**
 * Project page for personal/editorial projects
 * 
 * @param {Object} props
 * @param {string} props.projectId - Project ID (with 'p-' prefix)
 */
const ProjectPage = ({ projectId }) => {
  // Get project data (handles 'p-' prefix)
  const project = getProject(projectId);

  // Fallback if project not found
  if (!project) {
    return (
      <main id="main-content" className="main project" tabIndex="-1">
        <header className="project-header">
          <h1>Project Not Found</h1>
          <p>The requested project could not be found.</p>
        </header>
      </main>
    );
  }

  return (
    <main id="main-content" className="main gallery project" tabIndex="-1">
      {/* Project header with title and description */}
      <header className="project-header">
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </header>

      {/* Images with parallax-only effect for cleaner presentation */}
      {project.images.map((image, index) => (
        <ScrollImageSingle
          key={index}
          src={image.src}
          alt={image.alt}
          index={index}
          effect="full-parallax"
        />
      ))}
    </main>
  );
};

export default ProjectPage;
