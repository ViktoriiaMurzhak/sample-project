import React from 'react';
import Typography from '@mui/joy/Typography';
import css from './RightImg.module.css';
import logo from '../../assets/images/pngwing.com.png';

const RightImg = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.logoBox}>
        <img width={'300px'} src={logo} alt="logo" />
        <Typography level="h2" sx={{ mt: '20px' }} color="neutral">
          WELCOME TO OUR SERVICES!
        </Typography>
      </div>
    </div>
  );
};

export default RightImg;
