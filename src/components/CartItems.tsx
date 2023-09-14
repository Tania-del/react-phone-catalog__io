// import clsx from 'clsx';
import { useState, useContext, useEffect } from 'react';
import { LOCALSTORAGE_KEYS } from '../constants/comman';
import { CartContext } from '../context/CartContext';
import { ErrorMessageContext } from '../context/ErrorMessageContext';
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from '../helpers/LocalStorageState';
import SvgClose from '../icons/Close';
import SvgMinus from '../icons/Minus';
import SvgPlus from '../icons/Plus';
import products from '../products.json';
import '../styles/CartItems.scss';
import { Popup } from './Popup';

export const CartItems = () => {
  const { cartItems, addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState<Record<string, number>>(
    getLocalStorageItem(LOCALSTORAGE_KEYS.quantity) ?? {},
  );
  const [total, setTotal] = useState<number>(0);
  const { errorMessage, setErrorMessage } = useContext(ErrorMessageContext);
  const [openPopup, setOpenPopup] = useState(false);

  const filteredByCart = products.filter(
    (product) => cartItems?.includes(product.phoneId),
  );

  const calculateTotal = () => {
    const totalPrice = filteredByCart.reduce((acc, currentItem) => {
      const accumulator
        = acc
        + (currentItem?.price ?? 0) * (quantity?.[currentItem?.phoneId] ?? 1);

      return accumulator;
    }, 0);

    setTotal(totalPrice);
  };

  useEffect(() => {
    calculateTotal();
  }, [quantity]);

  useEffect(() => {
    setQuantity(getLocalStorageItem(LOCALSTORAGE_KEYS.quantity) ?? {});
  }, [cartItems]);

  const increase = (phoneId: string) => {
    setQuantity((prevCount) => {
      const currentCount = prevCount?.[phoneId] ?? 1;

      const updated = { ...prevCount, [phoneId]: currentCount + 1 };

      setLocalStorageItem(LOCALSTORAGE_KEYS.quantity, updated);

      return updated;
    });
  };

  const decrease = (phoneId: string) => {
    if (quantity?.[phoneId] > 1) {
      setQuantity((prevCount) => {
        const currentCount = prevCount?.[phoneId] ?? 1;
        const updated = { ...prevCount, [phoneId]: currentCount - 1 };

        setLocalStorageItem(LOCALSTORAGE_KEYS.quantity, updated);

        return updated;
      });
    }
  };

  const countTotalItems = () => {
    if (!quantity || Object.keys(quantity).length === 0) {
      return cartItems.length;
    }

    const countQuantity = Object.values(quantity);
    const countLength = countQuantity.length;
    const count = cartItems.length - countLength;

    const totalQuantity
      = count + countQuantity.reduce((acc, curr) => acc + curr);

    return totalQuantity;
  };

  if (!cartItems.length) {
    setErrorMessage('There are no items in the cart yet');
  }

  return (
    <>
      <h1>Cart</h1>
      <div className="cart-container">
        {errorMessage || (
          <>
            <div>
              {filteredByCart.map((item) => (
                <>
                  <div className="item-wrapper" key={item.id}>
                    <div className="cart">
                      <button
                        className="close-btn"
                        type="button"
                        onClick={() => addToCart(item.phoneId)}
                      >
                        <SvgClose />
                      </button>
                      <div className="cart-img__wrapper">
                        <img
                          src={`/react-phone-catalog__io/${item.image}`}
                          alt="Phone"
                          className="cart-img"
                        />
                      </div>
                      <h3 className="card-title cart-name">{item.name}</h3>
                    </div>
                    <div className="cart-btn__wrapper">
                      <button
                        type="button"
                        className="arrow-btn"
                        onClick={() => increase(item.phoneId)}
                      >
                        <SvgPlus className="arrow-image" />
                      </button>
                      <div>{quantity?.[item.phoneId] ?? 1}</div>
                      <button
                        type="button"
                        className="arrow-btn"
                        onClick={() => decrease(item.phoneId)}
                      >
                        <SvgMinus className="arrow-image" />
                      </button>
                    </div>
                    <p className="card-price">
                      $
                      {item.price}
                    </p>
                  </div>
                </>
              ))}
            </div>

            <div className="total-container">
              <p className="price">
                $
                {total}
              </p>
              <p className="price-text">{`Total for ${countTotalItems()} items`}</p>
              <div className="underline" />
              <button
                className="checkout-btn"
                type="button"
                onClick={() => setOpenPopup(true)}
              >
                <p className="button-title">Checkout</p>
              </button>
              {openPopup && (
                <Popup
                  text="Thank you for your purchase"
                  closePopup={() => setOpenPopup(false)}
                  closeSvg="close-svg"
                />
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};
