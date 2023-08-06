import React from 'react'
import './About.css';
import Jump from "react-reveal/Jump";
import profilepic from "../../assets/images/bilal.jpg";
const About = () => {
  return (
    <>
      <Jump>
      <div className='about' id='about'>
        <div className='row'>
        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img
              src={profilepic}
              alt="profile_pic"
            />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About me</h1>
            <p>
            I am MERN Stack developer and have in-depth knowledge of NodeJS, ExpressJS and ReactJS and have the 
            ability to make more interactive UI. I am a final year student of Federal Urdu University of arts, 
            science and Technology. I am a fresher. I have knowledge on frontend, backend, security, responsive 
            frameworks, libraries, databases, and best code practices and also knowledge on different css animation 
            effect libraries. I have good knowledge about MVC Architecture to build restful apis.
            </p>
          </div>
        </div>
      </div>
      </Jump> 
    </>
  )
}

export default About
