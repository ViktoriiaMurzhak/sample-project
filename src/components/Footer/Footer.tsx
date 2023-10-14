import { Box, Divider, Typography } from '@mui/joy';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Box
      component="footer"
      sx={{ width: '100%', borderTop: '1px solid var(--joy-palette-divider)', zIndex: 10 }}
    >
      <Divider sx={{ borderColor: 'var(--accent-light)' }} />
      <Typography level="body-md" sx={{ p: 3, textAlign: 'center' }}>
        &copy; {t('footer')}
      </Typography>
    </Box>
  );
};
export default Footer;
