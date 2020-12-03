import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Input } from "reactstrap";
import { Formik, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";
import MaskedInput from "react-maskedinput";
import { ERRORS } from "../../config/constants";
import api from "../../service/api";
import "../StudentLogin/index.css";
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

      history.push("/escolha-curso-graduacao");
    } catch (error) {
      alert("Falha no login, tente novamente.");
    }
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
              className=" content-box font-student body-login"
              onSubmit={handleSubmit}
              noValidate
            >
              <h1>Login</h1>
              <br />

              <MaskedInput
                placeholder="CPF"
                name="cpf"
                required
                className="inputs"
                mask="111.111.111-11"
                value={values.cpf}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage className="errors" component="div" name="cpf" />
              <br />
              <br />

              <Input
                className="inputs"
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
                className="errors"
                component="div"
                name="password"
              />
              <br />
              <br />
              <Button
                className="button"
                type="submit"
                disabled={!isValid || isSubmitting}
                appearance="primary"
                block
              >
                Entrar
              </Button>
              <p>
                <Link className="font-link-style" to={"/registro-estudante"}>
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
