import styled, { css } from 'styled-components';

export const NewAddress = styled.section`
  ${({ theme }) => css`
    max-width: 428px;
    height: 100vh;
    padding: 0 2.4rem 0 2.4rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0 auto;
  `}
`;

export const ContainerInput = styled.div`
  ${({ theme }) => css`
    margin-bottom: 2.4rem;

    label {
      display: block;
      margin-bottom: 0.8rem;
      font-size: 1.6rem;
      font-weight: ${theme.fonts.sm};
      color: ${theme.colors.title};
    }
  `}
`;

export const Form = styled.form`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
  `}
`;

export const FildErro = styled.p`
  ${({ theme }) => css`
    color: red;
    font-size: 1.5rem;
    font-weight: ${theme.fonts.md};
  `}
`;

export const ContainerRuaAndNumero = styled.div`
  ${({ theme }) => css`
    max-width: 428px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.4rem;
    margin-bottom: 2.4rem;
  `}
`;

export const InputsFlex = styled.input`
  ${({ theme }) => css`
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

export const Rua = styled.div`
  ${({ theme }) => css`
    label {
      display: block;
      margin-bottom: 0.8rem;
      font-size: 1.6rem;
      font-weight: ${theme.fonts.sm};
      color: ${theme.colors.title};
    }
  `}
`;

export const Numero = styled.div`
  ${({ theme }) => css`
    label {
      display: block;
      margin-bottom: 0.8rem;
      font-size: 1.6rem;
      font-weight: ${theme.fonts.sm};
      color: ${theme.colors.title};
    }
  `}
`;
