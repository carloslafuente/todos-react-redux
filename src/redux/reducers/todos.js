import {
  ADD_TODO,
  EDIT_TODO,
  TOGGLE_MARKED_TODOS,
  ADD_ID,
  REMOVE_ID,
  GET_TODOS,
  TOGGLE_TODO,
} from '../actionTypes';

const initialState = {
  tasks: [
    // {
    //   id: 1,
    //   title: 'Pasear al perro',
    //   creationDate: '3/8/2020',
    //   finishDate: '15/8/2020',
    //   status: 'Pendiente',
    // },
    // {
    //   id: 2,
    //   title: 'Hacer la tarea',
    //   creationDate: '14/8/2020',
    //   finishDate: '20/8/2020',
    //   status: 'Atrasada',
    // },
    // {
    //   id: 3,
    //   title: 'Estudiar para el examen',
    //   creationDate: '10/8/2020',
    //   finishDate: '23/8/2020',
    //   status: 'Liberada',
    // },
    // {
    //   id: 4,
    //   title: 'Lavar la ropa',
    //   creationDate: '1/8/2020',
    //   finishDate: '25/8/2020',
    //   status: 'Pendiente',
    // },
    // {
    //   id: 5,
    //   title: 'Cortarme el pelo',
    //   creationDate: '6/8/2020',
    //   finishDate: '9/9/2020',
    //   status: 'Atrasada',
    // },
    // {
    //   id: 6,
    //   title: 'Mirar las estrellas',
    //   creationDate: '10/8/2020',
    //   finishDate: '23/10/2020',
    //   status: 'Liberada',
    // },
  ],
  ids: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      return { ...state, tasks: [...state.tasks.concat(action.payload.data)] };
    }
    case EDIT_TODO: {
      const taskToEdit = action.payload.data;
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
    case TOGGLE_MARKED_TODOS: {
      const tasksToEdit = action.payload;
      let newTasks = state.tasks.map((task) => {
        if (tasksToEdit.find((e) => e.toString() === task.id.toString())) {
          task = { ...task, status: 'Liberada' };
        }
        return task;
      });
      return {
        ...state,
        tasks: newTasks,
        ids: [],
      };
    }
    case TOGGLE_TODO: {
      const taskToEdit = action.payload.data;
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
    case ADD_ID: {
      const newId = action.payload;
      return { ...state, ids: [...state.ids.concat(newId)] };
    }
    case REMOVE_ID: {
      const deleteId = action.payload;
      return {
        ...state,
        ids: [
          ...state.ids.filter((id) => id.toString() !== deleteId.toString()),
        ],
      };
    }
    case GET_TODOS: {
      return { ...state, tasks: [...state.tasks.concat(action.payload.data)] };
    }
    default:
      return state;
  }
}
