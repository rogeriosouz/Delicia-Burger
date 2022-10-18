import styled, { css } from 'styled-components';

export const Checkout = styled.section`
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

export const TitleAddress = styled.p`
  ${({ theme }) => css`
    font-size: 1.6rem;
    font-weight: ${theme.fonts.sm};
    color: ${theme.colors.title};
    margin-bottom: 0.8rem;
  `}
`;

export const ContainerTypeOfPayment = styled.div`
  ${({ theme }) => css`
    margin-top: 2.4rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 2.4rem;

    p {
      font-size: 1.6rem;
      font-weight: ${theme.fonts.sm};
      color: ${theme.colors.title};
      margin-bottom: 0.8rem;
    }
  `}
`;
export const ContainerGridTypeOfPayment = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 2.4rem;
  `}
`;

type TypeOfPaymentMoneyAndCard = {
  click: 'money' | 'card' | null;
};

export const TypeOfPaymentMoney = styled.div<TypeOfPaymentMoneyAndCard>`
  ${({ theme, click }) => css`
    display: flex;
    align-items: center;

    padding-left: 2.2rem;
    border-radius: 0.4rem;
    gap: 3rem;
    width: 100%;
    height: 6.1rem;

    ${click === 'money'
      ? css`
          background-color: ${theme.colors.bg};
          p {
            color: ${theme.colors.text_white};
          }
        `
      : ''}

    p {
      font-weight: ${theme.fonts.md};
      font-size: 1.6rem;
      margin: 0;
      color: ${click === 'money'
        ? css`
            ${theme.colors.text_white}
          `
        : css`
            ${theme.colors.title}
          `};
    }
  `}
`;

export const TypeOfPaymentCard = styled.div<TypeOfPaymentMoneyAndCard>`
  ${({ theme, click }) => css`
    display: flex;
    align-items: center;
    padding-left: 2.2rem;
    border-radius: 0.4rem;
    gap: 3rem;
    width: 100%;
    height: 6.1rem;

    ${
      click === 'card'
        ? css`
            background-color: ${theme.colors.bg};
          `
        : ''
    }

    p {
      font-weight: ${theme.fonts.md};
      font-size: 1.6rem;
      margin: 0;
      color: ${
        click === 'card'
          ? css`
              ${theme.colors.text_white}
            `
          : css`
              ${theme.colors.title}
            `
      }
  
    };
      
    }
  `}
`;

export const ContainerThing = styled.div`
  ${({ theme }) => css`
    margin-bottom: 2.4rem;
    p {
      margin-bottom: 0.8rem;
      font-size: 1.6rem;
      font-weight: ${theme.fonts.sm};
      color: ${theme.colors.title};
    }
  `}
`;

export const Thing = styled.input`
  ${({ theme }) => css`
    width: 100%;
    height: 6.1rem;
    border-radius: ;
    padding-left: 1.6rem;
  `}
`;

export const ContainerProductsGrid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.3rem;
    margin-bottom: 5.7rem;
  `}
`;

export const ContainerTotal = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 0.2rem;
  `}
`;

export const SubTotal = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2.4rem;

    p {
      font-size: 1.6rem;
      font-weight: ${theme.fonts.sm};
      color: ${theme.colors.title};
    }

    span {
      font-size: 1.6rem;
      font-weight: ${theme.fonts.md};
      color: ${theme.colors.title};
    }
  `}
`;

export const Frete = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2.5rem;

    p {
      font-size: 1.6rem;
      font-weight: ${theme.fonts.sm};
      color: ${theme.colors.title};
    }

    span {
      font-size: 1.6rem;
      font-weight: ${theme.fonts.md};
      color: ${theme.colors.title};
    }
  `}
`;

export const Line = styled.div`
  ${({ theme }) => css`
    width: 100%;

    height: 0.1rem;
    background-color: ${theme.colors.bg};
    margin-bottom: 2.9rem;
  `}
`;

export const Total = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4.5rem;

    p {
      font-size: 1.6rem;
      font-weight: ${theme.fonts.sm};
      color: ${theme.colors.title};
    }

    span {
      font-size: 2.4rem;
      font-weight: ${theme.fonts.md};
      color: ${theme.colors.bg};
    }
  `}
`;

export const InputTroco = styled.input`
  ${({ theme }) => css`
    width: 100%;
    padding: 2.2rem 1.6rem;

    font-size: 1.6rem;
    border-radius: 0.4rem;
    color: ${theme.colors.subTitle};
    border: 1px solid #fff;

    &:focus {
      border: 1px solid ${theme.colors.bg};
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

export const LineProduct = styled.div`
  ${({ theme }) => css`
    background-color: #1b1b1b1a;
    width: 100%;

    height: 0.1rem;

    margin: 1.2rem 0 1.2rem 0;
  `}
`;

export const NotItem = styled.div`
  ${({ theme }) => css`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    a {
      width: 100%;
    }
  `}
`;
