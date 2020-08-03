import React from 'react';
import './Task.css';

class Task extends React.Component {
  render() {
    let task = this.props.data;
    return (
      <div className='Task'>
        <div>Tasks: {task.title}</div>
        <div className='Specs'>
          <span>C</span>
          <span>{task.creationDate}</span>
          <span>{task.status}</span>
        </div>
      </div>
    );
  }
}

export default Task;
