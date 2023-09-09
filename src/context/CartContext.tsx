import { useState, createContext, ReactNode } from 'react';
import { LOCALSTORAGE_KEYS } from '../constants/comman';
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from '../helpers/LocalStorageState';

interface ICartContext {
  cartItems: string[];
  isCartItem: (itemId: string) => boolean;
  addToCart: (itemId: string) => void;
}
interface ICartProvider {
  children: ReactNode;
}

export const CartContext = createContext<ICartContext>({
  cartItems: [],
  isCartItem: () => false,
  addToCart: () => {},
});

export const CartProvider = ({ children }: ICartProvider) => {
  const getCartItems = () => getLocalStorageItem(
    LOCALSTORAGE_KEYS.cartItems,
  ) ?? [];

  const [cartItems, setCartItems] = useState<string[]>(getCartItems());

  const isCartItem = (itemId: string) => {
    return cartItems?.includes(itemId);
  };

  const addToCart = (itemId: string) => {
    if (!isCartItem(itemId)) {
      const updatedCartItems = [...cartItems, itemId];

      setCartItems(updatedCartItems);
      setLocalStorageItem(LOCALSTORAGE_KEYS.cartItems, updatedCartItems);
    } else {
      const updatedCartItems = cartItems?.filter(
        (current) => current !== itemId,
      );

      setCartItems(updatedCartItems);
      setLocalStorageItem(LOCALSTORAGE_KEYS.cartItems, updatedCartItems);

      const quantity = getLocalStorageItem(LOCALSTORAGE_KEYS.quantity) ?? {};

      delete quantity[itemId];

      setLocalStorageItem(LOCALSTORAGE_KEYS.quantity, quantity);
    }
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, isCartItem }}
    >
      {children}
    </CartContext.Provider>
  );
};
