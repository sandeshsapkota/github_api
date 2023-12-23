import axios, { AxiosInstance } from 'axios';

const http = () => {
  const axiosConfig = {
    baseURL: 'https://api.github.com',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const instance: AxiosInstance = axios.create(axiosConfig);

  instance.interceptors.response.use(
    (response) => {
      if (response.data && response.data.body) {
        response.data = JSON.parse(response.data.body);
      }
      return response;
    },
    (error) => {
      if (error.response) {
        if (error.response.status === 422) {
          console.log('hiiii');
        }
      } else if (error.request) {
        console.error('Request error:', error.request);
      } else {
        console.error('General error:', error.message);
      }

      return Promise.reject(error);
    },
  );

  return instance;
};

export default http;
