import React from 'react';
import Item from './Item';

//Child Imports
import Loading from './Loading';

const ItemList = ({ products }) => {
  return (
    <section className="itemsContainer">
      {/* Before mapping products array we check length to avoid mapping an empty array. If no products where found page will only show loader (could also be a no products found message) */}
      {products.length > 0 ? (
        <>
          {products.map((product) => (
            <Item product={product} />
          ))}
        </>
      ) : (
        <Loading />
      )}
    </section>
  );
};

export default ItemList;
