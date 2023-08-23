import React, { useState } from 'react';
import './contact.css';
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const[sent,setSent]=useState(false)

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
console.log(name,email,message)
  const handleSubmit = async (e) => {
   e.preventDefault()
   try{
    const res=await axios.post("http://localhost:5000/api/contact",{name,email,message})
    console.log(res)
   }catch(err){
    console.log(err)
   }
  };

  return (
    <div className="contact-us-page">
      <h1>Contact Us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={handleEmailChange}
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={handleMessageChange}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      {sent && <h1 className="heading"> Your message was successfully sent!!</h1>}
    </div>
  );
};

export default Contact;
