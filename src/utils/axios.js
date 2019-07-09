import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://ah-django-staging.herokuapp.com/api',
});

export default instance;
