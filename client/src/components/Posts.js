import React, { Component } from 'react';
import Post from './Post';
import AddPostContainer from './containers/AddPostContainer'
import { getPostsData } from '../api/posts';
import { getProfile, isLoggedIn } from '../utils/AuthService';

class Posts extends Component {

  getPosts() {
    getPostsData().then(posts => {
      this.props.onPopulatePostsFromServer(posts);
    });
  }

  componentWillMount() {
    this.getPosts();
  }

  render() {
    return (
      <div className="posts">
        <h1 className="title">Posts</h1>
        {this.props.posts.sort((a, b) => a.id - b.id).map(post =>
          <Post post={post} commentsLink={true} key={post.id}/>)}
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
