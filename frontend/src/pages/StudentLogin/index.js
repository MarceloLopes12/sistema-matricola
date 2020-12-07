import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Input } from "reactstrap";
import { Formik, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";
import MaskedInput from "react-maskedinput";
import { ERRORS } from "../../config/constants";
import api from "../../service/api";
import "./student-login.css";
import BannerBackground from "../../components/Banner";

function StudentRegistration() {
  const history = useHistory();

  const validationSchema = yup.object().shape({
    cpf: yup.string().required(ERRORS.REQUIRED_FIELD),
    password: yup.string().required(ERRORS.REQUIRED_FIELD),
  });

  const initialValues = {
    password: "",
    cpf: "",
  };

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await api.post("sessions", {
        cpf: values.cpf,
        password: values.password,
      });

      localStorage.setItem("studentName", response.data.name);
      localStorage.setItem("studentId", response.data.id);

      const existsEnrolledStudent = await api.get(
        `registrations/${response.data.id}`
      );

      if (existsEnrolledStudent.data.length > 0) {
        history.push("/estudante");
      } else {
        history.push("/escolha-curso-graduacao");
      }
    } catch (error) {
      alert("Falha no login, tente novamente.");
    }
    resetForm(initialValues);
    setSubmitting(false);
  };

  return (
    <>
      <BannerBackground />
      <div className="student-login_container-box">
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
              className="student-login_content-box student-login_font-student student-login_body-login"
              onSubmit={handleSubmit}
              noValidate
            >
              <h1>Login</h1>
              <br />

              <MaskedInput
                placeholder="CPF"
                name="cpf"
                required
                className="student-login_inputs"
                mask="111.111.111-11"
                value={values.cpf}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage className="student-login_errors" component="div" name="cpf" />
              <br />
              <br />

              <Input
                className="student-login_inputs"
                name="password"
                type="password"
                placeholder="Senha"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                errorMessage={touched.password && errors.password}
                required
              />
              <ErrorMessage
                className="student-login_errors"
                component="div"
                name="password"
              />
              <br />
              <br />
              <Button
                className="student-login_button"
                type="submit"
                disabled={!isValid || isSubmitting}
                appearance="primary"
                block
              >
                Entrar
              </Button>
              <p>
                <Link className="student-login_font-link-style" to={"/registro-estudante"}>
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

export default StudentRegistration;
