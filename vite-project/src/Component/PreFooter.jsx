import React from 'react'
import "../Styles/PreFooter.css"
import { SiFacebook } from "react-icons/si";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { BsEnvelope } from "react-icons/bs";



const PreFooter = () => {
return (
<div className="Footer">
<div className="Footer1">
<div className="Footer2">
<span className="Footer_para">Follow Us On :</span>
<div className="Facebook_Main">
<SiFacebook className="Facebook"/>
<FaInstagramSquare className="Facebook"/>
<FaSquareXTwitter className="Facebook"/>
<FaLinkedin className="Facebook"/>
</div>
</div>

<div className="Footer2_1">
<span className="Footer2_Service">Our Services</span>
<ul className="List">
<li className="List1">UI/UX Design</li>
<li className="List1">Web App Development</li>
<li className="List1">Website Development</li>
<li className="List1">Business Intelligence</li>
<li className="List1">Data Analytics</li>
<li className="List1">AI/ML</li>
</ul>
</div>
<div className="Footer2_2">
<span className="Company">Our Company</span>
<ul className="Footer3">
<ul className="Us">About Us</ul>
<li className="Career">Careers</li>
</ul>
</div>
<div className="Footer2_3">
<div>
<div>
<p className="Contact">Contact US</p>
<div className="Contact_Main">
<div>
<FiPhoneCall className="Call_Main"/>   
<span className="Call">91+9893470018</span>
</div>  
<div>
<BsEnvelope className="Envelope_Main"/>
<span className="Envelope">shivanshss707@gmail.com</span>
</div> 
</div>
</div>
</div>
</div>
</div>
</div>
  )
}

export default PreFooter