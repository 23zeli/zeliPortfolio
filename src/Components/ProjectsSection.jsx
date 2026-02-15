import React from 'react';
import Cards from './Cards';

const projects = [
    {
      description: "React-based web app simulates a restaurant table reservation system.",
      title: "Reserve a Table web app",
      getImageSrc: "./images/reserveTable.jpg",
      liveUrl: "https://23zeli.github.io/booking-system/",
      sourceUrl: 'https://github.com/23zeli/booking-system',
      skills: ['React.js', 'Javascript', 'CSS3', 'HTML5',],
    },

    {
      title: "Movies search app",
      description: "React-based application that allows users to search for movies using a public API.",
      getImageSrc: "./images/zeli-movies.jpg",
      liveUrl: "https://zeli-movies.vercel.app",
      sourceUrl: 'https://github.com/23zeli/zeli-movies',
      skills: ['React.js', 'Javascript', 'CSS3', 'HTML5', 'Tailwind', 'Firebase'],
    },

    {
      title: "Modern UX-UI",
      description: "Modern UI-UX website.",
      getImageSrc: "./images/modern_ux-ui.jpg",
      liveUrl: "https://zeli-modern-ux-ui.vercel.app/",
      sourceUrl: 'https://github.com/23zeli/zeli-modern-ux-ui',
      skills: ['React.js', 'Javascript', 'CSS3', 'HTML5', 'Tailwind'],
    },
  ]

function ProjectSection() {

    return(
        <div className="projects-Section" style={{backgroundColor: "#14532d", paddingTop: "50px"}}>
          <h1
            id="projects-section"
          >
              Featured Projects
          </h1>
          <div className='list'>
              {projects.map((project) => (
                  <Cards
                    key={project.titleUrl}
                    title={project.title}
                    description={project.description}
                    liveUrl={project.liveUrl}
                    sourceUrl={project.sourceUrl}
                    getImageSrc={project.getImageSrc}
                    skills ={project.skills}
                  />
              ))}
          </div>
        </div>
    )
};

export default ProjectSection;
