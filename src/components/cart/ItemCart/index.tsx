import Link from 'next/link';
import { Plus } from 'phosphor-react';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import { editPrice } from '../../../utils/editPrice';
import * as styled from './styles';

type ItemCartProps = {
  imgProductUrl: string;
  category: string;
  title: string;
  price: number;
  href: string;
  id: string;
  index?: number;
  quant: number;
  type?: 'cart' | 'Checkout';
};

export function ItemCart({
  category,
  title,
  price,
  imgProductUrl,
  id,
  href,
  type,
  index,
  quant,
}: ItemCartProps) {
  const { removeQuantCart, addQuantCart } = useContext(CartContext);

  return (
    <styled.ItemCart>
      <styled.ContainerTextAndImg>
        <Link href={href}>
          <a>
            <styled.ImgProduct src={imgProductUrl} alt={title} />
          </a>
        </Link>
        <styled.ContenText>
          <span>{category}</span>
          <h2>{title}</h2>
          <p>R$ {editPrice(price)}</p>
        </styled.ContenText>
      </styled.ContainerTextAndImg>
      {type === 'Checkout' ? (
        <styled.ContainerCheckoutType>
          <span>Qnt.</span>
          <p>{quant}</p>
        </styled.ContainerCheckoutType>
      ) : (
        <styled.ContainerQuant>
          <styled.Less onClick={() => removeQuantCart(id, index as number)}>
            -
          </styled.Less>
          <styled.NumberQuant>{quant}</styled.NumberQuant>
          <styled.AddQuant onClick={() => addQuantCart(id)}>
            <Plus size={20} weight="thin" color="#fff" />
          </styled.AddQuant>
        </styled.ContainerQuant>
      )}
    </styled.ItemCart>
  );
}
