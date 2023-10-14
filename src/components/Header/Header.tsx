import React from 'react';
import { Box, IconButton, Typography } from '@mui/joy';

import css from './Header.module.css';
import logo from '../../assets/images/android-chrome-512x512.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import useWidth from '../../hooks/useWidth';
import { toggleSidebar } from '../../utils/closeSidebar';
import { useSelector } from 'react-redux';
import { getGlobalUser } from '../../redux/auth/selectors';
import ToggleLanguage from '../ToggleLanguage/ToggleLanguage';

const Header = () => {
  const { isLargeDesktop } = useWidth();
  const { user, isLoggedIn } = useSelector(getGlobalUser);

  return (
    <Box
      component="header"
      sx={{
        width: '100%',
        borderBottom: '1px solid var(--joy-palette-divider)',
      }}
    >
      <div className={css.container}>
        <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <Link to="/">
            <div className={css.logoWrapper}>
              <img src={logo} alt="logo" width="40px" />
              <Typography level="h4" sx={{}}>
                MY PROJECT
              </Typography>
            </div>
          </Link>
          {!isLargeDesktop && (
            <IconButton
              onClick={() => toggleSidebar()}
              variant="outlined"
              color="neutral"
              size="sm"
            >
              <GiHamburgerMenu />
            </IconButton>
          )}
        </Box>
        <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          {isLoggedIn && (
            <Link to="profile" className={css.link}>
              {user.name}
            </Link>
          )}
          <ToggleLanguage />
        </Box>
      </div>
    </Box>
  );
};
export default Header;
