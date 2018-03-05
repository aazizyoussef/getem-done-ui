import { combineReducers } from 'redux';
import todos from './todoReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  todos,
  ajaxCallsInProgress
});

export default rootReducer;
