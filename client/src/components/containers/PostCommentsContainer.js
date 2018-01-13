import { connect } from 'react-redux';
import PostComments from '../PostComments';
import * as actions from '../../redux/actions';

const mapStateToProps = (state, ownProps) => ({
  posts: state.posts,
});

const mapDispatchToProps = (dispatch) => ({
  onPopulatePostsFromServer(posts) {
    dispatch(actions.populatePostsFromServer(posts));
  },
});

const PostCommentsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostComments);

export default PostCommentsContainer;
