import axios from 'axios';
import { BASE_URL } from '../constants';
import { getAccessToken } from '../utils/AuthService';

const getPostsData = () => axios.get(`${BASE_URL}/api/posts`,
  { headers: { Authorization: `Bearer ${getAccessToken()}` }})
  .then(response => response.data);

const getPostData = (postId) => axios.get(`${BASE_URL}/api/posts/${postId}`,
  { headers: { Authorization: `Bearer ${getAccessToken()}` }})
  .then(response => response.data);

const addPostToServer = (post) => axios.post(`${BASE_URL}/api/posts`,
  { post },
  { headers: { Authorization: `Bearer ${getAccessToken()}` },
  })
  .then(response => response.data);

const addPostCommentToServer = (postId, postComment) => axios.post(`${BASE_URL}/api/posts/${postId}/comments`,
  { postComment },
  { headers: { Authorization: `Bearer ${getAccessToken()}` },
  })
  .then(response => response.data);

export { getPostsData, getPostData, addPostToServer, addPostCommentToServer };
