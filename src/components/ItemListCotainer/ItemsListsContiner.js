import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ItemList from '../ItemList/ItemList';
import { Spinner } from '@chakra-ui/react'
// Estilos
import './ItemsListsContiner.css';
const ItemsListsContiner = ({ title }) => {
  // State
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  // Effect
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      fetch('https://api.punkapi.com/v2/beers')
        .then(response => response.json())
        .then(data =>
          (categoryId)
            ? setProducts(data.filter(item => item.ibu === parseInt(categoryId)))
            : setProducts(data)

        )
        .catch(error => console.log(error));
      setIsLoading(false);

    }, 2000);


  }, [categoryId]);

  return (
    <section className='secction-items-lists'>
      <div className="container">
        <h2 className='h2-items-lists'>{title} {categoryId}</h2>
        {isLoading ? <Spinner size='xl' thickness='4px' />
          : <ItemList products={products} />}
      </div>
    </section>
  );
}

export default ItemsListsContiner;