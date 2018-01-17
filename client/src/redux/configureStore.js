import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import { masterReducer } from './reducers';
import * as actions from './actions';
import { getPostsData } from '../api/posts';


const configureStore = () => {
  const store = createStore(
    masterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  store.subscribe(throttle(() => {
      getPostsData().then(posts => {
        if (store.getState().posts.filter(post => post.new).length > 0) {
          store.dispatch(actions.populatePostsFromServer(posts));
        }
      });
    }, 10000)
  );

  return store;
};

export default configureStore;
