import React from "react";

function SingUp() {
  return (
    <>
      <div className="container-form">
        <form action="" className="form-SU">
          <h2 className="title-SU">Registrate</h2>
          <div className="line-form"></div>
          <div className="label-form">
            <label htmlFor="">
              <strong>Username*</strong>
            </label>
            <br />
            <input type="text" className="input-t" />
          </div>

          <div className="label-form">
            <label htmlFor="">
              <strong>Email*</strong>
            </label>
            <br />
            <input type="email" className="input-t" />
          </div>

          <div className="label-form">
            <label htmlFor="">
              <strong>Password*</strong>
            </label>
            <br />
            <input type="password" className="input-t" />
          </div>

          <div className="checkbox-r">
            <input
              type="checkbox"
            />
            <label htmlFor="check" >
              Remember me
            </label>
            
          </div>
          <div className="container-Button">
              <button className="button-SU"><strong>Registrate</strong></button>
          </div>
          <div>
            <p className="terminos-p">Al proceder, estás de acuerdo con los <a href="">Términos de Servicio</a> y el <a href="">Aviso de Privacidad.</a></p>
          </div>
        </form>
      </div>
    </>
  );
}

export default SingUp;
