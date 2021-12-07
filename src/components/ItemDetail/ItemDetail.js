import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { Button } from '@chakra-ui/react';
import {
  Alert,
  AlertIcon,
  Stack
} from '@chakra-ui/react'
import './ItemDetail.css';


const ItemDetail = ({ product }) => {
  const [isBuyButton, setIssBuyButton] = useState(true);
  const { name, tagline, image_url, attenuation_level, description, ibu } = product;
  const [msj, setMsj] = useState({});
  const [quantity, setQuantity] = useState(0)

  const onAdd = (amount) => {
    setQuantity(amount)

    if (amount > 0) {
      setMsj(
        {
          description: `Usted a seleccionado ${amount}`,
          type: "success"
        }
      );
      setIssBuyButton(false);
    } else {
      setMsj(
        {
          description: "Tiene que seleccionar una cantidad",
          type: "error"
        }
      );
    }

  }

  return (
    <div className="product-detail">
      <div className='product-container'>
        <div className='img-container'>
          <img src={image_url} alt="" />
        </div>
        <div className="product-detail-info">
          <h3>{name}</h3>
          <span>{tagline}</span>
          <h5>${attenuation_level}</h5>
          <p>{description}</p>
          {isBuyButton ?
            <ItemCount stock={ibu} initial={1} onAdd={onAdd} />
            :
            <Link to={`/cart`} >
              <Button colorScheme='brand' variant='solid'>
                Comprar
              </Button>
            </Link>
          }
          {
            msj.description ?
              <Stack spacing={3}>
                <Alert status={msj.type}>
                  <AlertIcon />
                  {msj.description}
                </Alert>
              </Stack>
              : null
          }
        </div>
      </div>
    </div>
  )

}

export default ItemDetail
