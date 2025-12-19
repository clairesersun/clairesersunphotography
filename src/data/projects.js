/**
 * =============================================================================
 * PERSONAL PROJECTS DATA
 * =============================================================================
 * 
 * Structured data for personal/editorial projects.
 * Each project has its own narrative and curated image set.
 * 
 * Projects display differently from portfolio categories:
 * - Include a header with title and description
 * - Use parallax-only scroll (no paired images or varied effects)
 * - Have their own curated image sets with specific alt text
 * 
 * HOW TO ADD A NEW PROJECT:
 * 1. Add project data below with unique key
 * 2. Add navigation entry in navigation.js with 'p-' prefix
 *    Example: { id: 'p-your-project', label: 'Your Project Title' }
 * 3. The key here must match the navigation ID minus the 'p-' prefix
 * 
 * @module data/projects
 */

const projects = {
  // ---------------------------------------------------------------------------
  // HOME
  // Personal project exploring themes of belonging and bodily memory
  // ---------------------------------------------------------------------------
  home: {
    title: 'HOME',
    description: 'An exploration of belonging and bodily memory through movement.',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=1600&q=85',
        alt: 'Dancer mid-leap, arms reaching upward - exploring themes of home and belonging',
      },
      {
        src: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=1600&q=85',
        alt: 'Two dancers in intimate embrace - bodily memory and connection',
      },
      {
        src: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=1600&q=85',
        alt: 'Solitary figure in vast space - contemplating belonging',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // MUSEUM MILE
  // Fashion photography against NYC cultural institution architecture
  // ---------------------------------------------------------------------------
  'museum-mile': {
    title: 'Museum Mile',
    description: 'Fashion against the architecture of cultural institutions.',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600&q=85',
        alt: 'Model in silk against museum columns - fashion meets architecture on Museum Mile',
      },
      {
        src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1600&q=85',
        alt: 'Editorial portrait on museum steps - Museum Mile NYC fashion photography',
      },
      {
        src: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1600&q=85',
        alt: 'Figure framed by institutional architecture - NYC cultural landmarks',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // ILLUSION
  // Conceptual project exploring perception and reality
  // ---------------------------------------------------------------------------
  illusion: {
    title: 'Illusion',
    description: 'The space between perception and reality.',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1600&q=85',
        alt: 'Portrait with shadow play - exploring perception and visual illusion',
      },
      {
        src: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=1600&q=85',
        alt: 'Subject reflected in mirror - examining illusion and reality',
      },
    ],
  },
};

/**
 * Get project data by ID
 * Handles the 'p-' prefix used in navigation
 * 
 * @param {string} projectId - The project ID (with or without 'p-' prefix)
 * @returns {Object|null} Project data or null if not found
 */
export const getProject = (projectId) => {
  // Remove 'p-' prefix if present
  const key = projectId.replace('p-', '');
  return projects[key] || null;
};

/**
 * Get all project keys
 * @returns {string[]} Array of project keys
 */
export const getProjectKeys = () => Object.keys(projects);

export default projects;
