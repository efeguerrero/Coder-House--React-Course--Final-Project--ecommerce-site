import React from 'react';

//Component Import
import CartListContainer from './CartListContainer';
import CartSummary from './CartSummary';

const CartContainer = () => {
  return (
    <>
      <section className="sectionCenter">
        <CartListContainer />
        {/* <CartSummary /> */}
      </section>
    </>
  );
};

export default CartContainer;
