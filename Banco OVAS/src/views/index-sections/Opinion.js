import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

// core components

const items = [
  {
    src: require("assets/img/bg1.jpg"),
    altText: "Los Objetos Virtuales de Aprendizaje (OVA) son herramientas digitales que se utilizan en la educación virtual. Dentro de su metodología utilizan las TIC, como complemento para los procesos de enseñanza en entornos de aprendizaje mediados por estas tecnologías.",
    caption: "Los Objetos Virtuales de Aprendizaje (OVA) son herramientas digitales que se utilizan en la educación virtual. Dentro de su metodología utilizan las TIC, como complemento para los procesos de enseñanza en entornos de aprendizaje mediados por estas tecnologías.",
    

  },
  
  {
    src: require("assets/img/bg1.jpg"),
    altText: "Tal como lo menciona Wiley (2000) los Objetos Virtuales de aprendizaje son “cualquier recurso digital que pueda ser reusado como soporte para el aprendizaje. Estos puede crearse en diferentes formatos tales como: SCORM, Flash, HTML, etc.",
    caption: "Tal como lo menciona Wiley (2000) los Objetos Virtuales de aprendizaje son “cualquier recurso digital que pueda ser reusado como soporte para el aprendizaje. Estos puede crearse en diferentes formatos tales como: SCORM, Flash, HTML, etc.",
  }
 
];

function CarouselSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div className="section" id="carousel">
        <Container>
          <div className="title">
          <h1 class="text-center"><strong>¿Qué es un Obejeto Virtual de Aprendizaje?</strong></h1>
          </div>
          <Row className="justify-content-center">
            <Col lg="8" md="12">
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {items.map((item) => {
                  return (
                    <CarouselItem
                      onExiting={onExiting}
                      onExited={onExited}
                      key={item.src}
                    >
                      <img src={item.src} alt={item.altText} />
                      <div className="carousel-caption d-none d-md-block">
                        <h3><strong><font color="black"> {item.caption}</font></strong></h3>
                      </div>
                    </CarouselItem>
                  );
                })}
                <a
                  className="carousel-control-prev"
                  data-slide="prev"
                  href="#/"
                  onClick={(e) => {
                    e.preventDefault();
                    previous();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-left"></i>
                </a>
                <a
                  className="carousel-control-next"
                  data-slide="next"
                  href="#/"
                  onClick={(e) => {
                    e.preventDefault();
                    next();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-right"></i>
                </a>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CarouselSection;
