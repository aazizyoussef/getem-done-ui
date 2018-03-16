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

  static createTodo(todo) {
    return fetch(TODOS_API_URL + "/Post",
      {
        credentials: "include",
        method: "post",
        body: JSON.stringify(todo)
    });
  }

  static updateTodo(todo) {
    return fetch(TODOS_API_URL + "/Put/" + todo.id,
      {
        credentials: "include",
        method: "post",
        body: JSON.stringify(todo)
    });
  }

  static deleteTodo(id) {
    return fetch(TODOS_API_URL + "/Delete/" + todo.id, 
      {
        credentials: "include",
        method: "delete"
      });
  }
}

export default TodoApi;
