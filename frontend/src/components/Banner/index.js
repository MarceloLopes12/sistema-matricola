import React from "react";
import Banner from "../../images/banner.png";
import "../Banner/index.css";
import { Link } from "react-router-dom";

function BannerBackground() {
  return (
    <div className="div-banner">
      <img alt="Matriculando" className="img-banner" fixed="top" src={Banner} />
      <div className="title">
        <Link className="font-link" to={"/"}>
          {" "}
          <h1 className="font-banner">Mλtriculando</h1>{" "}
        </Link>
      </div>
    </div>
  );
}
export default BannerBackground;
