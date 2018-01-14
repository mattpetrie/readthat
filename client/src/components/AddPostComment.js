import React from 'react';
import { addPostCommentToServer } from '../api/posts';
import { getProfile } from '../utils/AuthService';

const AddPostComment = ({
  onAddPostComment,
  postId,
}) => {
  let body;
  const { authorId } = getProfile();

  return (
  <div className="add-post">
    <h3>Submit a Comment</h3>
    <form onSubmit={e => {
        e.preventDefault();
        if (!body.value.trim()) {
          return;
        }
        const postComment = {
          body: body.value,
          authorId };

        console.log(postComment);
        addPostCommentToServer(postId, postComment).then(res => {
          onAddPostComment(res);
        });
        // Maybe add Comment with current time instead of from response?
        body.value = '';
      }}
    >
      Comment:<br />
      <textarea name="body" rows="8" cols="50"
        ref={node => { body = node; }} /><br />
      <button type="submit">
        Submit
      </button>
    </form>
  </div>
)};

export default AddPostComment;
