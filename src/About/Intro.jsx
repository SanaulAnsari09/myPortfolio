import React from "react";
// import Heroes from "../Components/Heroes";
import './Intro.css';
import img from './image/aboutImage.jpg'
const Intro=()=>{
    return(
        <>
            <div className="container">
                <div className="subContainer">
                    <div className="introMain">
                    <div className="introSub">
                        <div className="introFirst">
                            <h1>Welocome to my introduction.</h1>
                            <p>You have known a brief intro about me. Let's talk about my educatin background.</p>
                            <p>Now i am persuing BCA from IGNOU (2022-2025) batch.</p>
                            <p>I am passionate about coding. It is my passion and Code Learning, Making Project, 
                               Problem Solving, Logic Building it's all are enjoying for me.
                            </p>
                            <p> </p>
                        </div>
                        <div className="introSecond">
                            <img src={img} alt="" />
                        </div>
                    </div>



                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro;