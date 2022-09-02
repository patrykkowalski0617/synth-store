import { styled } from '@mui/material/styles';

export const NavButtonWrapper = styled('div')(({ theme }) => ({
  '& .active button': {
    fontWeight: 'bold',
  },
  [theme.breakpoints.up('sm')]: {
    '& .active button': {
      borderBottom: `2px solid ${theme.palette.secondary.main}`,
      borderTop: `2px solid ${theme.palette.secondary.main}`,
      fontWeight: 'normal',
    },
  },
}));
