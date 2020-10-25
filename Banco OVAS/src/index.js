
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.4.0";
import "assets/demo/demo.css?v=1.4.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.4.0";
// pages for this kit
import Principal from "views/Principal.js";
import Cienciaseducacion from "views/examples/Cienciaseducacion.js";
import Handyfood from "views/examples/Handyfood.js";
import Cienciasnaturales from "views/examples/Cienciasnaturales";
import Desingmaterial from "views/examples/Desingmaterial"
import Tecnologia from "views/examples/Tecnologia";
import IngenieriaArquite from "views/examples/IngenieriaArquite"
import Login from './components/Login/Login';
import Registro from './components/Registro/Registro';
import Registropreguntas from "./components/Registropreguntas/Registropreguntas";
import Recuperar from "./components/Recuperar/Recuperar";



ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route path="/index" render={(props) => <Principal {...props} />} />    
        <Route
          path="/Ciencias-de-educacion"
          render={(props) => <Cienciaseducacion {...props} />}
        />
        <Route
          path="/Handy-Food"
          render={(props) => <Handyfood {...props} />}
        />
         <Route
          path="/Ciencias-naturales"
          render={(props) => <Cienciasnaturales {...props} />}
        />
          
         <Route
          path="/Desing-material"
          render={(props) => <Desingmaterial {...props} />}
        />
           <Route
          path="/Tecnologia"
          render={(props) => <Tecnologia {...props} />}
        />
         
           <Route
          path="/Ingenieria"
          render={(props) => <IngenieriaArquite {...props} />}
        />

            <Route
          path="/Login"
          render={(props) => <Login {...props} />}
        />

<Route
          path="/Registro"
          render={(props) => <Registro {...props} />}
        />

<Route
          path="/Registropreguntas"
          render={(props) => <Registropreguntas {...props} />}
        />

<Route
          path="/Recuperar"
          render={(props) => <Recuperar {...props} />}
        />
        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
