import { createContext, useState } from 'react';

export type CartType = {
  title: string;
  id: string;
  price: number;
  category: string;
  quant: number;
  urlProduct: string;
};

type CartContextType = {
  cart: CartType[];
  addCart: ({ title, price, category, quant, id }: CartType) => void;
  removeItemFromCart: (clickedItemIndex: number) => void;
  clearCart: () => void;
  total: number;
  QuantItems: number;
  addQuantCart: (id: string) => void;
  removeQuantCart: (id: string, index: number) => void;
};

export const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: any) {
  const [cart, setCart] = useState([] as CartType[]);
  const [priceProduct, setPriceProduct] = useState(0);

  let total = 0;
  let QuantItems = 0;
  cart.map((item) => {
    total += item.price;
    QuantItems += item.quant as number;
  });

  function addCart({
    title,
    price,
    category,
    quant,
    id,
    urlProduct,
  }: CartType) {
    const itemObject = { title, price, category, quant, id, urlProduct };
    setPriceProduct(price);
    setCart([...cart, itemObject]);
  }

  function removeItemFromCart(clickedItemIndex: number) {
    const filtedCart = cart.filter(
      (cartItem) => cart.indexOf(cartItem) !== clickedItemIndex
    );
    setCart(filtedCart);
  }

  function addQuantCart(id: string) {
    let newsItems = [] as CartType[];
    let positionObj: number = 0;

    cart.map((item, index) => {
      if (item.id === id) {
        newsItems.push({
          title: item.title,
          id: item.id,
          price: item.price + priceProduct,
          quant: (item.quant as number) + 1,
          urlProduct: item.urlProduct,
          category: item.category,
        });
        positionObj = index;
      }
    });

    cart[positionObj] = newsItems[0];
    let newCart = [...cart];

    setCart(newCart);
  }

  function removeQuantCart(id: string, index: number) {
    let newsItems = [] as CartType[];
    let positionObj: number = 0;

    cart.map((item, index) => {
      if (item.id === id) {
        newsItems.push({
          title: item.title,
          id: item.id,
          price: item.price - priceProduct,
          quant: (item.quant as number) - 1,
          urlProduct: item.urlProduct,
          category: item.category,
        });
        positionObj = index;
      }
    });

    if ((newsItems[0].quant as number) < 1) {
      removeItemFromCart(index);
      return;
    }

    cart[positionObj] = newsItems[0];
    let newCart = [...cart];
    setCart(newCart);
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addQuantCart,
        removeQuantCart,
        addCart,
        clearCart,
        removeItemFromCart,
        total,

        QuantItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
