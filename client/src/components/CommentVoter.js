import React from 'react';
import { addPostVoteToServer, updatePostVoteToServer } from '../api/votes';


const PostVoter = ({
  authorId,
  currentUserVote,
  currentUserVoteId,
  post,
  handlePostVoteInStore
}) => {
  const handleVoteOnServer = (voteValue) => currentUserVoteId ?
    updatePostVoteToServer(post.id, authorId, voteValue)
    : addPostVoteToServer(post.id, authorId, voteValue);

  const handleVote = (value) => {
    return(() => {
      handleVoteOnServer(currentUserVote === value ? 0 : value).then(vote => {
        const difference = parseInt(vote.vote - currentUserVote, 10)
        handlePostVoteInStore(vote, difference)
      });
    })
  }

  return (
    <div className="voter">
      <div className="vote-buttons">
        <button
          className={!authorId ? 'no-user'
            : ((currentUserVote > 0) ? 'current-vote' : '')}
          disabled={!authorId ? true : false}
          onClick={handleVote(1)}>
            ▲
        </button>
        <span>{post.postVotes}</span>
        <button
          className={!authorId ? 'no-user'
            : ((currentUserVote < 0) ? 'current-vote' : '')}
          disabled={!authorId ? true : false}
          onClick={handleVote(-1)}>
            ▼
        </button>
      </div>
    </div>
    )
}


export default PostVoter;
