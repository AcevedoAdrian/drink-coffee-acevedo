import React, { useContext, useState, useEffect } from 'react';
import CartItem from '../CartItem/CartItem';
import { CartConetext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { Button, Flex, Box, Alert, AlertIcon, Text } from '@chakra-ui/react';


const Cart = () => {
  const [statusCart, setStatusCart] = useState(false);
  const { cartItems, clearCart, removeItem, getTotalPrice
  } = useContext(CartConetext);


  useEffect(() => {
    if (cartItems.length === 0) {
      setStatusCart(false);
    } else {
      setStatusCart(true);
    }
  }, [cartItems.length, setStatusCart]);

  return (
    <Flex flexDir="row" justify="space-between" align="left" mt='10%'>

      {(statusCart)
        ?
        <>
          <Box w='70vw' h='100vh' >
            {cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} removeItem={removeItem} />)}
          </Box>
          <Box w='30vw' bg='gray.200' h='100vh' color='balck' display='flex' alignItems='center' flexDir='column' >
            <Text fontSize='xl'>Totol Compra</Text>
            <Text fontSize='xl'>Sub total {getTotalPrice()}</Text>
            <Button onClick={() => clearCart()}>Clear Cart</Button>
          </Box>
        </>
        :
        <Alert status='warning' display='flex' flexDir='column' >
          <AlertIcon />
          Usted no tiene ningun producto agregado.
          <Link to={`/products`} >
            <Button colorScheme='brand' variant='solid'>
              Elegir Productos
            </Button>
          </Link>
        </Alert>
      }
    </Flex>
  )
}

export default Cart;
