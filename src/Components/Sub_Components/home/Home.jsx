import React from "react";
import { Link } from "react-router-dom";
import Slideshow from '../../../UI/slideshow/Slideshow'
import "./home.css";
function Home() {

  return (
    <div className="home-box">
  
      {/* <Slideshow/> */}
    <div className="home" id="home">
      <div className="intro">
        <div className="intro-text">
          <div className="intro-heading">
            <h1>ITS ALL ABOUT YOUR WEBSITE.</h1>
          </div>
          <div className="intro-para">
            <p>
              we unites beauty and latest technologies to create your stunning
              website.
            </p>
          </div>
        </div>
      </div>

      <div className="intro-contact">
        <div className="intro-contact-button">
          <Link to="/contact">
            <button>
              <p>contact us</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home;
