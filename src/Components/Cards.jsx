import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'



function Cards(props) {
  return (
    <div className='Cards' style={{color: "black"}}>
      <div className="card-image">
        <img
          src={props.getImageSrc}
          alt={props.title}
        />
      </div>
      <div className="card-text-container">
        <h2 className="card-header" >{props.title}</h2>
        <p className="card-text" >{props.description}</p>
        <div className="skills-icons">
          <span>React.js</span>
          <span>JavaScript</span>
          <span>HTML5</span>
          <span>CSS3</span>
        </div>
        <div className="links-btns" style={{display: 'flex'}}>
          <a className="live-icon" type='button' href='#' target='blank' style={{marginRight: '10px'}}>
            <FontAwesomeIcon icon={faExternalLinkAlt} size='xs' className='external-link'/>
            <span>Live</span>
          </a>
          <a href='https://github.com/23zeli' target='blank' className="source-icon" type='button'>
            <FontAwesomeIcon icon={faGithub}/>
            <span>Source</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Cards