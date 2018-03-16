import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as todoActions from '../../actions/todoActions';
import TodoForm from './TodoForm';
import toastr from 'toastr';

export class ManageTodoPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      todo: Object.assign({}, this.props.todo),
      errors: {},
      saving: false
    };

    this.saveTodo = this.saveTodo.bind(this);
    this.updateTodoState = this.updateTodoState.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.todo.id != nextProps.todo.id) {
      // Necessary to populate form when existing todo is loaded directly.
      this.setState({todo: Object.assign({}, nextProps.todo)});
    }
  }

  updateTodoState(event) {
    const field = event.target.name;
    let todo = Object.assign({}, this.state.todo);
    todo[field] = event.target.value;
    return this.setState({todo: todo});
  }

  todoFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.todo.description.length < 5) {
      errors.description = 'description must be at least 5 characters.';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  saveTodo(event) {
    event.preventDefault();

    if (!this.todoFormIsValid()) {
      return;
    }

    this.setState({saving: true});
    if(this.state.todo.id)
    {
      this.props.actions.updateTodo(this.state.todo)
        .then(() => this.redirect())
        .catch(error => {
          toastr.error(error);
          this.setState({saving: false});
        });
    }
    else
    {
      this.props.actions.createTodo(this.state.todo)
        .then(() => this.redirect())
        .catch(error => {
          toastr.error(error);
          this.setState({saving: false});
        });
    }
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Todo saved.');
    this.context.router.push('/todos');
  }

  render() {
    return (
      <TodoForm
        todo={this.state.todo}
        onChange={this.updateTodoState}
        onSave={this.saveTodo}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}

ManageTodoPage.propTypes = {
  todo: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
ManageTodoPage.contextTypes = {
  router: PropTypes.object
};

function getTodoById(todos, id) {
  const todo = todos.filter(todo => todo.id == id);
  if (todo) return todo[0]; //since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  const id = ownProps.params.id; // from the path `/todo/:id`

  let todo = {id: '', description: ''};

  if (id && state.todos.length > 0) {
    todo = getTodoById(state.todos, id);
  }

  return {
    todo: todo
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(todoActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageTodoPage);
