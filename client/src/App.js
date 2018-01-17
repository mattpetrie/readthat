import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import NavBarContainer from './components/containers/NavBarContainer';
import Routes from './Routes';
import configureStore from './redux/configureStore';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
);


export default App;
