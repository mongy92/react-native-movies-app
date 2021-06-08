import axios from 'axios';

export const BASE_URL = 'https://api.themoviedb.org/3';
export const API_KEY = '4f298a53e552283bee957836a529baec';

const axios_client = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  params: {
    api_key: API_KEY,
  },
});

export default axios_client;
