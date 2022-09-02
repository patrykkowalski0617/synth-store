import { styled } from '@mui/material/styles';

export const ProductPrice = styled('p')(() => ({
  '&::before': {
    content: "'$'",
  },
  margin: '10px 0 20px 0',
}));

export const ProductCardWrapper = styled('div')(() => ({
  padding: '10px',
  width: '100%',
  maxWidth: '320px',
  img: {
    display: 'block',
    maxWidth: '300px',
    width: '100%',
    height: 'auto',
    margin: '0 auto',
  },
}));

export const ProductCard = styled('div')(({ theme }) => ({
  border: `1px solid ${theme.customPalette.grey}`,
  padding: '10px 20px',
  height: '450px',
}));

export const ProductName = styled('div')(({ theme }) => ({
  height: 70,
  margin: '10px 0 0 0',
  span: {
    fontWeight: '700',
  },
}));

export const ProductCardFooter = `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;
