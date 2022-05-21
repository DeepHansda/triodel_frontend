import React from "react";
import Service from "../../../UI/service/Service";
import serviceData from "../../../Data/servicesData";
import "./services.css";
function Co_Services() {
  return (
    <div className="services" id="services" name="services">
      <div className="services-title">
        <h1>services</h1>
        <p>
          We provide a chance to grow your business on online marketing to
          fulfill your dreams SERVICE : Web Development , App Development ,
          Graphic & Poster Design and UI/UX.
        </p>
      </div>

      <div className="services-container">
        <div className="service-don">
          <h1>services</h1>
          <p>
            We provide a chance to grow your business on online marketing to
            fulfill your dreams SERVICE : Web Development , App Development ,
            Graphic & Poster Design and UI/UX.
          </p>
        </div>
        {serviceData.map((ser) => {
          return <Service ser={ser} />;
        })}
      </div>
    </div>
  );
}

export default Co_Services;
