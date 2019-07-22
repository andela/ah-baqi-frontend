import axios from 'axios';
import promise from 'promise';

export const baseAxios = axios.create({
  baseURL: 'https://ah-django-staging.herokuapp.com/api',
});

export const instance = baseAxios;

instance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('token');
  const configuratoin = config;

  if (accessToken) {
    configuratoin.headers.Authorization = `Bearer ${accessToken}`;
  }
  return configuratoin;
}, error => promise.reject(error));

export const username = localStorage.getItem('username');
