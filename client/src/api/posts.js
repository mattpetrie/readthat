import axios from 'axios';
import { BASE_URL } from '../constants';
import { getAccessToken } from '../utils/AuthService';

const getPostsData = () => axios.get(`${BASE_URL}/api/posts`,
  { headers: { Authorization: `Bearer ${getAccessToken()}` }})
  .then(response => response.data)
  .then(posts => posts.map(post => {
        post.postComments = post.postComments.map(comment => {
          comment.commentVotes = comment.commentVotes.reduce(
            ((accumulator, vote) => accumulator + vote.vote),
            0);
          return comment;
        });
        post.postVotes = post.postVotes.reduce(
          ((accumulator, vote) => accumulator + vote.vote),
          0);
        return post;
      }
    )
  );

const getPostData = (postId) => axios.get(`${BASE_URL}/api/posts/${postId}`,
  { headers: { Authorization: `Bearer ${getAccessToken()}` }})
  .then(response => response.data)
  .then(post => {
    post.postComments = post.postComments.map(comment => {
      comment.commentVotes = comment.commentVotes.reduce(
        ((accumulator, vote) => accumulator + vote.vote),
        0);
      return comment;
    });
    post.postVotes = post.postVotes.reduce(
      ((accumulator, vote) => accumulator + vote.vote),
      0);
    return post;
  })

const addPostToServer = (post) => axios.post(`${BASE_URL}/api/posts`,
    { post },
    { headers: { Authorization: `Bearer ${getAccessToken()}` }, }
  )
  .then(response => response.data);

const addPostCommentToServer = (postId, postComment) => axios.post(`${BASE_URL}/api/posts/${postId}/comments`,
    { postComment },
    { headers: { Authorization: `Bearer ${getAccessToken()}` }, }
  )
  .then(response => response.data);

export { getPostsData, getPostData, addPostToServer, addPostCommentToServer };
