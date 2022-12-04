import React from 'react';

//Assets Import
import cartAdd from '../assets/icons/cartAdd.svg';
import cartRemove from '../assets/icons/cartRemove.svg';

const CartItem = ({ cartItem }) => {
  const { id, name, quantity, price, img_src } = cartItem;

  return (
    <div className="cartItemContainer">
      <img src={img_src} alt={name} className="cartItemImg" />
      <div className="cartItemInfo">
        <div className="cartIteminfoHeader">
          <h2 className="cartItemName">{name}</h2>
          <button className="cartItemRemove">X</button>
        </div>
        <h3 className="cartItemPrice">${price.toLocaleString('es-AR')}</h3>
        <div className="cartItemCount">
          <button className="cartItemBtn">
            <img src={cartRemove} alt="" className="cartItemBtnRemoveIcon" />
          </button>
          <h3 className="cartItemQuantity">{quantity}</h3>
          <button className="cartItemBtn">
            <img src={cartAdd} alt="" className="cartItemBtnAddIcon" />
          </button>
        </div>
        <h3 className="cartItemSubtotal">
          <span className="cartItemSubtotalStrong"> Subtotal:</span> $
          {(price * quantity).toLocaleString('es-AR')}
        </h3>
      </div>
    </div>
  );
};

export default CartItem;
