import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import CategoriasNavbar from "components/Navbars/CategoriasNavbar.js";
import IngenieriaArquiteHeader from "components/Headers/IngenieriaArquiteHeader.js";

import DefaultFooter from "components/Footers/DefaultFooter.js";

function IngenieriaArquite() {
  
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <CategoriasNavbar />
      <div className="wrapper">
        <IngenieriaArquiteHeader />
      
        <div className="section section-team text-center">
          <Container>
                         <Row>
                <Col >

    <div class="col-md-12">
        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <div class="col-md-3">
                <a href="#/" class="media-1" data-fancybox="gallery">
                <img alt="..." src={require("assets/img/arquitecto.png")} ></img>
                        <div class="media-1-content">
                          <h3>Ingeniería y Arquitectura</h3>
                        </div>
                      </a>
                   
                  </div>
                  <div class="col-md-8 d-flex align-items-start">
                    <div class="">
                        
                    <div class="card-body" align="left">
                          <h5 class="card-title">Aprende completando los códigos</h5>
                          <p class="card-text">Autor:</p>
                          <p class="card-text">Ilustrador:</p>
                          <p class="card-text">Descripción:</p>
                          <a href="#/" class="btn btn-ce">Ver OVA</a>
                        </div>
                      </div>
                  </div>
                  <span class="badge badge-primary badge-pill">2</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <div class="col-md-3">
                <a href="#/" class="media-1" data-fancybox="gallery">
                <img alt="..." src={require("assets/img/arquitecto.png")} ></img>
                        <div class="media-1-content">
                        <h3>Ingeniería y Arquitectura</h3>
                        </div>
                      </a>
                  </div>
                  <div class="col-md-8 d-flex align-items-start">
                    <div class="">
                        
                        <div class="card-body" align="left">
                          <h5 class="card-title">Aprende completando los códigos</h5>
                          <p class="card-text">Autor:</p>
                          <p class="card-text">Ilustrador:</p>
                          <p class="card-text">Descripción:</p>
                          <a href="#/" class="btn btn-ce">Ver OVA</a>
                        </div>
                      </div>
                  </div>
                  <span class="badge badge-primary badge-pill">2</span>
            </li>
          </ul>

    
    <div class="site-wrap"></div>


      <div class="col d-flex justify-content-center">
        <nav aria-label="...">
            <ul class="pagination">
              <li class="page-item disabled">
                <a class="page-link" href="#/" tabindex="-1">Previous</a>
              </li>
              <li class="page-item"><a class="page-link" href="#/">1</a></li>
              <li class="page-item active">
                <a class="page-link" href="#/">2 <span class="sr-only">(current)</span></a>
              </li>
              <li class="page-item"><a class="page-link" href="#/">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#/">Next</a>
              </li>
            </ul>
          </nav>
      </div>
  </div>


     
                </Col>
              </Row>
        
          </Container>
        </div>
        <div className="section section-contact-us text-center" data-background-color="black" >
        <div className="space-50"></div>
          <Container>
                       <Row>
                    <div class="col-md-9">
            <div class="row">
              <div class="col-md-3">
              <img alt="..." src={require("assets/img/logo-unah-blanco.png")} ></img> 
              </div>
              <div class="col-md-3">
              <img alt="..." src={require("assets/img/logo-degt-blanco.png")} ></img>
              </div>
              <div class="col-md-3">
              <img alt="..." src={require("assets/img/logo-lumine-white.png")} ></img>
              </div>
             
            </div>
          </div>
     
          <div class="col-md-3">
            <h5 class="footer-heading mb-4" align="left">Recursos</h5>
            <ul class="list-unstyled">
                  <li align="left"><a href="https://www.unah.edu.hn/">Portal UNAH</a></li>
                  <br></br>
                  <li align="left"><a href="/https://campusvirtual.unah.edu.hn/">Campus Virtual</a></li>
                  <br></br>
                  <li align="left"><a href="https://bibliovirtual.unah.edu.hn/">Biblioteca Virtual</a></li>
                  <br></br>
                </ul>
          </div>

      
            </Row>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default IngenieriaArquite;
