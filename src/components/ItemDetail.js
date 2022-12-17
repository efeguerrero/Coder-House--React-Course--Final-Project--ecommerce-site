import React, { useState } from 'react';

//React-router-dom Imports
import { Link, useNavigate } from 'react-router-dom';

//Children Imports
import ItemCount from './ItemCount';

//Context Imports
import { useCartContext } from '../context/CartContex';

//Custom Hook import to access Firebase Image Storage
import useGetItemImg from '../hooks/useGetItemImg';

const ItemDetail = ({ item }) => {
  const { name, id, stock, category, price, img_src, description } = item;

  const itemImg = useGetItemImg(img_src);

  //Context Imports
  const { addItem, cartItemCount } = useCartContext();

  //Component States
  const [count, setCount] = useState(1);

  //When we set the currStock of our product we take into account if we have items for this in our cart and substract them. We do this to avoid the bug where I could add maximum stock of items of a product to cart, navigate away and comeback to the page and have my stock available to add again. This would cause for a customer to buy more than the existing stock.

  const [currStock, setCurrStock] = useState(stock - cartItemCount(id));

  //Naviget Method
  const navigate = useNavigate();

  //Component Functions

  const handleCount = (operation) => {
    if (operation === 'add' && count < currStock) {
      setCount(count + 1);
    }
    if (operation === 'remove' && count > 1) {
      setCount(count - 1);
    }
  };

  const handleCartAdd = (id, name, price, img_src, count) => {
    const newStock = currStock - count;
    setCurrStock(newStock);
    setCount(1);
    addItem(id, name, price, img_src, count);
  };

  const handleCheckOut = () => {
    navigate('/cart');
  };

  return (
    <>
      <div className="itemDetailContainer">
        <Link className="ItemDetailHomeBtnWrapper" to="/">
          <button className="ItemDetailHomeBtn">Volver a Productos</button>
        </Link>
        <img className="itemDetailImg" src={itemImg} alt={name} />
        <div className="itemDetailInfo">
          <h2 className="itemDetailName">{name}</h2>
          <h2 className="itemDetailPrice">${price.toLocaleString('es-AR')}</h2>
          <p className="itemDetailDescrip">{description}</p>
          <div className="itemDetailCart">
            <ItemCount count={count} handleCount={handleCount} />

            <button
              className={currStock === 0 ? 'inactivecartAddBtn' : 'cartAddBtn'}
              onClick={() => handleCartAdd(id, name, price, img_src, count)}
              disabled={currStock === 0 ? true : false}
            >
              {currStock === 0 ? 'Sin Stock' : 'Agregar al carrito'}
            </button>
            <button className="toCartBtn" onClick={handleCheckOut}>
              ir al carrito
            </button>
          </div>
          <h3 className="itemsInCart">
            <span className="itemDetailStrong"> Unidades en Carrito: </span>{' '}
            {cartItemCount(id)}
          </h3>
          <h3 className="itemDetailStock">
            <span className="itemDetailStrong">Stock Disponible: </span>
            {currStock}
          </h3>
          <h3 className="itemDetailId">
            <span className="itemDetailStrong">Código de Producto: </span>
            {id}
          </h3>
          <h3 className="itemDetailCategory">
            <span className="itemDetailStrong">Categoría: </span>
            {category}
          </h3>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
