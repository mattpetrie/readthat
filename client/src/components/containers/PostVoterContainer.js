import { connect } from 'react-redux';
import PostVoter from '../PostVoter';
import * as actions from '../../redux/actions';

const mapStateToProps = (state, ownProps) => ({
  currentUserVote: ownProps.currentUserVote ? ownProps.currentUserVote.vote : 0,
  currentUserVoteId: ownProps.currentUserVote ? ownProps.currentUserVote.id : null,
  post: ownProps.post,
  authorId: ownProps.authorId,
});

const mapDispatchToProps = dispatch => ({
  handlePostVoteInStore(vote, difference) {
    dispatch(actions.handlePostVote(vote, difference));
  },
});

const PostVoterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostVoter);

export default PostVoterContainer;
