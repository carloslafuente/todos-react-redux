import React from 'react';
import './Tasks.css';
import { connect } from 'react-redux';
import AddTask from './AddTask';
import Task from './Task';
import Filters from './Filters';

const TasksList = ({ tasks }) => {
  return (
    <div className='Task'>
      <Filters />
      {tasks.map((t) => (
        <Task task={t} key={t.id} />
      ))}
      <AddTask />
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.todos.tasks,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
