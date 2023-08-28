import React from 'react';
import './Foot.css';
import { FaCopyright,FaLinkedin,FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Link } from 'react-router-dom';
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
                                    <Link to="http://www.linkedin.com/in/sanaul-ansari-998a32288"><FaLinkedin/></Link>
                                    </div>
                                    <div className="secondSocial">
                                    <Link to="https://github.com/SanaulAnsari09"><FaGithub/></Link>
                                    </div>
                                    <div className="thirdSocial">
                                    <Link to="mailto:ansarcode09@gmail.com"><FiMail/></Link>
                                    </div>
                                </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Foot;