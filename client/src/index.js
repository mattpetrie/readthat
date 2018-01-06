import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { getTodosData } from './api/todos';
getTodosData().then(todos =>
  console.log(`FETCH: ${JSON.stringify(todos)}`)
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
