import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  CaretRight,
  DotsThreeVertical,
  MapPin,
  PencilLine,
  Trash,
} from 'phosphor-react';
import { useState } from 'react';
import { api } from '../../api/axios';
import { THEME } from '../../styles/theme';
import * as styled from './styles';

type CheckoutProps = {
  type?: 'edit' | 'normal' | 'none';
  text: string;
  id?: string;
  hrefEdit?: string;
};

export function AddressComponent({
  text,
  type = 'normal',
  hrefEdit,
  id,
}: CheckoutProps) {
  const [clickModelEditAndDelete, setClickModelEditAndDelete] = useState(false);

  const { push } = useRouter();

  async function hadleDelete() {
    await api.delete(`/address/delete/${id}`);
    push('/Address');
  }

  return (
    <styled.AddressComponent type={type}>
      <styled.ContainerIcon>
        <MapPin size={28} weight="bold" color={THEME.colors.bg} />
      </styled.ContainerIcon>

      {type === 'edit' ? (
        <Link href={`Checkout/${id}`}>
          <styled.Text>{text}</styled.Text>
        </Link>
      ) : (
        <styled.Text>{text}</styled.Text>
      )}
      <div></div>
      {type !== 'none' && (
        <>
          {type === 'edit' ? (
            <DotsThreeVertical
              onClick={() => setClickModelEditAndDelete((v) => !v)}
              size={28}
              color={THEME.colors.bg}
            />
          ) : (
            <Link href={'/Address'}>
              <a>
                <CaretRight size={28} color={THEME.colors.bg} weight="bold" />
              </a>
            </Link>
          )}
        </>
      )}
      {type === 'edit' && (
        <styled.ModelAddressComponent visible={clickModelEditAndDelete}>
          <div>
            <Link href={hrefEdit as string}>
              <a>
                <PencilLine size={18} color={THEME.colors.subTitle} />
                <p>Editar</p>
              </a>
            </Link>
          </div>
          <div>
            <a onClick={hadleDelete}>
              <Trash size={18} color={THEME.colors.subTitle} />
              <p>Deletar</p>
            </a>
          </div>
        </styled.ModelAddressComponent>
      )}
    </styled.AddressComponent>
  );
}
