import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Profile from '../../Components/Profile/Profile';
import About from '../../Components/About/About';
import Skill from '../../Components/Skill/Skill';
import Project from '../../Components/Project/Project';
import Contact from '../../Components/Contact/Contact';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <div data-aos="fade-up">
        <Profile />
      </div>
      <div data-aos="fade-up">
        <About />
      </div>
      <div data-aos="fade-up">
        <Skill />
      </div>
      <div data-aos="fade-up">
        <Project />
      </div>
      <div data-aos="fade-up">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
