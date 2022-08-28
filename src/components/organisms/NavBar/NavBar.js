import React, { useState } from 'react';
import { IconButton, AppBar, Toolbar, Box, Button } from '@mui/material';
import { Menu, Close } from '@mui/icons-material';
import { NavWrapper, AppBarWrapper } from './NavBar.styles';

const pages = ['Products', 'Products 1', 'Blog'];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <AppBarWrapper>
      <AppBar>
        <NavWrapper isOpen={isOpen} onClick={handleOpenNav}>
          <Box>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </NavWrapper>
        <Toolbar>
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
    </AppBarWrapper>
  );
};
export default NavBar;
