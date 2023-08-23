import React from 'react';
import './Foot.css';
import { FaCopyright,FaLinkedin,FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
const Foot =()=>{
    return(
        <>
            <div className="footerMain">
                    <div className="subFooter">
                        <div className="firstFooter">
                                <h2>Sanaul Ansari</h2>
                        </div>
                        <div className="secondFooter">
                                <p>Copyright <span><FaCopyright/></span> 2023 </p>
                        </div>
                        <div className="thirdFooter">
                                <div className="socialMedia">
                                    <div className="firstSocial">
                                        <a href="/"><FaLinkedin/></a>
                                    </div>
                                    <div className="secondSocial">
                                        <a href="/"><FaGithub/></a>
                                    </div>
                                    <div className="thirdSocial">
                                        <a href="/"><FiMail/></a>
                                    </div>
                                </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Foot;