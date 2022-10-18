import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { parseCookies } from 'nookies';
import { api } from '../../api/axios';
import { AddressComponent } from '../../components/AddressComponent';
import { Button } from '../../components/Button';
import { Navigation } from '../../components/Navigation';
import { AllAddressType } from '../../types/query';
import { editTextAddress } from '../../utils/editTextAddress';
import * as styled from './styles';

type AddressProps = {
  data: AllAddressType[];
};

export default function Address({ data }: AddressProps) {
  return (
    <styled.Address>
      <Navigation text="Meus Endereços" />

      {data.map((item) => (
        <styled.ContainerAddresComponent key={item.id}>
          <AddressComponent
            id={item.id}
            hrefEdit={`/EditAddress/${item.id}`}
            text={editTextAddress(item)}
            type="edit"
          />
        </styled.ContainerAddresComponent>
      ))}

      <Link href={'/NewAddress'}>
        <a>
          <Button>Novo Endereço</Button>
        </a>
      </Link>
    </styled.Address>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { authUser } = parseCookies(ctx);

  if (!authUser) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  try {
    const response = await api.get('/address', {
      headers: { authorization: authUser },
    });

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
