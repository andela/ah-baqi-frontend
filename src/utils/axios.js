import axios from 'axios';
import promise from 'promise';

export const instance = axios.create({
  baseURL: 'https://ah-django-staging.herokuapp.com/api',
});

instance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('token');
  const configuratoin = config;

  if (accessToken) {
    configuratoin.headers.Authorization = `Bearer ${accessToken}`;
  }
  return configuratoin;
}, error => promise.reject(error));

export const username = localStorage.getItem('username');
