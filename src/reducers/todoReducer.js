import * as types from '../actions/actionTypes';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function todos(state = initialState.todos, action) {
  switch (action.type) {
    case types.LOAD_TODOS_SUCCESS:
      return action.todos;

    case types.CREATE_TODO_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.todo)
      ];

    case types.UPDATE_TODO_SUCCESS:
      return [
        ...state.filter(todo => todo.id !== action.todo.id),
        Object.assign({}, action.todo)
      ];

    default:
      return state;
  }
}
