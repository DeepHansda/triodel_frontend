import React from "react";
import './android.css'
import AndroidSlider from "./AndroidSlider";
function AndroidProject() {
  return (
    <div className="androidProject">
      <div className="androidProject-main">
      <div className="androidProject-img">
       <AndroidSlider/>
      </div>
      <div className="androidProject-info">
        <div className="androidProject-info-text">
          <div className="android-project-title">
            <h2>my real hood</h2>
          </div>
          <div className="android-project-para">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              soluta porro assumenda delectus harum architecto animi officia
              itaque et suscipit.
            </p>
          </div>
        </div>
        <div className="android-project-tech-container">
          <div className="android-project-tech-list">
            <li className="android-project-tech">
              <img
                src="https://res.cloudinary.com/manjiro/image/upload/v1644467233/mywebsite/weapons_img/react-brands_izffaj.svg"
                alt=""
              />
            </li>
            <li className="android-project-tech">
              <img
                src="https://res.cloudinary.com/manjiro/image/upload/v1644467233/mywebsite/weapons_img/react-brands_izffaj.svg"
                alt=""
              />
            </li><li className="android-project-tech">
              <img
                src="https://res.cloudinary.com/manjiro/image/upload/v1644467233/mywebsite/weapons_img/react-brands_izffaj.svg"
                alt=""
              />
            </li>
            <li className="android-project-tech">
              <img
                src="https://res.cloudinary.com/manjiro/image/upload/v1644467233/mywebsite/weapons_img/react-brands_izffaj.svg"
                alt=""
              />
            </li>
            {/* <li className="android-project-tech">
              <img
                src="https://res.cloudinary.com/manjiro/image/upload/v1644467233/mywebsite/weapons_img/react-brands_izffaj.svg"
                alt=""
              />
            </li> */}
          </div>
        </div>
        
      </div>
      <div className="android-project-visit">
          <button>visit</button>
      </div>
      </div>
    </div>
  );
}

export default AndroidProject;
