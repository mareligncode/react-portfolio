import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div 
      className="scroll-progress" 
      style={{ 
        width: `${scrollProgress}%`,
        background: isDarkMode 
          ? 'linear-gradient(90deg, var(--secondary-color), var(--accent-color))'
          : 'linear-gradient(90deg, var(--secondary-color), var(--accent-color))'
      }}
    ></div>
  );
};

export default ScrollProgress;