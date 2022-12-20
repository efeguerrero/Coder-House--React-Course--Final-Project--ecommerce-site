import React from 'react';
import cartIcon from '../assets/icons/shopping_cart_black_24dp.svg';

//React-router-dom Imports
import { Link } from 'react-router-dom';

//Context Imports
import { useCartContext } from '../context/CartContex';

function CartWidget() {
  const { cartTotalItems } = useCartContext();

  return (
    <Link to="/Cart">
      <div className="navBarCart">
        {/* We only show item total count in widget if we have any. Icon is always shown to allow navegation to cart, even if empty */}
        {cartTotalItems() > 0 ? (
          <div className="cartWidgetItemCount">{cartTotalItems()}</div>
        ) : (
          <></>
        )}
        <img src={cartIcon} alt="Cart Icon" className="cartIcon" />
      </div>
    </Link>
  );
}

export default CartWidget;
