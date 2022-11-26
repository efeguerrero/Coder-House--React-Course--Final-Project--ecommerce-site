import React, { useState } from 'react';

//React-router-dom Imports
import { Link } from 'react-router-dom';

//Children Imports
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
  const { name, id, stock, category, price, img_src, description } = item;

  //Component States
  const [count, setCount] = useState(1);
  const [currStock, setCurrStock] = useState(stock);

  //Component Functions

  const handleCount = (operation) => {
    if (operation === 'add' && count < currStock) {
      setCount(count + 1);
    }
    if (operation === 'remove' && count > 1) {
      setCount(count - 1);
    }
  };

  const handleCartAdd = () => {
    const newStock = currStock - count;
    setCurrStock(newStock);
    setCount(1);
  };

  const handleCheckOut = () => {
    console.log('hello');
  };

  return (
    <>
      <div className="itemDetailContainer">
        <Link className="ItemDetailHomeBtnWrapper" to="/">
          <button className="ItemDetailHomeBtn">Volver a Productos</button>
        </Link>
        <img className="itemDetailImg" src={img_src} alt={name} />
        <div className="itemDetailInfo">
          <h2 className="itemDetailName">{name}</h2>
          <h2 className="itemDetailPrice">${price.toLocaleString('es-AR')}</h2>
          <p className="itemDetailDescrip">{description}</p>
          <div className="itemDetailCart">
            <ItemCount count={count} handleCount={handleCount} />
            <button
              className={currStock === 0 ? 'inactivecartAddBtn' : 'cartAddBtn'}
              onClick={handleCartAdd}
              disabled={currStock === 0 ? true : false}
            >
              {currStock === 0 ? 'Sin Stock' : 'Agregar al carrito'}
            </button>
            <button className="checkoutBtn" onClick={handleCheckOut}>
              finalizar Compra
            </button>
          </div>
          <h3 className="itemDetailStock">
            <span className="itemDetailStrong">Stock:</span>
            {currStock}
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
    </>
  );
};

export default ItemDetail;
