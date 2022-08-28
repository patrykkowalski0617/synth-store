import { styled } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';

export const NavWrapper = styled('div')(({ isOpen, theme }) => ({
  position: 'fixed',
  top: 56,
  right: `${isOpen ? '0' : '-100%'}`,
  width: '100%',
  bottom: 0,
  backgroundColor: `${blueGrey[900]}66`,
  transition: '.3s right',
  '& .MuiBox-root': {
    width: '70%',
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: `${isOpen ? '0' : '-100%'}`,
    backgroundColor: `${theme.palette.secondary.main}`,
    transition: '.3s left',
    paddingTop: '56px',
  },
}));

export const AppBarWrapper = styled('div')(({ isOpen, theme }) => ({}));
