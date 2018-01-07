import { combineReducers } from 'redux';

const todo = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return action.todo;
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case 'POPULATE_TODOS_FROM_SERVER':
      return action.todos;
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      );
    case 'DELETE_TODO':
      return state.map(t =>
        todo(t, action)
      );
    default:
      return state;
  }
};

export const masterReducer = combineReducers({
  todos,
});
