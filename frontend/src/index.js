import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import StudentRegistration from "./pages/StudentRegistration";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/Homepage">
        <Homepage />
      </Route>
      <Route path="/studentRegistration">
        <StudentRegistration />
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
