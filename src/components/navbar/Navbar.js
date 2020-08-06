import React from 'react';
import './Navbar.css';
import Filters from '../tasks/Filters';
import liberada from '../../assets/liberada.svg';
import atrasada from '../../assets/atrasada.svg';
import pendiente from '../../assets/pendiente.svg';

const Navbar = () => {
  return (
    <div className='Navbar'>
      <h1>Tareas por hacer</h1>
      <div className='Info'>
        <div>
          <img src={liberada} alt='Liberada' className='Image-Liberada'></img>
          <h4>Liberada</h4>
        </div>
        <div>
          <img src={atrasada} alt='Atrasada' className='Image-Atrasada'></img>
          <h4>Atrasada</h4>
        </div>
        <div>
          <img
            src={pendiente}
            alt='Pendiente'
            className='Image-Pendiente'
          ></img>
          <h4>Pendiente</h4>
        </div>
      </div>
      <Filters />
    </div>
  );
};

export default Navbar;
