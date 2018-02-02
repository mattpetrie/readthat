import { connect } from 'react-redux';
import Posts from '../Posts';
import * as actions from '../../redux/actions';

const mapStateToProps = state => ({
  posts: state.posts,
});

const mapDispatchToProps = dispatch => ({
  onPopulatePostsFromServer(posts) {
    dispatch(actions.populatePostsFromServer(posts));
  },
});

const PostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Posts);

export default PostsContainer;
