import { CSSProperties } from 'react';
import { SxProps, Theme } from '@mui/material';

export const productCardContainer: SxProps<Theme> = {
  // minWidth: '250px',
  width: { xs: '100%', sm: '50%', lg: '25%' },
  padding: '10px',
};

export const cardStyles: CSSProperties = {
  maxWidth: 345,
  margin: 'auto',
  boxShadow: '3',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  padding: '15px',
};

export const cardTitle: CSSProperties = {
  fontSize: '15px',
  height: '60px',
};

export const cardBox: CSSProperties = {
  marginTop: 2,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export const cardActions: CSSProperties = {
  marginTop: 'auto',
};
