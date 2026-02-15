import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react'



function Cards({ title, description, liveUrl, sourceUrl, getImageSrc, skills }) {
  return (
    <div className='Cards' style={{color: "black"}}>
      <div className="card-image">
        <img
          src={getImageSrc}
          alt={title}
          loading='lazy'
        />
      </div>
      <div className="card-text-container">
        <h2 className="card-header" >{title}</h2>
        <p className="card-text" >{description}</p>
        <div
          className="skills-icons"
        >
          {skills.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </div>
        <div className="links-btns" style={{display: 'flex'}}>
          <a className="live-icon" type='button' href={liveUrl} target='_blank' style={{marginRight: '10px'}}>
            <FontAwesomeIcon icon={faExternalLinkAlt} size='xs' className='external-link'/>
            <span>Live</span>
          </a>
          <a href={sourceUrl} target='_blank' rel="noopener noreferrer" className="source-icon" type='button'>
            <FontAwesomeIcon icon={faGithub}/>
            <span>Source</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Cards)