import React from 'react'
import './Footer.css'
import logo from '../../assets/logo (2).png'

const Footer = () => {
  return (
    <div className='footer'>
      <hr />
      <div className="footer-info">
        <a href="/"><img src={logo} alt="" /></a>
        <p>© 2025 Aswani V A. All rights reserved.</p>
        <div className="conditions">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer