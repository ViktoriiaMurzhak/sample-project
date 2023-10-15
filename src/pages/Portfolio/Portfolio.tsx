import { Avatar, Box, Card, Divider, Typography } from '@mui/joy';
import React from 'react';
import { useTranslation } from 'react-i18next';
import avatar from '../../assets/images/IMG_4277.png';
import { contacts, techSkills } from '../../db/allDbs';
import css from './Portfolio.module.css';

const Portfolio = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ mb: 3, pl: 3, width: '100%' }}>
      <Box sx={{ display: 'flex', width: '100%', gap: '20px', pt: 2, alignItems: 'center' }}>
        <Avatar
          src={avatar}
          sx={{
            height: 200,
            mb: 2,
            width: 200,

            m: '0 auto',
          }}
        />
        <Box sx={{ width: '100%' }}>
          <h2 className={css.title}>{t('portfolio_info')}</h2>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
          flexWrap: 'wrap',
        }}
      >
        <Card sx={{ mt: 4, width: '40%' }}>
          <Typography level="title-lg">{t('portfolio_tech')}</Typography>
          <Divider />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',

              gap: '20px',

              flexWrap: 'wrap',
            }}
          >
            {techSkills.map(tech => (
              <Box
                sx={{
                  display: 'flex',

                  gap: '20px',
                  p: 1,
                  alignItems: 'center',
                }}
              >
                <Box sx={{ color: 'var(--accent-focys)' }}>{tech.url}</Box>
                <Typography key={tech.id} level="body-md">
                  {tech.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Card>
        <Card sx={{ mt: 4, width: '40%' }}>
          <Typography level="title-lg">{t('portfolio_contacts')}</Typography>
          <Divider />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',

              gap: '20px',

              flexWrap: 'wrap',
            }}
          >
            {contacts.map(tech => (
              <Box
                sx={{
                  display: 'flex',

                  gap: '20px',
                  p: 1,
                  alignItems: 'center',
                }}
              >
                <Box sx={{ color: 'var(--accent-focys)' }}>{tech.url}</Box>
                <Typography key={tech.id} level="body-md">
                  {tech.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default Portfolio;
