import React from 'react';
import ItemCount from '../item/ItemCount';
import './ItemsListsContiner.css'
const ItemsListsContiner = ({ title }) => {
  return (
    <section className='secction-items-lists'>
      <h2 className='h2-items-lists'>{title}</h2>
      <ItemCount stock={10} initial={1} />

    </section>
  );
}

export default ItemsListsContiner;