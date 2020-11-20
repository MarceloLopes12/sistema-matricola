import React from "react";
import Banner from "../../images/banner.png";
import "../Banner/index.css";

function BannerBackground() {
  return (
    <div className="div-banner">
      
      <img alt="Matriculando" className="img-banner" fixed="top" src={Banner} />
      <div className="title">
        <h1 className="font">Matriculando</h1>
      </div>
    </div>
  );
}
export default BannerBackground;
