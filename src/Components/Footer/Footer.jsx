import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <h1> <span>Vipul</span></h1>
          <p>I am a MEAN / MERN Full Stack Developer from Pune.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder='Enter your email' />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>

      </div>
      <hr />
      <div className="footer-bottom">
        <p>@2024 Vipul Kumar Yadav. All Rights reserved.</p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <AnchorLink href="#contact" offset={50} className="anchor-link">
            <p onClick={() => setMenu("contact")}>Connect with me</p>
          </AnchorLink>
        </div>
      </div>
    </div>
  )
}

export default Footer
