import React from "react";

function signIn() {
  return (
    <>
      <div className="container-form">
        <form className="form-Si">
          <h2 className="title-SU">Inicia Sesion</h2>
          <div className="line-form"></div>
          <div className="label-form">
            <label htmlFor="">
              <strong>Email*</strong>
            </label>
            <input type="email" className="input-t" />
          </div>

          <div className="label-form">
            <label htmlFor="">
              <strong>Password*</strong>
            </label>
            <input type="password" className="input-t" />
          </div>

          <div className="container-forgot">
            <p className="forgot">
              <a href="">Olvidaste tu contraseña ?</a>
            </p>
          </div>

          <div className="">
            <button className="button-SU">
              <strong>Inicia Sesion</strong>
            </button>
          </div>

          <div>
            <p className="terminos-p">
              Al proceder, estás de acuerdo con los{" "}
              <a href="">Términos de Servicio</a> y el{" "}
              <a href="">Aviso de Privacidad.</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default signIn;
