import React from 'react'
import checkmark from '../../Assets/checkmark.png'
import './skill.css'
import html from '../../Assets/skill icons/html-5.png'
import css from '../../Assets/skill icons/css-3.png'
import js from '../../Assets/skill icons/js.png'
import react from '../../Assets/skill icons/atom.png'
import git from '../../Assets/skill icons/social.png'
import node from '../../Assets/skill icons/nodejs.png'
import python from '../../Assets/skill icons/python.png'
import photoshop from '../../Assets/skill icons/photoshop.png'

const Skill = () => {
  return (
    <>
    <section id="skills">
    <h1 class="title1">My Skills</h1>
	<div className='skill-row-1'>
		<div className='skill-detail'>
			<marquee behavior="scroll" direction="">
				<ul>
				<li>Frontend Developing</li>
				<li>Frontend Developing</li>
				<li>Frontend Developing</li>
				<li>Frontend Developing</li>
				<li>Frontend Developing</li>
				<li>Frontend Developing</li>
				<li>Frontend Developing</li>
				</ul>
			</marquee>
	<p className='skill-para'>As a <span>Full stack developer</span>, the skills that i using for developing a websites...</p>
<div className='skill-logo-div1'>
			<h4>Front-End-Development</h4>
			<div className='skill-logo-div'>
				<div className='skill-logo'>
					<img className='s-logo' src={html} alt="" />
					<p>HTML</p>
				</div>
				<div className='skill-logo'>
					<img className='s-logo' src={css} alt="" />
					<p>CSS</p>
				</div>
				<div className='skill-logo'>
					<img className='s-logo' src={js} alt="" />
					<p>JavaScript</p>
				</div>
				<div className='skill-logo'>
					<img className='s-logo' src={react} alt="" />
					<p>ReactJS</p>
				</div>
				<div className='skill-logo'>
					<img className='s-logo' src={git} alt="" />
					<p>GIT</p>
				</div>
			</div>
</div>
<div className='skill-logo-div1'>
			<h4>Back-End-Development-(learning)</h4>
			<div className='skill-logo-div'>
				<div className='skill-logo'>
					<img className='s-logo' src={node} alt="" />
					<p>NodeJS</p>
				</div>
				<div className='skill-logo'>
					<img className='s-logo' src={python} alt="" />
					<p>Python</p>
				</div>
			</div>
</div>
<div className='skill-logo-div1'>
			<h4>Additional-Skills</h4>
			<div className='skill-logo-div'>
				<div className='skill-logo'>
					<img className='s-logo' src={photoshop} alt="" />
					<p>Photoshop</p>
				</div>
			</div>
</div>
		</div>
	</div>
	<div className='skill-row-2'>
	<p className='skill-para'>My <span>Basic skills </span>, as a good employee...</p>
	<div class="skill-grid">
					<div class="basic-skil" data-aos="flip-right">
						<div class="progress">
							<div className='progress-head'>
							<h3>Communication</h3>
							<span>60%</span>
							</div>
							<span class="bar-div"><span class="communication"></span></span>
						</div>
					</div>
					<div class="basic-skil" data-aos="flip-left">
						<div class="progress">
							<div className='progress-head'>
							<h3>Problem-Solving</h3>
							<span>70%</span>
							</div>
							<span class="bar-div"><span class="Problem-Solving"></span></span>
						</div>
					</div>
					<div class="basic-skil" data-aos="flip-right">
						<div class="progress">
							<div className='progress-head'>
							<h3>Creativity</h3>
							<span>82%</span>
							</div>
							<span class="bar-div"><span class="Creativity"></span></span>
						</div>
					</div>
					<div class="basic-skil" data-aos="flip-left">
						<div class="progress">
							<div className='progress-head'>
							<h3>Presentation</h3>
							<span>69%</span>
							</div>
							<span class="bar-div"><span class="Presentation"></span></span>
						</div>
					</div>
					<div class="basic-skil" data-aos="flip-right">
						<div class="progress">
							<div className='progress-head'>
							<h3>Flexibility</h3>
							<span>70%</span>
							</div>
							<span class="bar-div"><span class="Flexibility"></span></span>
						</div>
					</div>
					<div class="basic-skil" data-aos="flip-left">
						<div class="progress">
							<div className='progress-head'>
							<h3>Adaptbaility</h3>
							<span>95%</span>
							</div>
							<span class="bar-div"><span class="Adaptbaility"></span></span>
						</div>
					</div>
		</div>
	</div>
    
  </section>

    </>
  )
}

export default Skill
