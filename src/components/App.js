// import React, { useEffect, useState } from "react";
//import { Route, Switch, useRouteMatch } from "react-router-dom";
import "../styles/main.scss";
import Header from "./Header";
import Partners from "./Partners";
import Main from "./Main";
import Footer from "./Footer";



function App() {
    return (
        <div>
      <Header/>
      <Main/>
      <Partners/>
      <Footer/>
      </div>
    );
  }
  export default App;