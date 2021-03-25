import React from "react"
import { Link } from "gatsby"
import logo from '../images/icon-beach.png'

const Navegation = () => {

    const openMenu = () => {
        document.querySelector('.menu-btn').classList.toggle('open');
        document.querySelector('.menu-nav-link').classList.toggle('open');
        document.querySelector('span').classList.toggle('open');
    }

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div id="logo">
            <Link to="/" className="travel">
              <img id="logotipo" src={logo} alt="logotipo"/>
              <span>Travelbe</span>
            </Link>
          </div>

          <div onClick={openMenu} className="menu-btn">
              <div></div>
          </div>
          <ul className="menu-nav-link">
            <li>
              <Link className="nav-link" to="/nosotros">Nosotros</Link>
            </li>
            <li>
              <Link className="nav-link" to="/localizacion">Localización</Link>
            </li>
            <li>
              <Link className="nav-link" to="/contacto">Contacto</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navegation
