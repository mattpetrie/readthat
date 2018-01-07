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
          onAddTodo(res);
        });
        // Maybe add Todo with current time instead of from response?
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
