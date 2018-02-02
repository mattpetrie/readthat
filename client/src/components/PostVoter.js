import React from 'react';
import { addPostVoteToServer, updatePostVoteToServer } from '../api/votes';


const PostVoter = ({
  authorId,
  currentUserVote,
  currentUserVoteId,
  post,
  handlePostVoteInStore
}) => {
  const handleVoteOnServer = (voteValue) => {
    if (currentUserVoteId) {
      return updatePostVoteToServer(post.id, authorId, voteValue);
    }
    return addPostVoteToServer(post.id, authorId, voteValue);
  };

  const handleVote = value => () => {
    handleVoteOnServer(currentUserVote === value ? 0 : value).then((vote) => {
      const difference = parseInt(vote.vote - currentUserVote, 10);
      handlePostVoteInStore(vote, difference);
    });
  };

  const getButtonClass = (valueComparison) => {
    if (!authorId) {
      return 'no-user';
    } else if (valueComparison) { return 'current-vote'; }
    return null;
  };

  return (
    <div className="voter">
      <div className="vote-buttons">
        <button
          className={getButtonClass((currentUserVote > 0))}
          disabled={!authorId}
          onClick={handleVote(1)}
        >
          ▲
        </button>
        <span>{post.postVotes}</span>
        <button
          className={getButtonClass((currentUserVote < 0))}
          disabled={!authorId}
          onClick={handleVote(-1)}
        >
          ▼
        </button>
      </div>
    </div>
  );
};


export default PostVoter;
