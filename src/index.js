import App from "./App";
import GlobalStyle from "./globalStyles";
import { HashRouter } from "react-router-dom";
import ReactDOM from "react-dom";

ReactDOM.render(
  <HashRouter>
    <GlobalStyle />
    {/* Skip link: permite a usuarios de teclado/lectores saltar la navegación */}
    <a href="#main-content" className="skip-link">
      Saltar al contenido principal
    </a>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
