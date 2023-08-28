import React from 'react';
import './Navbar.css';
import { HiMenu ,HiX} from "react-icons/hi";
import {useState} from 'react'; 
import {Link} from 'react-router-dom';
const Navbar =()=>{
    
    const [show, setShow] =useState();

        return(
            <>
            <div className="container">
                <div className="subContainer">
                <div className="forWhat">
                    <div className={show ? 'mobileBar' : 'navbar'}>
                        <div className='logoArea'>
                            <h4><span>S</span>anaul Ansari</h4>
                            <span>helloansar09@gmail.com | 8252232266</span>
                        </div>
                        <div className={show ? 'mobileNav' : 'navArea'}>
                         <ul className={show ?'mobileList' : 'listItem'}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/project">Project</Link></li>
                            <li><Link to="/contact">Skills</Link></li>
                        </ul>
                        </div>
                    </div>
                    <div className="menuArea">
                           <li onClick={()=>setShow(!show)} > {show ? <HiX/> : <HiMenu/>}</li>
                    </div>
                </div>
                </div>
            </div>
            </>
        )
}

export default Navbar;
