import React from "react";
import loginImg from "../../login.png";
import { Link } from "react-router-dom"
import '../Login/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faKey,faUser} from "@fortawesome/free-solid-svg-icons";



const Login = (props) => {
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
                                    <div class="form-group row">

                                    <div className="wrap-input100 validate-input" data-validate="Correo no válido">
                                      
                                   
                        <div class="fa-lg ">
                        <FontAwesomeIcon icon={faUser}/>
                       
                        <input className="input100" type="text" name="username" placeholder="Correo institucional" />
                                        
                                        <span className="focus-input100"></span>
                                        <span className="symbol-input100">
                                        </span>
                        </div>
                      </div>
                                    
                                    </div>

              
                                    
                <div className="wrap-input100 validate-input" data-validate="!Ingresa una contraseña!">
                                                                           
                <div class="form-group row">
                    
                    <div class="fa-lg">
                    <FontAwesomeIcon icon={faKey}/>
                    </div>
                    <div class="col-sm-1">
                    <input className="input100" type="password" name="password" placeholder="Contraseña" />
                        
                        </div>
                       
                      </div>   
                      </div>   

                                    <div class="checkbox">
                                        <label><input type="checkbox" /> Recuerdame</label>
                                    </div>

                                    <div className="container-login100-form-btn">
                                        <button className="login100-form-btn" >
                                            Iniciar sesion
                                </button>
                                    </div>

                                    <div className="text-center ">
                                        <Link className="txt2" to="/Recuperar" >¿Olvidastes tu Correo y/o Contraseña?</Link>
                                    </div>

                                    <div className="text-center ">
                                        <Link className="txt2" to="/Registro" >Registrate</Link>

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

export default Login;
