import React from "react";
import { Button, Input } from "reactstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { ERRORS } from "../../config/constants";
import { Link } from "react-router-dom";

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
      <h1>Cadastre-se</h1>
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
          <form onSubmit={handleSubmit} noValidate>
            <Input
              name="email"
              type="email"
              label="Informe seu email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMessage={touched.email && errors.email}
              required
            />

            <Input
              name="fullName"
              type="text"
              label="Defina um usuário"
              value={values.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMessage={touched.fullName && errors.fullName}
              required
            />

            <Input
              name="password"
              type="password"
              label="Defina uma senha"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMessage={touched.password && errors.password}
              required
            />
            <Input
              name="cpf"
              label="Digite o cpf"
              value={values.cpf}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMessage={touched.cpf && errors.cpf}
              mask=""
              required
            />
            <Input
              name="passwordConfirmation"
              type="password"
              label="Confirme uma senha"
              value={values.passwordConfirmation}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMessage={
                touched.passwordConfirmation && errors.passwordConfirmation
              }
              required
            />

            <div className="buttons-container">
              <p>
                <Link to={"/login-estudante"}>
                  Já tem uma conta? Faça Login{" "}
                </Link>
              </p>
              <Button
                type="submit"
                disabled={!isValid || isSubmitting}
                appearance="primary"
                block
              >
                Cadastrar
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}

export default StudentRegistration;
