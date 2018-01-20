import React from 'react';
import timeago from 'timeago.js';
import { Link } from 'react-router-dom';

const Post = ({
  post,
  commentsLink,
  currentUserVote,
}) => {
  if (!post) {
    return <div>Loading...</div>
  }
  return (
    <div className="post">
      { post.url ?
        <div>
          <a href={post.url} target="_blank" className={post.new ? 'post-title new' : 'post-title'}>
            {post.title}
          </a>
          <br />
          <span className="post-url">({post.url})</span>
        </div>
        :
        <div className={post.new ? 'post-title new' : 'post-title'}>
          {post.title}
        </div>
      }
      {post.author ?
        <span className="byline">
          Submitted by {post.author.nickname} {timeago().format(post.createdAt)}
        </span> : null }
      {post.body ?
        <div className="post-body">
          {commentsLink ?
            ( post.body.length > 255 ?
              post.body.slice(0, 255).concat('...') : post.body )
            : post.body}
          </div> : null}
      {commentsLink ?
        <Link to={`/posts/${post.id}`}>
          <div className="comment-count">{post.postComments ? post.postComments.length : '0'} comments</div>
        </Link>
        : null }
        <br />VOTES: {post.postVotes}
        <br />{currentUserVote ? currentUserVote.vote : null}
    </div>
)}


export default Post;
