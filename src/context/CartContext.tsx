import { useState, createContext, ReactNode } from 'react';
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from '../helpers/LocalStorageState';

interface ICartContext {
  cartItems: string[];
  isCartItem: (itemId: string) => boolean;
  addToCart: (key: string, itemId: string) => void;
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
  const getCartItems = () => getLocalStorageItem('cartItem') || [];

  const [cartItems, setCartItems] = useState<string[]>(getCartItems());

  const isCartItem = (itemId: string) => {
    return cartItems?.includes(itemId);
  };

  const addToCart = (key: string, itemId: string) => {
    if (!isCartItem(itemId)) {
      const updatedCartItems = [...cartItems, itemId];

      setCartItems(updatedCartItems);
      setLocalStorageItem(key, updatedCartItems);
    } else {
      const updatedCartItems = cartItems.filter(
        (current) => current !== itemId,
      );

      setCartItems(updatedCartItems);
      setLocalStorageItem(key, updatedCartItems);
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
