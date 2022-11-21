import React, { useState, useEffect } from 'react';

//Import Child
import ItemDetail from './ItemDetail';
import Loading from './Loading';

//Product Catalog Import
import { items } from '../mocks/item.mock';

//React-Router-Dom Imports
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [item, setItem] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  //Simulated API Fetch and then search for specific Item by parsing id from URL with useParams. "id" from URL comes as a STRING"

  useEffect(() => {
    new Promise((resolve) => setTimeout(() => resolve(items), 2000))
      .then((items) => {
        const item = items.find((item) => item.id == id);
        setItem(item);
      })
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
