import React from 'react'
import './Hero.css'
import profileimg from "../../../assets/profileimg.jpeg";
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profileimg} alt="" />
      <h1><span>I'm a Vipul Kumar Yadav,</span>MEAN/MEARN FULL STACK DEVELOPER.</h1>
      <p> I am a Node.js Full Stack Developer,Recently I have completed UI/UX Full Stack Training Program </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Contact With Me</AnchorLink></div>
        <a
           href="/Vipul%20Kumar%20Yadav%20%20Resume______2.1.pdf" 
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="hero-resume">My resume</div>
        </a>


      </div>
    </div>
  )
}

export default Hero
