import axios from 'axios';
import { BASE_URL } from '../constants';
import { getAccessToken, isLoggedIn, getProfile } from '../utils/AuthService';
import { getUserVoteForPost } from './votes';

const getPostsData = () => axios.get(`${BASE_URL}/api/posts`,
  { headers: { Authorization: `Bearer ${getAccessToken()}` }})
  .then(response => response.data)
  .then(posts => posts.map(post => {
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
