import styled, { css } from 'styled-components';

export const ComponentRequest = styled.div`
  ${({ theme }) => css`
    width: 100%;
    min-height: 15.6rem;
    padding: 2.2rem;

    margin-bottom: 2.4rem;
  `}
`;

type TitleContainerProps = {
  type: 'enviado' | 'entrege';
};

export const TitleContainer = styled.div<TitleContainerProps>`
  ${({ theme, type }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 1.2rem;
    margin-bottom: 0.8rem;

    h2 {
      font-size: 2rem;
      font-weight: ${theme.fonts.md};
      color: ${theme.colors.title};
    }

    p {
      color: ${type === 'enviado' ? '#4f77be' : '#6AB70A'};
      font-size: 1.3rem;
      font-weight: ${theme.fonts.md};
    }
  `}
`;

export const Date = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.subTilte};
    font-size: 1.3rem;
    font-weight: ${theme.fonts.md};
    margin-bottom: 2.1rem;
  `}
`;

export const TotalPrice = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const LinkRequest = styled.a`
  ${({ theme }) => css`
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 0.5rem;
    border: 1px solid ${theme.colors.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  `}
`;

export const Price = styled.div`
  ${({ theme }) => css`
    span {
      color: ${theme.colors.subTilte};
      font-size: 1.3rem;
      font-weight: ${theme.fonts.sm};
    }

    p {
      font-size: 2rem;
      font-weight: ${theme.fonts.md};
      color: ${theme.colors.bg};
    }
  `}
`;
