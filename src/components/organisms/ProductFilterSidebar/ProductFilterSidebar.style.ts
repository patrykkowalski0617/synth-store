import { SxProps, Theme } from '@mui/material';
import { CSSProperties } from 'react';

export const drawerWidth = 300;

export const drawerStyles: SxProps<Theme> = {
  display: 'flex',
};

export const mobileDrawerStyles: SxProps<Theme> = {
  display: { xs: 'block', md: 'none' },
  '& .MuiDrawer-paper': {
    boxSizing: 'border-box',
    width: drawerWidth,
  },
};

export const desktopDrawerStyles: SxProps<Theme> = {
  width: drawerWidth,
  flexShrink: 0,
  position: 'static',
  display: { xs: 'none', md: 'block' },
  '& .MuiDrawer-paper': {
    boxSizing: 'border-box',
    width: drawerWidth,
    position: 'relative',
    overflow: 'hidden',
  },
};

export const filterContainerStyles: SxProps<Theme> = {
  width: '100%',
  padding: 2,
};

export const sliderContainerStyles: CSSProperties = {
  padding: '0 10px',
};

export const applyButtonStyles: SxProps<Theme> = {
  marginTop: 2,
  width: '100%',
};

export const closeIconStyles: SxProps<Theme> = {
  display: { md: 'none' },
  width: '40px',
  margin: '0 0 0 auto',
};
