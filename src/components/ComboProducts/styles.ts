import styled, { css } from 'styled-components';

export const ComboProducts = styled.div`
  ${({ theme }) => css`
    width: 100%;
    min-height: 19rem;
    padding-left: 1.4rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-radius: 0.8rem;
    overflow: hidden;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    margin-right: 4rem;
    h2 {
      font-size: 3.4rem;
      font-weight: ${theme.fonts.lg};
      color: ${theme.colors.title};

      margin-bottom: 1.1rem;
    }

    p {
      font-size: 1.2rem;
      font-weight: ${theme.fonts.md};
      color: ${theme.colors.subTitle};
      margin-bottom: 0.4rem;
    }

    span {
      font-size: 3.2rem;
      font-weight: ${theme.fonts.lg};
      color: ${theme.colors.bg};
    }
  `}
`;

export const ImgBanner = styled.div`
  ${({ theme }) => css`
    height: 100%;
    width: 13.2rem;
    background-color: ${theme.colors.bg};
    display: flex;
    align-items: center;
    justify-content: flex-end;

    img {
      width: 16.7rem;
      height: 15.2rem;
    }
  `}
`;
