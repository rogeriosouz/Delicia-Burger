import styled, { css } from 'styled-components';

export const RequestOne = styled.section`
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

export const LineProduct = styled.div`
  ${({ theme }) => css`
    background-color: #1b1b1b1a;
    width: 100%;

    height: 0.1rem;

    margin: 1rem 0 2.1rem 0;
  `}
`;

export const Envio = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 1.7rem 2.4rem;
    background-color: #f1f3f8;

    margin-bottom: 2.5rem;
    p {
      color: #758cbd;
      font-size: 1.6rem;
      font-weight: ${theme.fonts.md};
      margin-bottom: 1.6rem;
    }

    span {
      color: ${theme.colors.subTitle};
      font-size: 1rem;
      font-weight: ${theme.fonts.sm};
    }
  `}
`;

export const PorcetagemEnvio = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 0.8rem;
    border-radius: 0.8rem;
    background-color: #e2e6ed;
    position: relative;
    margin-bottom: 0.8rem;
  `}
`;

export const ContentPorcetagem = styled.div`
  ${({ theme }) => css`
    position: absolute;
    background-color: #758cbd;
    border-radius: 0.8rem;
    height: 100%;
    transition: all 300ms ease-in-out;
  `}
`;

export const ContentDateAndQuant = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 2.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;
  `}
`;

export const TypeRequest = styled.div`
  ${({ theme }) => css`
    width: 7.8rem;
    height: 100%;
    border-radius: 0.4rem;
    font-size: 1.1rem;
    color: #758cbd;
    font-weight: ${theme.fonts.md};
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f1f3f8;
  `}
`;

export const ContentTypeRequestAndQuant = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    height: 100%;
    gap: 1.9rem;
    margin-bottom: 2.4rem;
  `}
`;

export const Products = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.4rem;
    margin-bottom: 2.4rem;
  `}
`;
type TypeOfPaymentMoneyAndCard = {
  click: string;
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
        `
      : ''}

    p {
      font-weight: ${theme.fonts.md};
      font-size: 1.6rem;
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

export const ContainerTypeOfPayment = styled.div`
  ${({ theme }) => css`
    margin-top: 0.8rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 2.4rem;
  `}
`;

export const ContainerGridTypeOfPayment = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 2.4rem;
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

    ${click === 'card'
      ? css`
          background-color: ${theme.colors.bg};
        `
      : ''}

    p {
      font-weight: ${theme.fonts.md};
      font-size: 1.6rem;
      margin: 0;
      color: ${click === 'card'
        ? css`
            ${theme.colors.text_white}
          `
        : css`
            ${theme.colors.title}
          `};
    } ;
  `}
`;

export const Thing = styled.div`
  ${({ theme }) => css`
    margin-top: 0.8rem;
    height: 6.1rem;
    width: 100%;
    background-color: #f9f9fb;
    padding-left: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 0.4rem;
  `}
`;

export const ContainerTotal = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 0.2rem;
    margin-top: 2.4rem;
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
