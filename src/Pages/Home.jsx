import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Profile from '../Components/Profile/Profile'
import About from '../Components/About/About'
import Skill from '../Components/Skill/Skill'
import Project from '../Components/Project/Project'
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <>
    <Profile/>
    <About/>
    <Skill/>
    <Project/>
    <Contact/>
    </>
  )
}

export default Home
