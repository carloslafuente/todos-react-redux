import { VISIBILITY_FILTERS } from '../constants';

export const getTodosState = (store) => {
  return store.todos.tasks;
};

export const getTodoList = (store) => {
  return getTodosState(store) ? getTodosState(store) : [];
};

export const getTodos = (store) => {
  return getTodoList(store);
};

export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
  const allTodos = getTodos(store);
  console.log(allTodos);
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.CREATION_DATE_DESC:
      return allTodos.sort((a, b) => {
        return new Date(a.creationDate) - new Date(b.creationDate);
      });
    case VISIBILITY_FILTERS.INCOMPLETE:
      return allTodos.filter((todo) => !todo.completed);
    case VISIBILITY_FILTERS.ALL:
    default:
      return allTodos;
  }
};
