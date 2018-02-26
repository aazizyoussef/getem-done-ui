import TaskApi from '../api/taskApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadTasksSuccess(tasks) {
  return {type: types.LOAD_TASKS_SUCCESS, tasks};
}

export function loadTasks() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return TaskApi.getAllTasks().then(tasks => {
      dispatch(loadTasksSuccess(tasks));
    }).catch(error => {
      throw(error);
    });
  };
}
