import React from 'react';
import { Box, Image, Button } from '@chakra-ui/react';
const CartItem = ({ cartItem, removeItem }) => {

  return (
    <Box maxW='xs' borderWidth='1px' borderRadius='m' align='center'>
      <Box  >
        <Image maxH='300px' src={cartItem.img} />
      </Box>
      <Box p='6'>
        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          isTruncated
        >
          {cartItem.name}
        </Box>

        <Box>
          {cartItem.price}
          <Box as='span' color='gray.600' fontSize='sm'>
            {` x ${cartItem.quantity}`}
          </Box>
        </Box>
        <Box>
          <Button colorScheme="red" onClick={() => removeItem(cartItem.id)}>Quitar</Button>
        </Box>


      </Box>
    </Box>

  )
}
export default CartItem;