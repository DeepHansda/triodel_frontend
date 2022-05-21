import React from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "./navbar.css";
function Navbar({ SetOpenSideBar, openSideBar }) {
  return (
    <div className="topNavbar" style={{ zIndex: "200", position: "fixed" }}>
      <div className="navbarItems">
        <li className="navBarControlButtons">
          <p>
            {openSideBar ? (
              <FiX
                onClick={() => {
                  SetOpenSideBar(false);
                }}
              />
            ) : (
              <FiMenu
                onClick={() => {
                  SetOpenSideBar(true);
                }}
              />
            )}
          </p>
        </li>
        <Link to="/">
          <li className="navBarLogo">
            <img
              src="https://res.cloudinary.com/manjiro/image/upload/v1652440484/mywebsite/normal/logoAsset_3_216x_cv0tp4.png"
              alt="logo"
            />
          </li>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
