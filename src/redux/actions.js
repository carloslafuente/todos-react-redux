import { GET_TODO, ADD_TODO, EDIT_TODO, SET_FILTER } from './actionTypes';
import axios from 'axios';

export const getTodos = () => {
  return (dispatch) =>
    axios.get('http://localhost:5000/tasks').then((data) => {
      dispatch({ type: GET_TODO, payload: data });
    });
};
export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    content,
  },
});

export const toggleTodo = (id) => ({
  type: EDIT_TODO,
  payload: { id },
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: { filter },
});
