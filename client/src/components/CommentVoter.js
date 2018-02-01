import React from 'react';
import { addCommentVoteToServer, updateCommentVoteToServer } from '../api/votes';


const CommentVoter = ({
  authorId,
  currentUserVote,
  comment,
  handleCommentVoteInStore
}) => {
  const currentUserVoteValue = currentUserVote ? currentUserVote.vote : 0;
  console.log(currentUserVoteValue);

  const handleVoteOnServer = (voteValue) => currentUserVote ?
    updateCommentVoteToServer(comment.postId, comment.id, authorId, voteValue)
    : addCommentVoteToServer(comment.postId, comment.id, authorId, voteValue);

  const handleVote = (value) => {
    return(() => {
      handleVoteOnServer(currentUserVoteValue === value ? 0 : value).then(vote => {
        const difference = parseInt(vote.vote - currentUserVoteValue, 10);
        handleCommentVoteInStore(vote, difference)
      });
    })
  }
  return (
    <div className="comment-voter">
      <div className="vote-buttons">
        <button
          className={!authorId ? 'no-user'
            : ((currentUserVoteValue > 0) ? 'current-vote' : '')}
          disabled={!authorId ? true : false}
          onClick={handleVote(1)}>
            ▲
        </button>
        <span className="comment-voter-vote">{comment.commentVotes}</span>
        <button
          className={!authorId ? 'no-user'
            : ((currentUserVoteValue < 0) ? 'current-vote' : '')}
          disabled={!authorId ? true : false}
          onClick={handleVote(-1)}>
            ▼
        </button>
      </div>
    </div>
    )
}


export default CommentVoter;
