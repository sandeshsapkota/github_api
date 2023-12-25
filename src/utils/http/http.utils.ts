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
      console.log(error);
      return Promise.reject(error);
    },
  );

  return instance;
};

export default http;
