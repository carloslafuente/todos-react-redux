import {
  ADD_TODO,
  EDIT_TODO,
  SET_FILTER,
  TOGGLE_MARKED_TODOS,
  ADD_ID,
  REMOVE_ID,
} from './actionTypes';

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

export const toggleTodos = (ids) => {
  return {
    type: TOGGLE_MARKED_TODOS,
    payload: ids,
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
