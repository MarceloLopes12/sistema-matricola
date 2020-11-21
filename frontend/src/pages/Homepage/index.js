import React from "react";
// import { Jumbotron } from "reactstrap";
import { Link } from "react-router-dom";
import "../Homepage/index.css";
import BannerBackground from "../../components/Banner";
import { Jumbotron } from "react-bootstrap";

function Homepage() {
  return (
    <>
      <BannerBackground />
      <div className="flex-box container-box">
        <Jumbotron className="content-box font-homepage body-homepage">
          <p>
            É um sistema de matrícula para alunos e professores. Que visa
            facilitar e agilizar a forma de se contactar com a instituição.{" "}
            <Link className="font-link-style" to={"/registro-estudante"}>
              Cadastre-se{" "}
            </Link>{" "}
            ou faça{" "}
            <Link className="font-link-style" to={"/login-estudante"}>
              Login
            </Link>
          </p>
        </Jumbotron>
      </div>

      
    </>
  );
}

export default Homepage;
