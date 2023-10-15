import { toast } from 'react-toastify';
import api from './axiosConfig';
import i18n from 'i18next';

export const getAll = async () => {
  try {
    const { data } = await api.get(`https://jsonplaceholder.typicode.com/users`);

    return data;
  } catch {
    toast.error(i18n.t('error'), {
      position: 'top-right',
    });
  }
};

export const getAllPhotos = async (limit: number, value: string) => {
  try {
    const { data } = await api.get(
      `https://api.pexels.com/v1/search?query=${value}&per_page=${limit}`,
      {
        headers: {
          Authorization: 'XvEvBuOYbL3HQjkUzq3yTOwMr5fYorPP4TYH7qxboGmmKW2ALQ4adJIe',
        },
      }
    );

    return data;
  } catch {
    toast.error(i18n.t('error'), {
      position: 'top-right',
    });
  }
};
export const getAllImages = async (limit: number, value: string) => {
  try {
    const { data } = await api.get(
      `https://pixabay.com/api/?key=40069201-fe2fb636f4d33f18dc4a5f0d0&q=${value}&image_type=photo&per_page=${limit}&orientation=horizontal`
    );

    return data;
  } catch {
    toast.error(i18n.t('error'), {
      position: 'top-right',
    });
  }
};

export const getWeather = async (city: string, country: string) => {
  try {
    const { data } = await api.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=1db58593773c169d8e83d55b06a9e635`
    );

    return data;
  } catch {
    toast.error(i18n.t('toast_weather'), {
      position: 'top-right',
    });
  }
};
