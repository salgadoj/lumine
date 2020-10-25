import React from "react";
import'bootstrap/dist/css/bootstrap.min.css';

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// Pagina Principal

import Categorias from "./index-sections/Categorias.js";
import Opinion from "./index-sections/Opinion.js";
import Acerca from "./index-sections/Acerca.js";
import Copyright from "./index-sections/Copyright.js";


function Principal() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
        <Opinion />
        <Categorias />
          <Acerca />
          <Copyright />
          </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Principal;
