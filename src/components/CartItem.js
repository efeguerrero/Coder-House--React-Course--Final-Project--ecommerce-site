import React from 'react';

//Assets Import
import cartAdd from '../assets/icons/cartAdd.svg';
import cartRemove from '../assets/icons/cartRemove.svg';

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
        {/* <div className="cartItemCount">
          <button className="cartItemBtn">
            <img src={cartRemove} alt="" className="cartItemBtnRemoveIcon" />
          </button>
          <h3 className="cartItemQuantity">{quantity}</h3>
          <button className="cartItemBtn">
            <img src={cartAdd} alt="" className="cartItemBtnAddIcon" />
          </button>
        </div> */}
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
