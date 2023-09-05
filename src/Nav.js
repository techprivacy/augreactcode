import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './About'
import Home from './Home'

export default function Nav() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>} />
<Route path='/about' element={<About/>}  />


    </Routes>   
    </BrowserRouter>



  )
}
