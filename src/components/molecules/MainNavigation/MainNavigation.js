import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const MainNavigation = (props) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const pages = ['Destkop Synths', 'Keyboard Synths', 'Accesories'];

  return (
    <>
      {pages.map((page) => (
        <Button
          key={page}
          onClick={handleCloseNavMenu}
          sx={{ my: 2, color: 'white', display: 'block' }}
        >
          <Link to={`/${page}`}> {page}</Link>
        </Button>
      ))}
    </>
  );
};

MainNavigation.propTypes = {};

export default MainNavigation;
