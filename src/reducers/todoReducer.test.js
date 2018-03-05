import expect from 'expect';
import todoReducer from './todoReducer';
import * as actions from '../actions/todoActions';

describe('Todo Reducer', () => {
  it('should add todo when passed CREATE_TODO_SUCCESS', () => {
    // arrange
    const initialState = [
      {Description: 'A'},
      {Description: 'B'}
    ];

    const newTodo = {Description: 'C'};

    const action = actions.createTodoSuccess(newTodo);

    // act
    const newState = todoReducer(initialState, action);

    // assert
    expect(newState.length).toEqual(3);
    expect(newState[0].Description).toEqual('A');
    expect(newState[1].Description).toEqual('B');
    expect(newState[2].Description).toEqual('C');
  });

  it('should update todo when passed UPDATE_TODO_SUCCESS', () => {
    // arrange
    const initialState = [
      {id: 'A', Description: 'A'},
      {id: 'B', Description: 'B'},
      {id: 'C', Description: 'C'}
    ];

    const todo = {id: 'B', Description: 'New Description'};
    const action = actions.updateTodoSuccess(todo);

    // act
    const newState = todoReducer(initialState, action);
    const updatedTodo = newState.find(a => a.id == todo.id);
    const untouchedTodo = newState.find(a => a.id == 'A');

    // assert
    expect(updatedTodo.Description).toEqual('New Description');
    expect(untouchedTodo.Description).toEqual('A');
    expect(newState.length).toEqual(3);
  });
});
