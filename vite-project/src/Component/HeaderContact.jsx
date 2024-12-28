import React from 'react';
import "../Styles/HeaderContact.css";
import {Link} from "react-router-dom";


const HeaderContact = () => {
return (
<div className="Header_Main_Contact">
<div className="HeaderContact">
<div>
<img src="https://www.techanzo.com/assets/images/contact-us-image.png"  alt="random-image" className="HeaderImage"/> 
</div>
<div>
<div className="contact-container1">
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

</div>

<div>
<div  className="Request" >
<div className="Request_Heading">
<div>
<img src="https://www.techanzo.com/assets/icon/quote-img.svg"    alt="random-image" className="RequestImage"/> 
<h1 className="RequestTopHeading1">Get a Quote</h1>
<h3 className="RequestPara" >We know the impact design can have in making a product</h3>
<Link to="/SchuldeMeeting">
<button className="ButtonColor">Chat with Us</button>
</Link>
</div>
</div>


<div className="Request_Heading">
<div>
<img src="https://www.techanzo.com/assets/icon/request-img.svg"  alt="random-image" className="RequestImage"/> 
<h1  className="RequestTopHeading"> Submit a Request  </h1>
<h3 className="RequestPara">We know the impact design can have in dmaking a product</h3>
<button  className="ButtonColor1">Submit Request</button>
</div>
</div>
<div className="Request_Heading">
<div>
<img src="https://www.techanzo.com/assets/icon/calendar-img.svg"  alt="random-image" className="RequestImage"/> 
<h1 className="RequestTopHeading3">Schedule a Meeting</h1>
<h3 className="RequestPara">We know the impact design can have in making a product</h3>
<button className="ButtonColor2">Schedule Metting</button>
</div>
</div>



</div>
</div>
<div>
</div>
</div>
  )
}

export default HeaderContact