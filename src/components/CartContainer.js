import React from 'react';

//Component Import
import CartListContainer from './CartListContainer';
import CartSummary from './CartSummary';

//Context Imports
import { useCartContext } from '../context/CartContex';

//React-router-dom Imports
import { Link } from 'react-router-dom';

const CartContainer = () => {
  const { isCartEmpty } = useCartContext();

  if (isCartEmpty()) {
    return (
      <section className="sectionCenter">
        <div className="emptyCartContainer">
          <h2 className="emptyCartMsg">Tu carrito está vació!</h2>
          <Link to="/" className="emptyCartBackBtn">
            Seguir Comprando
          </Link>
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
