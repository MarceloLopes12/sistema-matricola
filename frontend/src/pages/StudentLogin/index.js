import React from "react";
import { Button, Input } from "reactstrap";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { ERRORS } from "../../config/constants";
import { Link, withRouter } from "react-router-dom";
import BannerBackground from "../../components/Banner";
import "../StudentLogin/index.css";

function StudentRegistration({ history }) {
  const validationSchema = yup.object().shape({
    cpf: yup.string().required(ERRORS.REQUIRED_FIELD),
    password: yup.string().required(ERRORS.REQUIRED_FIELD),
  });

  const initialValues = {
    password: "",
    cpf: "",
  };

  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);

    const cpf = window.sessionStorage.getItem("cpf");
    const password = window.sessionStorage.getItem("password");

    if (cpf && password && values.cpf === cpf && values.password === password) {
      history.push("/cadastro-estudante");
    } else {
      alert("Senha ou cpf incorretos");
    }

    setSubmitting(false);
  };

  return (
    <>
      <BannerBackground />
      <div className="flex-box container-box">
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={onSubmit}
        >
          {({
            values,
            setFieldValue,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            isValid,
          }) => (
            <form
              className=" content-box font-student body-login"
              onSubmit={handleSubmit}
              noValidate
            >
              <h1>Login</h1>
              <br />

              <Input
                className="inputs"
                name="cpf"
                value={values.cpf}
                placeholder="Digite aqui seu cpf"
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              <br />
              <ErrorMessage className="errors" component="div" name="cpf" />
              <br />

              <Input
                className="inputs"
                name="password"
                type="password"
                value={values.password}
                placeholder="Digite aqui sua senha"
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              <br />
              <ErrorMessage
                className="errors"
                component="div"
                name="password"
              />
              <br />
              <br />

              <Button
                className="button-registration"
                type="submit"
                disabled={!isValid || isSubmitting}
                appearance="primary"
                block
                as={Link}
                to={"/escolha-curso-graduacao"}
              >
                Entrar
              </Button>

              <p>
                <Link className="font-link-style" to={"/pagina-inicial-aluno"}>
                  {" "}
                  Não tem conta? Cadastre-se
                </Link>
              </p>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default withRouter(StudentRegistration);
