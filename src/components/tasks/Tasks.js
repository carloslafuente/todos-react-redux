import React from 'react';
import './Tasks.css';
import { connect } from 'react-redux';
import { getTodos } from '../../redux/actions';

const Tasks = ({ tasks }) => {
  return (
    <div className='Task'>
      <h2>Tasks</h2>
      {tasks.map((task) => (
        <div key={task.id}>
          <div>{task.title}</div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.todos.tasks,
});

const mapDispatchToProps = (dispatch) => ({
  getTodos: () => dispatch(getTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
