import React from 'react'
import './contactmain.css'
import { SiMinutemailer } from "react-icons/si";
import { LuPhoneCall } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";

const Contactmain = () => {
  return (
    <>
        <h1 className='title1'>Contact</h1>
      <div className='con'>
        <div className='con1'>
        <div className='contact-div-1'>
        <h1 className='title-con'>Contact info</h1>
        <p>if you need any website creations and you have any job vaccancies for your company,i am always ready to work with you.</p>
        </div>
        <div className='contact-div-2'>
          <div className='type-of-contact'>
            <SiMinutemailer  className='con-icon'/>
            <h3>Mail to Me</h3>
            <p>mowleemm@gmail.com</p>
          </div>
          <div className='type-of-contact'>
          <LuPhoneCall className='con-icon'/>
            <h3>Call me</h3>
            <p>+91 9788828422</p>
          </div>
          <div className='type-of-contact'>
            <IoLocationOutline className='con-icon'/>
            <h3>Address</h3>
            <p>chennimailai,erode,tamilnadu</p>
          </div>
        </div>
        </div>
        <div className='form-div'>
        <form className='form'>
          <h1>LET'S WORK TOGETHER</h1>
          <div className='form-detail'>
            <label htmlFor="">Your Name</label>
            <input className='input' type="text"  placeholder='Fullname' required/>
          </div>
          <div className='form-detail'>
            <label  htmlFor="">Your email</label>
            <input className='input' type="email"  placeholder='example@gmail.com' required/>
          </div>
          <div className='form-detail'>
            <label htmlFor="">Your subject</label>
            <input className='input' type="text"   required/>
          </div>
          <div className='form-message'>
            <label htmlFor="">Message</label>
            <textarea className='input1' name="" id=""></textarea>
          </div>
          <button class='msg-btn'>Send Message</button>
        </form>
        </div>
        
      </div>
    </>
  )
}

export default Contactmain
