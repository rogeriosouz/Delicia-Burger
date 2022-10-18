import styled, { css } from 'styled-components';

export const ContainerNavigation = styled.nav`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 8rem;
    margin-bottom: 1.8rem;
    position: relative;
  `}
`;

export const Line = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 0.1rem;
    background-color: rgba(27, 27, 27, 0.1);
    margin-bottom: 3rem;
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    min-width: max-content;
    font-size: 2.4rem;
    font-weight: ${theme.fonts.md};
    color: ${theme.colors.title};
    position: absolute;
    left: 50%;
    bottom: 9%;
    transform: translateX(-50%);
  `}
`;
