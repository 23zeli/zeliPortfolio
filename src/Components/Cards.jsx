import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { Github } from 'lucide-react'



function Cards(props) {
  return (
    <div className='Cards' style={{color: "black"}}>
      <div className="card-image">
        <img
          src={props.getImageSrc}
          alt={props.title}
          loading='lazy'
        />
      </div>
      <div className="card-text-container">
        <h2 className="card-header" >{props.title}</h2>
        <p className="card-text" >{props.description}</p>
        <div className="skills-icons">
          {props.skills.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
          {/* <span>React.js</span>
          <span>JavaScript</span>
          <span>HTML5</span>
          <span>CSS3</span>
          <span>Tailwind</span> */}
        </div>
        <div className="links-btns" style={{display: 'flex'}}>
          <a className="live-icon" type='button' href={props.liveUrl} target='blank' style={{marginRight: '10px'}}>
            <FontAwesomeIcon icon={faExternalLinkAlt} size='xs' className='external-link'/>
            <span>Live</span>
          </a>
          <a href={props.sourceUrl} target='blank' className="source-icon" type='button'>
            <FontAwesomeIcon icon={faGithub}/>
            <span>Source</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Cards