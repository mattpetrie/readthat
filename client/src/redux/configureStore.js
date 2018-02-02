import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import { masterReducer } from './reducers';
import * as actions from './actions';
import { getPostsData, getPostData } from '../api/posts';


const configureStore = () => {
  const store = createStore(
    masterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  store.subscribe(throttle(() => {
    if (store.getState().posts.filter(post => post.new).length > 0) {
      getPostsData().then((posts) => {
        store.dispatch(actions.populatePostsFromServer(posts));
      });
    }
    if (store.getState().currentPost.postComments
      && store.getState().currentPost.postComments.filter(comment => comment.new).length > 0) {
      getPostData(store.getState().currentPost.id).then((post) => {
        store.dispatch(actions.getPostFromServer(post));
      });
    }
  }, 500));

  return store;
};

export default configureStore;
