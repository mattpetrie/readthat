import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Todos from './components/Todos';
import Home from './components/Home';

const Routes = () => <Switch>
  <Route exact path='/' component={Home} />
  <Route path='/todos' component={Todos} />
</Switch>

export default Routes;
