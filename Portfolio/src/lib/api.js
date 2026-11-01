import axios from 'axios';

const baseURL = (
  import.meta.env.VITE_API_URL || 'https://portfolio-react-cym6.onrender.com'
).trim().replace(/\/+$/, '');

const api = axios.create({ baseURL });

export default api;