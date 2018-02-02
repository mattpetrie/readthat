import { connect } from 'react-redux';
import CommentVoter from '../CommentVoter';
import * as actions from '../../redux/actions';

const mapStateToProps = (state, ownProps) => ({
  currentUserVote: state.currentUser.commentVotes
    && state.currentUser.commentVotes.findIndex(vote => vote.commentId === ownProps.comment.id) >= 0
    ? state.currentUser.commentVotes.find(vote => vote.commentId === ownProps.comment.id)
    : null,
  comment: ownProps.comment,
  authorId: state.currentUser.authorId,
});

const mapDispatchToProps = dispatch => ({
  handleCommentVoteInStore(vote, difference) {
    dispatch(actions.handleCommentVote(vote, difference));
  },
});

const CommentVoterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentVoter);

export default CommentVoterContainer;
