import React from 'react';
import Home from './Components/Home';
import { HashRouter, Routes, Route } from 'react-router-dom';
import About from './About/About';
import Project from "./ProjectNav/Project";
import Contact from './Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import './App.css';
const App=()=>{
  return(
    <>
    <HashRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/project' element={<Project/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
            <Footer/>
    </HashRouter>
    </>
  )
}

export default App;