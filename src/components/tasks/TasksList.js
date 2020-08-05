import React from 'react';
import './Tasks.css';
import { connect } from 'react-redux';
import AddTask from './AddTask';
import Task from './Task';
import { getTodosByVisibilityFilter } from '../../redux/selectors';

const TasksList = ({ tasks }) => {
  return (
    <div className='Task'>
      {tasks.map((t) => (
        <Task task={t} key={t.id} />
      ))}
      <AddTask />
    </div>
  );
};

const mapStateToProps = (state) => {
  const { visibilityFilter, todos } = state;
  const tasksF = getTodosByVisibilityFilter(state, visibilityFilter);
  return { tasks: todos.tasks, tasksF };
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
