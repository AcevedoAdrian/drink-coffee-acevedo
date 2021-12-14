import React, { useContext } from 'react';
import CartItem from '../CartItem/CartItem';
import { CartConetext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { Button, Flex, Box, Alert, AlertIcon, Text } from '@chakra-ui/react';

const Cart = () => {

  const { cartItems, clearCart, removeItem, getTotalPrice
  } = useContext(CartConetext);

  return (
    <>
      <Flex flexDir="row" justify="space-between" align="left" mt='10%'>
        <Box w='70vw' h='100vh' >
          {(cartItems.length === 0) ?

            <Alert status='warning' display='flex' flexDir='column' >
              <AlertIcon />
              Usted no tiene ningun producto agregado.
              <Link to={`/products`} >
                <Button colorScheme='brand' variant='solid'>
                  Elegir Productos
                </Button>
              </Link>
            </Alert>

            :
            cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} removeItem={removeItem} />)

          }
        </Box>
        {(cartItems.length !== 0) ?
          <Box w='30vw' bg='gray.200' h='100vh' color='balck' display='flex' alignItems='center' flexDir='column' justifyContent='space-evenly'>

            <Text fontSize='xl'>Totol Compra</Text>
            <Text fontSize='xl'>Sub total {getTotalPrice()}</Text>
            <Button onClick={() => clearCart()}>Clear Cart</Button>
          </Box>
          : null
        }
      </Flex>
    </>
  )
}

export default Cart;
