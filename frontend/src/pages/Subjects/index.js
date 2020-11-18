import React from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from "reactstrap";

function SelectSubjects() {
  //to do
  //add formik e and yup validations
  return (
    <>
      <h1>Selecione as disciplinas </h1>
      <form className="checkbox-styles">
        <InputGroup>
        <h2>Primeiro semestre</h2>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <Input addon type="checkbox" /> Lógica de Programação
              <br />
              <Input addon type="checkbox" /> Banco de dados
              <br />
              <Input addon type="checkbox" /> Fundamentos da Computação
              <br />
              <Input addon type="checkbox" /> Sistemas Operacionais
              <br />
              <Input addon type="checkbox" /> Matemática
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        
        <br />
        <div className="buttons-container">
        <Button
          type="submit"
          // disabled={!isValid || isSubmitting}
          appearance="primary"
          block
        >
          Continuar
        </Button>
        </div>
      </form>
    </>
  );
}

export default SelectSubjects;
