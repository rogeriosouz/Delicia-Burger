import { GetStaticProps } from 'next';
import { List, MagnifyingGlass } from 'phosphor-react';
import { useState } from 'react';
import { api } from '../api/axios';
import { ComboProducts } from '../components/ComboProducts';

import Input from '../components/Input';
import { Menu } from '../components/Menu';
import { ModelSearch } from '../components/ModelSearch';
import { Product } from '../components/Product';
import { THEME } from '../styles/theme';
import type { AllProductsType } from '../types/query';
import * as styled from './styles';

type HomeProps = {
  data: AllProductsType[];
};

export default function Home({ data }: HomeProps) {
  const [menu, setMenu] = useState(false);
  const [inputSearch, setInputSearch] = useState('');

  return (
    <styled.Home>
      <styled.Header>
        <styled.ContainerHeading>
          <styled.Heading>Seja Bem-Vindo</styled.Heading>
          <List
            onClick={() => setMenu((v) => !v)}
            size={28}
            weight="thin"
            color={THEME.colors.bg}
          />
        </styled.ContainerHeading>
        <styled.SubTitle>O que deseja pra hoje?</styled.SubTitle>
        <Menu visible={menu} setVisible={setMenu} />
      </styled.Header>
      <styled.ContainerSearch>
        <Input.Root>
          <Input.Icon>
            <MagnifyingGlass />
          </Input.Icon>
          <Input.Input
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
            placeholder="Digite o nome do Burger"
          />
        </Input.Root>
        <ModelSearch data={data} msgInput={inputSearch} />
      </styled.ContainerSearch>

      <ComboProducts
        price={28.88}
        bannerUrl={'../../Card-burger-2 3.png'}
        subTitle={'1 Burguer + 1 Refrigerante ( 300ml )'}
        title={'Combo 1'}
      />

      <styled.ContainerProducts>
        {data?.map((item) => (
          <Product
            key={item.id}
            href={`/Product/${item.id}`}
            banerUrl={item.productUrl}
            title={item.name}
            price={item.price}
            category={item.Category.name}
          />
        ))}
      </styled.ContainerProducts>
    </styled.Home>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await api.get('/products');

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
