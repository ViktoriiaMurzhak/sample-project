import { Avatar, Box, Typography } from '@mui/joy';
import React from 'react';
import { useTranslation } from 'react-i18next';
import avatar from '../../assets/images/IMG_4277.png';
const Portfolio = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ mb: 3, pl: 3, width: '100%' }}>
      <Typography level="h2" sx={{ p: '20px 0 ' }}>
        {t('sidebar_nav_portfolio')}
      </Typography>
      <Avatar
        src={avatar}
        sx={{
          height: 240,
          mb: 2,
          width: 240,
          border: '1px solid var(--accent-focus)',
          m: '0 auto',
        }}
      />
    </Box>
  );
};

export default Portfolio;
