import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Input } from "reactstrap";
import { Formik, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { ERRORS } from "../../config/constants";
import api from "../../service/api";
import BannerBackground from "../../components/Banner";
import MaskedInput from "react-maskedinput";
import "./student-registration.css";

function StudentRegistration() {
  const history = useHistory();

  const validationSchema = yup.object().shape({
    name: yup.string().required(ERRORS.REQUIRED_FIELD),
    email: yup.string().email().required(ERRORS.REQUIRED_FIELD),
    cpf: yup.string().required(ERRORS.REQUIRED_FIELD),
    password: yup.string().required(ERRORS.REQUIRED_FIELD),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Senhas não combinam"),
  });

  const initialValues = {
    email: "",
    name: "",
    password: "",
    passwordConfirmation: "",
    cpf: "",
  };

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    const data = { ...values };

    try {
      await api.post("students", data);

      history.push("/");
    } catch {
      alert("Falha no cadastro, tente novamente.");
    }
    resetForm(initialValues);
    setSubmitting(false);
  };

  return (
    <>
      <BannerBackground />
      <div className="student-registration_container-box">
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
              className="student-registration_content-box student-registration_body-registration student-registration_font-registration"
              onSubmit={handleSubmit}
              noValidate
            >
              <h1>Cadastre-se</h1>
              <br />
              <Input
                className="student-registration_inputs-registration"
                name="email"
                type="email"
                placeholder="Informe seu email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                errorMessage={touched.email && errors.email}
                required
              />
              <ErrorMessage className="errors" component="div" name="email" />
              <br />
              <br />

              <Input
                className="student-registration_inputs-registration"
                name="name"
                type="text"
                placeholder="Seu nome"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                errorMessage={touched.name && errors.name}
                required
              />
              <ErrorMessage className="errors" component="div" name="name" />
              <br />
              <br />

              <Input
                className="student-registration_inputs-registration"
                name="password"
                type="password"
                placeholder="Senha"
                label="Defina uma senha"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                errorMessage={touched.password && errors.password}
                required
              />
              <ErrorMessage
                className="errors"
                component="div"
                name="password"
              />
              <br />
              <br />
              <Input
                className="student-registration_inputs-registration"
                name="passwordConfirmation"
                type="password"
                placeholder="Confirme sua senha"
                label="Confirme sua senha"
                value={values.passwordConfirmation}
                onChange={handleChange}
                onBlur={handleBlur}
                errorMessage={
                  touched.passwordConfirmation && errors.passwordConfirmation
                }
                required
              />
              <ErrorMessage
                className="errors"
                component="div"
                name="password"
              />

              <br />
              <br />
              <MaskedInput
                placeholder="CPF"
                name="cpf"
                required
                className="student-registration_inputs-registration"
                mask="111.111.111-11"
                value={values.cpf}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage className="errors" component="div" name="cpf" />
              <br />
              <br />

              <Button
                className="button"
                type="submit"
                disabled={!isValid || isSubmitting}
                appearance="primary"
                as={Link}
                block
              >
                Cadastrar
              </Button>

              <p>
                <Link
                  className="student-registration_font-link-style-registration"
                  to={"/"}
                >
                  Já tem uma conta? Faça Login{" "}
                </Link>
              </p>
              <br />
            </form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default StudentRegistration;
