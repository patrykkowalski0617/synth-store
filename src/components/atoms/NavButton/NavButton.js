import React from 'react';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { NavButtonWrapper } from './NavButton.styles';

const NavButton = ({ link, btnTxt }) => {
  return (
    <NavButtonWrapper>
      <NavLink to={link} key={link}>
        <Button sx={{ my: 2, color: 'white', display: 'block' }}>
          {btnTxt}
        </Button>
      </NavLink>
    </NavButtonWrapper>
  );
};
export default NavButton;
