import { ADD_TODO, EDIT_TODO, GET_TODO } from '../actionTypes';

const initialState = {
  tasks: [
    {
      id: 1,
      title: 'Pasear al perro',
      creationDate: '3/8/2020',
      finishDate: '15/08/2020',
      status: 'Pendiente',
    },
    {
      id: 2,
      title: 'Hacer la tarea',
      creationDate: '4/8/2020',
      finishDate: '20/08/2020',
      status: 'Atrasada',
    },
    {
      id: 3,
      title: 'Estudiar para el examen',
      creationDate: '10/8/2020',
      finishDate: '23/08/2020',
      status: 'Liberada',
    },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TODO: {
      return Object.assign({}, state, {
        tasks: action.payload,
      });
    }
    case ADD_TODO: {
      const newTask = action.payload;
      return { ...state, tasks: [...state.tasks.concat(newTask)] };
    }
    case EDIT_TODO: {
      console.log(action.payload);
      const taskToEdit = action.payload;
      let res = state.tasks.map((task) => {
        if (task.id === taskToEdit.id) {
          task = taskToEdit;
        }
        return task;
      });
      return {
        ...state,
        tasks: res,
      };
    }
    default:
      return state;
  }
}
