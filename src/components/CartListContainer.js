import React from 'react';

//Component Import
import CartItem from './CartItem';

//Context Imports
import { useCartContext } from '../context/CartContex';

const CartListContainer = () => {
  const { cart } = useCartContext();

  return (
    <>
      <section className="cartListContainer">
        {cart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </section>
    </>
  );
};

export default CartListContainer;
