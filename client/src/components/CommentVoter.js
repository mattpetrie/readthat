import React from 'react';
import { addCommentVoteToServer, updateCommentVoteToServer } from '../api/votes';


const CommentVoter = ({
  authorId,
  currentUserVote,
  comment,
  handleCommentVoteInStore
}) => {
  const currentUserVoteValue = currentUserVote ? currentUserVote.vote : 0;

  const handleVoteOnServer = (voteValue) => {
    if (currentUserVote) {
      return updateCommentVoteToServer(comment.postId, comment.id, authorId, voteValue);
    }
    return addCommentVoteToServer(comment.postId, comment.id, authorId, voteValue);
  };

  const handleVote = value => () => {
    handleVoteOnServer(currentUserVoteValue === value ? 0 : value).then((vote) => {
      const difference = parseInt(vote.vote - currentUserVoteValue, 10);
      handleCommentVoteInStore(vote, difference);
    });
  };

  const getButtonClass = (valueComparison) => {
    if (!authorId) {
      return 'no-user';
    } else if (valueComparison) { return 'current-vote'; }
    return null;
  };

  return (
    <div className="comment-voter">
      <div className="vote-buttons">
        <button
          className={getButtonClass((currentUserVoteValue > 0))}
          disabled={!authorId}
          onClick={handleVote(1)}
        >
          ▲
        </button>
        <span className="comment-voter-vote">{comment.commentVotes}</span>
        <button
          className={getButtonClass((currentUserVoteValue < 0))}
          disabled={!authorId}
          onClick={handleVote(-1)}
        >
          ▼
        </button>
      </div>
    </div>
  );
};


export default CommentVoter;
