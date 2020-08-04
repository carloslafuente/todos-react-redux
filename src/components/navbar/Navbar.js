import React from 'react';
import './Navbar.css';
import Task from '../task/Task';
const API = 'http://localhost:5000/';
const DEFAULT_QUERY = 'tasks';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initial: 'state',
      tasks: [],
      loaded: false,
      value: '1',
    };
  }
  filters = [
    { id: '1', type: 'fechaCreacion', data: 'mayorAMenor' },
    { id: '2', type: 'fechaCreacion', data: 'menorAMayor' },
    { id: '3', type: 'fechaVencimiento', data: 'mayorAMenor' },
    { id: '4', type: 'fechaVencimiento', data: 'menorAMayor' },
    { id: '5', type: 'estado', data: 'atrasadaLiberada' },
    { id: '6', type: 'estado', data: 'liberadaAtrasada' },
  ];
  render() {
    if (this.state.loaded === false) {
      this.loadData();
    }
    let today = this.getCurrentDay();

    let tasks = this.getFilteredData(this.filters[0]);
    return (
      <div className='Navbar'>
        <div className='Titles'>
          <h1>Cosas por Hacer</h1>
          <h3>Hoy: {today.toString()}</h3>
        </div>

        <div className='Filters'>
          <button className='Button'>Liberar Seleccionadas</button>
          <label>
            <img
              src='../assets/filter-solid.svg'
              alt='filter-icon'
              className='FilterImage'
            ></img>
            <select value={this.state.value} onChange={this.handleChange}>
              {this.filters.map((f) => {
                return (
                  <option value={f.id} key={f.id}>
                    {f.type} - {f.data}
                  </option>
                );
              })}
            </select>
          </label>
        </div>

        <div className='Tasks'>
          {tasks.map((task) => {
            return <Task data={task} key={task.id}></Task>;
          })}
        </div>

        <div className='NewTask'>
          <button className='AddButton'>+</button>
        </div>
      </div>
    );
  }

  handleChange(event) {
    let filter = Number(event.target.value);
    console.log(filter - 1);
  }

  loadData() {
    fetch(API + DEFAULT_QUERY)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ tasks: data, loaded: true });
      });
  }

  getFilteredData(filter) {
    let result;
    let data = this.state.tasks;
    switch (filter.type) {
      case 'fechaVencimiento':
        if (filter.data === 'menorAMayor') {
          result = data.sort(
            (a, b) =>
              this.getDateFromString(a.finishDate) -
              this.getDateFromString(b.finishDate)
          );
        }
        if (filter.data === 'mayorAMenor') {
          result = data.sort(
            (a, b) =>
              this.getDateFromString(b.finishDate) -
              this.getDateFromString(a.finishDate)
          );
        }
        break;

      case 'estado':
        if (filter.data === 'atrasadaLiberada') {
          result = this.orderStates(data, 'Atrasada', 'Liberada');
        }
        if (filter.data === 'liberadaAtrasada') {
          result = this.orderStates(data, 'Liberada', 'Atrasada');
        }
        break;

      default:
        if (filter.data === 'menorAMayor') {
          result = data.sort(
            (a, b) =>
              this.getDateFromString(a.creationDate) -
              this.getDateFromString(b.creationDate)
          );
        }
        if (filter.data === 'mayorAMenor') {
          result = data.sort(
            (a, b) =>
              this.getDateFromString(b.creationDate) -
              this.getDateFromString(a.creationDate)
          );
        }
        break;
    }
    return result;
  }

  orderStates(data, init, last) {
    let start = data.filter((element) => {
      return element.status === init;
    });
    let middle = data.filter((element) => {
      if (element.status !== init && element.status !== last) {
        return element;
      } else {
        return null;
      }
    });
    let end = data.filter((element) => {
      return element.status === last;
    });
    let result = start.concat(middle).concat(end);
    return result;
  }

  getDateFromString(date) {
    let newDate = date.split('/');
    let day = newDate[0];
    let month = newDate[1] - 1;
    let year = newDate[2];
    return new Date(`${month}/${day}/${year}`);
  }

  getCurrentDay() {
    let today = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`;
    return today;
  }
}

export default Navbar;
