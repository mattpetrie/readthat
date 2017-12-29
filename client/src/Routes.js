import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Todos from './components/Todos';
import Home from './components/Home';
import Callback from './components/Callback';
import Authorized from './hocs/Authorized';

const Routes = () =>

<Switch>
  <Route exact path='/' component={Home} />
  <Route path='/todos' component={Authorized(Todos)} />
  <Route path="/callback" component={Callback} />
</Switch>

export default Routes;
