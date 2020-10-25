import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function CompleteExamples() {
  return (
    <>
      <div className="section">
        <Container className="text-center">
          <Row className="justify-content-md-center">
            <Col lg="12" md="12">
            <div class="text-left pb-1">
                  <h1 >Acerca de nosotros</h1>
                </div>
              <h5 className="description">
              <p class="lead text-justify">
                  La Dirección Ejecutiva de Gestión de Tecnología, DEGT, a través del Departamento de Recursos de Aprendizaje, CRA, pone al servicio de la comunidad universitaria en general, el Banco de Objetos Virtuales de Aprendizaje LUMINE, el cual pretende servir como un apoyo más a los procesos de formación que se llevan a cabo dentro de esta institución con un enfoque moderno y dinámico.

Este es un entorno virtual de aprendizaje donde sus miembros, lo cuales pueden ser docentes, estudiantes, investigadores u otras persona que lo deseen, tendrán opción a subir y compartir recursos didácticos diseñados y elaborados por sí mimos que reestructuren la manera en cómo se han ido presentando. Conjuntamente, este espacio se convierte en otro método de producción científica con miras a la innovación haciendo uso de medios interactivos.
                </p>
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CompleteExamples;
