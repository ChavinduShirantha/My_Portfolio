import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const sections = ['hero', 'about', 'services', 'projects', 'experience', 'education', 'contact'];

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          // Map hero section to home for navigation
          const activeId = sectionId === 'hero' ? 'home' : sectionId;
          setActiveSection(activeId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const handleNavClick = (section) => {
    setIsMenuOpen(false);
    setActiveSection(section);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="nav-brand">
          <h2>Portfolio</h2>
        </div>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li>
              <a
                href="#hero"
                className={activeSection === 'home' ? 'active' : ''}
                onClick={() => handleNavClick('home')}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={activeSection === 'about' ? 'active' : ''}
                onClick={() => handleNavClick('about')}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className={activeSection === 'services' ? 'active' : ''}
                onClick={() => handleNavClick('services')}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={activeSection === 'projects' ? 'active' : ''}
                onClick={() => handleNavClick('projects')}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className={activeSection === 'experience' ? 'active' : ''}
                onClick={() => handleNavClick('experience')}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeSection === 'contact' ? 'active' : ''}
                onClick={() => handleNavClick('contact')}
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="header-actions">
            <ThemeToggle />
          </div>
        </nav>

        <button className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;