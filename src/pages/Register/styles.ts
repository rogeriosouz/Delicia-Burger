import styled, { css } from 'styled-components';

export const Register = styled.section`
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

export const Title = styled.h1`
  ${({ theme }) => css`
    font-weight: ${theme.fonts.sm};
    font-size: 3.6rem;
    color: ${theme.colors.title};
    font-family: 'Calistoga', 'Inter', sans-serif;
    margin-bottom: 4rem;
    text-align: center;
  `}
`;

export const SubTitle = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.fonts.sm};
    font-size: 1.8rem;
    color: ${theme.colors.title};
    max-width: 23.3rem;
    margin: 0 auto;
    margin-bottom: 4rem;
    text-align: center;
  `}
`;

export const Form = styled.form`
  ${({ theme }) => css`
    margin-bottom: 4.8rem;
  `}
`;

export const ContainerInputs = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-bottom: 3.2rem;
  `}
`;

export const Span = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.bg};
  `}
`;

export const LinkCadastro = styled.a`
  ${({ theme }) => css`
    font-size: 1.6rem;
    font-weight: ${theme.fonts.md};
    color: ${theme.colors.title};
    text-align: center;
  `}
`;

export const FildErro = styled.p`
  ${({ theme }) => css`
    color: red;
    font-size: 1.5rem;
    font-weight: ${theme.fonts.md};
  `}
`;
