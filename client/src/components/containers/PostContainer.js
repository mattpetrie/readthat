import { connect } from 'react-redux';
import Post from '../Post';
import * as actions from '../../redux/actions.js';

const mapStateToProps = (state, ownProps) => ({
  post: ownProps.post,
  currentUserVote: state.currentUser.postVotes ? state.currentUser.postVotes.find(vote => vote.postId === ownProps.post.id) : null,
});

const mapDispatchToProps = (dispatch) => ({
});

const PostContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Post);

export default PostContainer;
