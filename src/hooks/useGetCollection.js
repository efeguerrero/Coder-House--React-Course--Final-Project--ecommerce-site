//React Imports
import { useState, useEffect } from 'react';

//FireStore Imports
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore';

//React-Router Imports
import { useParams } from 'react-router-dom';

const useGetCollection = () => {
  const { category } = useParams();
  const [products, setProducts] = useState();

  const db = getFirestore();

  //We must only execute this useEffect on initial rendering and when category param changes to avoid an endless loop of re-rendering of useGetCollection component caused by setProducts triggering it

  useEffect(() => {
    //No filter Query to bring all products if no category is selected or "todo"
    if (category === 'todo' || !category) {
      //create collection ref
      const itemsCollection = collection(db, 'items');
      getDocs(itemsCollection).then((data) =>
        setProducts(
          data.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        ).catch((err) => console.error({ err }))
      );
    } else {
      //filterd query by category if it was seleceted
      const itemsQuery = query(
        collection(db, 'items'),
        where('category', '==', category)
      );
      getDocs(itemsQuery).then((data) =>
        setProducts(
          data.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        ).catch((err) => {
          console.error({ err });
        })
      );
    }
  }, [category]);
  return products;
};

export default useGetCollection;
