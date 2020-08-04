import { GET_TODO, ADD_TODO, EDIT_TODO, SET_FILTER } from './actionTypes';
import axios from 'axios';

export const getTodos = () => {
  return (dispatch) =>
    axios.get('http://localhost:5000/tasks').then((data) => {
      dispatch({ type: GET_TODO, payload: data });
    });
};

export const addTodo = (content) => {
  console.log(content);
  return {
    type: ADD_TODO,
    payload: content,
  };
};

export const editTodo = (content) => {
  console.log(content);
  return {
    type: EDIT_TODO,
    payload: content,
  };
};

export const setFilter = (filter) => {
  console.log(filter);
  return {
    type: SET_FILTER,
    payload: { filter },
  };
};
