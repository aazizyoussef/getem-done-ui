import expect from 'expect';
import * as todoActions from './todoActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

// Test a sync action
describe('Todo Actions', () => {
  describe('createTodoSuccess', () => {
    it('should create a CREATE_TODO_SUCCESS action', () => {
      //arrange
      const todo = {id: 'clean-code', Description: 'Clean Code'};
      const expectedAction = {
        type: types.CREATE_TODO_SUCCESS,
        todo: todo
      };

      //act
      const action = todoActions.createTodoSuccess(todo);

      //assert
      expect(action).toEqual(expectedAction);
    });
  });
});

// Test an async action
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  describe('Todo Actions Thunk', () => {
    it.skip('should create BEGIN_AJAX_CALL and LOAD_TODO_SUCCESS when loading todos', (done) => {
      // In a real app, you'd likely make a real HTTP call.
      // To mock out that http call, you can use Nock to intercept all
      // calls to a given address or pattern. This means you can test
      // without making actual HTTP calls, and specify the data
      // your mock API should return. Since we're already hitting a mock
      // API, there's no need to call nock in this test.

      // Here's an example call to nock.
      // nock('http://example.com/')
      //   .get('/todos')
      //   .reply(200, { body: { todo: [{ id: 'clean-code', title: 'Clean Code'}] }});

      const expectedActions = [
        {type: types.BEGIN_AJAX_CALL},
        {type: types.LOAD_TODOS_SUCCESS, body: {todos: [{id: 'clean-code', Description: 'Clean Code'}]}}
      ];
      const store = mockStore({todos: []}, expectedActions, done);
      store.dispatch(todoActions.loadTodos()).then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
        expect(actions[1].type).toEqual(types.LOAD_TODOS_SUCCESS);
        done();
      });
    });
  });
});
