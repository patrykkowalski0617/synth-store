import React from 'react';
import { Typography } from '@mui/material';

const Logo = () => {
  return (
    <Typography
      variant="h6"
      noWrap
      component="a"
      href="/"
      sx={{
        mr: 2,
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      LOGO
    </Typography>
  );
};

Logo.propTypes = {};

export default Logo;
