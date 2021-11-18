import React from 'react';
import './ItemsListsContiner.css'
const ItemsListsContiner = ({ title }) => {
  return (
    <section className='secction-items-lists'>
      <h2 className='h2-items-lists'>{title}</h2>
    </section>
  );
}

export default ItemsListsContiner;