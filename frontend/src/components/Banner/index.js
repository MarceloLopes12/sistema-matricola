import React from "react";
import { useHistory, Link } from "react-router-dom";
import { FiPower } from "react-icons/fi";

import "./banner.css";

import Banner from "../../images/banner.png";

function BannerBackground() {
  const history = useHistory();

  const studentId = localStorage.getItem("studentId");
  const studentName = localStorage.getItem("studentName");

  function handleLogout() {
    localStorage.clear();

    history.push("/");
  }

  return (
    <>
      <div className="banner_div-banner">      
        <img alt="Matriculando" className="banner_img-banner" fixed="top" src={Banner} />
      </div>
      <header className="banner_header">
      {studentId && studentName ? (
        <button
          onClick={handleLogout}
          className="banner_logout-button"
          type="button"
        >
          <FiPower size={18} color="#E02041" />
        </button>
      ) : (
        <Link className="banner_font-link" to={"/"}>
          {" "}
          <h1 className="banner_font-banner">Mλtriculando</h1>{" "}
        </Link>
      )}
    </header>
   </>
  );
}
export default BannerBackground;
