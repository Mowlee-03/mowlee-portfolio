import './Navbar.css'
import { Link } from 'react-router-dom'
import { TbMenu2 } from "react-icons/tb";
import { FaHome } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { VscMortarBoard } from "react-icons/vsc";
import { RiContactsBook3Line } from "react-icons/ri";

const Navbar = () => {

function smoothscroll(params) {
  let element=document.getElementById('profile')
  element?.scrollIntoView({
    behavior:'smooth',
  })
}
function smoothscroll1(params) {
  let element=document.getElementById('about')
  element?.scrollIntoView({
    behavior:'smooth',
  })
}
function smoothscroll2(params) {
  let element=document.getElementById('skills')
  element?.scrollIntoView({
    behavior:'smooth',
  })
}

function togglebtn() {
let sidebar=document.querySelector('.resposive-navbar')
  sidebar.classList.toggle('active')
}

  return (
    <>
    <nav id="desktop-nav">
      <div class='nav '>
      <div class="logo">PORTFOLIO</div>
      <ul class="nav-links">
          <Link to='/'><li name='profile' onClick={smoothscroll}>Home</li></Link>
          <Link  to='/'><li onClick={smoothscroll1}>About</li></Link>
          <Link to='/'><li onClick={smoothscroll2}>Skills</li></Link>
          <Link to='/project'><li>Projects</li></Link>
          <Link to='/contact'><li>Contact</li></Link>
      </ul>
      </div>
    </nav>
    <div className='resposive-navbar'>
      <div className='menus-div'>
        <p>Menu</p> <button id='menu-btn' onClick={togglebtn}><TbMenu2 /></button>
      </div>
      <ul>
        <li className='res-icon-div'>
          <Link to='/' onClick={smoothscroll} className='navigation'>
          <FaHome className='i'/><p>Home</p>
          </Link>
        </li>
        <li className='res-icon-div'>
          <Link to='/' onClick={smoothscroll1}  className='navigation'>
          <IoPersonCircle className='i'/><p>About</p>
          </Link>
        </li>
        <li className='res-icon-div'>
          <Link to='/' onClick={smoothscroll2}  className='navigation'>
          <VscMortarBoard className='i'/><p>Skill</p>
          </Link>
        </li>
        <li className='res-icon-div'>
          <Link to='/project' className='navigation'>
          <RiComputerLine className='i'/><p>Project</p>
          </Link>
        </li>
        <li className='res-icon-div'>
          <Link to='/contact' className='navigation'>
          <RiContactsBook3Line className='i'/><p>Contact</p>
          </Link>
        </li>
      </ul>
    </div>
    </>
  )
}

export default Navbar
