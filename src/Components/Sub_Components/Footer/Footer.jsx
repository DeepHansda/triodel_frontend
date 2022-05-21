import React from "react";
import "./footer.css";
import SocialMediaBar from "../../../UI/SocialMediaBar/SocialMediaBar";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-address">
          <div className="footer-address-title">
            <h3>address</h3>
          </div>
          <div className="footer-address-container">
            <p>
              713369 , Asansol , West Bengal , India
            </p>
          </div>
        </div>



        <div className="footer-contact">
          <div className="footer-contact-title">
            <h3>contact</h3>
          </div>
          <div className="footer-contact-container">
            <SocialMediaBar />
          </div>
        </div>



        <div className="footer-services-links">
          <div className="footer-services-title">
            <h3>quick links</h3>
          </div>
          <div className="footer-services-container">
          <Link to="/">
            <li className="side-item">home</li>
          </Link>
          {/* <Link to="/services">
            <li className="side-item">services</li>
          </Link> */}
          <Link to="/portfolio/web">
            <li className="side-item">portfolio</li>
          </Link>
          <Link to="/contact">
            <li className="side-item">contact</li>
          </Link>
          <Link to="/about">
            <li className="side-item">about</li>
          </Link>
          </div>
        </div>

        <div className="footer-services-links">
          <div className="footer-services-title">
            <h3>services</h3>
          </div>
          <div className="footer-services-container">
            <a href="">
              <li>web development</li>
            </a>
            <a href="">
              <li>android app development</li>
            </a>
            <a href="">
              <li>ui / ux design</li>
            </a>
            <a href="">
              <li>graphic design</li>
            </a>
          </div>
        </div>

        <div className="footer-services-links">
          <div className="footer-services-title">
            <h3>Get In Touch</h3>
          </div>
          <div className="footer-services-container">
            <a href="mailto:contact.triodel@gmail.com">
              <li>contact.triodel@gmail.com</li>
            </a>
            <a href="tel:+919064443033">
              <li>+91 9064443033</li>
            </a>
            <a href="tel:+919647750384">
              <li>+91 9647750384</li>
            </a>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
