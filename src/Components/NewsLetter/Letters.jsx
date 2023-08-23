import React from "react";
import './Letters.css';
import certificate from './image/certificate.jpg';
const Letters=()=>{
    return(
        <>
            <div className="letterMain">
                    <h1 className="letterHead">Certification & Resume</h1>
                    <div className="letterSub">
                        <div className="letterimageArea">
                            <div className="letterImg">
                                <img src={certificate} alt="" />
                                <div className="introduction">
                                    <h1>Course Completion Certificate</h1>
                                    <a href="/">View</a>
                                </div>
                            </div>
                        </div>
                        <div className="letterContentArea">
                            <div className="letterContent">
                                <h1>Explore more about me ...</h1>
                                <a href="">Download my resume</a>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}
export default Letters;