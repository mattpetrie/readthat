export const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo,
  };
};

export const populateTodosFromServer = (todos) => ({
  type: 'POPULATE_TODOS_FROM_SERVER',
  todos,
})
