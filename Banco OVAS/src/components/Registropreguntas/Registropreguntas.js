import React from 'react';
import loginImg from "../../login.png";
import { Link } from 'react-router-dom';
import '../Registropreguntas/Registropreguntas.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Registropreguntas = (props) => {
  return (
    <div class="containerpreguntas">



      <div class="rowpreguntas">
        <div className="col-md-15">
          <div className="limiter">
            <div className="d-flex justify-content-center container-login100">
              <div className="wrap-login100" >
                <form className="login100-form validate-form"></form>
                <div class="col-lg-9">
                  <div className="image">
                  <img alt="..." src={loginImg}></img>
                  </div>
                  <div class="p-0">
                    <div class="text-center">
                      <h1 class="h4 text-gray-900 mb-4">¡Registrar preguntas de seguridad!</h1>
                    </div>
                    <form class="user">

                      <div class="form-group ">
                        <label for="exampleFormControlSelect1"> Seleccionar pregunta de seguridad:</label>
                        <select class="control" id="exampleFormControlSelect1">
                          <option>Seleccionar</option>
                          <option>¿Cómo se llamaba tu primera mascota?</option>
                          <option>¿Cual es el nombre de tu mejor amigo?</option>
                          <option>¿Cómo se llamaba tu mamá?</option>
                          <option>¿Cual es tu pasatiempo favorito?</option>
                        </select>

                      </div>

                      <div class="form-group ">
                        <input type="respuesta" class="respuesta" id="respuesta" placeholder="Esbribir respuesta" />
                      </div>

                      <div class="form-group ">
                        <label for="exampleFormControlSelect1"> Seleccionar pregunta de seguridad:</label>
                        <select class="control" id="exampleFormControlSelect1">
                          <option>Seleccionar</option>
                          <option>¿Cómo se llamaba tu primera mascota?</option>
                          <option>¿Cual es el nombre de tu mejor amigo?</option>
                          <option>¿Cómo se llamaba tu mamá?</option>
                          <option>¿Cual es tu pasatiempo favorito?</option>
                        </select>

                      </div>
                      <div class="form-group  ">
                        <input type="respuesta" class="respuesta" id="respuesta" placeholder="Esbribir respuesta" />
                      </div>

                      <div class="form-group ">
                        <label for="exampleFormControlSelect1"> Seleccionar pregunta de seguridad:</label>
                        <select class="control" id="exampleFormControlSelect1">
                          <option>Seleccionar</option>
                          <option>¿Cómo se llamaba tu primera mascota?</option>
                          <option>¿Cual es el nombre de tu mejor amigo?</option>
                          <option>¿Cómo se llamaba tu mamá?</option>
                          <option>¿Cual es tu pasatiempo favorito?</option>
                        </select>

                      </div>
                      <div class="form-group ">
                        <input type="respuesta" class="respuesta" id="respuesta" placeholder="Esbribir respuesta" />
                      </div>

                      <a href="login.html" class="login100-form-btn">
                        Registrar Cuenta
                      </a>

                    </form>

                    <div className="text-center ">
                      <Link className="text-center" to="/Login" >¿Ya tienes una cuenta? ¡Iniciar sesión!!</Link>
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

export default Registropreguntas;
