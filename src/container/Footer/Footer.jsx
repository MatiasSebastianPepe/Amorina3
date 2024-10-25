import React from 'react';
import { FiYoutube, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contáctanos</h1>
        <p className="p__opensans">Piedras 722, San Telmo, Argentina</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">&quot;La mejor manera de encontrarte es perdiéndote en el servicio a otros.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} alt="amorina" />
        <div className="app__footer-links_icons">
          <a href="https://www.youtube.com/@amorinaTV" target="_blank" rel="noopener noreferrer"><FiYoutube /></a>
          <a href="https://x.com/amorinacine" target="_blank" rel="noopener noreferrer"><FiTwitter /></a>
          <a href="https://www.instagram.com/amorinacinebar/" target="_blank" rel="noopener noreferrer"><FiInstagram /></a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Horario</h1>
        <p className="p__opensans">Lunes a Viernes</p>
        <p className="p__opensans">Ver cartelera</p>
        <p className="p__opensans">Sábados</p>
        <p className="p__opensans">15h - 23h</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2024 Amorina. Todos los derechos reservados.</p>
    </div>
  </div>
);

export default Footer;
