import imagen1 from "../../assets/img/imagen1.jpg";
import imagen2 from "../../assets/img/imagen10.jpg";
import imagen3 from "../../assets/img/imagen3.jpg";
import imagen4 from "../../assets/img/imagen4.jpg";
import imagen8 from "../../assets/img/imagen8.jpg";
import imagen6 from "../../assets/img/imagen6.jpg";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="divImag">
        <div className="divTextos">
          <h1 className="textoH1">
            Productos para beisbolistas, <br />
            amantes del rey de los deportes
          </h1>
          <h4 className="textoH4">
            Tienda online dirigida a la venta de articulos de Beisbol y Softball
          </h4>
          <Link to="/LogIn">
            <button className="ButtonBack">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Registrate
            </button>
          </Link>
        </div>
      </div>
      

      
      <div className="Container">
        <h1 className="titleCate">CATEGORÍAS</h1>
        <div className="line-pregunta"></div>
        
        <div className="Categorias-p">
          <div className="div-P">
            <a href="#" ><img src={imagen1} alt="" /></a>
          </div>
          <div className="div-P">
            <a href="#"><img src={imagen2} alt="" /></a>
          </div>
          <div className="div-P">
            <a href="#" >
              <img src={imagen3} alt="" />
            </a>
          </div>
          <div className="div-P">
            <a href="#" >
              <img src={imagen4} alt="" />
            </a>
          </div>
          <div className="div-P">
            <a href="#" >
              <img src={imagen8} alt="" />
            </a>
          </div>
          <div className="div-P">
            <a href="#" >
              <img src={imagen6} alt="" />
            </a>
          </div>
        </div>
      </div>
      <section className="pre-Baseball">
        <h1 className="pregunta">¿PORQUE BASEBALL TOWN?</h1>
        <div className="line-pregunta">

        </div>
        <div className="respuestas">
          <div className="r-3">
            <h2 className="r-preguntas">ENVÍOS A TODA LA REPUBLICA</h2>
            <p className="r-preguntas">Hacemos envíos a cualquier lugar de México a través de FeDex</p>
          </div>  
          <div className="r-3">
            <h2 className="r-preguntas">PRODUCTOS GARANTIZADOS</h2>
            <p className="r-preguntas">Productos de alta calidad, probados por peloteros profesionales.</p>
          </div>
          <div className="r-3">
            <h2 className="r-preguntas">PAGOS SEGUROS</h2>
            <p className="r-preguntas">Tenemos métodos de pagos seguros con VISA, MASTER CARD, PAYPAL Y OXXO.</p>
          </div>     
        </div>
      </section>
      
    </>
  );
};

export default HomePage;
