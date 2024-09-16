import React from 'react'
import './project.css'
import { GiArmoredBoomerang } from "react-icons/gi";
import { Link } from 'react-router-dom';
import Projectdesign from './Projectdesign';
import ecom from '../../Assets/Screenshot (9).png'

const Project = () => {
  return (
    <>
    <div id="projects">
      <h1 class="title1">Projects</h1>
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
      <p class="more">
      Show Detailly</p>
        </div>
    </>  )
}

export default Project
