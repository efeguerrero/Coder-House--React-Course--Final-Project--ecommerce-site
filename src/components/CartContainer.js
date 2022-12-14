import React from 'react';

//Component Import
import CartListContainer from './CartListContainer';
import CartSummary from './CartSummary';

//Context Imports
import { useCartContext } from '../context/CartContex';

const CartContainer = () => {
  const { isCartEmpty } = useCartContext();

  if (isCartEmpty()) {
    return (
      <section className="sectionCenter">
        <div className="emptyCartContainer">
          <h2 className="emptyCartMsg">Tu carrito está vació!</h2>
          <button className="emptyCartBackBtn">Seguir Comprando</button>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="sectionCenter cartContainer">
        <CartSummary />
        <CartListContainer />
      </section>
    </>
  );
};

export default CartContainer;
