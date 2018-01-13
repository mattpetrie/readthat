import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TodosContainer from './components/containers/TodosContainer';
import PostsContainer from './components/containers/PostsContainer';
import PostCommentsContainer from './components/containers/PostCommentsContainer';
import Home from './components/Home';
import Callback from './components/Callback';
import Authorized from './hocs/Authorized';

const Routes = () =>

<Switch>
  <Route exact path='/' component={Home} />
  <Route path='/todos' component={Authorized(TodosContainer)} />

  <Route path='/posts/:postId' component={PostCommentsContainer} />
  <Route path='/posts' component={PostsContainer} />

  <Route path="/callback" component={Callback} />
</Switch>

export default Routes;
