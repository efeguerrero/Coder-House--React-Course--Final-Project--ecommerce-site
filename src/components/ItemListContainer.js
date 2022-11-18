import React, { useState, useEffect } from 'react';

//Child Imports
import ItemList from './ItemList';
import Loading from './Loading';

//Product Catalog Import
import { items } from '../mocks/item.mock';

const ItemListContainer = () => {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    new Promise((resolve) =>
      setTimeout(() => {
        resolve(items);
      }, 2000)
    )
      .then((data) => setProducts(data))
      .then(() => setIsLoading(false));
  }, []);

  return (
    <section className="sectionCenter">
      {isLoading ? <Loading /> : <ItemList products={products} />}
    </section>
  );
};

export default ItemListContainer;
