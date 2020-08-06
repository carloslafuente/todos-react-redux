import React, { useState } from 'react';
import './Tasks.css';
import { connect } from 'react-redux';
import { addTodo } from '../../redux/actions';
import uuid from 'react-uuid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import { AddCircle, Close } from '@material-ui/icons';

const AddTask = ({ addTodo }) => {
  const [titleTask, setTitleTask] = useState({});
  const updateInput = (input) => setTitleTask(input);

  const [finishTask, setFinishTask] = useState('');
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
      finishDate: finishTask === '' ? today() : finishTask,
      status: 'Pendiente',
    };
    addTodo(newTask);
    restoreInput();
  };

  const restoreInput = () => {
    document.querySelector('#TaskName').value = '';
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
    <Card color='primary' className='Specs' style={{ padding: '30px' }}>
      {!openFilter ? (
        <IconButton
          onClick={handleVisibility}
          color='primary'
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <AddCircle style={{ fontSize: 80 }} />
        </IconButton>
      ) : null}

      {openFilter ? (
        <CardContent className='NewTaskData'>
          <input
            id='TaskName'
            onChange={(e) => updateInput(e.target.value)}
            placeholder='Nueva Tarea'
          ></input>

          <form noValidate>
            <TextField
              color='primary'
              label='Finaliza:'
              type='date'
              defaultValue={defaultDate()}
              onChange={(e) => updateFinishDate(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>

          <Button color='primary' onClick={handleAddTodo}>
            Crear Tarea
          </Button>

          <IconButton
            color='secondary'
            className='CloseButton'
            onClick={handleVisibility}
          >
            <Close />
          </IconButton>
        </CardContent>
      ) : null}
    </Card>
  );
};

const mapStateToProps = (state) => ({
  currentFilter: state.visibilityFilter,
});

export default connect(mapStateToProps, { addTodo })(AddTask);
