import React from 'react';

const PostVoter = ({
  currentUserVote,
  post,
}) => {

return (
  <div className="voter">
    <div className="vote-buttons">
      <button>▲</button>
      <span>{post.postVotes}</span>
      <button>▼</button>
    </div>
  </div>
)}


export default PostVoter;
