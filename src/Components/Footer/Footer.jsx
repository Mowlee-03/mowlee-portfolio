import React from 'react'
import './footer.css'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <div class='footer'>
        <div class='footer-main'>
            <div class='footer-nav'>
            <Link to='/'><p>Home</p></Link>
            <Link to='/about'><p>About</p></Link>
            <Link to='/skills'><p>Skills</p></Link>
            <Link to='/project'><p>Projects</p></Link>
            <Link to='/contact'><p>Contact</p></Link>
            </div>
            <div class='footer-media-icons'>
                <h6>Follow Me ~</h6>
            <FaFacebook />
            <FaInstagram />
            <FaXTwitter />
            <FaGithub />
            <FaLinkedin  />
            </div>
        </div>
        <div class='copyrights'>
            <p>@copyrights 2024 All Rights Reserved</p>
            <p>design by @mowlee</p>
        </div>
      </div>
    </>
  )
}

export default Footer
