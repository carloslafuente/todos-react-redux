import React, { useState } from 'react';
import './Tasks.css';
import { connect } from 'react-redux';
import { addTodo } from '../../redux/actions';
import uuid from 'react-uuid';

const AddTask = ({ addTodo }) => {
  const [titleTask, setTitleTask] = useState({});
  const updateInput = (input) => setTitleTask(input);

  const [finishTask, setFinishTask] = useState({});
  const updateFinishDate = (value) =>
    setFinishTask(formatDate(rightFormat(value)));

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
      title: titleTask,
      creationDate: today(),
      finishDate: finishTask,
      status: 'Pendiente',
    };
    addTodo(newTask);
  };

  const defaultDate = () => {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    if (Number(month) < 10) {
      month = '0' + month;
    }
    if (Number(day) < 10) {
      day = '0' + day;
    }
    let res = `${year}-${month}-${day}`;
    return res;
  };

  const [openFilter, setOpenFilter] = useState(false);

  const handleVisibility = () => setOpenFilter(!openFilter);

  return (
    <div className='Specs'>
      {!openFilter ? (
        <div
          style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
        >
          <h1
            style={{ fontSize: '4rem', margin: '0', cursor: 'pointer' }}
            onClick={handleVisibility}
          >
            +
          </h1>
        </div>
      ) : null}

      {openFilter ? (
        <div className='NewTaskData'>
          <input onChange={(e) => updateInput(e.target.value)}></input>

          <input
            defaultValue={defaultDate()}
            onChange={(e) => updateFinishDate(e.target.value)}
            type='date'
          ></input>

          <button onClick={handleAddTodo}>Add</button>

          <button onClick={handleVisibility}>X</button>
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentFilter: state.visibilityFilter,
});

export default connect(mapStateToProps, { addTodo })(AddTask);
