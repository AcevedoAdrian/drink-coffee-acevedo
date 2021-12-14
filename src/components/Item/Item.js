import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react'
// Estilos
import './Item.css'

const Item = (props) => {
  const { id, brand, region, img, precie } = props.product;

  return (
    <div className="card" id={id}>

      <div className="card-image">
        <img src={img} alt="" />
      </div>
      <div className="card-texts">
        <h3>{brand}</h3>
        <p>{region}</p>
        <span >{`$ ${precie}`}</span>

        <Link to={`/item/${id}`} >
          <Button colorScheme='brand' mt='6' >
            Ver Producto
          </Button>

        </Link>
      </div>
    </div>
  );
}

export default Item;