import React from 'react';
import { Link } from 'react-router-dom';
// chakra-ui 
import { Button, Box, Divider, Text } from '@chakra-ui/react'
// Estilos
import './Item.css'

const Item = (props) => {
  const { id, brand, country, region, img, precie } = props.product;

  return (
    <Box className="card" id={id} borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <div className="card-image">
        <img src={img} alt="" />
      </div>
      <Divider />
      <div className="card-texts">
        <Text fontSize='lg' as='i'>{brand}</Text>
        <Text fontSize='md' as='i'>{`${country} - ${region}`}</Text>
        <Text fontSize='xl'>{`$ ${precie}`}</Text>
        <Link to={`/item/${id}`} >
          <Button colorScheme='brand' mt='6' >
            Ver Producto
          </Button>
        </Link>
      </div>
    </Box>
  );
}

export default Item;