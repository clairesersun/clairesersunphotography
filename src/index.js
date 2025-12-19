/**
 * =============================================================================
 * APPLICATION ENTRY POINT
 * =============================================================================
 * 
 * React application bootstrap.
 * Renders the App component into the DOM.
 * 
 * NOTES:
 * - StrictMode is enabled for development checks
 * - Mounts to #root element in index.html
 * 
 * @module index
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import App from './App';

// Get root element
const rootElement = document.getElementById('root');

// Create React root and render app
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
