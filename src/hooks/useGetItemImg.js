import { useEffect, useState } from 'react';

//FireStore Imports
import { getDownloadURL, getStorage, ref } from 'firebase/storage';

const useGetItemImg = (imgRef) => {
  const [img, setImg] = useState();

  //Access our Firebase Storage
  const storage = getStorage();

  //Create reference path
  const productRef = ref(storage, imgRef);

  //get download URL based on reference path

  useEffect(() => {
    getDownloadURL(productRef)
      .then((data) => setImg(data))
      .catch((err) => console.error({ err }));
  }, [productRef]);

  return img;
};

export default useGetItemImg;
