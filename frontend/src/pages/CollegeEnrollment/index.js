import React from "react";
import {
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Jumbotron,
} from "reactstrap";
import BannerBackground from "../../components/Banner";
import "../CollegeEnrollment/index.css";


function CollegeEnrollment() {
  return (
    <>
      <BannerBackground />

      <form className="body-college-enrollment content-box">
        <div className="container-box">
          <h1>Conclua sua matrícula</h1>
          <h2>Selecione o curso desejado</h2>

          <Input
            className="div-select select-style"
            type="select"
            name="select-graduation"
          >
            <option>Análise e Desenvolvimento de Sistemas</option>
            <option>Ciência da Computação</option>
            <option>Jogos Digitais</option>
            <option>Engenharia</option>
            <option>Pedagogia</option>
          </Input>
          <br />
          <h1>Campus disponível</h1>
          <Jumbotron className="jumbotron-college-enrollment">
            <p>Campus Zona Sul</p>
          </Jumbotron>

          <br />
          <h1>Selecione as disciplinas </h1>
          <InputGroup>
            <h2> Disciplinas do primeiro semestre</h2>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <Input addon type="checkbox" />
                <Label> Lógica de Programação</Label>
                <br />
                <Input addon type="checkbox" />
                <Label> Banco de dados</Label>
                <br />
                <Input addon type="checkbox" />
                <Label>Fundamentos da Computação</Label>
                <br />
                <Input addon type="checkbox" />
                <Label>Sistemas Operacionais</Label>
                <br />
                <Input addon type="checkbox" />
                <Label>Matemática</Label>
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
          <br />
          <br />
          <Button className="button" type="submit" appearance="primary" block>
            Continuar
          </Button>
        </div>
      </form>
    </>
  );
}
export default CollegeEnrollment;
