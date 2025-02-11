import React from 'react'
import Nevbar from './componets/Nevbar'
import Home from './componets/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './componets/About'
import Work from './componets/Work'
import Contact from './componets/Contact'
import Footer from './componets/Footer'
import Skill from './componets/Skill'

function App() {
  return (
    <>
   
    <BrowserRouter>
    <Nevbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/skill' element={<Skill/>}/>
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App
