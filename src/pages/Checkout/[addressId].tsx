import { GetServerSideProps } from 'next';
import Link from 'next/link';

import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import { CreditCard, CurrencyCircleDollar, Money } from 'phosphor-react';
import { useContext, useState } from 'react';
import { api } from '../../api/axios';
import { AddressComponent } from '../../components/AddressComponent';
import { Button } from '../../components/Button';
import { ItemCart } from '../../components/cart/ItemCart';
import Input from '../../components/Input';
import { Navigation } from '../../components/Navigation';
import { Text } from '../../components/Text';

import { CartContext, CartType } from '../../context/CartContext';
import { THEME } from '../../styles/theme';
import { AllAddressType } from '../../types/query';
import { editPrice } from '../../utils/editPrice';
import { editTextAddress } from '../../utils/editTextAddress';
import * as styled from './styles';

type CheckoutProps = {
  data: AllAddressType;
};

type productsIdType = {
  id: string;
};

function productsId(cart: CartType[]) {
  const productsId: productsIdType[] = [];

  cart.map((item) => {
    productsId.push({ id: item.id });
  });

  return productsId;
}

export default function Checkout({ data }: CheckoutProps) {
  const [typeOfPayment, setTypeOfPayment] = useState<'money' | 'card'>('money');

  const [troco, setTroco] = useState('0');
  const { cart, clearCart, total } = useContext(CartContext);
  const { push } = useRouter();

  async function hadleCreateRequest() {
    await api.post('/requests/create', {
      total,
      shipping: 50,
      Thing: Number(troco),
      addressId: data.id,
      productsId: productsId(cart),
      typeOfPaymen: typeOfPayment,
    });

    await push('/Request');
    clearCart();
  }

  return (
    <styled.Checkout>
      <Navigation text={cart.length > 0 ? 'Checkout' : 'Nao ha items'} />

      {cart.length > 0 ? (
        <>
          <styled.TitleAddress>Endereço</styled.TitleAddress>

          <AddressComponent text={editTextAddress(data)} type="normal" />

          <styled.ContainerTypeOfPayment>
            <Text size="sm">Tipo de Pagamento</Text>
            <styled.ContainerGridTypeOfPayment>
              <styled.TypeOfPaymentMoney
                click={typeOfPayment}
                onClick={() => setTypeOfPayment('money')}
              >
                {typeOfPayment === 'money' ? (
                  <CurrencyCircleDollar size={20} color="#fff" />
                ) : (
                  <CurrencyCircleDollar size={20} color={THEME.colors.bg} />
                )}
                <Text size="lg">Dinheiro</Text>
              </styled.TypeOfPaymentMoney>
              <styled.TypeOfPaymentCard
                click={typeOfPayment}
                onClick={() => setTypeOfPayment('card')}
              >
                {typeOfPayment === 'card' ? (
                  <CreditCard size={20} color="#fff" />
                ) : (
                  <CreditCard size={20} color={THEME.colors.bg} />
                )}
                <Text size="lg">Cartão</Text>
              </styled.TypeOfPaymentCard>
            </styled.ContainerGridTypeOfPayment>
          </styled.ContainerTypeOfPayment>

          {typeOfPayment === 'money' && (
            <styled.ContainerThing>
              <Text size="lg">Troco para</Text>
              <Input.Root>
                <Input.Icon>
                  <Money />
                </Input.Icon>
                <Input.Input
                  type="number"
                  onChange={(e) => setTroco(e.target.value)}
                />
              </Input.Root>
            </styled.ContainerThing>
          )}

          <styled.ContainerProductsGrid>
            {cart.map((item) => (
              <div key={item.id}>
                <styled.LineProduct />
                <ItemCart
                  id={item.id}
                  type="Checkout"
                  quant={item.quant}
                  href={`/Product/${item.id}`}
                  imgProductUrl={item.urlProduct}
                  price={item.price}
                  title={item.title}
                  category={item.category}
                />
              </div>
            ))}
          </styled.ContainerProductsGrid>

          <styled.ContainerTotal>
            <styled.SubTotal>
              <Text>Subtotal</Text>

              <span>R$ {editPrice(total)}</span>
            </styled.SubTotal>
            <styled.Frete>
              <Text>Frete</Text>

              <Text>- -</Text>
            </styled.Frete>
            <styled.Line></styled.Line>
            <styled.Total>
              <Text>Total</Text>

              <span>R${editPrice(total)}</span>
            </styled.Total>

            <Button onClick={hadleCreateRequest}>Fazer pedido</Button>
          </styled.ContainerTotal>
        </>
      ) : (
        <styled.NotItem>
          <Link href={'/'}>
            <a>
              <Button>Voltar ao inicio</Button>
            </a>
          </Link>
        </styled.NotItem>
      )}
    </styled.Checkout>
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
    const response = await api.get(
      `/address/readOne/${ctx.params?.addressId}`,
      {
        headers: { authorization: authUser },
      }
    );

    return {
      props: {
        data: response.data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
};
