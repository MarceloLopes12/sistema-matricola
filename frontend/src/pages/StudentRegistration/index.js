import React from "react";
import { Button, Input } from "reactstrap";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { ERRORS } from "../../config/constants";
import { Link } from "react-router-dom";
import "../StudentRegistration/index.css";
import BannerBackground from "../../components/Banner";
function StudentRegistration() {
  const validationSchema = yup.object().shape({
    fullName: yup.string().required(ERRORS.REQUIRED_FIELD),
    email: yup.string().email().required(ERRORS.REQUIRED_FIELD),
    cpf: yup.string().required(ERRORS.REQUIRED_FIELD),
    password: yup.string().required(ERRORS.REQUIRED_FIELD),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Senhas não combinam"),
  });

  const initialValues = {
    fullName: "",
    password: "",
    passwordConfirmation: "",
    email: "",
    cpf: "",
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    window.sessionStorage.setItem("user", values.username);
    window.sessionStorage.setItem("password", values.password);
    window.sessionStorage.setItem("email", values.email);
    window.sessionStorage.setItem("cpf", values.cpf);
    resetForm(initialValues);
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
              className="content-box body-registration font-registration"
              onSubmit={handleSubmit}
              noValidate
            >
              <h1>Cadastre-se</h1>
              <br />
              <Input
                className="inputs-registration"
                name="email"
                type="email"
                placeholder="Informe seu email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                errorMessage={touched.email && errors.email}
                required
              />
              <br />
              <ErrorMessage className="errors" component="div" name="email" />
              <br />

              <Input
                className="inputs-registration"
                name="fullName"
                type="text"
                placeholder="Digite seu nome completo"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              <br />
              <ErrorMessage
                className="errors"
                component="div"
                name="fullName"
              />
              <br />

              <Input
                className="inputs-registration"
                name="password"
                type="password"
                placeholder="Defina uma senha"
                value={values.password}
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
              <Input
                className="inputs-registration"
                name="cpf"
                placeholder="Digite aqui seu CPF"
                value={values.cpf}
                onChange={handleChange}
                onBlur={handleBlur}
                mask=""
                required
              />
              <br />
              <ErrorMessage className="errors" component="div" name="cpf" />
              <br />

              <Link to={"/escolha-curso-graduacao"}>
                <Button
                  className="button-registration"
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  appearance="primary"
                  block
                >
                  Cadastrar
                </Button>
              </Link>

              <p>
                <Link
                  className="font-link-style-registration"
                  to={"/login-estudante"}
                >
                  Já tem uma conta? Faça Login{" "}
                </Link>
              </p>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default StudentRegistration;
