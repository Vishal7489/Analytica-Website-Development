import React from 'react'
import "../Styles/Footer.css"

const Footer = () => {
return (
<div className="Foot">
<div className="Foot1">
<img src="https://www.techanzo.com/assets/images/india-flag.png" alt="random-image" className="Foot_img"/>
<h3 className="india">India</h3>
<p className="Titanium">
210, Dhan Trident, Satya Sai Square, Vijaynagar, Indore
</p>
</div>
<div className="Foot2">
<img src="https://www.techanzo.com/assets/images/usa-flag.png" alt="random-image" className="Foot_img1"/>
<p className="USA">USA</p>
<p className="Titanium">4925 Greenville Ave, Suite 200,<br/>
Dallas, Texas, 75206</p>
</div>
<div className="Foot3">
<img src="http://localhost:5173/src/assests/Image/logo.jpg?t=1735370560337" alt="random-image" className="Foot_img3"/>
<span className="Techanzo">Analytica Nexa</span>
<p className="Trans">Transforming visions into captivating digital experiences with innovative<br/>
frontend web development and dynamic data visualization solutions, Techanzo<br/>
propels your online presence into the future.</p>
</div>
</div>
  )
}

export default Footer