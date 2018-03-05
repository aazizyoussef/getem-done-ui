import {TODOS_API_URL} from '../settings';

class TodoApi {
  static getAllTodos() {
    return fetch(TODOS_API_URL + "/Get", 
      {
        credentials: "include",
        method: "get"
      })
      .then((result) => {
        // Get the result
        // If we want text, call result.text()
        return result.json();
      });
  }

  static saveTodo(todo) {
    return fetch(TODOS_API_URL + "/Post",
      {
        credentials: "include",
        method: "post",
        body: JSON.stringify(todo)
    });
  }

  static deleteTodo(todoId) {
    return fetch(TODOS_API_URL + "/Delete", 
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
