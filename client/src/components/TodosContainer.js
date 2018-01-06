import { connect } from 'react-redux';
import Todos from './Todos';
import * as actions from '../redux/actions';

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onPopulateTodosFromServer(todos) {
    dispatch(actions.populateTodosFromServer(todos));
  },
  onAddTodo(todo) {
    dispatch(actions.addTodo(todo));
  },
});

const TodosContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Todos);

export default TodosContainer;
