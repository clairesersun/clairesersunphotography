/**
 * =============================================================================
 * Loading Screen
 * =============================================================================
 * 
 * Animated intro screen with falling images.
 * Inspired by Pirelli Calendar aesthetic.
 * 
 * ANIMATION PHASES:
 * 1. Initial state - images positioned above viewport
 * 2. Falling - images animate down with staggered delays
 * 3. Fade out - entire screen fades, then unmounts
 * 
 * ACCESSIBILITY:
 * - aria-hidden="true" - purely decorative, not announced
 * - Respects prefers-reduced-motion via CSS
 * - Non-essential content; site works without animation
 * 
 * PERFORMANCE:
 * - Uses smaller image files (400px instead of 1600px)
 * - CSS transitions instead of JS animation
 * - Unmounts after completion to free memory
 * 
 * @module components/LoadingScreen
 */

import React, { useState, useEffect } from 'react';
import { loaderImages, config } from '../data';
import '../styles/LoadingScreen.css';

/**
 * Loading screen component
 * 
 * @param {Object} props
 * @param {Function} props.onComplete - Callback when animation completes
 */
const LoadingScreen = ({ onComplete }) => {
  // Animation phase: 0 = initial, 1 = falling, 2 = fading
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Phase 1: Start falling animation after brief delay
    const timer1 = setTimeout(() => setPhase(1), 100);

    // Phase 2: Begin fade out
    const timer2 = setTimeout(() => setPhase(2), 2400);

    // Phase 3: Complete and call unmount callback
    const timer3 = setTimeout(onComplete, config.animation.loaderDuration);

    // Cleanup timers on unmount
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <div
      className={`loading-screen ${phase >= 2 ? 'loading-screen--fading' : ''}`}
      aria-hidden="true"
      role="presentation"
    >
      {/* Falling images container */}
      <div className="loading-screen__images">
        {loaderImages.map((src, index) => (
          <div
            key={index}
            className={`loading-screen__image ${
              phase >= 1 ? 'loading-screen__image--falling' : ''
            }`}
            style={{
              // CSS custom properties for positioning and animation
              '--image-x': `${15 + (index % 3) * 30}%`,
              '--image-y': `${-20 - index * 8}%`,
              '--image-rotation': `${-15 + index * 6}deg`,
              '--image-delay': `${index * 150}ms`,
            }}
          >
            <img src={src} alt="" />
          </div>
        ))}
      </div>

      {/* Photographer name text */}
      <div
        className={`loading-screen__text ${
          phase >= 1 ? 'loading-screen__text--visible' : ''
        }`}
      >
        <span className="loading-screen__name">Claire Sersun</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
