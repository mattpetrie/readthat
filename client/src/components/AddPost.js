import React from 'react';
import { addPostToServer } from '../api/posts';
import { getProfile, isLoggedIn } from '../utils/AuthService';

/*
title,
body,
url,
authorId,
*/

const AddPost = ({
  onAddPost,
}) => {
  let title, body, url;
  const { authorId } = getProfile();

  return (
  <div>
    <form onSubmit={e => {
        e.preventDefault();
        if (!title.value.trim()) {
          return;
        }
        const post = {
          title: title.value,
          body: body.value,
          url: url.value,
          authorId};
          
        console.log(post);
        addPostToServer(post).then(res => {
          onAddPost(res);
        });
        // Maybe add Post with current time instead of from response?
        title.value = '';
        url.value = '';
        body.value = '';
      }}
    >
      <input ref={node => { title = node; }} /><br />
      <input ref={node => { url = node; }} /><br />
      <textarea name="body" rows="8" cols="50"
        ref={node => { body = node; }} /><br />
      <button type="submit">
        Add Post
      </button>
    </form>
  </div>
)};

export default AddPost;
