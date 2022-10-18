import styled, { css } from 'styled-components';

export const ContainerButton = styled.button`
  ${({ theme }) => css`
    width: 100%;
    min-height: 6.1rem;
    font-size: 1.6rem;
    border-radius: 0.4rem;
    font-weight: ${theme.fonts.md};
    background-color: ${theme.colors.bg};

    color: ${theme.colors.text_white};
  `}
`;
