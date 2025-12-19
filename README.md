# Claire Sersun Photography

A professional photography portfolio website built with React. Features dance, fashion, beauty, nature, analog, and motion photography with scroll-based animations and full accessibility support.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.x-61dafb.svg)
![Accessibility](https://img.shields.io/badge/WCAG-AA-green.svg)

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
  - [GitHub Pages (Recommended)](#github-pages-recommended)
  - [Vercel](#vercel)
- [Content Management](#content-management)
  - [Adding Images](#adding-images)
  - [Adding Portfolio Categories](#adding-portfolio-categories)
  - [Adding Personal Projects](#adding-personal-projects)
  - [Updating Press/Exhibitions](#updating-pressexhibitions)
  - [Updating Contact Info](#updating-contact-info)
- [Customization](#customization)
- [Accessibility](#accessibility)
- [Performance & SEO](#performance--seo)
- [Lighthouse Scores](#lighthouse-scores)
- [Maintenance](#maintenance)
- [Troubleshooting](#troubleshooting)

---

## About

This portfolio website showcases photography across multiple disciplines:

| Category | Description |
|----------|-------------|
| **Dance** | Movement, ballet, contemporary, modern dance |
| **Fashion + Editorial** | High fashion, runway, editorial spreads |
| **Beauty** | Portraits, close-ups, beauty editorial |
| **Nature** | Landscapes, flora, fauna |
| **Analog** | Film photography, vintage cameras |
| **Motion** | Video stills, behind-the-scenes |

### Personal Projects
- **HOME** - Exploration of belonging and bodily memory
- **Museum Mile** - Fashion against NYC cultural architecture
- **Illusion** - Perception and reality

---

## Features

✅ **Responsive Design** - Mobile, tablet, desktop optimized  
✅ **Dark/Light Theme** - System preference detection + manual toggle  
✅ **Animated Loading Screen** - Pirelli Calendar-inspired intro  
✅ **Varied Scroll Effects** - Parallax, horizontal pairs, scale, drift  
✅ **WCAG AA Accessible** - Skip links, keyboard nav, screen reader support  
✅ **SEO Optimized** - Semantic HTML, structured data, optimized images  
✅ **Performance Optimized** - Lazy loading, minimal dependencies  
✅ **Email Obfuscation** - Anti-spam protection  

---

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) v16 or higher
- npm (comes with Node.js)
- [Git](https://git-scm.com/)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/claire-sersun-photography.git

# 2. Navigate to project directory
cd claire-sersun-photography

# 3. Install dependencies
npm install

# 4. Start development server
npm start
```

The site will open at `http://localhost:3000`

---

## Project Structure

```
claire-sersun-photography/
├── public/
│   ├── index.html          # HTML template with SEO meta tags
│   ├── manifest.json       # PWA manifest
│   ├── robots.txt          # Search engine directives
│   └── favicon.ico         # Site icon (replace with yours)
│
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── LoadingScreen.jsx
│   │   ├── Navigation.jsx
│   │   ├── ScrollImageSingle.jsx
│   │   ├── ScrollImagePair.jsx
│   │   ├── SkipLink.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── ThemeIcons.jsx
│   │   └── index.js
│   │
│   ├── data/               # Content and configuration (EDIT THESE)
│   │   ├── config.js       # Site settings, contact info
│   │   ├── navigation.js   # Navigation structure
│   │   ├── images.js       # Image URLs and alt text
│   │   ├── projects.js     # Personal project data
│   │   ├── about.js        # About page content
│   │   ├── press.js        # Press/exhibitions data
│   │   └── index.js
│   │
│   ├── hooks/              # Custom React hooks
│   │   ├── useTheme.js
│   │   ├── useInView.js
│   │   ├── useScrollProgress.js
│   │   └── index.js
│   │
│   ├── pages/              # Page components
│   │   ├── GalleryPage.jsx
│   │   ├── ProjectPage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── PressPage.jsx
│   │   ├── ContactPage.jsx
│   │   └── index.js
│   │
│   ├── styles/             # CSS styles
│   │   ├── global.css      # Reset, variables, base styles
│   │   ├── Navigation.css
│   │   ├── LoadingScreen.css
│   │   ├── ScrollImage.css
│   │   └── [page].css
│   │
│   ├── utils/              # Utility functions
│   │   └── index.js
│   │
│   ├── App.js              # Main app component
│   └── index.js            # Entry point
│
├── package.json
└── README.md
```

---

## Deployment

### GitHub Pages (Recommended)

GitHub Pages is free and ideal for portfolio sites.

#### Step 1: Update package.json

Edit the `homepage` field with your GitHub username:

```json
{
  "homepage": "https://yourusername.github.io/claire-sersun-photography"
}
```

#### Step 2: Deploy

```bash
npm run deploy
```

This will:
1. Build the production bundle
2. Push to `gh-pages` branch
3. Site goes live in 1-2 minutes

#### Step 3: Configure GitHub

1. Go to repository **Settings** → **Pages**
2. Source: `gh-pages` branch
3. Save

Your site will be live at: `https://yourusername.github.io/claire-sersun-photography`

#### Custom Domain

1. Create `public/CNAME` file with your domain:
   ```
   www.clairesersun.com
   ```

2. Configure DNS with your registrar:
   - **A Records** pointing to GitHub IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Or **CNAME** record: `yourusername.github.io`

3. Enable **HTTPS** in GitHub Pages settings

---

### Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow prompts to link account
```

Custom domain: Vercel Dashboard → Project → Settings → Domains

---

## Content Management

All content is in `src/data/` - edit these files to update the site.

### Adding Images

Edit `src/data/images.js`:

```javascript
export const portfolioImages = {
  dance: [
    'https://your-cdn.com/dance-image-1.jpg',
    'https://your-cdn.com/dance-image-2.jpg',
    // Add new images here
  ],
};

export const altText = {
  dance: [
    'Dance photographer NYC: description of image 1',
    'Ballet photography: description of image 2',
    // Match order with images array
  ],
};
```

#### Image Recommendations

| Type | Size | Quality | Format |
|------|------|---------|--------|
| Portfolio | 1600px width | 85% | JPG/WebP |
| Loader | 400px width | 60% | JPG |
| About | 1000px width | 85% | JPG |
| OG Image | 1200x630px | 85% | JPG |

#### Hosting Options

- **Cloudinary** (recommended) - Free tier, auto optimization
- **AWS S3 + CloudFront** - Scalable, professional
- **Imgix** - Advanced image processing

---

### Adding Portfolio Categories

#### 1. Add to navigation (`src/data/navigation.js`):

```javascript
export const portfolioCategories = [
  // ... existing
  { id: 'newcategory', label: 'New Category' },
];
```

#### 2. Add images (`src/data/images.js`):

```javascript
export const portfolioImages = {
  // ... existing
  newcategory: [
    'https://cdn.com/image1.jpg',
    'https://cdn.com/image2.jpg',
  ],
};

export const altText = {
  // ... existing
  newcategory: [
    'Alt text for image 1',
    'Alt text for image 2',
  ],
};
```

---

### Adding Personal Projects

Edit `src/data/projects.js`:

```javascript
const projects = {
  // ... existing
  'new-project': {
    title: 'New Project Title',
    description: 'Brief description of the concept.',
    images: [
      { src: 'https://cdn.com/img1.jpg', alt: 'Description 1' },
      { src: 'https://cdn.com/img2.jpg', alt: 'Description 2' },
    ],
  },
};
```

Then add to navigation (`src/data/navigation.js`):

```javascript
export const projectCategories = [
  // ... existing
  { id: 'p-new-project', label: 'New Project Title' },
];
```

> **Note:** Project IDs must be prefixed with `p-`

---

### Updating Press/Exhibitions

Edit `src/data/press.js`:

```javascript
const pressData = [
  {
    title: 'Exhibitions',
    items: [
      // Add newest first
      { year: '2024', text: 'New Exhibition, Gallery Name', url: 'https://...' },
      // ... existing
    ],
  },
  // ...
];
```

---

### Updating Contact Info

Edit `src/data/config.js`:

```javascript
const config = {
  contact: {
    emailUser: 'your.name',        // Part before @
    emailDomain: 'gmail.com',       // Part after @
    instagram: 'yourhandle',        // Without @
    location: 'Your location info',
  },
};
```

---

## Customization

### Colors/Theme

Edit `src/styles/global.css`:

```css
/* Dark theme */
.app--dark {
  --color-bg: #0a0a0a;
  --color-text: #f0f0f0;
  /* ... */
}

/* Light theme */
.app--light {
  --color-bg: #fafafa;
  --color-text: #111111;
  /* ... */
}
```

### Fonts

1. Update Google Fonts in `public/index.html`
2. Update CSS variables in `src/styles/global.css`:

```css
:root {
  --font-sans: 'YourFont', sans-serif;
  --font-display: 'YourDisplayFont', serif;
}
```

### Scroll Effects

Edit `src/utils/index.js` to change the pattern:

```javascript
const SCROLL_PATTERNS = [
  'full-parallax',
  'pair-scroll',
  'full-scale',
  // Customize sequence
];
```

---

## Accessibility

This site meets **WCAG 2.1 Level AA** standards:

| Feature | Implementation |
|---------|----------------|
| Skip Link | `<a class="skip-link">` jumps to main content |
| Focus Indicators | Visible outline on all interactive elements |
| ARIA | Labels, current page, expanded states |
| Semantic HTML | Proper heading hierarchy, landmarks |
| Color Contrast | All text meets 4.5:1 ratio |
| Reduced Motion | `prefers-reduced-motion` respected |
| Screen Readers | Tested with VoiceOver and NVDA |

---

## Performance & SEO

### Performance Features

- **Lazy Loading** - Images load as needed
- **Eager Loading** - First 2 images load immediately (LCP)
- **Passive Listeners** - Non-blocking scroll handlers
- **CSS will-change** - GPU acceleration hints
- **Minimal Dependencies** - React only

### SEO Features

- **Semantic HTML** - Proper document structure
- **Meta Tags** - Title, description, Open Graph, Twitter
- **Structured Data** - JSON-LD for rich snippets
- **Alt Text** - Descriptive, keyword-rich
- **Local SEO** - Location keywords (NYC, LA)
- **robots.txt** - Search engine directives
- **Sitemap** - (Add manually or via plugin)

---

## Lighthouse Scores

Target scores for production:

| Category | Target | Notes |
|----------|--------|-------|
| Performance | 90+ | Depends on image hosting |
| Accessibility | 100 | All features implemented |
| Best Practices | 100 | HTTPS, no console errors |
| SEO | 100 | All meta tags present |

### Testing

```bash
# Build production version
npm run build

# Serve locally
npx serve -s build

# Open Chrome DevTools → Lighthouse → Run
```

---

## Maintenance

### Regular Tasks

| Task | Frequency |
|------|-----------|
| Add new work | As needed |
| Update press/exhibitions | Monthly |
| Check external links | Quarterly |
| Run Lighthouse audit | Quarterly |
| Update dependencies | Quarterly |

### Updating Dependencies

```bash
# Check for updates
npm outdated

# Update all
npm update

# Update specific package
npm install react@latest
```

### Backup Before Changes

```bash
git add .
git commit -m "Backup before updates"
```

---

## Troubleshooting

### Images Not Loading

1. Check URL is correct and accessible
2. Test URL directly in browser
3. Check CORS headers if using CDN
4. Verify HTTPS (mixed content blocked)

### Scroll Effects Not Working

1. Check JavaScript console for errors
2. Verify `prefers-reduced-motion` isn't set
3. Test in different browser

### Theme Not Saving

1. localStorage might be blocked (private browsing)
2. Clear browser cache
3. Check console for errors

### Build Errors

```bash
# Clear cache and rebuild
rm -rf node_modules
rm package-lock.json
npm install
npm run build
```

### GitHub Pages 404

1. Check `homepage` in package.json matches URL
2. Verify `gh-pages` branch exists
3. Wait 5-10 minutes for deployment
4. Check GitHub Pages settings

---

## License

MIT License - See [LICENSE](LICENSE) for details.

---

## Credits

- **Design & Development**: Development Team
- **Typography**: [Cormorant](https://fonts.google.com/specimen/Cormorant) & [Outfit](https://fonts.google.com/specimen/Outfit)
- **Placeholder Images**: [Unsplash](https://unsplash.com) (replace with actual photos)

---

## Contact

For technical issues, open a GitHub issue.

For photography inquiries: [Contact Page](https://www.clairesersun.com/contact)
