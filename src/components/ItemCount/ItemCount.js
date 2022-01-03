import React from 'react';
import { Button } from '@chakra-ui/react';
import { BsCartPlus } from "react-icons/bs";
import { IconButton, Text } from '@chakra-ui/react'
import { IoIosRemoveCircleOutline, IoIosAddCircleOutline } from "react-icons/io"
const ItemCount = ({ stock, initial, onAdd }) => {

  // State initialization
  const [amount, setAmount] = React.useState(initial);

  // //  Listen to the changes in the input
  // const handleChange = (e) => {
  //   const valueInputCant = e.target.value;
  //   if (valueInputCant <= stock && valueInputCant >= 0) {
  //     setAmount(valueInputCant);
  //   }
  //   e.target.value = amount;
  // }

  // To decrement the number of selected products
  const HandleDecrease = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  }
  // To increase the number of selected products
  const HandleIncrease = () => {
    if (amount < stock) {
      setAmount(amount + 1);
    }
  }
  // Button ADD product
  const HandlerAdd = () => {
    onAdd(amount)
  }

  return (
    <div className="card-add">
      <div className="item-count-container">

        <IconButton aria-label='Search database' color="marron.900" bg="marron.200" onClick={HandleDecrease} icon={<IoIosRemoveCircleOutline />} />
        {/* <input type="number" value={amount} onChange={handleChange} /> */}
        <Text fontSize='30px' as='p' color='marron.900'>{amount}</Text>
        <IconButton aria-label='Search database' color="marron.900" bg="marron.200" onClick={HandleIncrease} icon={<IoIosAddCircleOutline />} />

      </div>

      <Button colorScheme='brand' leftIcon={<BsCartPlus />} variant='solid' onClick={stock > 0 ? HandlerAdd : null} disabled={stock > 0 ? false : true} >
        Agregar al Carrito
      </Button>

    </div>
  );
}

export default ItemCount;