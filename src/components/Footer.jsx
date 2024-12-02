import React from 'react'
import '../Style/Footer.css'
const Footer = () => {
  return (
    <div className='footer-main'>
      <div className='footer-container'>
        <div className="footer-left">
          <h1>RECRUITMENT MANTRA</h1>
        </div>
        <div className="footer-right">
          <p>RECRUITMENT MANTRA is a global provider of IT Staffing, Recruitment Solutions, Flexi Staffing and HR Staffing Services in India. We are committed about serving client and candidate key needs. Contact us for more services at 18005724510</p>
        </div>
      </div>
      <div className="footer-bottom">
        <h1>Usefull Links</h1>
        <div>
          <div>


            <a href="/">Recruitment</a><a href="/">General Staffing</a><a href="/">IT staffing</a><a href="/">Leadership Hiring</a>
          </div>
          <div>
            <a href="/">Home</a><a href="/">Contact Us</a><a href="/">Openings</a><a href="/">Delhi Office</a><a href="/">Bangalore Office</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
