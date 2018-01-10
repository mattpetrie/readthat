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

export const populateTodosFromServer = (todos) => ({
  type: 'POPULATE_TODOS_FROM_SERVER',
  todos,
})

export const populatePostsFromServer = (posts) => ({
  type: 'POPULATE_POSTS_FROM_SERVER',
  posts,
})
