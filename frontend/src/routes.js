import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import StudentRegistration from "./pages/StudentRegistration";
import StudentLogin from "./pages/StudentLogin";
import CollegeEnrollment from "./pages/CollegeEnrollment";
import StudentHomepage from "./pages/StudentHomepage";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={StudentLogin} />
        <Route path="/registro-estudante" component={StudentRegistration} />
        <Route path="/escolha-curso-graduacao" component={CollegeEnrollment} />
          <Route path="/pagina-inicial-estudante" component={StudentHomepage} />
      </Switch>
    </BrowserRouter>
  );
}
