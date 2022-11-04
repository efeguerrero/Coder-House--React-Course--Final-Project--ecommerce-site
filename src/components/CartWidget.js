import React from 'react';
import cartIcon from '../imgs/icons/shopping_cart_black_24dp.svg';

function CartWidget() {
  return (
    <div className="navBarCart">
      <img src={cartIcon} alt="Cart Icon" className="cartIcon" />
    </div>
  );
}

export default CartWidget;
