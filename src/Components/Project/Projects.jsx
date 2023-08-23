import React from 'react';
import './Projects.css';
import ProjectComp from './ProjectComp';

const Projects =()=>{
    return(
        <>
            <div className="container">
                <div className="subContainer">
                       <div className="projectHead">
                            <h1>My Project</h1>
                       </div>       
                        <ProjectComp/>
                </div>
            </div>
        </>
    )
}

export default Projects;
