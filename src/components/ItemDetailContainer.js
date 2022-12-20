import React from 'react';

//Import Child
import ItemDetail from './ItemDetail';
import Loading from './Loading';

//getItem Custom Hook import
import useGetItem from '../hooks/useGetItem';

const ItemDetailContainer = () => {
  const item = useGetItem();

  return (
    <section className="sectionCenter">
      <section className="sectionCenter">
        {!item ? <Loading /> : <ItemDetail item={item} />}
      </section>
    </section>
  );
};

export default ItemDetailContainer;
