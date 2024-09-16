import React from 'react'
import './projectmain.css'
import Projectdesign from '../../Components/Project/Projectdesign'
import ecom from '../../Assets/Screenshot (9).png'
import bankimg from '../../Assets/Screenshot (10).png'
import firebase from '../../Assets/Screenshot (11).png'
const Projectmain = () => {
  return (
    <>
    <h1 class='title1'>Project</h1>
    <div className='p'>
    <Projectdesign 
    img={ecom}
    name='E-Commerce Website Design'
    gitlink='https://github.com/Mowlee-03/mowleeshwaran'
    url='https://mowleeshwaran-minimalin-electronic-page-ecom.vercel.app/'
    />
    <Projectdesign 
    img={bankimg}
    name='Bank UI-JavaScript'
    gitlink='https://github.com/Mowlee-03/Bank-Project'
    url='https://bank-project-user.vercel.app/'
    />
    <Projectdesign 
    img={firebase}
    name='FireBase Connecting Project'
    gitlink='https://github.com/Mowlee-03/firebase'
    url=''
    />
    </div>
    </>
  )
}

export default Projectmain
