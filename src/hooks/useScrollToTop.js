import { useState, useEffect } from 'react';

/**
 * Custom hook to track scroll position and provide scroll to top functionality
 * @param {number} threshold - Scroll position threshold to show/hide scroll button
 * @returns {object} - Object containing showScrollTop state and scrollToTop function
 */
export const useScrollToTop = (threshold = 300) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return { showScrollTop, scrollToTop };
};