import React from 'react';
import Item from './Item';

const ItemList = ({ products }) => {
  return (
    <section className="itemsContainer">
      {products.map((product) => (
        <Item product={product} />
      ))}
    </section>
  );
};

export default ItemList;
