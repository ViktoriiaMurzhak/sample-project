import React from 'react';
import css from './NotFound.module.css';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/joy';

const NotFound = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/login');
  };

  return (
    <div className={css.wrapper}>
      <div className={css.box}>
        <h2 className={css.title}>404</h2>

        <h3 className={css.description}>OOPS! PAGE NOT FOUND</h3>
        <p className={css.text}>Sorry, the page you're looking for doesn't exist.</p>

        <Button type="button" onClick={handleNavigate}>
          BACK TO HOME
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
