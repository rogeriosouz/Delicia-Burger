import styled, { css } from 'styled-components';

type InputContainerProps = {
  typeInput: 'normal' | 'error';
};

export const InputRoot = styled.div<InputContainerProps>`
  ${({ theme, typeInput }) => css`
    width: 100%;
    padding: 2.2rem 1.6rem;
    height: 6rem;
    border-radius: 0.4rem;
    display: flex;
    align-items: center;
    gap: 2.6rem;

    background-color: ${theme.colors.white};

    ${typeInput === 'error'
      ? css`
          outline: 1px solid red;
        `
      : ''}

    &:focus-within {
      outline: 1px solid ${theme.colors.bg};
    }
  `}
`;

export const InputIcon = styled.div`
  ${({ theme }) => css`
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    color: ${theme.colors.bg};
  `}
`;

export const InputInput = styled.input`
  ${({ theme }) => css`
    width: 100%;
    font-size: 1.6rem;

    outline: none;
    border: 0 none;
    font-weight: ${theme.fonts.lg};
    color: ${theme.colors.subTitle};
    background-color: transparent;

    flex: 1;

    ::placeholder {
      color: ${theme.colors.subTitle};
      font-weight: ${theme.fonts.md};
    }
  `}
`;
