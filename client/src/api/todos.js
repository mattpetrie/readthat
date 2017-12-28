import axios from 'axios';
import { BASE_URL } from '../constants';

const getTodosData = () => axios.get(`${BASE_URL}/api/todos`)
  .then(response => response.data);

export { getTodosData };
