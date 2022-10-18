import styled, { css } from 'styled-components';

export const ItemCart = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
  `}
`;

export const ContainerTextAndImg = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1.3rem;
  `}
`;

export const ImgProduct = styled.img`
  ${({ theme }) => css`
    max-width: 8.5rem;
    height: 8.5rem;
    object-fit: cover;
    flex: 1;

    border-radius: 0.4rem;
  `}
`;

export const ContenText = styled.div`
  ${({ theme }) => css`
    span {
      font-size: 1.2rem;
      font-weight: ${theme.fonts.sm};
      color: ${theme.colors.subTitle};
      margin-bottom: 0.4rem;
    }

    h2 {
      font-size: 1.6rem;
      font-weight: ${theme.fonts.md};
      color: ${theme.colors.title};
      margin-bottom: 0.2rem;
    }

    p {
      font-size: 1.6rem;
      font-weight: ${theme.fonts.md};
      color: ${theme.colors.bg};
    }
  `}
`;

export const ContainerQuant = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.9rem;
    height: 4.2rem;

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

export const ContainerCheckoutType = styled.div`
  ${({ theme }) => css`
    p {
      color: ${theme.colors.bg};
      font-size: 1.6rem;
      font-weight: ${theme.fonts.lg};
      padding-left: 1rem;
    }

    span {
      color: ${theme.colors.bg};
      font-size: 1.2rem;
      font-weight: ${theme.fonts.md};
    }
  `}
`;
