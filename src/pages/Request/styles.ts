import styled, { css } from 'styled-components';

export const Request = styled.section`
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
