import React from 'react';
import './Tasks.css';
import { connect } from 'react-redux';
import { editTodo, addIdToIds, removeIdFromIds } from '../../redux/actions';

const Task = ({ task, editTodo, addIdToIds, removeIdFromIds }) => {
  const rightFormat = (date) => {
    let day = date.split('/')[0];
    let month = date.split('/')[1];
    let year = date.split('/')[2];
    if (Number(month) < 10) {
      month = '0' + month;
    }
    if (Number(day) < 10) {
      day = '0' + day;
    }
    let res = `${year}-${month}-${day}`;
    return res;
  };

  const formatDate = (date) => {
    let day = date.split('-')[2];
    let month = date.split('-')[1];
    let year = date.split('-')[0];
    month = Number(month).toString();
    day = Number(day).toString();
    let res = `${day}/${month}/${year}`;
    return res;
  };

  const HandleDate = (event) => {
    let newFinishDate = formatDate(event.target.value);
    updateFinishDate(newFinishDate);
  };

  const updateFinishDate = (newDate) => {
    let newTask = {
      ...task,
      finishDate: newDate,
    };
    editTodo(newTask);
  };

  const handleCheckBox = (event) => {
    console.log(event.target.checked);
    let id = task.id;
    if (event.target.checked) {
      addIdToIds(id);
    } else {
      removeIdFromIds(id);
    }
  };

  return (
    <div className='Specs' key={task.id}>
      <input type='checkbox' onChange={handleCheckBox}></input>

      <div>
        <h3>{task.status}</h3>
        <h5 style={{ margin: '5px' }}>Creacion: {task.creationDate}</h5>
      </div>

      <div>
        <h2>{task.title}</h2>
      </div>

      <div>
        <h5 style={{ margin: '5px' }}>Finaliza:</h5>
        <input
          defaultValue={rightFormat(task.finishDate)}
          type='date'
          onChange={HandleDate}
        ></input>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.todos.tasks,
});

export default connect(mapStateToProps, {
  editTodo,
  addIdToIds,
  removeIdFromIds,
})(Task);
