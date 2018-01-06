import React from 'react';
import { addTodoToServer } from '../api/todos';

const AddTodo = ({
  onAddTodo,
}) => {
  let input;

  return (
  <div>
    <form
      onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        addTodoToServer(input.value).then(res => {
          console.log(res);
          onAddTodo(res.title, res.id);
        });
        input.value = '';
      }}
    >
      <input ref={node => { input = node; }} />
      <button type="submit">
        Add Todo
      </button>
    </form>
  </div>
)};

export default AddTodo;
