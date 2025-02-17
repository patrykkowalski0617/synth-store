import { Components, Theme } from '@mui/material/styles';

const components: Components<Omit<Theme, 'components'>> = {
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'none',
        fontWeight: 'bold',
        padding: '10px 20px',
        borderRadius: '8px',
        '&:hover': {
          backgroundColor: '#b03804',
        },
      },
    },
  },
};

export default components;
