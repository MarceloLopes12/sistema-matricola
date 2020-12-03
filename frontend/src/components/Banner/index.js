import React from "react";
import { useHistory, Link } from "react-router-dom";
import { FiPower } from "react-icons/fi";

import "../Banner/index.css";

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
    <div className="div-banner">      
      <img alt="Matriculando" className="img-banner" fixed="top" src={Banner} />
      <header className="title">
        {studentId && studentName ? (
          <button
            onClick={handleLogout}
            className="logout-button"
            type="button"
          >
            <FiPower size={18} color="#E02041" />
          </button>
        ) : (
          <Link className="font-link" to={"/"}>
            {" "}
            <h1 className="font-banner">Mλtriculando</h1>{" "}
          </Link>
        )}
      </header>
    </div>
  );
}
export default BannerBackground;
