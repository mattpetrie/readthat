import axios from 'axios';
import { BASE_URL } from '../constants';
import { getAccessToken } from '../utils/AuthService';

const getTodosData = () => axios.get(`${BASE_URL}/api/todos`,
  { headers: { Authorization: `Bearer ${getAccessToken()}` }})
  .then(response => response.data);

export { getTodosData };
