import React from 'react'
import "../Styles/SchuldeMeeting.css"
import {Link} from "react-router-dom"


const SchuldeMeeting = () => {
return (
<div className="Meeting__Main">
<div className="Meeting_Main">
<div  className="Meeting" >
<div  className="Meeting1">
<img src="https://www.techanzo.com/assets/icon/quote-img.png"  alt="random-image" className="ImgMeeting"/>
</div>  
<div  className="Meeting2">
<h3 className="Meeting6">Get a Quote</h3>
<h3 className="Meeting5">Your project is unique, and so is our pricing</h3>
<h4 className="Meeting4">Take the first step towards your digital success with a free quote.<br/>
  Discover how affordable our solutions can be.</h4>
</div>  
</div>


</div>
<div className="Development">
<div className="DevelopmentHeading">
<h2 className="PlanningHeading">Services*</h2>
<div className="Planning">
<div className="Branding1">Strategy & Planning</div>
<div className="Branding2">Branding</div>
<div className="Branding3"> UI&Ux Design</div>
</div>
<div className="Planning">
<div className="Branding4">App Development</div>
<div className="Branding5">Web Development</div>
</div>
<div>
 <h3 className="Branding6">Growth Scalling</h3>   
</div>

<h2 className="Branding7">Delivery Timeline*</h2>
<div className="Planning">
<div className="Planning1">30-45 Days</div>
<div className="Planning2"> 2-3 Months</div>
<div className="Planning3">3-6 Months</div>
</div>
<div className="Planning">
<div className="Planning4">More than 6 Months</div>
<div className="Planning5">Contious Project</div>
</div>
</div>


<div className="DevelopmentHeading">
<form>
<h2 className="FormHeading">Your name*</h2>
<input type="text" placeholder="Enter your name"  className="Input1" />
<h2 className="FormHeading1"  >Your email*</h2>
<input type="text" placeholder="Enter your Email"  className="Input2"/>
<h2 className="FormHeading2">Company name (optional)</h2>
<input type="text" placeholder="What's your company name" className="Input3"/>
<h2 className="FormHeading3">Message*</h2>
<input type="text" placeholder="Tell us your project" className="Input4"/>
</form>
<button className="PlanningButton">Submit</button>
</div>
</div>



<div  className="Request1" >
<div className="Request_Heading">
<div>
<img src="https://www.techanzo.com/assets/icon/contact-us-icon.svg    "    alt="random-image" className="RequestImage"/> 
<h1 className="RequestTopHeading1">Contact US</h1>
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
  )
}

export default SchuldeMeeting
