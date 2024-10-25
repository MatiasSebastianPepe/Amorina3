import React from 'react';

import { images, data } from '../../constants';
import './Laurels.css';



const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <h1 className="headtext__cormorant">Nuestros programas</h1>
      <br></br>
      <h3 className="p__cormorant cine">Cine</h3>
        <p className="p__opensans cine2">Doble Función: Todos los sabados desde las 15h</p>
        <p className="p__opensans cine2">Media semana: Todos los miercoles 21h</p>
        <p className="p__opensans cine2">Pelicula restaurada: Todos los martes a las 22h</p>
        <br></br>
      <h3 className="p__cormorant cine">Podcasts</h3>
      <div>
        <p className="p__opensans">Tiren la Bomba: Todos los jueves desde las 23h</p>
      </div>
      <div>
        <p className="p__opensans">Amorina continuada: Todos los lunes a las 22h</p>
      </div>
      <br></br>
      <h3 className="p__cormorant cine">Fiesta</h3>
      <p className="p__opensans">Una vez al mes, info por Instagram</p>
    </div>

    <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels_img" />
    </div>
  </div>
);

export default Laurels;