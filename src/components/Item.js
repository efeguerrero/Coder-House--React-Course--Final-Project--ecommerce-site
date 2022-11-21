import React from 'react';

//React-Router-Dom Import
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <Link to={`/item/${product.id}`}>
      <div className="item">
        <div className="itemImageContainer">
          <div className="itemCTA">
            <span className="itemCtaText"> Ver</span>
          </div>
          <img className="itemImage" src={product.img_src} alt={product.name} />
        </div>
        <h2 className="itemName">{product.name}</h2>
        <h3 className="itemPrice">${product.price.toLocaleString('es-AR')}</h3>
      </div>
    </Link>
  );
};

export default Item;
