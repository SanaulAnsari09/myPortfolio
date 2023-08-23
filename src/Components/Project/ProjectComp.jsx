import React from "react";
import './ProjectComp.css';
import Shoes from './image/Shoes.png';
import redStore from './image/redStore.png';
import Store from './image/Store.png';
import useAbility from './image/useAbility.png';
const ProjectComp=()=>{
    return(
        <>
                    <div className="ProjectMainDiv">
                        <div className="practicalMain">
                            <div className="practImage">
                                <img src={Shoes} alt="" />
                                <div className="imgContent">
                                    <h1>This is my first Project</h1>
                                    <a href="/">View Project</a>
                                </div>
                            </div>
                            <div className="practImage">
                                <img src={redStore} alt="" />
                                <div className="imgContent">
                                    <h1>This is my first Project</h1>
                                    <a href="/">View Project</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ------------------Second Div for Project --------------------------*/}

                    <div className="ProjectMainDiv">
                        <div className="practicalMain">
                            <div className="practImage">
                                <img src={Store} alt="" />
                                <div className="imgContent">
                                    <h1>This is my first Project</h1>
                                    <a href="/">View Project</a>
                                </div>
                            </div>
                            <div className="practImage">
                                <img src={useAbility} alt="" />
                                <div className="imgContent">
                                    <h1>This is my first Project</h1>
                                    <a href="/">View Project</a>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
    )
}

export default ProjectComp;