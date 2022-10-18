import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { ArrowLeft, Heart } from 'phosphor-react';
import { useContext, useEffect, useState } from 'react';
import { api } from '../../api/axios';
import { Button } from '../../components/Button';
import { CartContext } from '../../context/CartContext';
import { AllProductsType } from '../../types/query';
import { editPrice } from '../../utils/editPrice';
import { isEqualProduct } from '../../utils/isEqualProduct';
import * as styled from './styles';

type ProductProps = {
  data: AllProductsType;
};

export default function Product({ data }: ProductProps) {
  const { addCart } = useContext(CartContext);
  const [isClick, setIsClick] = useState(false);

  const { push, back } = useRouter();
  const { cart } = useContext(CartContext);

  useEffect(() => {
    const iqual = isEqualProduct(cart, data?.id as string);

    if (iqual) {
      setIsClick(true);
    } else {
      setIsClick(false);
    }
  }, []);

  function hadleAddCart() {
    addCart({
      category: data?.Category.name as string,
      id: data?.id as string,
      price: data?.price as number,
      quant: 1,
      title: data?.name as string,
      urlProduct: data?.productUrl as string,
    });

    return push('/Cart');
  }

  return (
    <>
      <styled.TopContaioner>
        <styled.Navigation>
          <styled.ContainerTextNavigation>
            <styled.BackIcon onClick={() => back()}>
              <ArrowLeft size={20} weight="thin" color={'#fff'} />
            </styled.BackIcon>

            <styled.Title>Produto</styled.Title>

            <styled.LoveIcon onClick={() => console.log('love')}>
              <Heart size={20} weight="thin" color="#fff" />
            </styled.LoveIcon>
          </styled.ContainerTextNavigation>

          <styled.ImgBanner src={data?.productUrl} alt={data?.name} />
        </styled.Navigation>
      </styled.TopContaioner>
      <styled.Produto>
        <styled.Category>Tradicional</styled.Category>

        <styled.TlitleProduct>{data?.name}</styled.TlitleProduct>

        <styled.Line />

        <styled.Description>{data?.description}</styled.Description>

        <styled.ContainerQuantPrice>
          <styled.Price>R$ {editPrice(data?.price)}</styled.Price>
        </styled.ContainerQuantPrice>

        {!isClick ? (
          <Button onClick={hadleAddCart}>Adicionar à sacola</Button>
        ) : (
          <Button onClick={() => push('/Cart')}>ir para o carinho</Button>
        )}
      </styled.Produto>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const response = await api.get(`/product/one/${params?.id}`);

    return {
      props: {
        data: response.data,
      },

      revalidate: 60 * 60 * 4, // 4 hours
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
