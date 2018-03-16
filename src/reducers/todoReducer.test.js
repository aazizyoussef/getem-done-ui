import expect from 'expect';
import todoReducer from './todoReducer';
import * as actions from '../actions/todoActions';

describe('Todo Reducer', () => {
  it('should add todo when passed CREATE_TODO_SUCCESS', () => {
    // arrange
    const initialState = [
      {description: 'A'},
      {description: 'B'}
    ];

    const newTodo = {description: 'C'};

    const action = actions.createTodoSuccess(newTodo);

    // act
    const newState = todoReducer(initialState, action);

    // assert
    expect(newState.length).toEqual(3);
    expect(newState[0].description).toEqual('A');
    expect(newState[1].description).toEqual('B');
    expect(newState[2].description).toEqual('C');
  });

  it('should update todo when passed UPDATE_TODO_SUCCESS', () => {
    // arrange
    const initialState = [
      {id: 'A', description: 'A'},
      {id: 'B', description: 'B'},
      {id: 'C', description: 'C'}
    ];

    const todo = {id: 'B', description: 'New description'};
    const action = actions.updateTodoSuccess(todo);

    // act
    const newState = todoReducer(initialState, action);
    const updatedTodo = newState.find(a => a.id == todo.id);
    const untouchedTodo = newState.find(a => a.id == 'A');

    // assert
    expect(updatedTodo.description).toEqual('New description');
    expect(untouchedTodo.description).toEqual('A');
    expect(newState.length).toEqual(3);
  });
});
