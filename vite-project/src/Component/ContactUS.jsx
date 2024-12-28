import React from 'react'
import "../Styles/ContactUs.css"
import { IoHomeOutline } from "react-icons/io5";
import HeaderContact from "../Component/HeaderContact.jsx"


const ContactUS = () => {
  return (
  <div className="ContactUS">
  <div className="ContactUS_Heading">
  <img src="https://www.techanzo.com/assets/background-image/contact-us.png" alt="random-image" className="Contact-image"/>
  </div>


<div className="Contact_Section">
<div>
<IoHomeOutline id="Home_img"/>
</div>
<div>
<img src="https://www.techanzo.com/assets/icon/chevron-right.svg" alt="image-contact" className="Img-Contact"/>
</div>
<div>
<h2 className="Heading_Contact">CONTACT US</h2> 
</div>
</div>

<div>
<HeaderContact/> 
</div>


</div>
  )
}

export default ContactUS