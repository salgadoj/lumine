import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="md" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
                      
            >
             <img alt="..." src={require("assets/img/logo-lumine.png")} ></img>
            
            </NavbarBrand>
           
                <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("#/")
                      .scrollIntoView();
                  }}
                >
                                   <strong><p>Explorar</p></strong> 
                                    
                </NavLink>
                
              </NavItem>
              <NavItem>
                <NavLink
                  href="#/"
                                >
                                   <strong> <p>Politicas</p> </strong> 
                                    
                </NavLink>
                
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="black"
                  nav
                  onClick={(e) => e.preventDefault()}
                >

                 <strong><p>Categorias</p></strong> 
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/index" tag={Link}>
                                        Ciencias
                  </DropdownItem>
                  <DropdownItem
                    href="#/"
                    target="_blank"
                  >                   Tecnologia
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink
                  href="/Login"
                  
                >
                                  <strong><p>Ingresar</p></strong>

                                
                                    
                </NavLink>
                
              </NavItem>
          
       
                </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
