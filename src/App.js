import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Tasks from './components/tasks/Tasks';

const App = () => {
  return (
    <div className='App'>
      <h1>Cosas por hacer</h1>
      <Navbar />
      <Tasks />
    </div>
  );
};

export default App;
