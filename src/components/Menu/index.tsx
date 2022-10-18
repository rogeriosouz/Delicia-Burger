import Link from 'next/link';
import { Article, Bag, ForkKnife, GearSix, X } from 'phosphor-react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Button } from '../Button';
import { Line } from '../Line';
import { Text } from '../Text';

import * as styled from './styles';

type MenuProps = {
  visible: boolean;
  setVisible: any;
};

export function Menu({ visible, setVisible }: MenuProps) {
  const { isAuthenticated, user } = useContext(AuthContext);

  return (
    <styled.Menu visible={visible}>
      {isAuthenticated ? (
        <>
          <styled.UserContainer>
            <h1>{user?.name}</h1>

            <styled.ButtonClose onClick={() => setVisible((v: any) => !v)}>
              <X />
            </styled.ButtonClose>
          </styled.UserContainer>
          <styled.SubTitleUser>
            <Text>{user?.email}</Text>
          </styled.SubTitleUser>
        </>
      ) : (
        <styled.UserContainer>
          <Link href={'/Login'}>
            <styled.UserLogin>
              <Button>fazer llogin</Button>
            </styled.UserLogin>
          </Link>
          <styled.ButtonClose onClick={() => setVisible((v: any) => !v)}>
            <X />
          </styled.ButtonClose>
        </styled.UserContainer>
      )}

      <styled.Navigation>
        <Line aling="left" />

        <Link href={'/'}>
          <styled.LinkNavigation onClick={() => setVisible((e: any) => !e)}>
            <ForkKnife size={12} />
            <Text>Cardápio</Text>
          </styled.LinkNavigation>
        </Link>

        <Link href={'/Cart'}>
          <styled.LinkNavigation>
            <Bag size={12} />
            <Text>Sacola</Text>
          </styled.LinkNavigation>
        </Link>

        <Link href={'/Request'}>
          <styled.LinkNavigation>
            <Article size={12} />
            <Text>Meus Pedidos</Text>
          </styled.LinkNavigation>
        </Link>

        <Link href={'#'}>
          <styled.LinkNavigation>
            <GearSix size={12} />

            <Text>Configurações</Text>
          </styled.LinkNavigation>
        </Link>
      </styled.Navigation>
    </styled.Menu>
  );
}
