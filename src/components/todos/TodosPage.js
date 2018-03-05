import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import * as todoActions from '../../actions/todoActions';
import TodoList from './TodoList';

class TodosPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddTodoPage = this.redirectToAddTodoPage.bind(this);
  }

  redirectToAddTodoPage() {
    browserHistory.push('/todo');
  }

  render() {
    return (
      <div>
        <h1>Todos</h1>
        <input type="submit"
               value="Add Todo"
               className="btn btn-primary"
               onClick={this.redirectToAddTodoPage}/>

        <TodoList todos={this.props.todos}/>
      </div>
    );
  }
}

TodosPage.propTypes = {
  actions: PropTypes.object.isRequired,
  todos: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(todoActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosPage);
