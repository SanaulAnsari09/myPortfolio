import React from "react";
import './Letters.css';
import certificate from './image/certificate.jpg';
import { Link } from "react-router-dom";
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
                                    <Link to="https://drive.google.com/file/d/1FUU2iXfABFvR8jmHt6NfAdVwG7P3QflR/view?usp=drive_link">View</Link>
                                </div>
                            </div>
                        </div>
                        <div className="letterContentArea">
                            <div className="letterContent">
                                <h1>Explore more about me ...</h1>
                                <a href="https://drive.google.com/file/d/1Fid2QlUG639CBMziEI4aXFgfIe2u3U-b/view?usp=drive_link">Download my resume</a>          
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}
export default Letters;