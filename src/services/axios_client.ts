import axios from 'axios';
import { API_KEY, BASE_URL } from '../common';

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
