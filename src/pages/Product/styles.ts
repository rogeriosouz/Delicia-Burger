import styled, { css } from 'styled-components';

export const Produto = styled.section`
  ${({ theme }) => css`
    max-width: 428px;
    padding: 0 2.4rem 0 2.4rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0 auto;
    margin-bottom: 3rem;
  `};
`;

export const TopContaioner = styled.div`
  ${({ theme }) => css`
    height: 38.3rem;
    background-color: ${theme.colors.bg};
    padding: 6.4rem 2.4rem 0 2.4rem;
    margin-bottom: 7.7rem;
  `}
`;

export const Navigation = styled.nav`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
  `};
`;

export const ContainerTextNavigation = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: 4.8rem;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  `};
`;

export const ImgBanner = styled.img`
  ${({ theme }) => css`
    width: 31.9rem;
    height: 28.2rem;
    margin: auto;
    object-fit: cover;
    margin-top: 5.3rem;
    border-radius: 0.4rem;
  `}
`;

export const BackIcon = styled.button`
  ${({ theme }) => css`
    width: 4.8rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.bg_black};
    border-radius: 0.5rem;
  `};
`;

export const LoveIcon = styled.button`
  ${({ theme }) => css`
    width: 4.8rem;
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;
    background-color: ${theme.colors.bg_black};
    border-radius: 0.5rem;
  `};
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 2.4rem;
    font-weight: ${theme.fonts.md};
    color: ${theme.colors.text_white};
  `}
`;

export const Category = styled.p`
  ${({ theme }) => css`
    font-size: 1.6rem;
    font-weight: ${theme.fonts.md};
    color: ${theme.colors.title};
    margin-bottom: 0.5rem;
  `}
`;

export const TlitleProduct = styled.h2`
  ${({ theme }) => css`
    font-size: 4rem;
    font-weight: ${theme.fonts.md};
    color: ${theme.colors.title};
    margin-bottom: 2.4rem;
  `}
`;

export const Line = styled.div`
  ${({ theme }) => css`
    max-width: 28rem;
    height: 0.1rem;
    background-color: ${theme.colors.bg};
    margin-bottom: 2.4rem;
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: 1.6rem;
    font-weight: ${theme.fonts.sm};
    color: ${theme.colors.subTitle};
    margin-bottom: 3.2rem;
  `}
`;

export const TitleQuant = styled.p`
  ${({ theme }) => css`
    font-size: 1.6rem;
    font-weight: ${theme.fonts.sm};
    color: ${theme.colors.title};
    margin-bottom: 1.6rem;
  `}
`;

export const ContainerQuantPrice = styled.div`
  ${({ theme }) => css`
    height: 4.8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5rem;
  `}
`;

export const ContainerQuant = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.9rem;
    height: 100%;

    border-radius: 0.4rem;
    overflow: hidden;
  `}
`;

export const AddQuant = styled.button`
  ${({ theme }) => css`
    height: 100%;
    width: 4.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.bg};
  `}
`;

export const Less = styled.button`
  ${({ theme }) => css`
    height: 100%;
    font-size: 2rem;

    width: 4.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const NumberQuant = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.bg};
    font-size: 1.8rem;
    font-weight: ${theme.fonts.lg};
  `};
`;

export const Price = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.fonts.md};
    font-size: 4rem;
    color: ${theme.colors.bg};
  `}
`;
