import React from 'react'
import "../Styles/Carousel.css"

const Carousel = () => {
  return (
  <div className="Carousel_Main">

   <div className="Carousel3"><h1>Our <span className="Carousel4">Services</span></h1></div>
   <div className="Carousel">
    <div>
    <div className="Carousel1">
    <div className="Carousel2">
    <img src="https://www.techanzo.com/assets/images/ui-ux-design.png" alt="random-image" className="carousel-image"/>
    <h3 className="Carousel_Heading">Full Stack Development</h3>
    <p className="Carousel_para">
    Our UI/UX designing services are geared towards delivering
    exceptional user experiences through intuitive and
    aesthetically pleasing interfaces.
    </p>
    </div>
    </div>
    </div>
    

    <div className="Carousel1">
    <div className="Carousel2">
    <img src="https://www.techanzo.com/assets/images/machine-learning.png" alt="random-image" className="carousel-image1"/>
    <h3 className="Carousel_Heading" >Data Analytics</h3>
    <p className="Carousel_para">
    Our Machine Learning services help you stay ahead 
    of the
    curve in an ever-evolving technological landscape.           
    </p>
    </div>
    </div>

    <div className="Carousel1">
    <div className="Carousel2">
    <img src="https://www.techanzo.com/assets/images/desktop-app-development.png" alt="random-image" className="carousel-image2"/>
    <h3  className="Carousel_Heading" >Website Development</h3>
    <p   className="Carousel_para">
    Transform your ideas into reality with custom desktop app
    development solutions that cater to your unique business
    requirements.          
    </p>
    </div>
    </div>
    </div>




    </div>


   

  )
}

export default Carousel