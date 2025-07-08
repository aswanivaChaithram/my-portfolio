import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import msg_icon from '../../assets/msg-icon.png'
import phone_icon from '../../assets/call_icon.svg'
import arrow_icon from '../../assets/arrow_icon.svg'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4df07206-f693-4f6b-952b-8fc16bab761e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact' id='contact'>
        <div className="title">
            <h1>Get in touch</h1>
        </div>
        <div className="contact-cols">
          <div className="contact-col">
            <h3>Send me a message <img src={msg_icon} alt="" /></h3>
            <p>
               I'm currently open to work and available for new projects.
               Feel free to sent me a message, you can contact me anytime and 
               I'm always happy to connect.
            </p>
            <ul>
                <li><img src={mail_icon} alt="" />aswaniva040@gmail.com</li>
                <li><img src={phone_icon} alt="" />9895223958</li>
            </ul>
          </div>
          <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name' 
                required/>
                <label>Your Email</label>
                <input type="email" name='email' placeholder='Enter your email' 
                required/>
                <label>Write your messages here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' 
                required></textarea>
                <button type='submit' className='btn'>
                     Submit now
                </button>
            </form>
            <span>{result}</span>
          </div>
        </div>
    </div>
  )
}

export default Contact