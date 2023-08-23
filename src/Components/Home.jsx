import React from "react";
import Navbar from "./Navbar";
import Heroes from "./Heroes";
import Skills from "./Skills";
import Project from "./Project/Project";
import Letter from "./NewsLetter/Letter";
import Footer from "./Footer/Footer";
const Home=()=>{
        return(
            <>
                <Navbar/>
                <Heroes/>
                <Skills/>
                <Project/>
                <Letter/>
                <Footer/>
            </>
        )
}

export default Home;