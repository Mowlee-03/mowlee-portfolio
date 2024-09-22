import React from 'react'
import {Routes,Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Contactmain from '../Pages/contactmain/Contactmain'
import Projectmain from '../Pages/Projectmain/Projectmain'
const Routing = () => {
  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/project' element={<Projectmain/>}/>
      <Route path='/contact' element={<Contactmain/>}/>
     </Routes>
    </>
  )
}
export default Routing
