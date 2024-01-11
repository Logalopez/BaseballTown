import imagen1 from "../../assets/img/imagen1.jpg";
import imagen2 from "../../assets/img/imagen10.jpg";
import imagen3 from "../../assets/img/imagen3.jpg";
import imagen4 from "../../assets/img/imagen4.jpg";
import imagen8 from "../../assets/img/imagen8.jpg";
import imagen6 from "../../assets/img/imagen6.jpg";
import imagen11 from "../../assets/img/imagen11.jpg";
import imagen12 from "../../assets/img/imagen12.jpg";
import imagen13 from "../../assets/img/imagen13.jpg";

function Shop() {
  return (
    <>
      <div>
        <h1 className="titleCate">CATEGORÍAS</h1>
        <div className="line-pregunta"></div>
      </div>
      <div className="Categorias-p">
          <div className="div-P2">
            <a href="#" className="aImg"><img src={imagen1} alt="" /></a>
            <div className="enlace-texto">
              <a className="enlaces-Categorias" href="">GUANTES</a>
            </div>
          </div>
          <div className="div-P2">
            <a href="#" className="aImg"><img src={imagen2} alt="" /></a>
            <div className="enlace-texto">
              <a className="enlaces-Categorias" href="">BATS</a>
            </div>
          </div>
          <div className="div-P2">
            <a href="#" className="aImg"><img src={imagen3} alt="" /></a>
            <div className="enlace-texto">
              <a className="enlaces-Categorias" href="">ACCESORIOS</a>
            </div>
          </div>
          <div className="div-P2">
            <a href="#" className="aImg"><img src={imagen4} alt="" /> </a>
            <div className="enlace-texto">
              <a className="enlaces-Categorias" href="">CASCOS</a>
            </div>
          </div>
          <div className="div-P2">
            <a href="#" className="aImg"><img src={imagen8} alt="" /> </a>
            <div className="enlace-texto">
              <a className="enlaces-Categorias" href="">GORRAS</a>
            </div>
          </div>
          <div className="div-P2">
            <a href="#" className="aImg"><img src={imagen6} alt="" /></a>
            <div className="enlace-texto">
              <a className="enlaces-Categorias" href="">GUANTALETAS</a>
            </div>
          </div>
          <div className="div-P2">
            <a href="#" className="aImg"><img src={imagen11} alt="" /></a>
            <div className="enlace-texto">
              <a className="enlaces-Categorias" href="">ENTRENAMIENTO</a>
            </div>
          </div>
          <div className="div-P2">
            <a href="#" className="aImg"><img src={imagen12} alt="" /></a>
            <div className="enlace-texto">
              <a className="enlaces-Categorias" href="">PELOTAS</a>
            </div>
          </div>
          <div className="div-P2">
            <a href="#" className="aImg"><img src={imagen13} alt="" /></a>
            <div className="enlace-texto">
              <a className="enlaces-Categorias" href="">MOCHILAS</a>
            </div>
          </div>
      </div>
      <div className="foot"></div>
    </>
  );
}
export default Shop;
