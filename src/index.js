import App from "./components/App";
import { HashRouter } from "react-router-dom";
// Fichero src/index.js (código nuevo)
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
