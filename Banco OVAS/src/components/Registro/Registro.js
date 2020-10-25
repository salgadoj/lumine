import React from "react";
import loginImg from "../../login.png";
import '../Registro/Registro.css';
import { Link } from 'react-router-dom';




const Registro = (props) => {
  return (
    
<div class="containerRegistro">
     <div class="rowRegistro">
        <div className="col-md-10">
          <div className="limiter">
            <div className="d-flex justify-content-center container-login100">
              <div className="wrap-login100" >
                <form className="login100-form validate-form"></form>
                <div class="col-lg-15">
                <div class="image" > 
                  <img alt="..." src={loginImg}></img>
                </div>
                  <div class="p-10">
                    <div class="text-center">
                      <h1 class="h4 text-gray-900 mb-4">¡Crea una cuenta!</h1>
                    </div>
                    <form class="user">
                      <div class="form-group row">
                        <div class="col-sm-6 mb-3 mb-sm-0">
                          <input type="text" class="form-control form-control-user" id="exampleFirstName" placeholder="Nombre" />
                        </div>
                        <div class="col-sm-6">
                          <input type="text" class="form-control form-control-user" id="exampleLastName" placeholder="Apellido" />
                        </div>
                      </div>
                      <div class="form-group">
                        <input type="email" class="form-control form-control-user" id="exampleInputEmail" placeholder="Correo Institucional" />
                      </div>
                      <div class="form-group row">
                        <div class="col-sm-6 mb-3 mb-sm-0">
                          <input type="password" class="form-control form-control-user" id="exampleInputPassword" placeholder="Contraseña" />
                        </div>
                        <div class="col-sm-6">
                          <input type="password" class="form-control form-control-user" id="exampleRepeatPassword" placeholder="Repetir Contraseña" />
                        </div>
                      </div>

                      <a href="/Registropreguntas" class="login100-form-btn">
                        Siguiente
                     </a>

                    </form>


                    <div className="text-center ">
                      <Link className="text-center" to="/Login" >¿Ya tienes una cuenta? ¡Iniciar sesión!</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );

  }

export default Registro;