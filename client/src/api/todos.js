import axios from 'axios';
import { BASE_URL } from '../constants';
import { getAccessToken } from '../utils/AuthService';

const getTodosData = () => axios.get(`${BASE_URL}/api/todos`,
  { headers: { Authorization: `Bearer ${getAccessToken()}` }})
  .then(response => response.data);

const addTodoToServer = (title) => axios.post(`${BASE_URL}/api/todos`,
  { title },
  { headers: { Authorization: `Bearer ${getAccessToken()}` },
  })
  .then(response => {
    return response.data;
  });

export { getTodosData, addTodoToServer };
