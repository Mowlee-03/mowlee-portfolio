import React from 'react'
import './contactmain.css'
import { SiMinutemailer } from "react-icons/si";
import { LuPhoneCall } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import boy from '../../Assets/peace.png'
const Contactmain = () => {
  return (
    <>
        <h1 className='title1'>Contact</h1>
      <div className='con'>
        <div className='con1'>
        <div className='contact-div-1'>
        <h1>Contact info</h1>
        <p>If you need any website creations and you have any job vaccancies for your company,i am always ready to work with you.</p>
        </div>
        <div className='contact-div-2'>
          <div onClick={()=>{window.location.href='mailto:mowleemm@gmailcom'}} className='type-of-contact'>
            <SiMinutemailer  className='con-icon shre'/>
            <h3>Mail to Me</h3>
            <p>mowleemm@gmail.com</p>
          </div>
          <div onClick={()=>{window.location.href='tel:+919788828422'}} className='type-of-contact'>
          <LuPhoneCall className='con-icon cll'/>
            <h3>Call me</h3>
            <p>+91 9788828422</p>
          </div>
          <div onClick={()=>{window.open('https://www.google.com/maps/place/Chennimalai,+Tamil+Nadu+638051/@13.0482176,80.2226176,6z/data=!4m6!3m5!1s0x3ba97462b7296999:0xb33340d3bf921ba9!8m2!3d11.1676029!4d77.6042342!16zL20vMGYwbjk1?entry=ttu&g_ep=EgoyMDI0MDkyMy4wIKXMDSoASAFQAw%3D%3D')}} className='type-of-contact'>
            <IoLocationOutline className='con-icon add'/>
            <h3>Address</h3>
            <p>Erode,Tamilnadu</p>
          </div>
        </div>
        </div>
        <div className='form-div'>
          <div className='form-1'>
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
            <input className='input1' name="" id=""></input>
          </div>
          <button class='msg-btn'>Send Message</button>
              </form>
              <img src={boy} alt="" />
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Contactmain
