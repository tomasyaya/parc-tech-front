import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.40:4000/api/v1',
  withCredentials: true
});