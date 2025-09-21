import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: 'Graduate Diploma in Software Engineering',
      institution: 'Institute of Software Engineering (IJSE)',
      location: 'Galle, Sri Lanka',
      duration: '2022 - 2024',
      gpa: 'GPA: 3.01/4.0',
      description: 'Specialized in Software Engineering and Web Development. Completed comprehensive modules in full-stack development, database management, and software architecture.',
      achievements: [
        'Internet technologies - A+',
        'Proffesional Software Project in IT (Individual) - A',
        'Advanced Mobile Development - A',
        'ORM Concepts - A',
        'Programming Fundamentals - B+',
        'Interdruction to Network Programming - B',
        'Object Oriented Programming - C-',
        'Database Management Systems - C-'
      ],
      icon: 'fas fa-graduation-cap'
    },
    {
      degree: 'GCE Advanced Level',
      institution: 'G/P.De.S. Kularathne M.V.',
      location: 'Ambalangoda, Sri Lanka',
      duration: '2018 - 2020',
      gpa: 'Physical Science Stream',
      description: 'Completed Advanced Level studies with focus on Technology subjects, building foundation for engineering studies.',
      achievements: [
        'Combined Mathematics - C',
        'Physics - C',
        'Chemistry - S',
        'General Knowledge - 68',
        'General English - S'
      ],
      icon: 'fas fa-school'
    },
    {
      degree: 'GCE Ordinary Level',
      institution: 'G/P.De.S. Kularathne M.V.',
      location: 'Ambalangoda, Sri Lanka',
      duration: '2012 - 2017',
      gpa: '9 Subjects Passed',
      description: 'Successfully completed Ordinary Level education with strong foundation in Mathematics, Science, and Technology subjects.',
      achievements: [
        'Mathematics - A',
        'Science - A',
        'Information & Communication Technology - A',
        'English Language - A',
        'Sinhala Language - A',
        'History - A',
        'Buddhism - B',
        'Business & Accounting Studies - B',
        'Art - A'
      ],
      icon: 'fas fa-book'
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <div className="education-header">
          <h2 className="section-title">Education & Certifications</h2>
          <p className="section-subtitle">
            My academic journey and continuous learning path
          </p>
        </div>

        <div className="education-timeline">
          {educationData.map((item, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className="education-card">
                  <div className="timeline-icon">
                    <i className={item.icon}></i>
                  </div>
                  <div className="education-header-card">
                    <h3 className="education-degree">{item.degree}</h3>
                    <span className="education-duration">{item.duration}</span>
                  </div>

                  <div className="education-institution">
                    <i className="fas fa-university"></i>
                    <span>{item.institution}</span>
                  </div>

                  <div className="education-location">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{item.location}</span>
                  </div>

                  <div className="education-gpa">
                    <i className="fas fa-medal"></i>
                    <span>{item.gpa}</span>
                  </div>

                  {item.description && (
                    <p className="education-description">{item.description}</p>
                  )}

                  {item.achievements && (
                    <div className="education-achievements">
                      <h4>Module Results & Achievements:</h4>
                      <ul>
                        {item.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex}>
                            <i className="fas fa-check-circle"></i>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;