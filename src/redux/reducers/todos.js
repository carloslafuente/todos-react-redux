import {
	ADD_TODO,
	EDIT_TODO,
	TOGGLE_MARKED_TODOS,
	ADD_ID,
	REMOVE_ID,
	GET_TODOS,
	TOGGLE_TODO,
} from '../actions/actionTypes';

const initialState = {
	tasks: [],
	ids: [],
};

const todos = function (state = initialState, action) {
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
};

export default todos;
