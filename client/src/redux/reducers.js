import { combineReducers } from 'redux';

const todo = (state = {}, action) => {
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

///

const post = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return action.post;
    default:
      return state;
  }
};

const posts = (state = [], action) => {
  switch (action.type) {
    case 'POPULATE_POSTS_FROM_SERVER':
      return action.posts;
    case 'ADD_POST':
      return [
        ...state,
        post(undefined, action)
      ];
    case 'DELETE_POST':
      return state.map(t =>
        post(t, action)
      );
    default:
      return state;
  }
};

const currentPost = (state = {}, action) => {
  switch (action.type) {
    case 'GET_POST_FROM_SERVER':
      return action.post;
    case 'ADD_POST_COMMENT':
      return {
        ...state,
        postComments: [...state.postComments, action.comment]
      };
    default:
      return state;
  }
};


export const masterReducer = combineReducers({
  todos,
  posts,
  currentPost,
});
