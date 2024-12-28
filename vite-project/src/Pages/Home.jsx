import React from 'react'
import Header from "../Component/Header.jsx"
import Carousel from "../Component/Carousel.jsx"
import About from "../Component/About.jsx"
import Services from "../Component/Services.jsx"
import Service_Footer from "../Component/Service_Footer.jsx"
import Process from "../Component/Process.jsx"
import SignUp from "../Component/SignUp.jsx"
import Skills from "../Component/Skills.jsx"

const Home = () => {
  return (
<div>
<Header/>
<About/>
<Carousel/>
<Services/>
<Service_Footer/>
<Process/>
<Skills/>
<SignUp/> 
</div>
  )
}

export default Home