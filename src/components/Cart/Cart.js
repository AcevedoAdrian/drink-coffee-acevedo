import React, { useContext, useState, useEffect } from "react";
import CartItem from "../CartItem/CartItem";
import { CartConetext } from "../../context/CartContext";
import { Button, Flex, Box, Alert, AlertIcon, Text, FormControl, FormLabel, Input, AlertTitle } from "@chakra-ui/react";

import { Link } from 'react-router-dom'
import { collection, addDoc } from "firebase/firestore";
import db from "../../firebase/firebaseConfig";
const initialState = {
  name: "",
  phone: "",
  email: "",
};
let msjInitial = {
  status: 'warning',
  title: 'Usted no tiene ningun producto agregado.'
};

const Cart = () => {
  const [statusCart, setStatusCart] = useState(false);
  const [values, setValues] = useState(initialState);
  const [msj, setMsj] = useState(msjInitial)
  const { cartItems, clearCart, removeItem, getTotalPrice } =
    useContext(CartConetext);


  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  // Add a new document in collection "purchases"
  const onSubmitHandler = async (e) => {

    e.preventDefault();
    const order = {}


    order.buyer = values;
    order.total = getTotalPrice();
    order.items = cartItems.map(cartItem => {
      const id = cartItem.id
      const name = cartItem.brand
      const price = cartItem.price
      const quantity = cartItem.quantity
      return { id, name, price, quantity }
    })

    console.log(order);
    const docRef = await addDoc(collection(db, "buyer"), {
      order
    });
    setMsj({ satuts: 'success', title: `Su id de producto es ${docRef.id}` });
    setValues(initialState);
    clearCart();
  };

  useEffect(() => {
    if (cartItems.length === 0) {
      setStatusCart(false);
    } else {
      setStatusCart(true);
    }
  }, [cartItems.length, setStatusCart]);

  return (
    <Flex flexDir="row" justify="space-between" align="left" mt="10%">
      {statusCart ? (
        <>
          <Box w="50vw" h="100vh">
            {cartItems.map((cartItem) => (
              <CartItem
                key={cartItem.id}
                cartItem={cartItem}
                removeItem={removeItem}
              />
            ))}
          </Box>
          <Box
            w="50vw"
            bg="gray.200"
            h="100vh"
            color="balck"
            display="flex"
            alignItems="center"
            flexDir="column"
          >
            <Text fontSize="xl">Totol Compra</Text>
            <Text fontSize="xl">Sub total {getTotalPrice()}</Text>
            <Button onClick={() => clearCart()}>Clear Cart</Button>

            <form onSubmit={onSubmitHandler}>
              <FormControl isRequired>
                <FormLabel htmlFor="name">Nombre</FormLabel>
                <Input
                  name="name"
                  type="text"
                  placeholder="Nombre"
                  value={values.name}
                  onChange={onChangeHandler}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="phone">Telefono</FormLabel>
                <Input
                  name="phone"
                  type="number"
                  placeholder="3624213312"
                  value={values.phone}
                  onChange={onChangeHandler}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="email">E-mail</FormLabel>
                <Input
                  name="email"
                  type="mail"
                  placeholder="test@test.com"
                  value={values.email}
                  onChange={onChangeHandler}
                />
              </FormControl>

              <Button width="full" mt={4} type="submit">
                Comprar
              </Button>

            </form>
          </Box>
        </>
      ) : (
        <Alert status={msj.status} display="flex" flexDirection='column'
          alignItems='center'
          justifyContent='center'
          textAlign='center'
          height='200px '>
          <AlertIcon boxSize='40px' mr={0} />
          <AlertTitle mt={4} mb={1} fontSize='lg'>
            {msj.title}
          </AlertTitle>
          <Link to='/products' >
            <Button colorScheme="brand" variant="solid" >
              Elegir Productos
            </Button>
          </Link>

        </Alert >
      )}
    </Flex >
  );
};

export default Cart;
