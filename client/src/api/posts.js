import axios from 'axios';
import { BASE_URL } from '../constants';
import { getAccessToken } from '../utils/AuthService';

const getPostsData = () => axios.get(`${BASE_URL}/api/posts`,
  { headers: { Authorization: `Bearer ${getAccessToken()}` }})
  .then(response => response.data);

const addPostToServer = (post) => axios.post(`${BASE_URL}/api/posts`,
  { post },
  { headers: { Authorization: `Bearer ${getAccessToken()}` },
  })
  .then(response => response.data);

export { getPostsData, addPostToServer };
