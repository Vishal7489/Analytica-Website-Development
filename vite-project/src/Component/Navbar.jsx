import React  from 'react'
import "../Styles/Navbar.css"
import {Link} from "react-router-dom"
import { IoReorderThreeOutline } from "react-icons/io5";
import logo from "../assests/Image/logo.jpg"

const Navbar = () => {
return (
<nav className="Nav">
<input type="checkbox"   id="check"    name=""  value=""/>
<label  for="check" id="checkbtn"><IoReorderThreeOutline/></label>
<label>
<img src={logo} alt="random-image" className="NavImage"/>
</label>

<ul>
<li><Link className="home">Home</Link></li>
<li><Link className="home">Services</Link></li>
<li><Link className="home">About US</Link></li>
<li><Link  to="/Contact" className="home">Contact Us</Link></li>
</ul>
</nav>
)
}

export default Navbar
