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

  return (
    <div className="voter">
      <div className="vote-buttons">
        <button
          className={!authorId ? 'no-user'
            : ((currentUserVote > 0) ? 'current-vote' : '')}
          disabled={!authorId ? true : false}
          onClick={currentUserVote > 0 ?
            () => {
              handleVoteOnServer(0).then(vote => {
                const difference = parseInt(vote.vote - currentUserVote, 10)
                handlePostVoteInStore(vote, difference)
              });
            }
            : () => {
              handleVoteOnServer(1).then(vote => {
                const difference = parseInt(vote.vote - currentUserVote, 10)
                handlePostVoteInStore(vote, difference)
              });
            }
          }>
            ▲
        </button>
        <span>{post.postVotes}</span>
        <button
          className={!authorId ? 'no-user'
            : ((currentUserVote < 0) ? 'current-vote' : '')}
          disabled={!authorId ? true : false}
          onClick={currentUserVote < 0 ?
            () => {
              handleVoteOnServer(0).then(vote => {
                const difference = parseInt(vote.vote - currentUserVote, 10)
                handlePostVoteInStore(vote, difference)
              });
            }
            : () => {
              handleVoteOnServer(-1).then(vote => {
                const difference = parseInt(vote.vote - currentUserVote, 10)
                handlePostVoteInStore(vote, difference)
              });
            }
          }>
            ▼
        </button>
      </div>
    </div>
    )
}


export default PostVoter;
