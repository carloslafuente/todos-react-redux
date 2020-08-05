import React from 'react';
import './Tasks.css';
import { connect } from 'react-redux';
import { addTodo } from '../../redux/actions';
import uuid from 'react-uuid';

const AddTask = ({ task = {}, currentFilter, addTodo }) => {
  const updateInput = (input) => {
    task.title = input;
  };

  const updateFinishDate = (value) => {
    task.finishDate = formatDate(rightFormat(value));
  };

  const today = () => {
    return formatDate(new Date());
  };

  const rightFormat = (date) => {
    let day = date.split('-')[2];
    let month = date.split('-')[1];
    let year = date.split('-')[0];
    let res = `${month}/${day}/${year}`;
    return new Date(res);
  };

  const formatDate = (date) => {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let res = `${day}/${month}/${year}`;
    return res;
  };

  const handleAddTodo = () => {
    let newTask = {
      id: uuid(),
      title: task.title,
      creationDate: today(),
      finishDate: task.finishDate,
      status: 'Pendiente',
    };
    addTodo(newTask);
  };

  return (
    <div className='Specs'>
      <input onChange={(e) => updateInput(e.target.value)}></input>

      <input
        onChange={(e) => updateFinishDate(e.target.value)}
        type='date'
      ></input>

      <button onClick={handleAddTodo}>Add</button>
      <h5>Filtro: {currentFilter}</h5>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentFilter: state.visibilityFilter,
});

export default connect(mapStateToProps, { addTodo })(AddTask);
