import React from 'react'
import './Profile.css'
import profileimg from "../../Assets/IMG_3056.JPG"
import gitimg from '../../Assets/github.png'
import linkin from '../../Assets/linkedin.png'
import pdf from '../../Assets/src/Assets/DOC-20240926-WA0000._20241102_173546_0000.pdf'
const Profile = () => {
  function contactscroll() {
    let element=document.getElementById('contact')
    element?.scrollIntoView({
      behavior:'smooth',
    })
  }
  return (
    <>
      <div id="profile">
      <div class="section__pic-container">
        <img  src={profileimg} alt="profile picture" />
      </div>
      <div class="section__text">
        <p class="section__text__p1">Hello, I'm</p>
        <h1 class="title">Mowleeshwaran</h1>
        <p class="section__text__p2">Frontend Developer</p>
        <div class="btn-container">
          <a href={pdf}>
          <button
            class="btn btn-color-2"
          >
            Download CV
          </button>
          </a>
          
          <button onClick={contactscroll} class="btn btn-color-1">
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          
          <a href="https://www.linkedin.com/in/mowleeshwaran-pr0file/">
          <img
            src={linkin}
            alt="My LinkedIn profile"
            class="icon"
          />
          </a>
          <a href="https://github.com/Mowlee-03">
          <img
            src={gitimg}
            alt="My Github profile"
            class="icon"
          />
          </a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Profile
