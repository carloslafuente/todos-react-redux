import { ADD_TODO, EDIT_TODO, SET_FILTER } from './actionTypes';

export const addTodo = (content) => {
  return {
    type: ADD_TODO,
    payload: content,
  };
};

export const editTodo = (content) => {
  return {
    type: EDIT_TODO,
    payload: content,
  };
};

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: { filter },
  };
};
