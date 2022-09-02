import React, { useState } from 'react';
import { IconButton, AppBar, Toolbar, Box } from '@mui/material';
import { Menu, Close } from '@mui/icons-material';
import { NavWrapper } from './NavBar.styles';
import NavButton from '../../atoms/NavButton/NavButton';

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
          {pages.map(({ btnTxt, link }, i) => (
            <NavButton btnTxt={btnTxt} link={link} key={`${link}[${i}]`} />
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
