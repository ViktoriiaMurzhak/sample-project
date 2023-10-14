import axios from 'axios';
import { toast } from 'react-toastify';

const api = axios.create({});
// 'XvEvBuOYbL3HQjkUzq3yTOwMr5fYorPP4TYH7qxboGmmKW2ALQ4adJIe';

export const token = {
  set(token: string) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    api.defaults.headers.common.Authorization = '';
  },
};

api.interceptors.request.use(
  async config => {
    const persistData: any = localStorage.getItem('persist:auth');
    const parsedData = JSON.parse(persistData);
    const token = JSON.parse(parsedData.access_token);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 'CORS error') {
      toast.error('CORS error');
    }
    return Promise.reject(error);
  }
);

export default api;
