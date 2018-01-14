import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({
  post,
  commentsLink,
}) =>
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
    {post.body ? <div className="post-body">{commentsLink ? ( post.body.length > 255 ? post.body.slice(0, 255).concat('...') : post.body ) : post.body}</div> : ''}
    {commentsLink ?
      <Link to={`/posts/${post.id}`}>
        <div className="comment-count">{post.postComments ? post.postComments.length : '0'} comments</div>
      </Link>
      : null }
  </div>


export default Post;
