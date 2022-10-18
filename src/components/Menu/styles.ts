import styled, { css } from 'styled-components';

type MenuProps = {
  visible: boolean;
};

export const Menu = styled.div<MenuProps>`
  ${({ theme, visible }) => css`
    ${visible
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}

    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    padding-top: 7.4rem;
    background-color: #fff;
    z-index: 10;
    bottom: 100%;
  `}
`;

export const Navigation = styled.nav`
  ${({ theme }) => css`
    width: 100%;
    padding: 4.8rem 2.4rem 0 6.8rem;
    margin: 0 auto;
  `}
`;

export const LinkNavigation = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 2.3rem;
    margin-bottom: 4.7rem;

    p {
      font-size: 1.6rem;
      font-weight: ${theme.fonts.sm};
      color: ${theme.colors.subtitle};
    }
  `}
`;
export const ButtonClose = styled.button`
  ${({ theme }) => css`
    font-size: 2.4rem;
    color: ${theme.colors.bg};
    background-color: #fff;
  `}
`;

export const UserContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 0 2.4rem 0 6.8rem;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 2.4rem;
      font-weight: ${theme.fonts.md};
      color: ${theme.colors.title};
      margin-bottom: 0.8rem;
    }
  `}
`;

export const SubTitleUser = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 0 2.4rem 0 6.8rem;
    margin: 0 auto;

    p {
      font-size: 1.6rem;
      font-weight: ${theme.fonts.sm};
      color: ${theme.colors.subTitle};
    }
  `}
`;

export const UserLogin = styled.a`
  ${({ theme }) => css`
    width: 22rem;
  `}
`;
