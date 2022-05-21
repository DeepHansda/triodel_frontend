import React, { useEffect } from "react";
import { Link,Outlet} from "react-router-dom";
import CatRoutes from '../../Routes/CatRoutes'
import "./portfolio.css";

function Portfolio({SetOpenSideBar}) {
  useEffect(()=>{
    SetOpenSideBar(false);
},[])
  return (
    <div className="portfolio">
      <div className="portfolio-intro">
        <div className="portfolio-title">
          <h2>portfolio</h2>
        </div>
        <div className="portfolio-intro-para">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            vel maxime exercitationem rem in odio voluptates placeat! Tenetur
            perspiciatis laudantium itaque! Recusandae, labore a dolorum
            perspiciatis dolore vitae incidunt autem?
          </p>
        </div>
      </div>


      <div className="portfolio-categories-container">
          <ul className="portfolio-categories-list">
              <Link to="web"><li className="portfolio-category">website</li></Link>
              <Link to="android"><li className="portfolio-category">android app</li></Link>
              <Link to="designs"><li className="portfolio-category">designs</li></Link>
          </ul>
      </div>

      <div className="portfolio-container">
      <Outlet />
      </div>
    </div>
  );
}

export default Portfolio;
