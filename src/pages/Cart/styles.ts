import styled, { css } from 'styled-components';

export const Cart = styled.section`
  ${({ theme }) => css`
    max-width: 428px;
    padding: 0 2.4rem 0 2.4rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0 auto;
    margin-bottom: 3rem;
  `}
`;

export const TotalItems = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.colors.sm};
    color: ${theme.colors.title};
    font-size: 1.6rem;
    margin-bottom: 3.2rem;
  `}
`;

export const Products = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.4rem;
    margin-bottom: 5.7rem;
  `}
`;

export const ContainerTotal = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 0.2rem;
  `}
`;

export const SubTotal = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2.4rem;

    p {
      font-size: 1.6rem;
      font-weight: ${theme.fonts.sm};
      color: ${theme.colors.title};
    }

    span {
      font-size: 1.6rem;
      font-weight: ${theme.fonts.md};
      color: ${theme.colors.title};
    }
  `}
`;

export const Frete = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2.5rem;

    p {
      font-size: 1.6rem;
      font-weight: ${theme.fonts.sm};
      color: ${theme.colors.title};
    }

    span {
      font-size: 1.6rem;
      font-weight: ${theme.fonts.md};
      color: ${theme.colors.title};
    }
  `}
`;

export const Line = styled.div`
  ${({ theme }) => css`
    width: 100%;

    height: 0.1rem;
    background-color: ${theme.colors.bg};
    margin-bottom: 2.9rem;
  `}
`;

export const Total = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4.5rem;

    p {
      font-size: 1.6rem;
      font-weight: ${theme.fonts.sm};
      color: ${theme.colors.title};
    }

    span {
      font-size: 2.4rem;
      font-weight: ${theme.fonts.md};
      color: ${theme.colors.bg};
    }
  `}
`;

export const NotItem = styled.div`
  ${({ theme }) => css`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    a {
      width: 100%;
    }
  `}
`;
