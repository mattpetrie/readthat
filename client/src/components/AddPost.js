import React from 'react';
import { addPostToServer } from '../api/posts';
import { getProfile } from '../utils/AuthService';

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
  <div className="add-post">
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
      Title:<br />
      <input size="50" ref={node => { title = node; }} /><br />
      URL:<br />
      <input size="50" ref={node => { url = node; }} /><br />
      Body:<br />
      <textarea name="body" rows="8" cols="50"
        ref={node => { body = node; }} /><br />
      <button type="submit">
        Add Post
      </button>
    </form>
  </div>
)};

export default AddPost;
