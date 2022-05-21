import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { FiMenu,FiX } from "react-icons/fi";
import SocialMediaBar from "../SocialMediaBar/SocialMediaBar";

function Sidebar({openSideBar,SetOpenSideBar}) {
  return (
    <div className="sidebar" style={{left:`${openSideBar? '0%': '-100%'}`}}>
       <div className="side-container-control" onClick={()=>{SetOpenSideBar(false)}}>
            <p><FiX/></p>
        </div>
      <div className="side-container">
       
        <ul className="side-items">
          <Link to="/">
            <li className="side-item">home</li>
          </Link>
          {/* <Link to="/services">
            <li className="side-item">services</li>
          </Link> */}
          {/* <Link to="/portfolio/web">
            <li className="side-item">portfolio</li>
          </Link> */}
          <Link to="/contact">
            <li className="side-item">contact</li>
          </Link>
          <Link to="/about">
            <li className="side-item">about</li>
          </Link>
        </ul>
      </div>
      <div className="sidebar-SocialMediaBar">
      <SocialMediaBar/>

      </div>
    </div>
  );
}

export default Sidebar;
