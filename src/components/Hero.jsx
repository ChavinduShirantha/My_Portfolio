import React from 'react';
import './Hero.css';
import profile_image from "./../assets/images/profile/profile_img.png";
const Hero = () => {
  const handleImageError = (e) => {
    e.target.style.display = 'none';
    e.target.parentElement.classList.add('image-error');
  };

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Chavindu Shirantha</span>
          </h1>
          <p className="hero-subtitle">
            Full Stack Developer & Web Developer
          </p>
          <p className="hero-description">
            I create beautiful, responsive web applications and user experiences
            that bring ideas to life. Passionate about clean code and innovative design.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="placeholder-avatar">
            <img
              src={profile_image}
              alt="Chavindu Shirantha - Full Stack Developer"
              onError={handleImageError}
            />
          </div>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/chavindu-shirantha-b5b857264/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/ChavinduShirantha" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://gitlab.com/chavindu.softedgelab" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-gitlab"></i>
            </a>
            <a href="https://wa.me/94760196952" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="mailto:chavindushirantha@gmail.com" className="social-icon">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;