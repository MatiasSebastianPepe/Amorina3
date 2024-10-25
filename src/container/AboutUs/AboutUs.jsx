import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Sobre nosotros</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Somos algo más que un cine, somos un lugar de encuentro.<br></br> Pasamos doble funciones con películas nacionales y extranjeras.<br></br>Tenemos dos podcasts que pueden escuchar todas las semanas</p>
        <a href='https://www.instagram.com/amorinacinebar/' target='_blank' rel="noreferrer" className="custom__button">Know More</a>
      </div>
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>
    </div>
  </div>
);

export default AboutUs;