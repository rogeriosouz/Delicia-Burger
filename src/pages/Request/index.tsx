import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { api } from '../../api/axios';
import { ComponentRequest } from '../../components/ComponentRequest';
import { Navigation } from '../../components/Navigation';
import { AllRequestsType } from '../../types/query';
import { editDate } from '../../utils/requestsUtils/editDate';
import { editTitle } from '../../utils/requestsUtils/editTitle';
import * as styled from './styles';

type RequestProps = {
  data: AllRequestsType[];
};

export default function Request({ data }: RequestProps) {
  return (
    <styled.Request>
      <Navigation text="Meus Pedidos" />
      {data.map((item) => (
        <ComponentRequest
          key={item.id}
          type="entrege"
          total={item.total}
          title={`Pedido #${editTitle(item.createdAt)}`}
          date={editDate(item.createdAt)}
          linkHref={`/Request/${item.id}`}
        />
      ))}
    </styled.Request>
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
    const response = await api.get('/requests/all', {
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
      props: {
        data: [],
      },
    };
  }
};
