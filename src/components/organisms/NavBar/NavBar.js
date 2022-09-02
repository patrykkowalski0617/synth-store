import React, { useState } from 'react';
import { IconButton, AppBar, Toolbar, Box, Button } from '@mui/material';
import { Menu, Close } from '@mui/icons-material';
import { NavWrapper } from './NavBar.styles';
import { NavLink } from 'react-router-dom';

const pages = [
  { btnTxt: 'Desktop synths', link: 'desktop_synths' },
  { btnTxt: 'Keyboard synths', link: 'keyboard_synths' },
  { btnTxt: 'Accesories', link: 'accesories' },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AppBar>
      <NavWrapper isOpen={isOpen} onClick={handleOpenNav}>
        <Box>
          {pages.map(({ btnTxt, link }) => (
            <NavLink to={link} key={link}>
              <Button sx={{ my: 2, color: 'black', display: 'block' }}>
                {btnTxt}
              </Button>
            </NavLink>
          ))}
        </Box>
      </NavWrapper>
      <Toolbar sx={{ display: { xs: 'block', sm: 'none' } }}>
        <IconButton
          onClick={handleOpenNav}
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
        >
          {isOpen ? <Close /> : <Menu />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
