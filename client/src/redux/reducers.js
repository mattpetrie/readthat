import { combineReducers } from 'redux';

const post = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return action.post;
    case 'HANDLE_POST_VOTE':
      if (state.id === action.vote.postId) {
        return {
          ...state,
          postVotes: state.postVotes + action.difference,
        }
      }
      return state;
    case 'HANDLE_COMMENT_VOTE':
      const commentIndex = state.postComments ? state.postComments.findIndex(comment => comment.id === action.vote.commentId) : null;
      if (commentIndex >= 0) {
        let newPostComments = [...state.postComments];
        newPostComments[commentIndex].commentVotes = newPostComments[commentIndex].commentVotes + action.difference;
        return {
          ...state,
          postComments: newPostComments,
        }
      };
      return state;
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
      return state.map(el =>
        post(el, action)
      );
    case 'HANDLE_POST_VOTE':
      return state.map(el =>
        post(el, action)
      );
    case 'HANDLE_COMMENT_VOTE':
      return state.map(el =>
        post(el, action)
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
    case 'HANDLE_POST_VOTE':
      if (state.id === action.vote.postId) {
        return {
          ...state,
          postVotes: state.postVotes + action.difference,
        }
      }
      return state;
    case 'HANDLE_COMMENT_VOTE':
      const commentIndex = state.postComments ? state.postComments.findIndex(comment => comment.id === action.vote.commentId) : null;
      if (commentIndex >= 0) {
        let newPostComments = [...state.postComments];
        newPostComments[commentIndex].commentVotes = newPostComments[commentIndex].commentVotes + action.difference;
        return {
          ...state,
          postComments: newPostComments,
        };
      }
      return state;
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
    case 'HANDLE_POST_VOTE':
        let newPostVotes = [...state.postVotes];
        const voteIndex = newPostVotes.findIndex(vote => vote.id === action.vote.id);
        if (voteIndex >= 0) {
          newPostVotes[voteIndex].vote = action.vote.vote
        } else {
          newPostVotes.push(action.vote)
        }
        return {
          ...state,
          postVotes: newPostVotes,
        };
    case 'HANDLE_COMMENT_VOTE':
      let newCommentVotes = [...state.commentVotes];
      const commentVoteIndex = newCommentVotes.findIndex(vote => vote.id === action.vote.id);
      if (commentVoteIndex >= 0) {
        newCommentVotes.splice(commentVoteIndex, 1);
      }
      newCommentVotes.push(action.vote);
      return {
        ...state,
        commentVotes: newCommentVotes,
      };
    default:
      return state;
  }
};

export const masterReducer = combineReducers({
  posts,
  currentPost,
  currentUser,
});
