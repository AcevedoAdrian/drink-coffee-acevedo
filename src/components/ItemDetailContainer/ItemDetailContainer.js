import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import ItemDetail from '../ItemDetail/ItemDetail';
import { Spinner } from '@chakra-ui/react';


const ItemDetailContainer = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  const getItem = new Promise((resolve, reject) => {
    setTimeout(() => {
      const respuesta = fetch(`https://api.punkapi.com/v2/beers/`)
        .then(response => response.json())
        .then(data => (data)
        ).catch(error => error)

      respuesta ? resolve(respuesta) : reject("error")
    }, 2000)
  })

  useEffect(() => {

    if (id) {
      getItem.then(items => {
        setProduct(
          items.find(item => item.id === parseInt(id))
        )
        setIsLoading(false)
      }).catch(error => error)
    } else {
      setProduct([])
    }


  }, [id])


  return (
    <div className="container-prorduct-detail">
      {isLoading
        ? <Spinner size='xl' thickness='4px' />
        : <ItemDetail product={product} />}
    </div>
  )
}

export default ItemDetailContainer
