import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { Button } from '@chakra-ui/react';
import { Alert, AlertIcon, Stack } from '@chakra-ui/react'
import './ItemDetail.css';
import { CartConetext } from '../../context/CartContext'


const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartConetext);

  const [isBuyButton, setIssBuyButton] = useState(true);
  const { brand, category, description, img, precie, stock, weight } = product;
  const [msj, setMsj] = useState({});
  const [quantity, setQuantity] = useState(0);

  const onAdd = (amount) => {

    if (amount > 0) {

      setQuantity(amount);
      addItem(product, amount);
      setIssBuyButton(false);
      setMsj(
        {
          description: `Usted a seleccionado ${amount}`,
          type: "success"
        }
      );

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
          <img src={img} alt="" />
        </div>
        <div className="product-detail-info">
          <h3>{brand}</h3>
          <span>{category}</span>
          <span>{weight}g</span>
          <h5>${precie}</h5>
          <p>{description}</p>
          {isBuyButton ?
            <ItemCount stock={stock} initial={1} onAdd={onAdd} />
            :
            <>
              <Link to={`/cart`} >
                <Button colorScheme='brand' variant='solid'>
                  Finalizar Comprar
                </Button>
              </Link>
              <Link to={`/products`} >
                <Button colorScheme='brand' variant='solid'>
                  Seguir Comprando
                </Button>
              </Link>
            </>
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
