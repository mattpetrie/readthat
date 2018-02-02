import React, { Component } from 'react';
import PostContainer from './containers/PostContainer'
import AddPostContainer from './containers/AddPostContainer'
import { getPostsData } from '../api/posts';
import { isLoggedIn } from '../utils/AuthService';

class Posts extends Component {
  componentWillMount() {
    this.getPosts();
  }

  getPosts() {
    getPostsData().then((posts) => {
      this.props.onPopulatePostsFromServer(
        posts.sort((a, b) => b.postVotes - a.postVotes));
    });
  }

  render() {
    return (
      <div className="posts">
        <h1 className="title">Posts</h1>
        {this.props.posts.map(post =>
          <PostContainer post={post} commentsLink={true} key={post.id}/>)}
        <br /><br />
        {isLoggedIn() ?
          <AddPostContainer />
          :
          <div className="log-in-to">... Log In to Add Post ...</div>
        }
      </div>
    );
  }
}

export default Posts;
