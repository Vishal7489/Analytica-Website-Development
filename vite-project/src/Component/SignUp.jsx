import React from 'react'
import "../Styles/SignUp.css"

const SignUp = () => {
  return (
<div className="SignUp">
<div className="Sign-up">
<div className="Visit"><h1 className="visit">Visit Us</h1></div>

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.309662432848!2d75.894969874168!3d22.753886579362998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396302ab0494de71%3A0xf1bc3258993df2c8!2sDhan%20Trident!5e0!3m2!1sen!2sin!4v1730962518268!5m2!1sen!2sin"
height="480"
width="420"
style={{border:0,borderRadius:20,}}
allowFullscreen=""
loading="lazy"
referrerPolicy="no-referrer-when-downgrade" 
className="iframe">
</iframe>
</div>
<div className="contact-container">
            <div className="section-title">Contact Us</div>
            <form 
            action="https://formspree.io/f/mldebgpn"
            method="POST">
                <div className="form-group">
                    <input type="text" name="firstName" placeholder="First Name" required />
                    <input type="text" name="lastName" placeholder="Last Name" required />
                </div>
                <div className="form-group">
                    <input type="email" name="email" placeholder="Email address*" required />
                </div>
                <div className="form-group">
                    <textarea name="message" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" className="submit-btn">SEND MESSAGE</button>
            </form>
        </div>
</div>

  )
  }

export default SignUp