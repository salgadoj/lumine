import React from "react";
// react plugins that creates an input with a date picker
import { Link } from "react-router-dom";
import {

  Container, Row, Col, Button

} from "reactstrap";

// core components

function Javascript() {

  return (
    <>
      <div className="section section-javascript" id="javascriptComponents">
        <Container>
          <Row>
<Col>
<div class="row mb-5 justify-content-center">
          <div class="col-md-9 text-center">
            <h1 class="text-center">Categorías</h1>
            <p class="lead">Para una mejor experiencia dentro de nuestro banco de objetos de aprendizaje, catalogamos todos los elementos de acuerdo a una categoría específica</p>
          </div>  
          </div>  
          <div class="container-fluid">
        <div class="row">
          <div class="col-md-6 col-lg-4 grid-item">
            <img alt="..." src={require("assets/img/ciencias.png")} ></img>
            <br></br>
                      <br></br>
                      <div class="row">
                <div Class= "col text-center">
               <Button
                className="btn-cte btn-hover"
                to="/Ciencias-naturales"
                outline
                tag={Link}
              >
                <h5><strong>Ciencias Naturales y Aplicadas</strong></h5>
               
              </Button>
              </div>
              </div>
          </div>
          <div class="col-md-6 col-lg-4 grid-item">
           
            <img alt="..." src={require("assets/img/tecnologia.png")} ></img>
            <br></br>
                      <br></br>
                      <div class="row">
                <div Class= "col text-center">
               <Button
                className="btn-cte"
                to="/Tecnologia"
                outline
                tag={Link}
              >
                <h5><strong>Tecnologia</strong></h5>
               
              </Button>
              </div>
              </div>
          </div>
          <div class="col-md-6 col-lg-4 grid-item">
       
            <img alt="..." src={require("assets/img/arquitecto.png")} ></img>
            <br></br>
                      <br></br>
                      <div class="row">
                <div Class= "col text-center">
               <Button
                className="btn-cte"
                to="/Ingenieria"
                outline
                tag={Link}
              >
                <h5><strong>Ingenieria y Arquitectura</strong></h5>
               
              </Button>
              </div>
              </div>
          </div>

          <div class="col-md-6 col-lg-4 grid-item ">
            
            <img alt="..." src={require("assets/img/webapli.jpg")} ></img>
            <br></br>
                      <br></br>
                      <div class="row">
                <div Class= "col text-center">
               <Button
                className="btn-cte"
                to="/Desing-material"
                outline
                tag={Link}
              >
                <h5><strong>Desing Material</strong></h5>
               
              </Button>
              </div>
              </div>
                      
            
          </div>
          <div class="col-md-6 col-lg-4 grid-item">
            <img alt="..." src={require("assets/img/humanidades.png")} ></img>
            <br></br>
                      <br></br>
                      <div class="row">
                <div Class= "col text-center">
               <Button
                className="btn-cte"
                to="/Handy-food"
                outline
                tag={Link}
              >
                <h5><strong>Handy Food</strong></h5>
               
              </Button>
              </div>
              </div>
            
          </div>
          <div class="col-md-6 col-lg-4 grid-item">
                      <img alt="..." src={require("assets/img/educacion.png")} >
                        
                      </img>
                      <br></br>
                      <br></br>
                      <div class="row">
                <div Class= "col text-center">
               <Button
                className="btn-cte"
                to="/Ciencias-de-educacion"
                outline
                tag={Link}
              >
                <h5><strong>Ciencia de la Educacion</strong></h5>
               
              </Button>
              </div>
              </div>
                      
             
          
          </div>
        </div>
      </div>
</Col>
          </Row>
         </Container>

      </div>
    </>
  );
}

export default Javascript;
