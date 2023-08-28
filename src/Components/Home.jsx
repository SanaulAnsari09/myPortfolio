import React from "react";
import Heroes from "./Heroes";
import Skills from "./Skills";
import Project from "./Project/Project";
import Letter from "./NewsLetter/Letter";


const Home=()=>{
        return(
            <>
                <Heroes/>
                <Skills/>
                <Project/>
                <Letter/>
            </>
        )
}

export default Home;