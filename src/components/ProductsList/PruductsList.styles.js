import { styled } from '@mui/material/styles';

export const ProductPrice = styled('p')(() => ({
  '&::before': {
    content: "'$'",
  },
}));

export const ProductsListWrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
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
  border: `1px solid ${theme.palette.grey}`,
  padding: '10px 20px',
  height: '450px',
}));

export const ProductName = `
  height: 50px;
  margin: 20px 0;
  font-size: ${({ theme }) => theme.fontSize.l};
  span {
    font-weight: bold;
  }
`;

export const ProductCardFooter = `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

// export const ProductPrice = `
//   font-size: ${({ theme }) => theme.fontSize.xl};
//   &::before {
//     content: '$';
//   }
// `;
