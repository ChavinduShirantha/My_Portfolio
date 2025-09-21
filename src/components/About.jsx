import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import './About.css';
import about_img from "./../assets/images/profile/aboutus.jpg";

const About = () => {
  const handleImageError = (e) => {
    e.target.style.display = 'none';
    e.target.parentElement.classList.add('image-error');
  };

  const technologies = [
    { name: 'Java', icon: 'java' },
    { name: 'MySQL', icon: 'mysql' },
    { name: 'PostgreSQL', icon: 'postgresql' },
    { name: 'Hibernate', icon: 'hibernate' },
    { name: 'HTML', icon: 'html' },
    { name: 'CSS', icon: 'css' },
    { name: 'JavaScript', icon: 'js' },
    { name: 'Bootstrap', icon: 'bootstrap' },
    { name: 'Git', icon: 'git' },
    { name: 'Spring', icon: 'spring' },
    { name: 'React', icon: 'react' },
    { name: 'React Native', icon: 'react' },
    { name: 'Next.js', icon: 'nextjs' },
    { name: '.NET', icon: 'dotnet' },
    { name: 'WordPress', icon: 'wordpress' },
    { name: 'VS Code', icon: 'vscode' },
    { name: 'TypeScript', icon: 'ts' },
    { name: 'PowerShell', icon: 'powershell' },
    { name: 'Postman', icon: 'postman' },
    { name: 'Node.js', icon: 'nodejs' },
    { name: 'Maven', icon: 'maven' },
    { name: 'jQuery', icon: 'jquery' },
    { name: 'IntelliJ IDEA', icon: 'idea' },
    { name: 'GitHub', icon: 'github' }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate full-stack developer with over 4 years of experience
              creating web applications that solve real-world problems. I love
              working with modern technologies and am always eager to learn new skills.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or enjoying outdoor activities.
              I believe in writing clean, maintainable code and creating user
              experiences that make a difference.
            </p>
            <p>
              I'm currently looking for new opportunities to contribute to
              innovative projects and work with talented teams.
            </p>
          </div>

          <div className="about-image">
            <div className="placeholder-about-image">
              <img
                src={about_img}
                alt="About Chavindu Shirantha - Full Stack Developer"
                onError={handleImageError}
              />
            </div>
          </div>
        </div>

        <div className="technologies-section">
          <h3>Skills & Technologies</h3>
          <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={20}
            slidesPerView="auto"
            freeMode={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={3000}
            loop={true}
            className="technologies-swiper"
          >
            {technologies.map((tech, index) => (
              <SwiperSlide key={index} className="tech-slide">
                <div className="tech-icon">
                  <img
                    src={`https://skillicons.dev/icons?i=${tech.icon}`}
                    alt={tech.name}
                    title={tech.name}
                  />
                  <span>{tech.name}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default About;