import React from 'react';
import './Navbar.css';
import { HiMenu } from "react-icons/hi";

const Navbar =()=>{
        return(
            <>
            <div className="container">
                <div className="subContainer">
                <div className='navbar'>
                    <div className='logoArea'>
                            <h4><span>S</span>anaul Ansari</h4>
                    </div>
                    <div className='navArea'>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Project</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="menuArea">
                            <HiMenu/>
                    </div>
                </div>
            </div>
                </div>
            </>
        )
}

export default Navbar;
