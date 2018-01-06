export const addTodo = (title, id) => {
  console.log(`addTodo() RECEIVED title: ${title}, id:${id}`)
  return {
    type: 'ADD_TODO',
    title,
    id,
  };
};

export const populateTodosFromServer = (todos) => ({
  type: 'POPULATE_TODOS_FROM_SERVER',
  todos,
})
