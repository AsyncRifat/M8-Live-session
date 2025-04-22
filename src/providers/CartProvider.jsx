import React, { useEffect, useState } from 'react';
import { CartContext } from './Contexts';
import { getCart } from '../utils';

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // local storage theke data anlam
    setCart(getCart);
  }, []);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
