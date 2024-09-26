import React from 'react'
import './footer.css'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import bye from '../../Assets/hi.png'
const Footer = () => {
  return (
    <>
      <div class='footer'>
        <div class='footer-main'>
          <img className='boy' src={bye} alt="" />
          <p className='boy-bye'>bye!!!</p>
            <div class='footer-media-icons'>
            <FaInstagram onClick={()=>{window.open('https://www.instagram.com/mo_wlee_03/')}} />
            <FaFacebook onClick={()=>{window.open('https://www.facebook.com/mowlee.fb')}} />
            <FaXTwitter onClick={()=>{window.open('')}} />
            <FaGithub onClick={()=>{window.open('https://github.com/Mowlee-03')}} />
            <FaLinkedin  onClick={()=>{window.open('https://www.linkedin.com/in/mowleeshwaran-pr0file/')}} />
            </div>
            <p className="copyrights">© 2024. All rights reserved by <a href="">mowlee</a></p>
        </div>
      </div>
    </>
  )
}

export default Footer
