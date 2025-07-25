import React from 'react';
import Cards from './Cards';

const projects = [
    {
      description: "React-based web app simulates a restaurant table reservation system.",
      title: "Reserve a Table web app",
      getImageSrc: "./images/reserveTable.jpg",
    },
  
    {
      title: "Movies search app",
      description: "React-based application that allows users to search for movies using a public API.",
      getImageSrc: "./images/movie.jpg",
    },
  
    {
      title: "Calculator",
      description: "basic calculator that can add, subtract, multiply and divide",
      // getImageSrc: "./images/.jpg",
    },
  ]

function ProjectSection() {

    return(
        <div className="projects-Section" style={{backgroundColor: "#14532d", paddingTop: "50px"}}>
          <a href='#'>
            <h1 
              style={{color: 'white', textAlign: 'left', marginLeft: '100px', paddingTop: '20px'}}
              id="projects-section"
            >
                Featured Projects
            </h1>
            <div className='list'>
                {projects.map((project) => (
                    <Cards
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        url=""
                        getImageSrc={project.getImageSrc}
                    />
                ))}
            </div>
          </a>  
        </div>

    )
};

export default ProjectSection;
