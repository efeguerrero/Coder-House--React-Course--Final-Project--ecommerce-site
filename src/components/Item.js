import React from 'react';

//React-Router-Dom Import
import { Link } from 'react-router-dom';

//Custom Hook import to access Firebase Image Storage
import useGetItemImg from '../hooks/useGetItemImg';

const Item = ({ product }) => {
  const itemImg = useGetItemImg(product.img_src);

  return (
    <Link to={`/item/${product.id}`}>
      <div className="item">
        <div className="itemImageContainer">
          <div className="itemCTA">
            <span className="itemCtaText"> Ver</span>
          </div>
          <img className="itemImage" src={itemImg} alt={product.name} />
        </div>
        <h2 className="itemName">{product.name}</h2>
        <h3 className="itemPrice">${product.price.toLocaleString('es-AR')}</h3>
      </div>
    </Link>
  );
};

export default Item;
