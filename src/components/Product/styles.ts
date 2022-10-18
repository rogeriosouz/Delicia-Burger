import styled, { css } from 'styled-components';

export const Product = styled.div`
  ${({ theme }) => css`
    max-width: 17.8rem;
    min-height: 17.8rem;
    border-radius: 0.8rem;
  `}
`;

export const ContainerBanner = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 11.5rem;
    text-align: center;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  `}
`;
export const BanerImg = styled.img`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    border-radius: 0.4rem;
    object-fit: cover;
  `}
`;

export const Category = styled.span`
  ${({ theme }) => css`
    font-size: 1.2rem;
    font-weight: ${theme.fonts.md};
    color: ${theme.colors.title};
    margin-bottom: 0.3rem;
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: 1.8rem;
    font-weight: ${theme.fonts.lg};
    color: ${theme.colors.title};
    margin-bottom: 0.3rem;
  `}
`;

export const Price = styled.p`
  ${({ theme }) => css`
    font-size: 1.5rem;
    font-weight: ${theme.fonts.md};
    color: ${theme.colors.bg};
  `}
`;
