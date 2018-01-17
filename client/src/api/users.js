import axios from 'axios';
import { BASE_URL } from '../constants';
import { getAccessToken } from '../utils/AuthService';

const getUserData = (authorId) => axios.get(`${BASE_URL}/api/posts/${authorId}`,
  { headers: { Authorization: `Bearer ${getAccessToken()}` }})
  .then(response => response.data);

const addUserToServer = (user) => axios.post(`${BASE_URL}/api/users`,
  { user },
  { headers: { Authorization: `Bearer ${getAccessToken()}` },
  })
  .then(response => response.data);

export { getUserData, addUserToServer };