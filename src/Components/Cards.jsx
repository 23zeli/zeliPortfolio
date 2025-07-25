import React from 'react'

function Cards(props) {
  return (
    <div className='Cards' style={{color: "black"}}> 
      <img className='card-image' src={props.getImageSrc} height={200}/>
      <h2 className="card-header" >{props.title}</h2>
      <h3 className="card-text" >{props.description}</h3>
    </div>
  )
}

export default Cards