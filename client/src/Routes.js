import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PostsContainer from './components/containers/PostsContainer';
import PostCommentsContainer from './components/containers/PostCommentsContainer';
import NavBarContainer from './components/containers/NavBarContainer';
import Callback from './components/Callback';

//import Authorized from './hocs/Authorized';
// <Route path='/todos' component={Authorized(TodosContainer)} />

const Routes = () =>
<div>
  <NavBarContainer />
  <br /><br /><br />
  <Switch>
    <Route exact path='/' component={PostsContainer} />

    <Route path='/posts/:postId' component={PostCommentsContainer} />
    <Route path='/posts' component={PostsContainer} />

    <Route path="/callback" component={Callback} />
  </Switch>
</div>

export default Routes;
