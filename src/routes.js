import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import TodosPage from './components/todos/TodosPage';
import ManageTodoPage from './components/todos/ManageTodoPage'; //eslint-disable-line import/no-named-as-default
import AboutPage from './components/about/AboutPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="todos" component={TodosPage}/>
    <Route path="todo/:id" component={ManageTodoPage}/>
    <Route path="todo" component={ManageTodoPage}/>
    <Route path="about" component={AboutPage}/>
  </Route>
);
