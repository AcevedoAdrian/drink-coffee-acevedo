import React from 'react';
import { Box, Image, Button } from '@chakra-ui/react';


const CartItem = ({ cartItem, removeItem }) => {

  return (
    <Box
      maxW='100%'
      borderWidth='1px'
      borderRadius='m'
      display='flex'
      flexDir='row'
      alignContent='stretch' >
      <Box>
        <Image maxH='200px' src={cartItem.img} />
      </Box>
      <Box pt='6' >
        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          isTruncated
        >
          {cartItem.brand}
        </Box>

        <Box pt='6'>

          {cartItem.price}
          <Box as='span' color='gray.600' fontSize='sm'>
            {` x ${cartItem.quantity}`}
          </Box>
        </Box>
        <Box x pt='6'>
          <Button colorScheme="red" onClick={() => removeItem(cartItem.id)}>Quitar</Button>
        </Box>


      </Box>
    </Box>

  )
}
export default CartItem;