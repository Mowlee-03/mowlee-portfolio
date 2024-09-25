import React from 'react'
import "./About.css"
import profileimg2 from '../../Assets/IMG_6658.JPG'
import education from "../../Assets/education.png"
import exper from '../../Assets/experience.png'
const About = () => {
	
  return (
    <>
 <div id="about" >
 <div class="my-lines" >
            <p>Secure a responsible career oppurtunity to fully utilize my training and skills,while making a significant contribution to the success of the company,And I am seeking a role in a company where i can contribute my ideas and be mentored towards a successful career.</p>
            <div class="about-pic-div" >
              <img
               src={profileimg2}
               alt="Profile picture"
                class="about-pic"
             />
            </div>

            <div className='personal-det-div'>
				<p>Fullname:<span>S.Mowleeshwaran</span></p>
				<p>D.O.B:<span>29.01.2004</span></p>
				<p>Living:<span>Tamilnadu,India</span></p>
				<p>Email:<span>mowleemm@gmail.com</span></p>
			</div>
			<h3>About me</h3>
</div>
<div class="about-main">
  
  <div className='about-navigation' >
          <button className='nav-btn'>Education</button>
          <button className='nav-btn'>Skills</button>
  </div>

  <div class="about-containers">
	<h1>EDUCATION</h1>
      <div class="row">
    			<div class="education">
    				<div class="detail-div">
    					<span class="date">2021-2024</span>
    					<h2>Bachelor's Degree of Commerce with Computer apllication</h2>
    					<span class="position">Erode Arts and science college,Erode,Tamilnadu</span>
    				</div>
    				<div class="detail-div">
    					<span class="date">2019-2021</span>
    					<h2>Higher Secondary's</h2>
    					<span class="position">Komarapa Sengunthar Hr.Sec.School,Chennimalai,Erode,Tamilnadu</span>
    				</div>
    				
    			</div>

    			<div class="education">
    				<div class="detail-div">
    					<span class="date">2024-2025</span>
    					<h2>Full Stack Development</h2>
    					<span class="position">Code Purple,Coimbatore</span>
    				</div>
    				<div class="detail-div">
    					<span class="date">2018-2019</span>
    					<h2>Secondary School</h2>
    					<span class="position">Komarapa Sengunthar Hr.Sec.School,Chennimalai,Erode,Tamilnadu</span>
    				</div>
    			</div>
    </div>
          </div>
      </div>
    </div> 
    </>
  )
}

export default About
