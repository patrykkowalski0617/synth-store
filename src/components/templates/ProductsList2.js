import React, { useEffect } from 'react';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import storage from '../../firebase-config';

// Create a reference under which you want to list
const listRef = ref(storage, 'cables');

const ProductsList2 = () => {
  // Find all the prefixes and items.
  useEffect(() => {
    listAll(listRef).then((res) => {
      res.items
        .forEach((el) => {
          getDownloadURL(ref(storage, el._location.path_)).then((url) => {
            console.log(url);
          });
        })
        .catch((error) => {
          // Uh-oh, an error occurred!
        });
    });
  }, []);

  return (
    <>
      ProductsList2 <img id="myimg" src=""></img>
    </>
  );
};

export default ProductsList2;
