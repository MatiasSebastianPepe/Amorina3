import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './FindUs.css';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contacto" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Encontranos</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Piedras 722, San Telmo, Argentina</p>
        <p className="p__cormorant" style={{ color: '#3C7547', margin: '2rem 0' }}>Horario</p>
        <p className="p__opensans">Lunes a viernes: ver cartelera</p>
        <p className="p__opensans">Sábados: 15h a 23h</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus_img" />
    </div>
  </div>
);

export default FindUs;
