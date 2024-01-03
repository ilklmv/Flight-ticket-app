// api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Порт, на котором запущен json-server
});

export default api;
