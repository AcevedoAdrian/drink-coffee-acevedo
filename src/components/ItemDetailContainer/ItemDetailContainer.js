import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import ItemDetail from '../ItemDetail/ItemDetail';
import { Loader } from 'semantic-ui-react';
const ItemDetailContainer = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const params = useParams();
  useEffect(() => {
    setTimeout(() => {
      fetch(`https://api.punkapi.com/v2/beers/${params.id}`)
        .then(response => response.json())
        .then(response => {
          setProduct(response[0])
        })
      setIsLoading(false)
    }, 2000)

  }, [params])

  return (
    <div className="container-prorduct-detail">
      {isLoading ? <Loader active inline='centered' /> : <ItemDetail product={product} />}
    </div>
  )
}

export default ItemDetailContainer
