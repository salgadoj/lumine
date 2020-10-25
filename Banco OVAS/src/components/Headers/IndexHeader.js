/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, button } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="green">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/header.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        
        <Container>
          <div className="content-center brand">
            <br></br>
            <br></br>
            <br></br>
            <h1>BANCO DE OBJETOS VIRTUALES DE APRENDIZAJE</h1>
                      
            <h4>Primer repositorio de almacenamiento<a href="#" ><strong> Colorlib</strong></a></h4>
            <br></br>
            <br></br>
            <div><a href="#" className="button" class="btn btn-primary btn-md">Ver OVA's</a></div>
          </div>
        
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
