import styled, { css } from 'styled-components';

export const Address = styled.section`
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

export const ContainerAddresComponent = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-bottom: 4.1rem;
  `}
`;
