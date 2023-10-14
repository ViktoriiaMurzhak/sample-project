import React, { useCallback, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Input,
  Grid,
  Typography,
} from '@mui/joy';
import { useSelector } from 'react-redux';
import { getGlobalUser } from '../../../redux/auth/selectors';

export const ProfileInfo = () => {
  const { user } = useSelector(getGlobalUser);
  const [values, setValues] = useState({
    name: user.name,

    email: user.email,
    phone: '',
    state: 'los-angeles',
    country: 'USA',
  });

  const handleChange = useCallback((event: { target: { value: string; name: string } }) => {
    setValues(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const handleSubmit = () => {
    //todo
  };

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Card>
        <Typography level="title-md">Змінити пароль</Typography>
        <Divider />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ p: 1 }}>
            <Grid container spacing={3}>
              <Grid xs={12} md={6}>
                <Input
                  sx={{ width: '100%' }}
                  placeholder="Name"
                  onChange={handleChange}
                  required
                  value={values.name}
                />
              </Grid>

              <Grid xs={12} md={6}>
                <Input
                  sx={{ width: '100%' }}
                  placeholder="Email"
                  onChange={handleChange}
                  required
                  value={values.email}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <Input
                  sx={{ width: '100%' }}
                  placeholder="Телефон"
                  onChange={handleChange}
                  type="number"
                  value={values.phone}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <Input
                  sx={{ width: '100%' }}
                  placeholder="Країна"
                  name="country"
                  onChange={handleChange}
                  required
                  value={values.country}
                />
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button>Зберегти</Button>
        </CardActions>
      </Card>
    </form>
  );
};
