import { Avatar, Box, Card, CardContent, Typography } from '@mui/joy';
import React from 'react';
import { useSelector } from 'react-redux';
import { getGlobalUser } from '../../../redux/auth/selectors';

export const ProfileDetails = () => {
  const { user } = useSelector(getGlobalUser);
  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Avatar
            src={'/assets/avatars/avatar-anika-visser.png'}
            sx={{
              height: 80,
              mb: 2,
              width: 80,
            }}
          />
          <Typography gutterBottom level="title-md">
            {user.name}
          </Typography>
          <Typography level="title-md">{user.email}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
