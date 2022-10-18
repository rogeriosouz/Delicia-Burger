import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { CreditCard, CurrencyCircleDollar } from 'phosphor-react';
import { api } from '../../api/axios';
import { AddressComponent } from '../../components/AddressComponent';
import { ItemCart } from '../../components/cart/ItemCart';
import { Navigation } from '../../components/Navigation';
import { Text } from '../../components/Text';
import { THEME } from '../../styles/theme';
import { AllRequestsType } from '../../types/query';
import { editPrice } from '../../utils/editPrice';
import { editTextAddress } from '../../utils/editTextAddress';
import { editDate } from '../../utils/requestsUtils/editDate';
import { editTitle } from '../../utils/requestsUtils/editTitle';
import * as styled from './stylesOne';

type RequestProps = {
  data: AllRequestsType;
};

export default function Request({ data }: RequestProps) {
  return (
    <styled.RequestOne>
      <Navigation text={`Pedido #${editTitle(data.createdAt)}`} />

      <styled.LineProduct />

      <styled.Envio>
        <p>Preparando o seu pedido...</p>

        <styled.PorcetagemEnvio>
          <styled.ContentPorcetagem style={{ width: '100%' }} />
        </styled.PorcetagemEnvio>

        <span>Aguardando mudança de status...</span>
      </styled.Envio>

      <styled.ContentDateAndQuant>
        <styled.ContentTypeRequestAndQuant>
          <styled.TypeRequest>Enviado</styled.TypeRequest>

          <Text>{data.products.length} itens</Text>
        </styled.ContentTypeRequestAndQuant>

        <Text size="md" color="subTitle">
          {editDate(data.createdAt)}
        </Text>
      </styled.ContentDateAndQuant>

      <styled.Products>
        <styled.LineProduct />
        {data.products.map((item) => (
          <ItemCart
            key={item.id}
            type="Checkout"
            imgProductUrl={item.productUrl}
            href={`/Product/${item.id}`}
            price={item.price}
            title={item.name}
            id={item.id}
            category={item.Category.name}
            quant={item.quant}
          />
        ))}
      </styled.Products>

      <Text size="md">Endereço</Text>
      <AddressComponent type="none" text={editTextAddress(data.Address)} />
      <styled.LineProduct />

      <Text size="md">Tipo de Pagamento</Text>
      <styled.ContainerTypeOfPayment>
        <styled.ContainerGridTypeOfPayment>
          <styled.TypeOfPaymentMoney click={data.typeOfPayment}>
            {data.typeOfPayment === 'money' ? (
              <CurrencyCircleDollar size={20} color="#fff" />
            ) : (
              <CurrencyCircleDollar size={20} color={THEME.colors.bg} />
            )}
            <Text size="md">Dinheiro</Text>
          </styled.TypeOfPaymentMoney>
          <styled.TypeOfPaymentCard click={data.typeOfPayment}>
            {data.typeOfPayment === 'card' ? (
              <CreditCard size={20} color="#fff" />
            ) : (
              <CreditCard size={20} color={THEME.colors.bg} />
            )}
            <Text size="md">Cartão</Text>
          </styled.TypeOfPaymentCard>
        </styled.ContainerGridTypeOfPayment>
      </styled.ContainerTypeOfPayment>

      {data.typeOfPayment === 'money' && (
        <>
          <Text size="md">Troco</Text>
          <styled.Thing>
            <Text size="md">R$ {data.Thing}</Text>
          </styled.Thing>
        </>
      )}

      <styled.ContainerTotal>
        <styled.SubTotal>
          <Text>Subtotal</Text>

          <span>R$ {editPrice(data.total)}</span>
        </styled.SubTotal>
        <styled.Frete>
          <Text>Frete</Text>

          <Text>- -</Text>
        </styled.Frete>
        <styled.Line></styled.Line>
        <styled.Total>
          <Text>Total</Text>

          <span>R${editPrice(data.total)}</span>
        </styled.Total>
      </styled.ContainerTotal>
    </styled.RequestOne>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { authUser } = parseCookies(ctx);

  if (!authUser) {
    return {
      redirect: {
        destination: '/Login',
        permanent: false,
      },
    };
  }

  try {
    const response = await api.get(`/requests/one/${ctx.params?.id}`, {
      headers: { authorization: authUser },
    });

    console.log(response.data);

    return {
      props: {
        data: response.data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        data: [],
      },
    };
  }
};
