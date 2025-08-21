import React from 'react';
import Cards from './Cards';

const projects = [
    {
      description: "React-based web app simulates a restaurant table reservation system.",
      title: "Reserve a Table web app",
      getImageSrc: "./images/reserveTable.jpg",
      liveUrl: "https://23zeli.github.io/table-booking/",
      sourceUrl: 'https://github.com/23zeli/table-booking',
    },
  
    {
      title: "Movies search app",
      description: "React-based application that allows users to search for movies using a public API.",
      getImageSrc: "./images/movie.jpg",
      liveUrl: "https://23zeli.github.io/explore-movies/",
      sourceUrl: 'https://github.com/23zeli/explore-movies',
    },

    // {
    //   title: "Calculator",
    //   description: "basic calculator that can add, subtract, multiply and divide",
    //   // getImageSrc: "./images/.jpg",
    // },
  ]

function ProjectSection() {

    return(
        <div className="projects-Section" style={{backgroundColor: "#14532d", paddingTop: "50px"}}>
          <h1
            // style={{color: 'white', textAlign: 'left', marginLeft: '100px', paddingTop: '20px'}}
            id="projects-section"
          >
              Featured Projects
          </h1>
          {/* <a href={project.url} target='blank'></a> */}
          <div className='list'>
              {projects.map((project) => (
                  <Cards
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    liveUrl={project.liveUrl}
                    sourceUrl={project.sourceUrl}
                    getImageSrc={project.getImageSrc}
                  />
              ))}
          </div>
        </div>
    )
};

export default ProjectSection;
