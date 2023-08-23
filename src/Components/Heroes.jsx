import React from "react";
import "./Heroes.css";
import img2 from "./photo/ansar-4.jpg";
import {FaLinkedin,FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
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
                          <FaLinkedin/>
                      </div>
                      <div className="gitHub">
                          <FaGithub/>
                      </div>
                      <div className="mail">
                          <FiMail/>
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
