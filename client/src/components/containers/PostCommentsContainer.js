import { connect } from 'react-redux';
import PostComments from '../PostComments';
import * as actions from '../../redux/actions';

const mapStateToProps = state => ({
  currentPost: state.currentPost,
});

const mapDispatchToProps = dispatch => ({
  onGetPostFromServer(post) {
    dispatch(actions.getPostFromServer(post));
  },
});

const PostCommentsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostComments);

export default PostCommentsContainer;
