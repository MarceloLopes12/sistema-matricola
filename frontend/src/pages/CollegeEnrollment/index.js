import React from "react";
import { Input, Button } from "reactstrap";

function CollegeEnrollment() {
  return (
    <>
      <h1>Selecione seu curso de graduação, modalidade e campus</h1>
      <h2>Selecione o curso desejado</h2>
     
      <form className="select-style">
        <Input type="select"  name="select-graduation">
          <option>Análise e Desenvolvimento de Sistema</option>
          <option>Ciência da Computação</option>
          <option>Jogos Digitais</option>
          <option>Engenharia</option>
          <option>Pedagogia</option>
        </Input>
        <br />
        <h1>Selecione o campus desejado</h1>
        <Input type="select" name="select-campus">
          <option>Campus Zona Norte</option>
          <option>Campus Zona Sul</option>
          <option>Campus Canoas</option>
          <option>Campus Orfanatrófio</option>
        </Input>

        <br />
        <h1>Selecione a modalidade desejada</h1>
        <Input type="select" name="select-campus">
          <option>Presencial</option>
          <option>Semi Presencial</option>
          <option>EAD</option>
        </Input>
        <div className="buttons-container">
          <Button
            type="submit"
            //to do add formik disabled={!isValid || isSubmitting}
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
export default CollegeEnrollment;
