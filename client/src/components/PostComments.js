import React, { Component } from 'react';
import PostContainer from './containers/PostContainer';
import PostComment from './PostComment';
import AddPostCommentContainer from './containers/AddPostCommentContainer';
import { getPostData } from '../api/posts';
import { isLoggedIn } from '../utils/AuthService';

class PostComments extends Component {
  componentWillMount() {
    this.getPost();
  }

  getPost() {
    getPostData(this.props.match.params.postId).then((post) => {
      this.props.onGetPostFromServer(post);
    });
  }


  render() {
    const { currentPost } = this.props;
    if (!currentPost) {
      return <div>Loading...</div>;
    }
    const { postComments } = currentPost;
    return (
      <div>
        <PostContainer post={currentPost} commentsLink={false} key={currentPost.id} />
        <h3>Comments</h3>
        <div className="post-comments">
          { postComments ? postComments // WHY CONDITIONAL NECESSARY?
            .filter(comment => comment.parent === null)
            .sort((a, b) => a.id - b.id)
            .map(comment =>
              <PostComment comment={comment} postComments={postComments} key={comment.id} />)
            : ''
          }
        </div>
        <br /><br />
        {isLoggedIn() ?
          <AddPostCommentContainer postId={currentPost.id} />
          :
          <div className="log-in-to">... Log In to Add Comment ...</div>
        }
        <br /><br />
      </div>
    );
  }
}

export default PostComments;
