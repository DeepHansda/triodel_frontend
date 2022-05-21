import React from "react";
import imgData from "../../../Data/weaponsData";
import WeaponsContainer from "../../../UI/WeaponsContainer/WeaponsContainer";
import "./weapons.css";
function Weapons() {
  return (
    <div className="weapons">
      <div className="weapons-title">
        <h1>weapons</h1>
        <p>
          Have a cutting-edge app idea but not sure how to get started? Our team
          of senior business analysts, seasoned project managers, experienced
          coders and UI/UX experts can deliver customized mobile app development
          services to businesses operating in different industry niches.
        </p>
      </div>
      <WeaponsContainer />
    </div>
  );
}

export default Weapons;
