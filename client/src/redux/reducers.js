import { combineReducers } from 'redux';

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

const currentUser = (state = {}, action) => {
  switch (action.type) {
    case 'GET_USER_FROM_SERVER':
      return action.user;
    case 'REMOVE_USER_INFO':
        return {};
    default:
      return state;
  }
};

export const masterReducer = combineReducers({
  posts,
  currentPost,
  currentUser,
});
