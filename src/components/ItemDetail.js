import React from 'react';
import cartAdd from '../assets/icons/cartAdd.svg';
import cartRemove from '../assets/icons/cartRemove.svg';

const ItemDetail = ({ item }) => {
  const { name, id, stock, category, price, img_src, description } = item;

  return (
    <div className="itemDetailContainer">
      <button className="ItemDetailHomeBtn">Volver a Productos</button>
      <img className="itemDetailImg" src={img_src} alt={name} />
      <div className="itemDetailInfo">
        <h2 className="itemDetailName">{name}</h2>
        <h2 className="itemDetailPrice">${price.toLocaleString('es-AR')}</h2>
        <p className="itemDetailDescrip">{description}</p>
        <div className="itemDetailCart">
          <div className="itemDetailCartMenu">
            <button className="cartBtn">
              <img
                src={cartRemove}
                alt="Cart Remove Button"
                className="cartBtnIcon"
              />
            </button>
            <h3 className="ItemDetailCartCount">2</h3>
            <button className="cartBtn">
              <img
                src={cartAdd}
                alt="Cart Add Button"
                className="cartBtnIcon"
              />
            </button>
          </div>
          <button className="cartAddBtn">Agregar al carrito</button>
        </div>
        <h3 className="itemDetailStock">
          <span className="itemDetailStrong">Stock:</span>
          {stock}
        </h3>
        <h3 className="itemDetailId">
          <span className="itemDetailStrong">Código de Producto:</span>
          {id}
        </h3>
        <h3 className="itemDetailCategory">
          <span className="itemDetailStrong">Categoría:</span>
          {category}
        </h3>
      </div>
    </div>
  );
};

export default ItemDetail;
