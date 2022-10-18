import Link from 'next/link';
import { editPrice } from '../../utils/editPrice';
import * as styled from './styles';

type ProductProps = {
  banerUrl: string;
  title: string;
  category: string;
  price: number;
  href: string;
};

export function Product({
  banerUrl,
  category,
  price,
  title,
  href,
}: ProductProps) {
  return (
    <Link href={href}>
      <a>
        <styled.Product>
          <styled.ContainerBanner>
            <styled.BanerImg src={banerUrl} alt={title} />
          </styled.ContainerBanner>

          <styled.Category>{category}</styled.Category>

          <styled.Title>{title}</styled.Title>
          <styled.Price>R$ {editPrice(price)}</styled.Price>
        </styled.Product>
      </a>
    </Link>
  );
}
