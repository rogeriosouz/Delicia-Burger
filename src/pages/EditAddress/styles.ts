import styled, { css } from 'styled-components';

export const EditAddress = styled.section`
  ${({ theme }) => css`
    max-width: 428px;
    height: 100vh;
    padding: 0 2.4rem 0 2.4rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0 auto;
    margin-bottom: 3rem;
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

export const FildErro = styled.p`
  ${({ theme }) => css`
    color: red;
    font-size: 1.5rem;
    font-weight: ${theme.fonts.md};
  `}
`;

export const Form = styled.form`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
  `}
`;

export const ContainerRuaAndNumero = styled.div`
  ${({ theme }) => css`
    width: 100%;

    display: flex;
    align-items: flex-start;
    gap: 2.4rem;
    margin-bottom: 2.4rem;
  `}
`;

export const Rua = styled.div`
  ${({ theme }) => css`
    width: 50%;

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
    width: calc(50% - 2.4rem);
  `}
`;
