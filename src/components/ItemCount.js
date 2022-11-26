import React from 'react';

//Assets Import
import cartAdd from '../assets/icons/cartAdd.svg';
import cartRemove from '../assets/icons/cartRemove.svg';

const ItemCount = ({ count, handleCount }) => {
  return (
    <div className="itemDetailCartMenu">
      <button className="cartBtn" onClick={() => handleCount('remove')}>
        <img
          src={cartRemove}
          alt="Cart Remove Button"
          className="cartBtnIcon"
        />
      </button>
      <h3 className="ItemDetailCartCount">{count}</h3>
      <button className="cartBtn" onClick={() => handleCount('add')}>
        <img src={cartAdd} alt="Cart Add Button" className="cartBtnIcon" />
      </button>
    </div>
  );
};

export default ItemCount;
