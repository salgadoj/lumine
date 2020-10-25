/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DefaultFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
      <div class="row pt-5 mt-5 text-center">
          <div class="col-md-12">
            <div class="border-top pt-4">
           
          © {new Date().getFullYear()}, Designed by{" "}
          <a
           
          >
            Todos los derechos reservados 
          </a>
          {" "}
          <a
            href="https://degt.unah.edu.hn/"
            target="_blank"
          >
           DEGT
          </a>
          .
    
            </div>
          </div>
          
        </div>
       
     
      </Container>
    </footer>
  );
}

export default DefaultFooter;
