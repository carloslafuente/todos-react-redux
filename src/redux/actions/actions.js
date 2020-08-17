import {
  ADD_TODO,
  EDIT_TODO,
  SET_FILTER,
  TOGGLE_MARKED_TODOS,
  ADD_ID,
  REMOVE_ID,
  GET_TODOS,
} from './actionTypes';
import jsonDb from '../apis/jsonDb';

export const getTodos = () => async (dispatch) => {
  const tasks = await jsonDb.get('tasks');
  dispatch({ type: GET_TODOS, payload: tasks });
};

export const addTodo = (content) => {
  return async (dispatch) => {
    const task = await jsonDb.post('tasks', content);
    dispatch({ type: ADD_TODO, payload: task });
  };
};

export const editTodo = (content) => {
  return async (dispatch) => {
    const task = await jsonDb.put(`tasks/${content.id}`, content);
    dispatch({ type: EDIT_TODO, payload: task });
  };
};

export const toggleTodos = (ids) => {
  return {
    type: TOGGLE_MARKED_TODOS,
    payload: ids,
  };
};

export const toggleTodo = (id) => {
  return async (dispatch) => {
    const task = await jsonDb.patch(`tasks/${id}`, { status: 'Liberada' });
    dispatch({ type: EDIT_TODO, payload: task });
  };
};

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: { filter },
  };
};

export const addIdToIds = (id) => {
  return {
    type: ADD_ID,
    payload: id,
  };
};

export const removeIdFromIds = (id) => {
  return {
    type: REMOVE_ID,
    payload: id,
  };
};
