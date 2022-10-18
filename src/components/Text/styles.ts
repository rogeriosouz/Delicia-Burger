import styled, { css } from 'styled-components';

interface TextProps {
  size: 'sm' | 'md' | 'lg';
  color?: 'title' | 'subTitle';
}

export const Text = styled.p<TextProps>`
  ${({ theme, size, color }) => css`
    font-weight: ${theme.fonts.md};

    ${color === 'title'
      ? css`
          color: ${theme.colors.title};
        `
      : css`
          color: ${theme.colors.subTitle};
        `}

    ${size === 'sm' &&
    css`
      font-size: 1.2rem;
    `}
    ${size === 'md' &&
    css`
      font-size: 1.6rem;
    `}
    ${size === 'lg' &&
    css`
      font-size: 1.8rem;
    `}
  `}
`;
