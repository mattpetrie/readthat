import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import { masterReducer } from './redux/reducers';
import * as actions from './redux/actions';
import { getTodosData } from './api/todos';

const configureStore = () => {
  const store = createStore(
    masterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  store.subscribe(throttle(() => {
      getTodosData().then(todos => {
        if (store.getState().todos.filter(todo => todo.new).length > 0) {
          store.dispatch(actions.populateTodosFromServer(todos));
        }
      });
    }, 5000));

  return store;
};

export default configureStore;
