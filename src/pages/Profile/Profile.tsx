import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Stack,
  Input,
  Typography,
} from '@mui/joy';
import React, { useState } from 'react';
import { ProfileDetails } from '../../components/Profile/Profile/ProfileDetails';
import { ProfileInfo } from '../../components/Profile/Profile/ProfileInfo';

interface Password {
  password: string;
  confirm: string;
}

const Profile = () => {
  const [values, setValues] = useState({
    password: '',
    confirm: '',
  });

  const handleChange = (event: { target: { name: string; value: string } }) => {
    setValues((prevState: Password) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container>
          <Stack spacing={3} sx={{ mb: 4 }}>
            <div>
              <Typography level="h4">Профіль користувача</Typography>
            </div>
            <Box>
              <ProfileDetails />

              <ProfileInfo />
            </Box>
          </Stack>
          <form>
            <Card>
              <Typography level="title-md">Змінити пароль</Typography>
              <Divider />
              <CardContent>
                <Stack spacing={3} sx={{ maxWidth: 400 }}>
                  <Input
                    sx={{ width: '100%' }}
                    placeholder="Пароль"
                    name="password"
                    onChange={handleChange}
                    type="password"
                    value={values.password}
                  />
                  <Input
                    sx={{ width: '100%' }}
                    placeholder="Підтвердити пароль"
                    name="confirm"
                    onChange={handleChange}
                    type="password"
                    value={values.confirm}
                  />
                </Stack>
              </CardContent>
              <Divider />
              <CardActions sx={{ justifyContent: 'flex-end' }}>
                <Button>Зберегти</Button>
              </CardActions>
            </Card>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Profile;
