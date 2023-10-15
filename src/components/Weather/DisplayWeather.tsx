import { Box, Table, Typography } from '@mui/joy';
import React from 'react';
import { useTranslation } from 'react-i18next';

const DisplayWeather = (props: any) => {
  const { data } = props;
  const { t } = useTranslation();
  const iconurl =
    'http://openweathermap.org/img/wn/' +
    `${data?.cod !== 404 ? data?.weather[0].icon : null}` +
    '.png';

  return (
    <Box sx={{ mt: '20px', display: 'flex', flexFlow: 'column nowrap' }}>
      {data && data.cod !== 404 ? (
        <>
          <Box>
            <Box
              sx={{ display: 'flex', alignItems: 'center', gap: '20px', justifyContent: 'center' }}
            >
              <Typography level="h2" sx={{ fontSize: '80px', color: 'var(--accent-focus)' }}>
                {Math.floor(data.main.temp - 273.15)}
                <sup>o</sup>
              </Typography>
              <Box>
                <Typography level="h3">{`${data.name}, ${data.sys.country}. ${t(
                  'weather_header'
                )}`}</Typography>
                <Typography level="title-lg" className="cardsubtitle">
                  {t('weather_time')} {new Date().toLocaleTimeString()}
                </Typography>
              </Box>
              <Box>
                <img
                  className="weather-icon"
                  src={iconurl}
                  alt=""
                  srcSet=""
                  width="100px"
                  style={{ margin: '0 auto' }}
                />
                <Typography level="h4" textAlign={'center'}>
                  {data.weather[0].main}
                </Typography>
                <Typography level="title-sm" textAlign={'center'}>
                  {data.weather[0].description}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Typography level="h4" textAlign={'center'} sx={{ m: 4 }}>
            {t('weather_details')}
          </Typography>
          <Box sx={{ width: '100%', display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <Table sx={{ width: '30%' }}>
              <tbody>
                <tr>
                  <td>
                    <Typography level="title-lg">{t('weather_hl')}</Typography>
                  </td>
                  <td>
                    <span>
                      {Math.floor(data.main.temp_max - 273.15)}/
                      {Math.floor(data.main.temp_min - 273.15)}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Typography level="title-lg">{t('weather_humidity')}</Typography>
                  </td>
                  <td>
                    <span>{data.main.humidity} %</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Typography level="title-lg">{t('weather_pressure')}</Typography>
                  </td>
                  <td>
                    <span>{data.main.pressure} hPa</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Typography level="title-lg">{t('weather_visibility')}</Typography>
                  </td>
                  <td>
                    <span>{data.visibility / 1000} Km</span>
                  </td>
                </tr>
              </tbody>
            </Table>

            <Table sx={{ width: '30%' }}>
              <tbody>
                <tr>
                  <td>
                    <Typography level="title-lg">{t('weather_wind')}</Typography>
                  </td>
                  <td>
                    <span>{Math.floor((data.wind.speed * 18) / 5)} km/hr</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Typography level="title-lg">{t('weather_windD')}</Typography>
                  </td>
                  <td>
                    <span>
                      {data.wind.deg}
                      <sup>o</sup> deg
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Typography level="title-lg">{t('weather_sunrise')}</Typography>
                  </td>
                  <td>
                    <span>{new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Typography level="title-lg">{t('weather_sunset')}</Typography>
                  </td>
                  <td>
                    <span>{new Date(data.sys.sunset * 1000).toLocaleTimeString()}</span>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Box>
        </>
      ) : (
        <div>
          <h2>{data?.message}</h2>
        </div>
      )}
    </Box>
  );
};

export default DisplayWeather;
