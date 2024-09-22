import React from 'react'
import './project.css'
import { GiArmoredBoomerang } from "react-icons/gi";
import { Link } from 'react-router-dom';
import Projectdesign from './Projectdesign';
import ecom from '../../Assets/Screenshot (9).png'
import spark from '../../Assets/sparkling.png'

const Project = () => {
  return (
    <>
    <div id="projects">
      <h1 class="title1">Projects</h1>
      <div className='spark-title'>
        <img className='spark-icon' src={spark} alt="" />
      <h2>My Latest Project that Live on the net.</h2>
      <img className='spark-icon' src={spark} alt="" />
      </div>
    <div class='project-main-div'>
    <Projectdesign 
    img={ecom}
    name='E-Commerce Website Design'
    gitlink='https://github.com/Mowlee-03/mowleeshwaran'
    url='https://mowleeshwaran-minimalin-electronic-page-ecom.vercel.app/'
    />
          <Link to='/project'><div class="show-more">
          <GiArmoredBoomerang  class='iconssss'/>
          <h2>Show More</h2>
          </div></Link>
    </div>
        </div>
    </>  )
}

export default Project
