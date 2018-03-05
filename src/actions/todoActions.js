import todoApi from '../api/todoApi';
import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadTodosSuccess(todos) {
  return {type: types.LOAD_TODOS_SUCCESS, todos};
}

export function createTodoSuccess(todo) {
  return {type: types.CREATE_TODO_SUCCESS, todo};
}

export function updateTodoSuccess(todo) {
  return {type: types.UPDATE_TODO_SUCCESS, todo};
}

// Functions below handle asynchronous calls.
// Each returns a function that accepts a dispatch.
// These are used by redux-thunk to support asynchronous interactions.
export function loadTodos() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return todoApi.getAllTodos().then(todos => {
      dispatch(loadTodosSuccess(todos));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveTodo(todo) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return todoApi.saveTodo(todo).then(todo => {
      todo.id ? dispatch(updateTodoSuccess(todo)) : dispatch(createTodoSuccess(todo));
      dispatch(loadTodos());
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
