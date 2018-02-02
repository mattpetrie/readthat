import { connect } from 'react-redux';
import AddPostComment from '../AddPostComment';
import * as actions from '../../redux/actions';

const mapStateToProps = (state, ownProps) => ({
  postId: ownProps.postId,
});

const mapDispatchToProps = dispatch => ({
  onAddPostComment(comment) {
    dispatch(actions.addPostComment({ ...comment, new: true }));
  },
});

const AddPostCommentContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddPostComment);

export default AddPostCommentContainer;
