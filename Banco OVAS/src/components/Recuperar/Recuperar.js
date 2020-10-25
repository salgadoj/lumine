import React from 'react';
import loginImg from "../../login.png";

import '../Login/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Recuperar = (props) => {
    return (
        <div className="containerLogin">
            <div className="rowLogin">
                <div className="col-md-4">
                    <div className="limiter">
                        <div className="d-flex justify-content-center container-login100">
                            <div className="wrap-login100" >
                                <form className="login100-form validate-form">
                                    <div className="image">
                                    <img alt="..." src={loginImg}></img>
                                    </div>
                                    <h1 className="h4 text-gray-900 mb-2">¿Olvidaste tu contraseña?</h1>
                                    <p className="mb-4">Ingrese su dirección de correo institucional y a continuación y le enviaremos un enlace para restablecer su contraseña.</p>

                                    <label> Igrese Usuario:</label>

                                    <input className="input100" type="text" name="username" placeholder="Correo institucional" />

                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">

                                    </span>


                                    <div class="form-group ">
                                    <div className="container-login100-form-btn">
                                        <button className="login100-form-btn" >

                                            Enviar contraseña por correo
                                </button>
                                    </div>
                                    </div>
                                    <div class="form-group ">
                                    <div className="container-login100-form-btn">
                                        <button className="login100-form-btn" >

                                            Recuperar via preguntas secretas
                                </button>
                                    </div>
                                    </div>






                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>



    );
}

export default Recuperar;
