import { VISIBILITY_FILTERS } from '../constants';

const formatDate = (date) => {
  let day = date.split('/')[0];
  let month = date.split('/')[1];
  let year = date.split('/')[2];
  let res = `${month}/${day}/${year}`;
  return res;
};

export const getTodosState = (store) => {
  return store.todos.tasks;
};

export const getTodoList = (store) => {
  return getTodosState(store) ? getTodosState(store) : [];
};

export const getTodos = (store) => {
  return getTodoList(store);
};

const getByCreationDateDes = (allTodos) => {
  let res = allTodos;
  res = allTodos.filter((task) => {
    return task.creationDate !== undefined;
  });
  res.sort((a, b) => {
    return (
      new Date(formatDate(b.creationDate)) -
      new Date(formatDate(a.creationDate))
    );
  });
  return res;
};

const getByCreationDateAsc = (allTodos) => {
  let res = allTodos;
  res = allTodos.filter((task) => {
    return task.creationDate !== undefined;
  });
  res.sort((a, b) => {
    return (
      new Date(formatDate(a.creationDate)) -
      new Date(formatDate(b.creationDate))
    );
  });
  return res;
};

const getByFinishDateAsc = (allTodos) => {
  let res = allTodos;
  res = allTodos.filter((task) => {
    return task.creationDate !== undefined;
  });
  res.sort((a, b) => {
    return (
      new Date(formatDate(a.finishDate)) - new Date(formatDate(b.finishDate))
    );
  });
  return res;
};

const getByFinishDateDes = (allTodos) => {
  let res = allTodos;
  res = allTodos.filter((task) => {
    return task.creationDate !== undefined;
  });
  res.sort((a, b) => {
    return (
      new Date(formatDate(b.finishDate)) - new Date(formatDate(a.finishDate))
    );
  });
  return res;
};

const getByStatusAtrLib = (allTodos) => {
  let top = allTodos.filter((task) => {
    return task.status === 'Atrasada';
  });
  let middle = allTodos.filter((task) => {
    return task.status === 'Pendiente';
  });
  let bottom = allTodos.filter((task) => {
    return task.status === 'Liberada';
  });
  let res = top.concat(middle).concat(bottom);
  return res;
};

const getByStatusLibAtr = (allTodos) => {
  let top = allTodos.filter((task) => {
    return task.status === 'Atrasada';
  });
  let middle = allTodos.filter((task) => {
    return task.status === 'Pendiente';
  });
  let bottom = allTodos.filter((task) => {
    return task.status === 'Liberada';
  });
  let res = bottom.concat(middle).concat(top);
  return res;
};

export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
  const allTodos = getTodos(store);
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.CREATION_DATE_DESC:
      return getByCreationDateDes(allTodos);

    case VISIBILITY_FILTERS.CREATION_DATE_ASC:
      return getByCreationDateAsc(allTodos);

    case VISIBILITY_FILTERS.FINISH_DATE_ASC:
      return getByFinishDateAsc(allTodos);

    case VISIBILITY_FILTERS.FINISH_DATE_DESC:
      return getByFinishDateDes(allTodos);

    case VISIBILITY_FILTERS.STATUS_ATR_LIB:
      return getByStatusAtrLib(allTodos);

    case VISIBILITY_FILTERS.STATUS_LIB_ATR:
      return getByStatusLibAtr(allTodos);

    default:
      return getByCreationDateDes(allTodos);
  }
};
