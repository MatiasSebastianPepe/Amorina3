import React from 'react';

import { images } from '../../constants';
import './G.css';

const G = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.gianni} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <h1 className="headtext__cormorant">En que creemos</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Somos un grupo de jovenes que queremos fomentar la industria del cine Argentino</p>
        </div>
        <p className="p__opensans"> Queremos un cine popular que venda entradas y fomente una industria sólida. Nuestras funciones dobles tienen el objetivo de mostrarle a la gente que el cine nacional es tan bueno o mejor que el extranjero. Las restauraciones que realizamos nos permiten compartir, sin ningún tipo de remordimientos por la calidad en que se encuentran algunas piezas, películas argentinas que de otra manera podrían quedar perdidas. Estas películas son tan fáciles de acceder como entrar a YouTube y buscarlas, están en las televisiones de todo el país.


</p>
      </div>

      <div className="app__chef-sign">
        <p>Gianni Rolon Santoro</p>
        <p className="p__opensans">Fundador de Amorina</p>
      </div>
    </div>
  </div>
);

export default G;