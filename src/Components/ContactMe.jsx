import { useState } from 'react'


function ContactMe () {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    // validate(value);
    if (Comment.length <= 10) {
      alert("Please provide a message explaining your enquiry. Minimum 10 characters.")
      return;
    }
    setName("");
    setEmail("");
    setMessage("");
    e.preventDefault();
  }

  return (
    <div className="contact-me" id="contact-me" style={{ backgroundColor: "512DA8", padding: "50px 20px ", }}>
      <h1 
        className='contactHeader'
        // style={{ textAlign: "left"}}
        // style={{color: 'white', textAlign: 'left', marginLeft: '100px', paddingTop: '20px'}}

        id="contactMe-section"
      >
        Contact me
      </h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div id="labels">
            <label>Name</label>
            <input 
              type="text"  
              id="firstName"
              value = {name}
              onChange = {(e)=> setName(e.target.value)}
            /> 
          </div>
          <div id="labels">
            <label>Email Address</label>
            <input 
              type="text" 
              id="firstName"
              value = {email}
              onChange = {(e)=> setEmail(e.target.value)}
            />  
          </div>
          {/* <div>
            <label>Type of enquiry:</label>
            <input type="text" id="enquiry"/>
          </div> */}
          <div id="labels">
            <label>Your message</label>
            <textarea 
              type="text" 
              value = {message}
              onChange = {(e)=> setMessage(e.target.value)}  
            />
          </div>
          <button className='btn-contact'>Submit</button>
        </fieldset>
      </form>
    </div>
  )
}

export default ContactMe