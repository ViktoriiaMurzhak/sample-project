import { Box, Button, Input, Typography } from '@mui/joy';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import css from './Weather.module.css';
import { FcCloseUpMode } from 'react-icons/fc';
import { toast } from 'react-toastify';

import DisplayWeather from '../../components/Weather/DisplayWeather';

const API_KEY_WEATER = '1db58593773c169d8e83d55b06a9e635';

const Weather = () => {
  const [weather, setWeather] = useState<any>(null);
  const [form, setForm] = useState({
    city: '',
    country: '',
  });

  const { t } = useTranslation();

  const getWeatherData = async (e: any) => {
    e.preventDefault();
    if (form.city === '') {
      toast.error(t('toast_city'));
    } else {
      const fetchData = async () => {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${API_KEY_WEATER}`
        )
          .then(resp => {
            return resp.json();
          })
          .then(data => {
            setWeather(data);
          });
      };
      fetchData();
    }
  };

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <Box sx={{ mb: 3, p: 3, width: '100%' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center' }}>
        <Typography level="h2" textAlign="center">
          {t('weather_header')}
        </Typography>
        <FcCloseUpMode style={{ width: '30px', height: '30px' }} />
      </Box>

      <Typography level="body-md" textAlign="center" sx={{ color: 'var(--accent-focus)', mt: 2 }}>
        {t('weather_info')}
      </Typography>
      <form className={css.form} onSubmit={e => getWeatherData(e)}>
        <Input
          id="city"
          name="city"
          placeholder={t('weather_city')}
          className={css.fullInput}
          autoComplete="city"
          autoFocus
          value={form.city}
          onChange={e => handleChange(e)}
          sx={{ p: 1, mb: 2 }}
        />
        <Input
          id="country"
          name="country"
          placeholder={t('weather_country')}
          className={css.fullInput}
          autoComplete="country"
          value={form.country}
          onChange={e => handleChange(e)}
          sx={{ p: 1, mb: 2 }}
        />
        <Button
          type="submit"
          variant="outlined"
          sx={{ p: '0 60px', display: 'block', m: '0 auto' }}
        >
          {t('weather_btn')}
        </Button>
      </form>
      {weather !== undefined ? <DisplayWeather data={weather} /> : null}
    </Box>
  );
};

export default Weather;
