import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Inicio</a></li>
        <li className="p__opensans"><a href="#about">Sobre nosotros</a></li>
        <li className="p__opensans"><a href="#team">Nuestro equipo</a></li>
        <li className="p__opensans"><a href="#awards">Programas</a></li>
        <li className="p__opensans"><a href="#contact">Contacto</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="https://registroamorina.vercel.app/" target="_blank" className="p__opensans">Iniciar sesión</a>
        <div />
        <a href="/" className="p__opensans">Entradas</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Inicio</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>Sobre nosotros</a></li>
              <li><a href="#team" onClick={() => setToggleMenu(false)}>Nuestro equipo</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Programas</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contacto</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;