import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
  render() {
    let today = this.getCurrentDay();
    return (
      <div className='Navbar'>
        <div className='Titles'>
          <h1>Cosas por Hacer</h1>
          <h3>Hoy: {today.toString()}</h3>
        </div>
        <div className='Filters'>
          <button>Liberar Seleccionadas</button>
          <span>
            <button>
              <img src='../assets/filter-solid.svg' alt='filter-icon'></img>
            </button>
            Ordenar
          </span>
        </div>
        {/* <h1>Hello, {this.props.name}</h1> */}
      </div>
    );
  }

  getCurrentDay() {
    let today = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`;
    return today;
  }
}

export default Navbar;
