import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import StudentRegistration from "./pages/StudentRegistration";
import StudentLogin from "./pages/StudentLogin";
import CollegeEnrollment from "./pages/CollegeEnrollment";
import SelectSubjects from "./pages/Subjects";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/Homepage">
        <Homepage />
      </Route>
      <Route path="/registro-estudante">
        <StudentRegistration />
      </Route>

      <Route path="/login-estudante">
        <StudentLogin />
      </Route>
      <Route path="/escolha-curso-graduacao">
        <CollegeEnrollment />
      </Route>
      <Route path="/escolha-disciplina">
        <SelectSubjects />
      </Route>
      <Route path="*">
        <Homepage />
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
