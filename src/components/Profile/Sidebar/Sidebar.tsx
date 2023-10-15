import React from 'react';
import Sheet from '@mui/joy/Sheet';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemButton from '@mui/joy/ListItemButton';

import Divider from '@mui/joy/Divider';
import { closeSidebar } from '../../../utils/closeSidebar';
import { NavLink } from 'react-router-dom';
import css from './Sidebar.module.css';
import { RxExit } from 'react-icons/rx';
import { logOut } from '../../../redux/auth/operations';

import { useTranslation } from 'react-i18next';

const Sidebar = () => {
  const { t } = useTranslation();

  const activeClassName = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${css.active}` : `${css.navLink}`;

  const handleSignOut = () => {
    closeSidebar();
    logOut();
  };

  return (
    <React.Fragment>
      <Box
        className="SecondSidebar-overlay"
        sx={{
          position: 'fixed',
          zIndex: 20,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          opacity: 'var(--SideNavigation-slideIn)',
          backgroundColor: 'var(--joy-palette-background-backdrop)',
          transition: 'opacity 0.4s',
          transform: {
            xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--FirstSidebar-width, 0px)))',
            lg: 'translateX(-100%)',
          },
        }}
        onClick={() => closeSidebar()}
      />
      <Sheet
        className="SecondSidebar"
        color="neutral"
        sx={{
          position: {
            xs: 'fixed',
            lg: 'sticky',
          },
          transform: {
            xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1.1) + var(--SideNavigation-slideIn, 0) * var(--FirstSidebar-width, 0px)))',
            lg: 'none',
          },
          transition: 'transform 0.4s',
          zIndex: 21,
          width: '260px',
          height: '100dvh',
          top: 0,

          p: 2,
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRight: '1px solid',
          borderColor: 'divider',
        }}
      >
        <List
          size="sm"
          sx={{
            '--ListItem-radius': '6px',
            '--List-gap': '6px',
          }}
        >
          <ListSubheader role="presentation" sx={{ fontWeight: 700, mt: 2 }}>
            {t('sidebar_nav_header')}
          </ListSubheader>
          <ListItem>
            <ListItemButton onClick={() => closeSidebar()}>
              <ListItemContent sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <NavLink className={activeClassName} to="weather">
                  {t('sidebar_nav_weather')}
                </NavLink>
              </ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={() => closeSidebar()}>
              <ListItemContent sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <NavLink className={activeClassName} to="gallery">
                  {t('gallery_header')}
                </NavLink>
              </ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={() => closeSidebar()}>
              <ListItemContent sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <NavLink className={activeClassName} to="portfolio">
                  {t('sidebar_nav_portfolio')}
                </NavLink>
              </ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={() => closeSidebar()}>
              <ListItemContent>
                <NavLink className={activeClassName} to="dnd">
                  {t('sidebar_nav_dnd')}
                </NavLink>
              </ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={() => closeSidebar()}>
              <ListItemContent>
                <NavLink className={activeClassName} to="table">
                  {t('sidebar_nav_table')}
                </NavLink>
              </ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListSubheader role="presentation" sx={{ fontWeight: 700, mt: 2 }}>
            {t('sidebar_nav_workspase')}
          </ListSubheader>
          <ListItem>
            <ListItemButton onClick={() => closeSidebar()}>
              <ListItemContent>
                <NavLink className={activeClassName} to="settings">
                  {t('sidebar_nav_settings')}
                </NavLink>
              </ListItemContent>
            </ListItemButton>
          </ListItem>
          <Divider sx={{ mt: 1 }} />
          <ListItem>
            <ListItemButton onClick={handleSignOut}>
              <ListItemContent>
                <div className={css.exitBox} style={{ color: 'var(--text-light)' }}>
                  <RxExit style={{ width: '20px', height: '20px' }} />
                  <p style={{ color: 'inherit' }}>{t('sidebar_exit')}</p>
                </div>
              </ListItemContent>
            </ListItemButton>
          </ListItem>
        </List>
      </Sheet>
    </React.Fragment>
  );
};
export default Sidebar;
