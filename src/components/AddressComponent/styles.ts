import styled, { css } from 'styled-components';

type AddressComponentProps = {
  type?: 'edit' | 'normal' | 'none';
};

export const AddressComponent = styled.div<AddressComponentProps>`
  ${({ theme, type }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: 6.1rem;
    position: relative;

    ${type === 'edit'
      ? css`
          background-color: transparent;
          padding: 0;
        `
      : css`
          background-color: #f9f9fb;
          padding: 0 1.4rem 0 1.4rem;
        `}

    border-radius: 0.4rem;
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.title};
    font-size: 1.5rem;
    font-weight: ${theme.fonts.md};
  `}
`;

export const ContainerIcon = styled.div`
  ${({ theme }) => css`
    width: 4.8rem;
    height: 4.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.4rem;
    background-color: ${theme.colors.text_white};
  `}
`;

type ModelAddressComponentProps = {
  visible: boolean;
};

export const ModelAddressComponent = styled.div<ModelAddressComponentProps>`
  ${({ theme, visible }) => css`
    width: 14.5rem;
    height: 11rem;

    ${visible
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}

    position: absolute;
    box-shadow: 4px 3px 5px 0px #0000001c;
    z-index: 10;

    left: calc(100% - 13.5rem);
    top: 100%;
    background-color: #fff;
    padding: 2.4rem 0 2.4rem 0;
    border-radius: 0.4rem;

    div {
      a {
        cursor: pointer;
        text-decoration: none;
        ${visible
          ? css`
              display: flex;
            `
          : css`
              display: none;
            `}
        width: 100%;
        align-items: center;
        padding-left: 2.2rem;

        gap: 1.9rem;
        margin-bottom: 2.1rem;

        p {
          font-size: 1.6rem;
          font-weight: ${theme.fonts.sm};
          color: ${theme.colors.title};
        }
      }
    }
  `}
`;
