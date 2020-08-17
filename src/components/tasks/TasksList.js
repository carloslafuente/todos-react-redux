import React from 'react';
import './Tasks.css';
import { connect } from 'react-redux';
import AddTask from './AddTask';
import Task from './Task';
import { getTodosByVisibilityFilter } from '../../redux/selectors';
import { getTodos } from '../../redux/actions/actions';
import CircularProgress from '@material-ui/core/CircularProgress';

const TasksList = ({ tasks, getTodos }) => {
  const componentDidMount = () => {
    getTodos();
  };

  if (tasks.length < 1) {
    componentDidMount();
  }

  return tasks.length > 0 ? (
    <div className='Task'>
      {tasks ? tasks.map((t) => <Task task={t} key={t.id} />) : null}
      <AddTask />
    </div>
  ) : (
    <div className='Spinner'>
      <CircularProgress />
    </div>
  );
};

const mapStateToProps = (state) => {
  const { visibilityFilter } = state;
  const tasks = getTodosByVisibilityFilter(state, visibilityFilter);
  return { tasks };
};

export default connect(mapStateToProps, { getTodos })(TasksList);
