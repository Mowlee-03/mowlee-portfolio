import React from 'react'
import "./About.css"
import profileimg2 from '../../Assets/IMG_6658.JPG'
import education from "../../Assets/education.png"
import exper from '../../Assets/experience.png'
const About = () => {
  return (
    <>
 <div id="about">
      <h1 class="title1 ">About Me</h1>
      <div class="about-main">
        <div class="about-pic-div">
          <img
            src={profileimg2}
            alt="Profile picture"
            class="about-pic"
          />
        </div>
        
        <div class="about-details-div">
          <div class="about-containers">
            <div class="details-container">
              <img
                src={exper}
                alt="Experience icon"
                class="icon"
              />
              <h3>Degree</h3>
              <p>Beachlor of commerce with Computer applicationErode Arts and Science college,Erode.</p>
            </div>
            <div class="details-container">
              <img
                src={education}
                alt="Education icon"
                class="icon"
              />
              <h3>School</h3>
              <p>HSLC-85% SSLC-78%Komarapa Sengunthar Hr.Sec.School, Chennimalai,Erode.</p>
            </div>
          </div>
          <div class="text-container">
            <h6>CAREER OBJECTIVE:</h6>
            <p>Secure a responsible career oppurtunity to fully utilize my training and skills,while making a significant contribution to the success of the company,And I am seeking a role in a company where i can contribute my ideas and be mentored towards a successful career.</p>
            <p>Date of birth:29-01-2004</p>
            <p>Living in : Chennimalai,Erode</p>
          </div>
        </div>
      </div>
      <p class="more">Get To Know More</p>
    </div> 
    </>
  )
}

export default About
