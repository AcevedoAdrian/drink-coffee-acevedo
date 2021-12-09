import React, { useContext } from 'react';
import CartItem from '../CartItem/CartItem';
import { CartConetext } from '../../context/CartContext';
import { Button, Flex } from '@chakra-ui/react';
const Cart = () => {
  const { cartItems, clearCart, removeItem
  } = useContext(CartConetext);

  return (
    <>
      <Flex direction="column" justify="space-between" align="left" mt='10rem'>
        <Flex direction="row"  >
          {
            cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} removeItem={removeItem} />)
          }
        </Flex>
        <Button onClick={() => clearCart()}>Clear Cart</Button>
      </Flex>
    </>
  )
}

export default Cart;
