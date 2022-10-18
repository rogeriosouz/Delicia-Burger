import { CartType } from '../context/CartContext';

export function isEqualProduct(cart: CartType[], id: string) {
  let iqual = false;

  cart.map((item) => {
    if (item.id === id) {
      iqual = true;
    }
  });

  return iqual;
}
