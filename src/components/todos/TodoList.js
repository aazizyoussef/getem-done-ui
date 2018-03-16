import React, {PropTypes} from 'react';
import TodoListRow from './TodoListRow';

const TodoList = ({todos}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>description</th>
      </tr>
      </thead>
      <tbody>
      {todos.map(todo =>
        <TodoListRow key={todo.id} todo={todo}/>
      )}
      </tbody>
    </table>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};

export default TodoList;
