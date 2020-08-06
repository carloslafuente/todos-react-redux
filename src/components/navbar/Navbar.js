import React from 'react';
import './Navbar.css';
import Filters from '../tasks/Filters';

const Navbar = () => {
  return (
    <div className='Navbar'>
      <h1>Tareas por hacer</h1>
      <Filters />
    </div>
  );
};

export default Navbar;
