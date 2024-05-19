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
      <div className="hero-resume">My resume</div>

      </div>
    </div>
  )
}

export default Hero
