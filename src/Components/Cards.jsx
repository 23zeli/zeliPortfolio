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
          loading='lazy'
        />
      </div>
      <div className="card-text-container">
        <h2 className="card-header" >{props.title}</h2>
        <p className="card-text" >{props.description}</p>
        <div
          className="skills-icons"
          style ={{ overflow: 'hidden' }}
        >
          {props.skills.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </div>
        <div className="links-btns" style={{display: 'flex'}}>
          <a className="live-icon" type='button' href={props.liveUrl} target='_blank' style={{marginRight: '10px'}}>
            <FontAwesomeIcon icon={faExternalLinkAlt} size='xs' className='external-link'/>
            <span>Live</span>
          </a>
          <a href={props.sourceUrl} target='_blank' rel="noopener noreferrer" className="source-icon" type='button'>
            <FontAwesomeIcon icon={faGithub}/>
            <span>Source</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Cards