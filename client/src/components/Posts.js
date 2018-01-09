import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Post from './Post';
import { getPostsData } from '../api/posts';

import { getDecodedIdToken, getProfile, isLoggedIn } from '../utils/AuthService';

class Posts extends Component {
  constructor() {
    super();
    this.timerToggle = undefined;
  }

  getPosts() {
    getPostsData().then(posts => {
      //console.log(getDecodedIdToken()); //
      if (isLoggedIn()) { console.log(getProfile()); }
      this.props.onPopulatePostsFromServer(posts);
    });
  }

  componentDidMount() {
    this.getPosts();
  }

  render() {
    return (
      <div className="posts">
        <h1>Posts</h1>
        {this.props.posts.sort((a, b) => a.id - b.id).map(post => <Post post={post} key={post.id}/>)}
        <br />
        <Link to='/'>Home</Link>
      </div>
    );
  }
}

export default Posts;
