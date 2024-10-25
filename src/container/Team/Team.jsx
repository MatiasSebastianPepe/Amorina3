import React from 'react';
import { images } from '../../constants';
import './Team.css';

const Team = () => (
  <div className="app__team flex__center section__padding" id="team">
    <div className="app__team-title">
      <h1 className="headtext__cormorant">Nuestro equipo</h1>
    </div>

    <div className="app__team-grid">
      {[
        { img: images.gianni, name: 'Gianni Santoro', role: 'CEO', description: 'Director y co-conductor del podcast de Amorina "Tiren la bomba".' },
        { img: images.zipi, name: 'Zipi Gonzalez', role: 'Productor Ejecutivo', description: 'Productor y co-conductor del podcast de Amorina "Tiren la bomba".' },
        { img: images.joac, name: 'Joaquin Destefano', role: 'Conductor', description: 'Co-conductor del programa "Amorina Continuada".' },
        { img: images.th, name: 'Thiago Chalon', role: 'Conductor', description: 'Co-conductor del programa "Amorina Continuada".' },
        { img: images.manu, name: 'Manu Alonso', role: 'Abogado', description: 'Asuntos Legales y Contabilidad' },
      ].map((member, index) => (
        <div className="app__team-member" key={`team_member-${index}`}>
          <img className="app__team-member_img" src={member.img} alt={member.name} />
          <h2 className="app__team-member_name">{member.name}</h2>
          <p className="app__team-member_role">{member.role}</p>
          <p className="app__team-member_description">{member.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Team;
