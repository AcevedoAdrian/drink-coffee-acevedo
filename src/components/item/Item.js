import React from 'react';
import ItemCount from './ItemCount';
import './Item.css'

const Item = ({ id, name, tagline, img = '../../assets/img/coffee.png', price, stock }) => {
  return (
    <div className="card" id={id}>
      <div className="card-image">
        <img src={img} alt="" />
      </div>
      <div className="card-texts">
        <h3>{name}</h3>
        <p>{tagline}</p>
        <span>{`$ ${price}`}</span>
      </div>
      <ItemCount stock={stock} initial={1} />
    </div>
  );
}
Item.defaultProps = {
  img: '../../assets/img/logo.svg'
}
export default Item;