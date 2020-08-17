import React from 'react';
import './Tasks.css';
import { connect } from 'react-redux';
import { editTodo, addIdToIds, removeIdFromIds } from '../../redux/actions/actions';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';

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
    let id = task.id;
    if (event.target.checked) {
      addIdToIds(id);
    } else {
      removeIdFromIds(id);
    }
  };

  const states = {
    Liberada: {
      icon: require('../../assets/liberada.svg'),
      style: 'Card-Liberada',
    },

    Atrasada: {
      icon: require('../../assets/atrasada.svg'),
      style: 'Card-Atrasada',
    },
    Pendiente: {
      icon: require('../../assets/pendiente.svg'),
      style: 'Card-Pendiente',
    },
  };

  return (
    <Card
      color='primary'
      className={'Specs ' + states[task.status].style}
      key={task.id}
    >
      <input
        className='SpecsCheckBox'
        type='checkbox'
        onChange={handleCheckBox}
      ></input>

      <CardHeader className='SpecsTitle' title={task.title} />

      <CardContent className='SpecsContent'>
        <Avatar
          style={{ margin: '10px' }}
          alt={task.title}
          src={states[task.status].icon}
        />

        <Typography style={{ margin: '5px' }}>
          Creado: {task.creationDate}
        </Typography>

        <form noValidate>
          <TextField
            label='Finaliza:'
            type='date'
            defaultValue={rightFormat(task.finishDate)}
            onChange={HandleDate}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      </CardContent>
    </Card>
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
