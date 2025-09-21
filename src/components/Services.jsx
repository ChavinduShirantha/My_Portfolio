import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: 'fas fa-code',
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies like React, Node.js, and TypeScript. Responsive design and optimal performance guaranteed.',
      features: ['Responsive Design', 'Modern Frameworks', 'Performance Optimization', 'Cross-browser Compatibility']
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android. User-friendly interfaces with seamless functionality.',
      features: ['React Native', 'iOS Development', 'Android Development', 'App Store Deployment']
    },
    {
      icon: 'fas fa-server',
      title: 'Backend Development',
      description: 'Scalable backend solutions with robust APIs, database design, and cloud deployment. Security and performance focused.',
      features: ['RESTful APIs', 'Database Design', 'Cloud Deployment', 'Security Implementation']
    },
    {
      icon: 'fas fa-tools',
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance and support for your applications. Bug fixes, updates, and feature enhancements.',
      features: ['Bug Fixes', 'Regular Updates', 'Performance Monitoring', '24/7 Support']
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">My Services</h2>
        <p className="section-subtitle">
          I offer comprehensive development services to bring your ideas to life
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <i className="fas fa-check"></i>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="service-action">
                <a href="#contact" className="btn btn-outline">Get Started</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;