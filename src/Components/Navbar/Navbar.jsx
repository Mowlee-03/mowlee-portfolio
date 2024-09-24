import './Navbar.css'
import { Link } from 'react-router-dom'
import { TbMenu2 } from "react-icons/tb";
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
      <div class='menu-icon'>
      <TbMenu2 />
      </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar
