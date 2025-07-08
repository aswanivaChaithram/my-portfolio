import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo (2).png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <li><AnchorLink className='anchor-link' offset={1} href='#home' onClick={() => setMenuOpen(false)}>Home</AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about' onClick={() => setMenuOpen(false)}>About me</AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#projects' onClick={() => setMenuOpen(false)}>Projects</AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact' onClick={() => setMenuOpen(false)}>Contact me</AnchorLink></li>
        </ul>
        <img src={menuOpen ? menu_close : menu_open} 
        alt="" className='menu-icon'  onClick={toggleMenu} />
    </div>
  )
}

export default Navbar


