import React from 'react';

//Custom Hook import to access Firebase Image Storage
import useGetItemImg from '../hooks/useGetItemImg';

const CartItem = ({ cartItem, removeItem }) => {
  const { id, name, quantity, price, img_src } = cartItem;

  const itemImg = useGetItemImg(img_src);

  return (
    <div className="cartItemContainer">
      <img src={itemImg} alt={name} className="cartItemImg" />
      <div className="cartItemInfo">
        <h2 className="cartItemName">{name}</h2>
        <h3 className="cartItemPrice">${price.toLocaleString('es-AR')}</h3>
        <div className="cartItemCount">
          <h3 className="cartItemQuantity">Unidades: {quantity}</h3>
        </div>
        <h3 className="cartItemSubtotal">
          <span className="cartItemSubtotalStrong"> Subtotal:</span> $
          {(price * quantity).toLocaleString('es-AR')}
        </h3>
        <button className="cartItemRemove" onClick={() => removeItem(id)}>
          Quitar Item
        </button>
      </div>
    </div>
  );
};

export default CartItem;
