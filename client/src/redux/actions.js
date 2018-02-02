export const addPost = (post) => {
  return {
    type: 'ADD_POST',
    post,
  };
};

export const addPostComment = comment => ({
  type: 'ADD_POST_COMMENT',
  comment,
});

export const populatePostsFromServer = posts => ({
  type: 'POPULATE_POSTS_FROM_SERVER',
  posts,
});

export const getPostFromServer = post => ({
  type: 'GET_POST_FROM_SERVER',
  post,
});

export const getUserFromServer = user => ({
  type: 'GET_USER_FROM_SERVER',
  user,
});

export const unmountUser = () => ({
  type: 'REMOVE_USER_INFO',
});

export const handlePostVote = (vote, difference) => ({
  type: 'HANDLE_POST_VOTE',
  vote,
  difference,
});

export const handleCommentVote = (vote, difference) => ({
  type: 'HANDLE_COMMENT_VOTE',
  vote,
  difference,
});
