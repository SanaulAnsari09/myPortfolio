import React, { useState } from "react";
import './Card.css'
import { FaPlus ,FaMinus} from "react-icons/fa";
const Card = (props) => {
    const [show, setShow] = useState(false);
  return (
    <>
      <div className="CardA">
        <div className="cardTitle">
          <div className="langDiv">
              <div className="firstDiv">
                <p className="firstPara">{props.skill}</p>
              </div>
              <div className="secondDiv">
                <p className="secondPara"><span>90%</span></p>
              </div>
              <div className="thirdDiv">
                <p onClick={()=> setShow(!show)} className="icons">{ show ? <FaMinus className="icons" id="icon"/> :<FaPlus className="icons" id="icon"/> }</p>
              </div>
          </div>
        </div>
        <div className="cardDescription">
        { show && <p className="descrip">{props.desc}</p>}
        </div>
      </div>
    </>
  );
};

export default Card;
