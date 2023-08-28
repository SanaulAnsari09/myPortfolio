import React from "react";
import "./Heroes.css";
import img2 from "./photo/ansar-4.jpg";
import {FaLinkedin,FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
const Heroes = () => {
  return (
    <>
      <div className="container">
        <div className="subContainer">
          <div className="mainDiv">
            <div className="textArea">
              <h1 className="textFirst">This is <br/> <span>S</span>anaul Ansari </h1>
              <h1 className="textSecond">This is Sanaul Ansari </h1>
              <p>I have done java fullstack development from 4Achievers.com.I had a great experience there,
               I gave my full effort and i practiced a lot On the project and on the code.</p>
                <div className="socialArea">
                      <div className="linkedIn">
                          <Link to="http://www.linkedin.com/in/sanaul-ansari-998a32288"><FaLinkedin/></Link>
                      </div>
                      <div className="gitHub">
                          <Link to="https://github.com/SanaulAnsari09"><FaGithub/></Link>
                      </div>
                      <div className="mail">
                      <Link to="mailto:ansarcode09@gmail.com"><FiMail/></Link>
                      </div>
                </div>
            </div>
            <div className="imageArea">
              <img src={img2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Heroes;
