import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import ItemDetail from '../ItemDetail/ItemDetail';
import { Spinner } from '@chakra-ui/react';
// FIREBASE
import db from '../../firebase/firebaseConfig'
import { collection, query, getDocs } from 'firebase/firestore';

const ItemDetailContainer = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  // const getItem = new Promise((resolve, reject) => {
  //   // setTimeout(() => {
  //   //   const respuesta = fetch(`https://api.punkapi.com/v2/beers/`)
  //   //     .then(response => response.json())
  //   //     .then(data => (data)
  //   //     ).catch(error => error)

  //   //   respuesta ? resolve(respuesta) : reject("error")
  //   // }, 2000)

  // })

  const getItem = async (id) => {
    const response = query(collection(db, 'products'));
    const items = [];
    const querySnapshot = await getDocs(response);
    querySnapshot.forEach((doc) => {
      if (doc.id === id) {
        items.push({ ...doc.data(), id: doc.id });
      }

    });
    setProduct(items);
    setIsLoading(false);
  };

  useEffect(() => {
    getItem(id);

  }, [id])


  return (
    <div className="container-prorduct-detail">
      {isLoading
        ? <Spinner size='xl' thickness='4px' />
        : <ItemDetail product={product[0]} />}
    </div>
  )
}

export default ItemDetailContainer
