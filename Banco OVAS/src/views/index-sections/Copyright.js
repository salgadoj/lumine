import React from "react";
// reactstrap components
import {Container, Row } from "reactstrap";

// core components

function Examples() {
  return (
    <>
      <div className="section section-examples" data-background-color="black">
        <div className="space-50"></div>
        <Container className="text-center">
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
    </>
  );
}

export default Examples;
