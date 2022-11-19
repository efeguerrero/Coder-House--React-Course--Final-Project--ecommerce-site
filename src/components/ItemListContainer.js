import React, { useState, useEffect } from 'react';

//Child Imports
import ItemList from './ItemList';
import Loading from './Loading';

//Product Catalog Import
import { items } from '../mocks/item.mock';

//React-Router Imports
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    new Promise((resolve) =>
      setTimeout(() => {
        resolve(items);
      }, 2000)
    )
      .then((data) => {
        if (category === 'todo') {
          setProducts(data);
        } else {
          const filteredData = data.filter(
            (item) => item.category === category
          );
          setProducts(filteredData);
          console.log(filteredData);
        }
      })

      .then(() => setIsLoading(false));
    //CleanUp Function in useEffect so that before re-fetching products and filtering we set isLoading to true to display Loading Msg
    return () => setIsLoading(true);
  }, [category]);

  return (
    <section className="sectionCenter">
      {isLoading ? <Loading /> : <ItemList products={products} />}
    </section>
  );
};

export default ItemListContainer;
