import styled, { css } from 'styled-components';

type ModelSearchProps = {
  visible: Boolean;
};

export const ModelSearch = styled.section<ModelSearchProps>`
  ${({ theme, visible }) => css`
    background-color: #fff;

    ${visible
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}

    position: absolute;
    left: 0;
    right: 0;
    top: 24rem;
    height: 100%;
    min-height: min-content;
    padding: 0 2.4rem 0 2.4rem;
  `}
`;

export const Search = styled.p`
  ${({ theme }) => css`
    margin-top: 5rem;
    margin-bottom: 2rem;
    color: ${theme.colors.subTitle};
    font-size: 1.6rem;
    font-weight: ${theme.colors.md};
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

export const NotFound = styled.p`
  ${({ theme }) => css`
    text-align: center;
    width: 25.4rem;
    margin: 0 auto;
    margin-top: 25.6rem;
    font-size: 2.4rem;
    font-weight: ${theme.colors.md};
    color: #cdcdcd;
  `}
`;
