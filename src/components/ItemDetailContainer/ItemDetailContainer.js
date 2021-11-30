import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({ id = 1 }) => {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch(`https://api.punkapi.com/v2/beers/${id}`)
        .then(response => response.json())
        .then(response => {
          setProduct(response[0])
        })
    }, 2000)
  }, [id])

  return (
    <div className="container-prorduct-detail">
      <ItemDetail product={product} />
    </div>
  )
}

export default ItemDetailContainer
