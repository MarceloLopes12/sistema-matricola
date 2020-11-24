import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import StudentRegistration from "./pages/StudentRegistration";
import StudentLogin from "./pages/StudentLogin";
import CollegeEnrollment from "./pages/CollegeEnrollment";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={StudentLogin} />
        <Route path="/registro-estudante" component={StudentRegistration} />
        <Route path="/escolha-curso-graduacao" component={CollegeEnrollment} />
      </Switch>
    </BrowserRouter>
  );
}
