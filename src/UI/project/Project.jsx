import React from "react";
import { Link } from "react-router-dom";
import "./project.css";
function Project() {
  return (
    <div className="project">
      <div className="project-img">
        <img
          src="https://res.cloudinary.com/manjiro/image/upload/v1639136578/4_p9psxb.jpg"
          alt="project-img"
        />
      </div>


      <div className="project-info">

      <div className="project-text">
        <div className="project-text-title">
          <h1>Josua strong</h1>
        </div>

        <div className="project-text-para">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            quisquam beatae praesentium culpa, nemo nam blanditiis, adipisci
            autem saepe aliquid odit perspiciatis!
          </p>
        </div>
      </div>

      <div className="project-tech">
        <div className="project-tech-title">
          <h1>technologies used :</h1>
        </div>
        <div className="project-tech-list">
          <li className="project-tech-item">
            <img
              src="https://res.cloudinary.com/manjiro/image/upload/v1644467233/mywebsite/weapons_img/react-brands_izffaj.svg"
              alt="tech"
            />
          </li>

          <li className="project-tech-item">
            <img
              src="https://res.cloudinary.com/manjiro/image/upload/v1644467233/mywebsite/weapons_img/react-brands_izffaj.svg"
              alt="tech"
            />
          </li>

          <li className="project-tech-item">
            <img
              src="https://res.cloudinary.com/manjiro/image/upload/v1644467233/mywebsite/weapons_img/react-brands_izffaj.svg"
              alt="tech"
            />
          </li>

          <li className="project-tech-item">
            <img
              src="https://res.cloudinary.com/manjiro/image/upload/v1644467233/mywebsite/weapons_img/react-brands_izffaj.svg"
              alt="tech"
            />
          </li>
        </div>
      </div>

      <div className="project-button">
        <Link to="">
          <button type="button">visit website</button>
        </Link>
      </div>

      </div>
    </div>
  );
}

export default Project;
