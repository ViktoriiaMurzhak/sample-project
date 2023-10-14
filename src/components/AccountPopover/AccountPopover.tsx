import React from 'react';
import { Box, Divider, MenuItem, MenuList, Typography, Drawer } from '@mui/joy';

import { RxExit } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import css from './AccountPopover.module.css';
import { logOut } from '../../redux/auth/operations';

const AccountPopover = (props: any) => {
  const { setOpenProfile, open, user } = props;

  const handleSignOut = () => {
    logOut();
  };

  return (
    <>
      <Drawer open={open} onClose={() => setOpenProfile(false)} anchor="right">
        <Box
          sx={{
            py: 1.5,
            px: 2,
            bgcolor: 'var(--accent-light)',
          }}
        >
          <Box onClick={() => setOpenProfile(false)} sx={{ cursor: 'pointer' }}>
            <Link to="/profile">
              <Typography color="primary" level="h4">
                Profile
              </Typography>
            </Link>
          </Box>

          <Typography level="body-md">{user.name}</Typography>
        </Box>
        <Divider />
        <MenuList
          sx={{
            p: '8px',
            border: 'none',
          }}
        >
          <MenuItem>Technical support</MenuItem>
          {/* 
          // todo
          <MenuItem>
            <Link to="/settings">Settings</Link>
          </MenuItem> */}
          <Divider />
          <MenuItem onClick={handleSignOut}>
            <div className={css.exitBox}>
              <RxExit style={{ width: '20px', height: '20px' }} />
              <p>Exit</p>
            </div>
          </MenuItem>
        </MenuList>
      </Drawer>
    </>
  );
};

export default AccountPopover;
