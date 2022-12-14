import React from 'react';

//Component Import
import CartItem from './CartItem';

//Context Imports
import { useCartContext } from '../context/CartContex';

const CartListContainer = () => {
  const { cart, removeItem, clearCart } = useCartContext();

  return (
    <>
      <div className="cartListContainer">
        {cart.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            cartItem={cartItem}
            removeItem={removeItem}
          />
        ))}
      </div>
    </>
  );
};

export default CartListContainer;
