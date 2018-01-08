import React from 'react';

const Todo = ({
  todo,
}) => <div className={todo.new ? 'new' : ''}>{todo.title}</div>

export default Todo;
