
import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Amorina Club" />
      <h1 className="app__header-h1">El mejor espacio de la ciudad</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Amorina Club, es un espacio para juntarse a ver películas que nos importan.</p>
      <button type="button" className="custom__button">Entradas</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;