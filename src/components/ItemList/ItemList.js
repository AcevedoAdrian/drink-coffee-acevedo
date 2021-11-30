import React from 'react';
import Item from '../Item/Item';

import './ItemList.css'
const ItemList = ({ products }) => {
  return (

    <div className='container-card'>
      {products.map(product => {
        const { id, name, tagline, image_url, ibu, attenuation_level = 1000 } = product;
        return <Item name={name} key={id} img={image_url} tagline={tagline} stock={ibu} price={attenuation_level} />
      })}
    </div>
  );
}

export default ItemList;