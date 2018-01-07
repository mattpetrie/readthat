import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Todo from './Todo';
import { getTodosData } from '../api/todos';
import AddTodoContainer from './AddTodoContainer'

class Todos extends Component {

  getTodos() {
    getTodosData().then(todos => {
      this.props.onPopulateTodosFromServer(todos);
    });
  }

  componentDidMount() {
    this.getTodos();
  }

  render() {
    return (
      <div className="todos">
        <h1>Todos</h1>
        {this.props.todos.sort((a, b) => a.id - b.id).map(todo => <Todo todo={todo} key={todo.id}/>)}
        <AddTodoContainer />
        <Link to='/'>Home</Link>
      </div>
    );
  }
}

export default Todos;
