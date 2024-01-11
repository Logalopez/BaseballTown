import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <div className="container-footer">
          <div className="links">
            <h4>Links</h4>
            <div className="enlaces-footer">
              <ul className="ul">
                <li>
                  <Link to={'/Shop'}>Shop</Link>
                </li>
                <li>
                  <Link to={'/CarShop'}>CarShop</Link>
                </li>
                <li>
                  <Link to={'/Conocenos'}>Conocenos</Link>
                </li>
                <li>
                  <Link to={'/Questions'}>FQA</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="links">
            <h4>Otras paginas</h4>
            <div className="enlaces-footer">
              <ul className="ul">
                <li>
                  <a href="">Cuenta</a>
                </li>
                <li>
                  <a href="">Terminos y condiciones</a>
                </li>
                <li>
                  <a href="">Aviso de privacidad</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="links">
            <h4>Contacto</h4>
            <div className="enlaces-footer">
              <ul className="ul">
                <li>
                  <a href="">WhatsApp</a>
                </li>
                <li>
                  <a href="https://Facebook.com">Facebook</a>
                </li>
                <li>
                  <a href="">Instragram</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="line">

        </div>
        <div className="copyright">
          <h6>Baseball Town © 2023. Todos los derechos reservados.</h6>
        </div>
    </footer>
    </>
  );
}

export default Footer;
