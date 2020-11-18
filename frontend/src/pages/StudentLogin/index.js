import React from "react";
import { Button, Input } from "reactstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { ERRORS } from "../../config/constants";
import { Link } from "react-router-dom";

function StudentRegistration() {
  const validationSchema = yup.object().shape({
    cpf: yup.string().required(ERRORS.REQUIRED_FIELD),
    password: yup.string().required(ERRORS.REQUIRED_FIELD),
  });

  const initialValues = {
    password: "",
    cpf: "",
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    window.sessionStorage.setItem("password", values.password);
    window.sessionStorage.setItem("cpf", values.cpf);
    resetForm(initialValues);
    setSubmitting(false);
  };

  return (
    <>
      <h1>Login</h1>
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
          <form  className="inputs" onSubmit={handleSubmit} noValidate>
            <Input
              name="cpf"
              label="Digite sua senha"
              value={values.cpf}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMessage={touched.cpf && errors.cpf}
              required
            />
            <Input
              name="password"
              type="password"
              label="Senha"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMessage={touched.password && errors.password}
              required
            />
            <p>
            <Link to={"/registro-estudante"}> Não tem conta? Cadastre-se</Link>
            </p>
            <div className="buttons-container">
              <Button
                type="submit"
                disabled={!isValid || isSubmitting}
                appearance="primary"
                block
              >
                Entrar
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}

export default StudentRegistration;
