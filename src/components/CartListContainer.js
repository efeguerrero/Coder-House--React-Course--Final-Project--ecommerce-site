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
        {/* In this cart mapping we dont check for length to avoid mapping an empty array because we already validated if our cart was empty in CartContainer.js */}
        {cart.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            cartItem={cartItem}
            removeItem={removeItem}
          />
        ))}
      </div>
      <button className="clearCartBtn" onClick={() => clearCart()}>
        Limpiar Carrito
      </button>
    </>
  );
};

export default CartListContainer;
