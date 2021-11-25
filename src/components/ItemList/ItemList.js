import React from 'react';
import Item from '../Item/Item';

import './ItemList.css'
const ItemList = ({ products }) => {
  return (
    <div className='container-card'>
      {products.map(product => {
        const { id, name, tagline, image_url, ibu, price=1000 } = product;
        return <Item name={name} key={id} img={image_url} tagline={tagline} stock={ibu} price={price} />
      })}

    </div>
  );
}

export default ItemList;