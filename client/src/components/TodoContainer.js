import { connect } from 'react-redux';
import Todo from './Todo';
import * as actions from '../redux/actions';

const mapStateToProps = (state, ownProps) => ({
  todo: ownProps.todo,
});

// Implement delete function
const mapDispatchToProps = (dispatch) => ({
  onPopulateTodoFromServer(todo) {
    dispatch(actions.populateTodoFromServer(todo));
  },
  onAddTodo(todo) {
    dispatch(actions.addTodo(todo));
  },
});

const TodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Todo);

export default TodoContainer;
