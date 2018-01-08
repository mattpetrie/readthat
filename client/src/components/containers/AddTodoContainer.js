import React from 'react';
import { connect } from 'react-redux';
import AddTodo from '../AddTodo';
import * as actions from '../../redux/actions.js';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  onAddTodo(todo) {
    dispatch(actions.addTodo({...todo, new: true}));
  },
});

const AddTodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddTodo);

export default AddTodoContainer;
