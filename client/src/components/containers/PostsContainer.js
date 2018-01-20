import { connect } from 'react-redux';
import Posts from '../Posts';
import * as actions from '../../redux/actions';

const mapStateToProps = (state) => ({
  posts: state.posts,
});

const mapDispatchToProps = (dispatch) => ({
  onPopulatePostsFromServer(posts) {
    dispatch(actions.populatePostsFromServer(posts));
  },
  onGetUserFromServer(user) {
    dispatch(actions.getUserFromServer(user));
  },
  onUnmountUser() {
    dispatch(actions.unmountUser());
  },
});

const PostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Posts);

export default PostsContainer;
