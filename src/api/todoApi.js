import {GET_TODOS_API_URL} from '../settings';
import {ADD_TODO_API_URL} from '../settings';

class TodoApi {
  static getAllTodos() {
    return fetch(GET_TODOS_API_URL, 
      {
        credentials: "include"
      })
      .then((result) => {
        // Get the result
        // If we want text, call result.text()
        return result.json();
      });
  }

  static saveTodo(todo) {
    return fetch(ADD_TODO_API_URL,
      {
        credentials: "include",
        method: "post",
        body: JSON.stringify(todo)
    });
  }

  static deleteTodo(todoId) {
    return fetch(GET_TODOS_API_URL, 
      {
        credentials: "include"
      })
      .then((result) => {
        // Get the result
        // If we want text, call result.text()
        return result.json();
      });
  }
}

export default TodoApi;
