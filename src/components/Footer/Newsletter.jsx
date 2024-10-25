import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_qp6dplo', // Reemplaza con tu Service ID
      'template_ldksig8', // Reemplaza con tu Template ID
      form.current,
      'pK84NXqclosPeHwmq' // Reemplaza con tu User ID
    ).then((result) => {
      console.log(result.text);
      alert('¡El formulario ha sido enviado con éxito!');
    }, (error) => {
      console.log(error.text);
      alert('Hubo un problema al enviar el formulario. Inténtalo nuevamente.');
    });

    e.target.reset(); // Limpia el formulario después de enviarlo
  };

  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Suscribite a nuestro Newsletter</h1>
        <p className="p__opensans">Y no te pierdas de nada!</p>
      </div>
      <form ref={form} onSubmit={sendEmail} className="app__newsletter-input flex__center">
        <input type="email" name="email" placeholder="Introduce tu email" required />
        <input type="text" name="name" placeholder="Introduce tu nombre" required />
        <input type="tel" name="phone" placeholder="Introduce tu teléfono" required />
        <button type="submit" className="custom__button">Suscribirse</button>
      </form>
    </div>
  );
};

export default Newsletter;
