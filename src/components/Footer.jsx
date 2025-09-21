import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/chavindu-shirantha-b5b857264/',
      icon: 'fab fa-linkedin'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/ChavinduShirantha',
      icon: 'fab fa-github'
    },
    {
      name: 'GiLab',
      url: 'https://gitlab.com/chavindu.softedgelab',
      icon: 'fab fa-gitlab'
    },
    {
      name: 'Whatsapp',
      url: 'https://wa.me/94760196952',
      icon: 'fab fa-whatsapp'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <h3 className="footer-logo">Chavindu Shirantha</h3>
            <p className="footer-description">
              Full Stack Developer & Web developer passionate about creating
              innovative digital solutions that make a difference.
            </p>
            <div className="footer-social">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={link.name}
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-nav">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-services">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-nav">
              <li><a href="#services" className="footer-link">Web Development</a></li>
              <li><a href="#services" className="footer-link">Mobile Apps</a></li>
              <li><a href="#services" className="footer-link">Backend Development</a></li>
              <li><a href="#services" className="footer-link">Consulting</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4 className="footer-title">Get In Touch</h4>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <a href="mailto:chavindushirantha@gmail.com">chavindushirantha@gmail.com</a>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <a href="tel:+94704230389">+94 (70) 423-0389</a>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Ambalangoda, Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>
                &copy; {currentYear} <strong>Chavindu Shirantha</strong>. All rights reserved.
              </p>
              <p className="legal-text">
                Designed and developed with <i className="fas fa-heart"></i> by Chavindu Shirantha
              </p>
            </div>

            <div className="footer-policies">
              <a href="#privacy" className="policy-link">Privacy Policy</a>
              <span className="separator">•</span>
              <a href="#terms" className="policy-link">Terms of Service</a>
              <span className="separator">•</span>
              <a href="#cookies" className="policy-link">Cookie Policy</a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;