import { useState } from 'react'


function ContactMe () {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (name.trim() === '') newErrors.name = 'Name is required';
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) newErrors.email = 'Invalid email address';
    if (message.length <= 10) newErrors.message = 'Message should be at least 10 characters';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if(Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setName("");
    setEmail("");
    setMessage("");
    setErrors({});
  }

  return (
    <div className="contact-me" id="contact-me" style={{ backgroundColor: "#512DA8", padding: "50px 20px ", }}>
      <h1
        className='contactHeader'
        id="contactMe-section"
      >
        Contact me
      </h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div id="labels">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value = {name}
              onChange = {(e)=> setName(e.target.value)}
            />
            {errors.name && <div style={{ color: 'red'}} >{errors.name}</div>}
          </div>
          <div id="labels">
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              id="email"
              value = {email}
              onChange = {(e)=> setEmail(e.target.value)}
            />
            {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
          </div>
          <div id="labels">
            <label htmlFor="message">Your message</label>
            <textarea
              type="text"
              value = {message}
              onChange = {(e)=> setMessage(e.target.value)}
            />
            {errors.message && <div style={{ color: 'red' }}>{errors.message}</div>}
          </div>
          <button className='btn-contact'>Submit</button>
        </fieldset>
      </form>
    </div>
  )
}

export default ContactMe