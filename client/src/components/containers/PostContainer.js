import { connect } from 'react-redux';
import Post from '../Post';

const mapStateToProps = (state, ownProps) => ({
  post: ownProps.post,
  currentUserVote: state.currentUser.postVotes ?
    state.currentUser.postVotes.find(vote => vote.postId === ownProps.post.id)
    : null,
  authorId: state.currentUser.authorId,
});

const mapDispatchToProps = () => ({
});

const PostContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Post);

export default PostContainer;
