import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Todo from './Todo';
import { getTodosData } from '../api/todos';

class Todos extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  getTodos() {
    getTodosData().then(todos => {
      console.log(todos);
      this.setState({ todos });
    });
  }

  componentDidMount() {
    this.getTodos();
  }

  render() {
    return (
      <div>
        <h1>Todos</h1>
        {this.state.todos.sort((a, b) => a.id - b.id).map(todo => <Todo todo={todo} key={todo.id}/>)}
        <Link to='/'>Home</Link>
      </div>
    );
  }
}

export default Todos;
