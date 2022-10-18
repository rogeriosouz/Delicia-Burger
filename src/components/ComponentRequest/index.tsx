import Link from 'next/link';
import { ArrowRight } from 'phosphor-react';
import { THEME } from '../../styles/theme';
import { editPrice } from '../../utils/editPrice';
import { Text } from '../Text';
import * as styled from './styles';

type ComponentRequestProps = {
  title: string;
  date: string;
  total: number;
  linkHref: string;
  type: 'enviado' | 'entrege';
};

export function ComponentRequest({
  date,
  linkHref,
  title,
  total,
  type,
}: ComponentRequestProps) {
  return (
    <styled.ComponentRequest>
      <styled.TitleContainer type={type}>
        <h2>{title}</h2>
        <Text>{type === 'entrege' ? 'entrege' : 'Enviado'}</Text>
      </styled.TitleContainer>
      <styled.Date>{date}</styled.Date>

      <styled.TotalPrice>
        <styled.Price>
          <span>Total</span>

          <p>R$ {editPrice(total)}</p>
        </styled.Price>
        <Link href={linkHref}>
          <a>
            <styled.LinkRequest>
              <ArrowRight size={16} color={THEME.colors.bg} />
            </styled.LinkRequest>
          </a>
        </Link>
      </styled.TotalPrice>
    </styled.ComponentRequest>
  );
}
