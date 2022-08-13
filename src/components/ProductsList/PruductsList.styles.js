import styled from 'styled-components';

export const ProductsListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const ProductCard = styled.div`
  padding: 10px;
  width: 100%;
  max-width: 320px;
  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    max-width: 50%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    max-width: 33%;
  }
  img {
    display: block;
    max-width: 300px;
    width: 100%;
    height: auto;
    margin: 0 auto;
  }
`;

export const ProductCardInnerContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.grey};
  padding: 10px 20px;
  height: 450px;
`;

export const ProductName = styled.p`
  height: 50px;
  margin: 20px 0;
  font-size: ${({ theme }) => theme.fontSize.l};
  span {
    font-weight: bold;
  }
`;

export const ProductCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const CartButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 5px;
  padding: 5px 20px;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.l};
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    margin-right: 20px;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
`;

export const ProductPrice = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xl};
  &::before {
    content: '$';
  }
`;
