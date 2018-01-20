import axios from 'axios';
import { BASE_URL } from '../constants';
import { getAccessToken, isLoggedIn, getProfile } from '../utils/AuthService';

const getUsersPostVotes = (authorId) => axios.get(`${BASE_URL}/api/users/${authorId}/postvotes`,
  { headers: { Authorization: `Bearer ${getAccessToken()}` }})
  .then(response => {
    return response.data})

const getUserVoteForPost = (postId, authorId) => axios.get(`${BASE_URL}/api/posts/${postId}/votes/${authorId}`,
  { headers: { Authorization: `Bearer ${getAccessToken()}` }})
  .then(response => response.data)

export { getUserVoteForPost };
