import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemsListsContiner.css'
const ItemsListsContiner = ({ title }) => {
  // State
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://api.punkapi.com/v2/beers')
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.log(error));
    }, 2000);
  }, []);

  return (
    <section className='secction-items-lists'>
      <div className="container">
        <h2 className='h2-items-lists'>{title}</h2>
        <ItemList products={products} />
      </div>
    </section>
  );
}

export default ItemsListsContiner;