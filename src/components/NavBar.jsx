import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <header className="barra">
        <div className="divLogo">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <h2>BASEBALL</h2>
            <h3>TOWN</h3>
          </NavLink>
        </div>
        <div className="div-Enlaces">
          <ul className="enlaces">
            <li className="enlace-nav">
              <NavLink to="/Shop" className="enlaceIcons">
                Shop
              </NavLink>
            </li>
            <li className="enlace-nav">
              <NavLink to={"/CarShop"} className="enlaceIcons">
                Car-Shopping
              </NavLink>
            </li>
            <li className="enlace-nav">
              <NavLink to={"/Conocenos"} className="enlaceIcons">
                Conocenos
              </NavLink>
            </li>
            <li className="enlace-nav">
              <NavLink to={"/Questions"} className="enlaceIcons" href="">
                FQA
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="divLogin">
        <NavLink to={"/LogIn"} >
          <button className="ButtonOn">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <NavLink to={"/LogIn"} >
              Sing Up
            </NavLink>
          </button>
          </NavLink>
          <NavLink to={"/SingIn"}>
          <button className="ButtonOn">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <NavLink to={"/SingIn"}>
              Sing in
            </NavLink>
          </button>
          </NavLink>
        </div>
      </header>
    </>
  );
}
export default NavBar;
