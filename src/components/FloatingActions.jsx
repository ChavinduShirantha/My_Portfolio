import React, { useState, useEffect } from 'react';
import './FloatingActions.css';

const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // WhatsApp click handler
  const handleWhatsAppClick = () => {
    const phoneNumber = '+94760196952';
    const message = 'Hello! I found your portfolio and would like to get in touch.';
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Call click handler
  const handleCallClick = () => {
    window.location.href = 'tel:+94704230389'; 
  };

  return (
    <>
      <div className="floating-whatsapp" onClick={handleWhatsAppClick}>
        <div className="floating-icon whatsapp-icon">
          <i className="fab fa-whatsapp"></i>
        </div>
      </div>

      {showScrollTop && (
        <div className="floating-scroll-top" onClick={scrollToTop}>
          <div className="floating-icon scroll-icon">
            <i className="fas fa-chevron-up"></i>
          </div>
        </div>
      )}

      <div className="floating-call" onClick={handleCallClick}>
        <div className="floating-icon call-icon">
          <i className="fas fa-phone"></i>
        </div>
      </div>
    </>
  );
};

export default FloatingActions;