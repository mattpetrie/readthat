export const addTodo = (title) => {
  return {
    type: 'ADD_TODO',
    title,
  };
};

export const populateTodosFromServer = (todos) => ({
  type: 'POPULATE_TODOS_FROM_SERVER',
  todos,
})
