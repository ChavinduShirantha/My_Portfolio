import React from 'react';
import './Projects.css';
import project1_img from './../assets/images/projects/project1.png';
import project2_img from './../assets/images/projects/project2.png';
import project3_img from './../assets/images/projects/project3.png';
import project4_img from './../assets/images/projects/project4.png';
import project5_img from './../assets/images/projects/project5.png';
import project6_img from './../assets/images/projects/project6.png';
import project7_img from './../assets/images/projects/project7.png';
import project8_img from './../assets/images/projects/project8.png';
import project9_img from './../assets/images/projects/project9.png';
import project10_img from './../assets/images/projects/project10.png';
import project11_img from './../assets/images/projects/project11.png';
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Techno Computers",
      description: "Techno-Computers is a full-stack e-commerce application for selling computer hardware and accessories. The front end is built using ReactJS, Tailwind CSS, and TypeScript, providing a clean, responsive user interface. The back end uses Node.js with a MongoDB database to handle product data, user accounts, orders, and other server-side logic. The project aims to offer a solid foundation for an online computer shop platform.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
      github: "https://github.com/ChavinduShirantha/Techno-Computers",
      demo: "https://github.com/ChavinduShirantha/Techno-Computers",
      image: project1_img
    },
    {
      id: 2,
      title: "Easy Car Rental",
      description: "Car-Rental-System is a web application implementing a car-rental service backend and frontend. The front end uses HTML, CSS, JavaScript, Bootstrap, and jQuery for user interaction and UI. The server side is built with Java (Spring Framework, Spring MVC), using Maven as the build tool, Hibernate for ORM, Lombok, and MySQL for data storage. Developed as part of an advanced API development coursework.",
      technologies: ["Spring", "Bootstrap", "MySQL", "Hibernate"],
      github: "https://github.com/ChavinduShirantha/Car-Rental-System",
      demo: "https://github.com/ChavinduShirantha/Car-Rental-System",
      image: project2_img
    },
    {
      id: 3,
      title: "Car Game",
      description: "JS_2D_Game is a simple browser‐based 2D game built using JavaScript, HTML, and CSS. It demonstrates core game mechanics like rendering graphics, handling user input, collision detection, and basic game loop logic. Designed as a learning or demo project, it shows how to build an interactive experience in the browser without heavy frameworks.",
      technologies: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/ChavinduShirantha/JS_2D_Game",
      demo: "https://chavindushirantha.github.io/JS_2D_Game/",
      image: project3_img
    },
    {
      id: 4,
      title: "Hostal Management System",
      description: "HostelManagementSystem is a Java-based application for managing hostel operations, developed as an ORM coursework. It uses JavaFX for the user interface, Hibernate for ORM, MySQL for storage, and includes CSS for styling. The system supports features such as student records, room allocation, and hostel administrative tasks.",
      technologies: ["Java", "Hibernate", "MySql", "CSS","JavaFX"],
      github: "https://github.com/ChavinduShirantha/HostelManagementSystem",
      demo: "https://github.com/ChavinduShirantha/HostelManagementSystem",
      image: project4_img
    },
    {
      id: 5,
      title: "Live Chat App",
      description: "Chat-Application is a simple real-time messaging app built in Java using sockets for communication and styled with CSS. Designed as an INP course assignment, it demonstrates core networking concepts like client-server architecture, multi-user chat, and message handling in Java.",
      technologies: ["Java", "Sockets", "CSS"],
      github: "https://github.com/ChavinduShirantha/Chat-Application",
      demo: "https://github.com/ChavinduShirantha/Chat-Application",
      image: project5_img
    },
    {
      id: 6,
      title: "Connect 4 Game",
      description: "Connect4Game is an object-oriented Java implementation of the classic Connect Four game. The project leverages OOP concepts to model game logic, board state, and player interaction. It includes components for turn handling, win/draw detection, and a user interface to play the game.",
      technologies: ["Java", "JavaFX", "CSS"],
      github: "https://github.com/ChavinduShirantha/Connect4Game",
      demo: "https://github.com/ChavinduShirantha/Connect4Game",
      image: project6_img
    },
    {
      id: 7,
      title: "Student Management System",
      description: "LayeredArchitectureProject is an Institute Management System built using layered architecture in Java, with JavaFX for the UI and MySQL for the database. The project segregates functionality into layers (e.g. presentation, service, data access), enabling a clean, maintainable structure.",
      technologies: ["Java", "JavaFX", "MySQL"],
      github: "https://github.com/ChavinduShirantha/LayeredArchitectureProject",
      demo: "https://github.com/ChavinduShirantha/LayeredArchitectureProject",
      image: project7_img
    },
    {
      id: 8,
      title: "POS Application",
      description: "JavaEE_POS_App is a Point-of-Sale (POS) application built using Java EE, designed following a Resource-Oriented architecture. It includes both front-end and back-end components. The front end uses standard web technologies (HTML, CSS, JavaScript, SCSS/Less), while the back end is implemented in Java. Features include management of transactions, products, pricing, and the ability to integrate POS workflows.",
      technologies: ["Java", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/ChavinduShirantha/JavaEE_POS_App",
      demo: "https://github.com/ChavinduShirantha/JavaEE_POS_App",
      image: project8_img
    },
    {
      id: 9,
      title: "Snake Game",
      description: "Snake-Game is a browser-based implementation of the classic Snake game. Built with HTML, CSS, and JavaScript, it includes the game board, snake movement, food spawning, collision detection, and score tracking.",
      technologies: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/ChavinduShirantha/Snake-Game",
      demo: "https://chavindushirantha.github.io/Snake-Game/",
      image: project9_img
    },
    {
      id: 10,
      title: "Tic-Tac-Toe Mobile Game",
      description: "Tic-Tac-Toe-Mobile-Game is a mobile application developed using React Native. It offers a digital version of the classic Tic-Tac-Toe game, allowing users to play against each other on their mobile devices. The project is designed to demonstrate the use of React Native for building cross-platform mobile applications.",
      technologies: ["React Native", "TypeScript"],
      github: "https://github.com/ChavinduShirantha/Tic-Tac-Toe-Mobile-Game",
      demo: "https://github.com/ChavinduShirantha/Tic-Tac-Toe-Mobile-Game",
      image: project10_img
    },
    {
      id: 11,
      title: "Analog Clock",
      description: "Analog-Clock is a digital replica of a traditional analog clock, built using HTML, CSS, and JavaScript. The project showcases the implementation of clock mechanics, including the movement of hour, minute, and second hands, providing a visual representation of time. It's an excellent example of combining web technologies to create interactive user interfaces.",
      technologies: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/ChavinduShirantha/Analog-Clock",
      demo: "https://chavindushirantha.github.io/Analog-Clock/",
      image: project11_img
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    GitHub
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;