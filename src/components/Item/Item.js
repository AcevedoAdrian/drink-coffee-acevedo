import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react'
// Estilos
import './Item.css'

const Item = (props) => {
  const { id, name, tagline, image_url } = props.product;

  return (
    <div className="card" id={id}>

      <div className="card-image">
        <img src={image_url} alt="" />
      </div>
      <div className="card-texts">
        <h3>{name}</h3>
        <p>{tagline}</p>
        <span>{`$ ${props.price}`}</span>
        
        <Link to={`/item/${id}`} >
          <Button colorScheme='brand' >
            Ver Producto
          </Button>

        </Link>
      </div>
    </div>
  );
}

Item.defaultProps = {
  price: 300,
}
export default Item;