import React from 'react';

const Item = ({ product }) => {
  return (
    <div className="item">
      <div className="itemImageContainer">
        <img className="itemImage" src={product.img_src} alt={product.name} />
      </div>
      <h2 className="itemName">{product.name}</h2>
      <h3 className="itemPrice">${product.price.toLocaleString('es-AR')}</h3>
    </div>
  );
};

export default Item;
