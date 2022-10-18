import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { parseCookies } from 'nookies';
import { useContext } from 'react';
import { api } from '../../api/axios';
import { Button } from '../../components/Button';
import { ItemCart } from '../../components/cart/ItemCart';
import { Navigation } from '../../components/Navigation';
import { CartContext } from '../../context/CartContext';
import { editPrice } from '../../utils/editPrice';
import * as styled from './styles';

interface CartProps {
  idAddres: string;
}

export default function Cart({ idAddres }: CartProps) {
  const { cart, total, QuantItems } = useContext(CartContext);

  async function hedleQuantProductsCreate() {
    cart.map(async (item) => {
      await api.put(`/product/updateQuant/${item.id}`, {
        quant: item.quant,
      });
    });
  }

  return (
    <styled.Cart>
      <Navigation text={cart.length > 0 ? 'Sacola' : 'Nao ha items'} />
      {cart.length > 0 ? (
        <>
          <styled.TotalItems>{QuantItems} items</styled.TotalItems>

          <styled.Products>
            {cart.map((item, index) => {
              return (
                <ItemCart
                  quant={item.quant}
                  key={item.id}
                  id={item.id}
                  index={index}
                  href={`/Product/${item.id}`}
                  title={item.title}
                  price={item.price}
                  imgProductUrl={item.urlProduct}
                  category={item.category}
                />
              );
            })}
          </styled.Products>

          <styled.ContainerTotal>
            <styled.SubTotal>
              <p>Subtotal</p>
              <span>R$ {editPrice(total)}</span>
            </styled.SubTotal>
            <styled.Frete>
              <p>Frete</p>
              <span>- -</span>
            </styled.Frete>
            <styled.Line></styled.Line>
            <styled.Total>
              <p>Total</p>
              <span>R${editPrice(total)}</span>
            </styled.Total>
            <Link href={`/Checkout/${idAddres}`}>
              <a>
                <Button onClick={hedleQuantProductsCreate}>Continuar</Button>
              </a>
            </Link>
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
    </styled.Cart>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const { authUser } = parseCookies(ctx);

    if (!authUser) {
      return {
        redirect: {
          destination: '/Login',
          permanent: false,
        },
      };
    }

    const response = await api.get('/address', {
      headers: { authorization: authUser },
    });

    if (!response.data[0]) {
      return {
        redirect: {
          destination: '/NewAddress',
          permanent: false,
        },
      };
    }

    return {
      props: {
        idAddres: response.data[0].id,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
};
