export const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo,
  };
};

export const addPost = (post) => {
  return {
    type: 'ADD_POST',
    post,
  };
};

export const addPostComment = (comment) => {
  return {
    type: 'ADD_POST_COMMENT',
    comment,
  };
};

export const populateTodosFromServer = (todos) => ({
  type: 'POPULATE_TODOS_FROM_SERVER',
  todos,
})

export const populatePostsFromServer = (posts) => ({
  type: 'POPULATE_POSTS_FROM_SERVER',
  posts,
})

export const getPostFromServer = (post) => ({
  type: 'GET_POST_FROM_SERVER',
  post,
})
