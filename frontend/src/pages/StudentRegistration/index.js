import React from "react";
import { Button, Input } from "reactstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { ERRORS } from "../../config/constants";
import { Link } from "react-router-dom";
import "../StudentRegistration/index.css";
import BannerBackground from "../../components/Banner";
import { useCreateStudent } from "../../api/UseCreateStudent";


function StudentRegistration() {
  
  const createStudent = useCreateStudent();
  
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

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    
    const { fullName, password, email, cpf } = values;

    console.log(fullName);

    const user = await createStudent.creater(fullName, email, cpf, password);
    
    localStorage.setItem("user", JSON.stringify({
      id : user.id,
      name: user.name,
      email: user.email,
      registration: user.registration
    }));
    
    //window.sessionStorage.setItem("user", values.username);
    //window.sessionStorage.setItem("password", values.password);
    //window.sessionStorage.setItem("email", values.email);
    //window.sessionStorage.setItem("cpf", values.cpf);
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
            <form className="content-box font-registration" onSubmit={handleSubmit} noValidate>
              <h1>Cadastre-se</h1>
              <br />
              <Input
                className="inputs-registration"
                name="email"
                type="email"
                label="Informe seu email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                errorMessage={touched.email && errors.email}
                required
              />
              <br />
              <br />

              <Input
                className="inputs-registration"
                name="fullName"
                type="text"
                label="Defina um usuário"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                errorMessage={touched.fullName && errors.fullName}
                required
              />
              <br />
              <br />

              <Input
                className="inputs-registration"
                name="password"
                type="password"
                label="Defina uma senha"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                errorMessage={touched.password && errors.password}
                required
              />
              <br />
              <br />
              <Input
                className="inputs-registration"
                name="cpf"
                label="Digite o cpf"
                value={values.cpf}
                onChange={handleChange}
                onBlur={handleBlur}
                errorMessage={touched.cpf && errors.cpf}
                mask=""
                required
              />
              <br />
              <br />
              <Input
                className="inputs-registration"
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
              <br />
              <br />

              <Button
                className="button-registration"
                type="submit"
                disabled={!isValid || isSubmitting}
                appearance="primary"
                block
              >
                Cadastrar
              </Button>

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
