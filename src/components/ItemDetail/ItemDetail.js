import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
const ItemDetail = ({ product }) => {
  return (
    <div className="product-detail">
      <div className='product-container'>
        <div className='img-container'>
          <img src={product.image_url} alt="" />
        </div>

        <div className="product-detail-info">
          <h3>{product.name}</h3>
          <span>{product.tagline}</span>
          <h5>${product.attenuation_level}</h5>
          <p>{product.description}</p>
          <ItemCount stock={product.ibu} initial={1} />
        </div>

      </div>


    </div>
  )
}

export default ItemDetail
