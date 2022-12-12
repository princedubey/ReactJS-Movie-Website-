import React from 'react'
import Allmovies from './components/Allmovies'
import {Route, Routes} from 'react-router'
import "react-bootstrap"
import NavBar from './components/NavBar'
import About from './components/About'


const App = () => {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Allmovies/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </>
  )
}

export default App
