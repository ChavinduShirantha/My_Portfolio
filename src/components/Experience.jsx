import React from 'react';
import './Experience.css';

const Experience = () => {
  const experienceData = [
    {
      position: 'Associate Software Engineer',
      company: 'SoftedgeLab (Pvt) Ltd',
      location: 'Avissawella, Sri Lanka',
      duration: '2025 - Present',
      type: 'Full-time',
      description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies. Managing a team of 4 developers and collaborating with product managers to deliver high-quality solutions.',
      responsibilities: [
        'Architected and developed 3 major web applications serving 10K+ users',
        'Led migration from monolithic to microservices architecture',
        'Mentored junior developers and conducted code reviews',
        'Improved application performance by 40% through optimization',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Wordpress', 'MySQL'],
      icon: 'fas fa-laptop-code'
    },
    {
      position: 'Junior Full Stack Developer',
      company: 'SoftedgeLab (Pvt) Ltd',
      location: 'Avissawella, Sri Lanka',
      duration: '2023 - 2024',
      type: 'Full-time',
      description: 'Developed and maintained multiple client projects using modern web technologies. Worked closely with design team to implement pixel-perfect UI components and ensure excellent user experience.',
      responsibilities: [
        'Built 8+ responsive web applications for various clients',
        'Collaborated with UX/UI designers to implement design systems',
        'Integrated third-party APIs and payment gateways',
        'Optimized database queries improving load times by 50%',
        'Participated in agile development processes and sprint planning'
      ],
      technologies: ['React', 'Next.js', 'Express.js', 'Git','Docker', 'PostgreSQL'],
      icon: 'fas fa-code'
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="experience-header">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            My professional journey and career progression
          </p>
        </div>

        <div className="experience-timeline">
          {experienceData.map((item, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className="experience-card">
                  <div className="timeline-icon">
                    <i className={item.icon}></i>
                  </div>
                  <div className="experience-header-card">
                    <div className="position-info">
                      <h3 className="experience-position">{item.position}</h3>
                      <div className="company-info">
                        <i className="fas fa-building"></i>
                        <span className="experience-company">{item.company}</span>
                      </div>
                    </div>
                    <div className="duration-info">
                      <span className="experience-duration">{item.duration}</span>
                      <span className="experience-type">{item.type}</span>
                    </div>
                  </div>

                  <div className="experience-location">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{item.location}</span>
                  </div>

                  <p className="experience-description">{item.description}</p>

                  <div className="experience-responsibilities">
                    <h4>Key Responsibilities:</h4>
                    <ul>
                      {item.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex}>
                          <i className="fas fa-check-circle"></i>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="experience-technologies">
                    <h4>Technologies Used:</h4>
                    <div className="tech-tags">
                      {item.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;