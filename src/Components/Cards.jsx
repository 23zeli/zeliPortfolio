import React from 'react'

function Cards(props) {
  return (
    <div className='Cards' style={{color: "black"}}>
      <div className="card-image">
        <img
          src={props.getImageSrc}
          alt={props.title}
          // height={200}
        />
      </div>
      <div className="card-text-container">
        <h2 className="card-header" >{props.title}</h2>
        <p className="card-text" >{props.description}</p>
        <div className="skills-icons"></div>
        {/* <div className="links-btns" style={{display: 'flex'}}>
          <a className="live-icon" type='button'href='#' target='blank'>
            <img
              src=''
              alt='Live'
              title='Live'
              // style={{width: '25px', height: '25px',}}
            />
            <span style={{ color: 'black' }}>Live</span>
          </a>
          <a className="source-icon">Source</a>
        </div> */}
      </div>
    </div>
  )
}

export default Cards