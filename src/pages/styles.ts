import styled, { css } from 'styled-components';

export const Home = styled.section`
  ${({ theme }) => css`
    max-width: 428px;
    height: 100vh;
    padding: 0 2.4rem 0 2.4rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0 auto;
    position: relative;
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
  `}
`;

export const ContainerHeading = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 7rem;
  `}
`;

export const Heading = styled.h1`
  ${({ theme }) => css`
    font-size: 2.4rem;
    font-weight: ${theme.fonts.md};
    color: ${theme.colors.title};
    margin-bottom: 0.8rem;
  `}
`;

export const SubTitle = styled.p`
  ${({ theme }) => css`
    font-size: 1.6rem;
    font-weight: ${theme.fonts.sm};
    color: ${theme.colors.subTitle};
    width: 100%;
    text-align: left;
  `}
`;

export const Search = styled.input`
  ${({ theme }) => css`
    flex: 1;
    padding: 2rem 2rem;
    outline: none;
    border: 0 none;

    font-size: 1.6rem;
    font-weight: ${theme.fonts.sm};
    color: ${theme.colors.subTitle};
  `}
`;

export const ContainerSearch = styled.div`
  ${({ theme }) => css`
    width: 100%;

    margin-top: 2.7rem;
    margin-bottom: 3rem;
  `}
`;

export const ContainerProducts = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.4rem;
    margin-top: 2.4rem;
  `}
`;

export const NotFundPage = styled.section`
  ${({ theme }) => css`
    max-width: 428px;
    height: 100vh;
    padding: 0 2.4rem 0 2.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    h1 {
      font-size: 2.6rem;
      font-weight: ${theme.fonts.lg};
      color: ${theme.colors.bg};
      margin-bottom: 2.4rem;
    }

    a {
      width: 100%;
    }
  `}
`;
