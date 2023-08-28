import React from "react";
import './ProjectComp.css';
import Shoes from './image/Shoes.png';
import redStore from './image/redStore.png';
import Store from './image/Store.png';
import useAbility from './image/useAbility.png';
import { Link } from "react-router-dom";
const ProjectComp=()=>{
    return(
        <>
                    <div className="ProjectMainDiv">
                        <div className="practicalMain">
                            <div className="practImage">
                                <img src={Shoes} alt="" />
                                <div className="imgContent">
                                    <h1>It's a one page website</h1>
                                    <a href="/">View Project</a>
                                </div>
                            </div>
                            <div className="practImage">
                                <img src={redStore} alt="" />
                                <div className="imgContent">
                                    <h1>It's a one pae website</h1>
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
                                <h1>It's a e-commerce website </h1>
                                            <p>On working</p>
                                    <Link to="/">View Project</Link>
                                </div>
                            </div>
                            <div className="practImage">
                                <img src={useAbility} alt="" />
                                <div className="imgContent">
                                <h1>It's a one pae website</h1>
                                    <Link to="/">View Project</Link>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
    )
}

export default ProjectComp;