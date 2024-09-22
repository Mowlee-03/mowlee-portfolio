import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { TbMenu2 } from "react-icons/tb";

const Navbar = () => {
  return (
    <>
    <nav id="desktop-nav">
      <div class='nav '>
      <div class="logo">PORTFOLIO</div>
      <ul class="nav-links">
          <Link to='/'><li className='li-1'>Home</li></Link>
          <a href='/#about'><li>About</li></a>
          <a href='/#skills'><li>Skills</li></a>
          <Link to='/project'><li>Projects</li></Link>
          <Link to='/contact'><li>Contact</li></Link>
      </ul>
      <div class='menu-icon'>
      <TbMenu2 />
      </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar
