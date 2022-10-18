import styled, { css } from 'styled-components';

export const ContainerLine = styled.div`
  ${({ theme }) => css`
    width: 100%;
  `}
`;

type LineProps = {
  aling: 'center' | 'left' | 'rigth';
};

export const Line = styled.div<LineProps>`
  ${({ theme, aling }) => css`
    height: 0.1rem;

    ${aling === 'center' &&
    css`
      margin: auto;
    `}

    ${aling === 'left' &&
    css`
      margin-right: auto;
    `}

    ${aling === 'rigth' &&
    css`
      margin-left: auto;
    `}

    margin-bottom: 5.6rem;
  `}
`;
