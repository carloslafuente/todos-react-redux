import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import TasksList from './components/tasks/TasksList';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <TasksList />
    </div>
  );
};

export default App;
