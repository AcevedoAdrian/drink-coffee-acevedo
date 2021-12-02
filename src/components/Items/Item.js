import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react'
import './Item.css'

const Item = ({ id, name, tagline, img = '../../assets/img/coffee.png', price }) => {
  return (
    <div className="card" id={id}>

      <div className="card-image">
        <img src={img} alt="" />
      </div>

      <div className="card-texts">
        <h3>{name}</h3>
        <p>{tagline}</p>
        <span>{`$ ${price}`}</span>
        <Link to={`/item/${id}`} >
          <Button icon labelPosition='left' color='brown'>
            <Icon name='eye' />
            Ver Producto
          </Button>
        </Link>
      </div>
    </div>
  );
}
Item.defaultProps = {
  img: '../../assets/img/logo.svg'
}
export default Item;