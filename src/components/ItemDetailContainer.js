import React, { useState, useEffect } from 'react';

//Import Child
import ItemDetail from './ItemDetail';
import Loading from './Loading';

//Product Catalog Import
import { items } from '../mocks/item.mock';

const ItemDetailContainer = () => {
  const [item, setItem] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    new Promise((resolve) => setTimeout(() => resolve(items[0]), 2000))
      .then((data) => setItem(data))
      .then(() => setIsLoading(false));
  }, []);

  return (
    <section className="sectionCenter">
      <section className="sectionCenter">
        {isLoading ? <Loading /> : <ItemDetail item={item} />}
      </section>
    </section>
  );
};

export default ItemDetailContainer;
