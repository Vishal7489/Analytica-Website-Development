import React from 'react'
import "../Styles/Header.css"

const Header = () => {
return (
<>
<div className="Header">
<div  className="Header_para">
<div><p className="para">Your Ideas, Our Expertise,</p></div>
<div><p className="para_1">Limitless Possibilities</p></div>
<div><p className="para1">Transforming digital experiences with custom Web<br/> Development and Data-Driven insights</p></div>
<div><p className="para_Heading">Are you bursting with an incredible business idea? Let's dive<br/>
into a conversation and revolutionize it in the digital realm</p></div>
<div><button className="para_button1">Get In Touch</button></div>
</div>
<div className="Header1"><img src="https://www.techanzo.com/assets/images/home-hero-image.png" alt="random-image"  className="images2"/>
</div>
</div>
</>
  )
}

export default Header