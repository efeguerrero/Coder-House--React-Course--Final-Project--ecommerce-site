//React Imports
import { useState, useEffect } from 'react';

//FireStore Imports
import { doc, getFirestore, query, where, getDoc } from 'firebase/firestore';

//React-Router Imports
import { useParams } from 'react-router-dom';

const useGetItem = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  // access firestore DB
  const db = getFirestore();
  //create Item Ref
  const itemRef = doc(db, 'items', id);

  useEffect(() => {
    //get doc from collection based on ref and set it to product state
    getDoc(itemRef).then((data) => {
      if (data.exists()) {
        setProduct({ id: data.id, ...data.data() }).catch((err) =>
          console.error({ err })
        );
      }
    });
  }, [id]);
  return product;
};

export default useGetItem;
