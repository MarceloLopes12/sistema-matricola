import React from "react";
import { Jumbotron } from "reactstrap";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <Jumbotron>
      <h1 className="display-3">Matriculando</h1>
      <p className="lead">
        É um sistema de matrícula para alunos e professores. Que visa facilitar
        e agilizar a forma de se contactar com a instituição.{" "}
        <Link to={"/register"}>Cadastre-se </Link> ou faça
      </p>
    </Jumbotron>
  );
}

export default Homepage;
