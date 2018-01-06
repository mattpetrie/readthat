import React from 'react';
import { connect } from 'react-redux';
import AddTodo from './AddTodo';
import * as actions from '../redux/actions.js';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  onAddTodo(todo, id) {
    dispatch(actions.addTodo(todo, id));
  },
});

const AddTodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddTodo);

export default AddTodoContainer;
