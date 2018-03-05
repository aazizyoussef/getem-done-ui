import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const TodoListRow = ({todo}) => {
  return (
    <tr>
      <td><Link to={'/todo/' + todo.TodoId}>{todo.Description}</Link></td>
    </tr>
  );
};

TodoListRow.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoListRow;
