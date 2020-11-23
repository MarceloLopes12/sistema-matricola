import React from "react";
import {
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
} from "reactstrap";
import BannerBackground from "../../components/Banner";
import "../CollegeEnrollment/index.css";
import { Link } from "react-router-dom";

function CollegeEnrollment() {
  return (
    <>
      <BannerBackground />
      <div className="flex-box container-box">
        <form className="body-college-enrollment content-box">
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
          <h1>Selecione o campus desejado</h1>
          <Input
            className="div-select select-style"
            type="select"
            name="select-campus"
          >
            <option>Campus Zona Norte</option>
            <option>Campus Zona Sul</option>
            <option>Campus Canoas</option>
            <option>Campus Orfanatrófio</option>
          </Input>

          <br />
          <h1>Selecione as disciplinas </h1>
          <InputGroup>
            <h2>Primeiro semestre</h2>
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

          <div className="buttons-container">
            <Button type="submit" appearance="primary" block>
              Continuar
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
export default CollegeEnrollment;
