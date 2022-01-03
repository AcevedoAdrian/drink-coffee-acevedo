import React, { useContext, useState, useEffect } from "react";
import CartItem from "../CartItem/CartItem";
import { CartConetext } from "../../context/CartContext";
import {
  Button,
  Flex,
  Box,
  Alert,
  AlertIcon,
  Text,
  FormControl,
  FormLabel,
  Input,
  AlertTitle,
  FormErrorMessage,
  Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import db from "../../firebase/firebaseConfig";

const initialState = {
  name: "",
  phone: "",
  email: "",
  emailConfirm: "",
};
let msjInitial = {
  status: "warning",
  title: "Usted no tiene ningun producto agregado.",
};

const Cart = () => {
  const [statusCart, setStatusCart] = useState(false);
  const [values, setValues] = useState(initialState);
  const [msj, setMsj] = useState(msjInitial);
  const [isError, setIsError] = useState(false)
  const { cartItems, clearCart, removeItem, getTotalPrice } =
    useContext(CartConetext);

  const onChangeHandler = (e) => {
    let { name, value } = e.target;
    if (name === 'email' || name === 'emailConfirm') {
      value = value.toLowerCase();
    }
    setValues({ ...values, [name]: value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (values.email !== values.emailConfirm) {
      setIsError(true);
    } else {
      e.preventDefault();
      setIsError(false);
      const order = {};
      order.buyer = values;
      order.total = getTotalPrice();
      order.items = cartItems.map((cartItem) => {
        const id = cartItem.id;
        const name = cartItem.brand;
        const price = cartItem.price;
        const quantity = cartItem.quantity;
        return { id, name, price, quantity };
      });
      console.log(order);
      const docRef = await addDoc(collection(db, "buyer"), {
        order,
      });
      setMsj({ satuts: "success", title: `Su id de producto es ${docRef.id}` });
      setValues(initialState);
      clearCart();
    }

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
            h="100vh"
            color="balck"
          >
            <Box display='flex' flexDir='row' justifyContent='space-between' padding='2rem 2rem' bg='gray.200'>
              <Text fontSize="xl" >Totol Compra:</Text>
              <Text fontSize="xl" as='em'> ${getTotalPrice()}</Text>

            </Box>
            <Box w='100%' display='flex' flexDir='column' padding='1rem 2rem' mt='1rem'>
              <Text fontSize="xl" as='h2' pb='1rem'>Formulario de Compra</Text>

              <form onSubmit={onSubmitHandler} w='100%'>

                <FormControl w='100%' isRequired >
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
                    placeholder="email@email.com"
                    value={values.email}
                    onChange={onChangeHandler}
                  />
                </FormControl>
                <FormControl isRequired isInvalid={isError}>
                  <FormLabel htmlFor="emailConfirm">Confirmacion de Email</FormLabel>
                  <Input
                    name="emailConfirm"
                    type="email"
                    placeholder="email@email.com"
                    value={values.emailConfirm}
                    onChange={onChangeHandler}
                  />
                  {isError &&
                    <FormErrorMessage>El email no coidice</FormErrorMessage>}
                </FormControl>
                <Stack direction='row' spacing={4} mt='2rem'>
                  <Button type="submit" colorScheme='teal'>
                    Comprar
                  </Button>
                  <Button onClick={() => clearCart()} colorScheme='red' variant='solid'>Limpiar Carrito</Button>
                </Stack>
              </form>
            </Box>
          </Box>
        </>
      ) : (
        <Alert
          status={msj.status}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="200px "
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            {msj.title}
          </AlertTitle>
          <Link to="/products">
            <Button colorScheme="brand" variant="solid">
              Elegir Productos
            </Button>
          </Link>
        </Alert>
      )
      }
    </Flex >
  );
};

export default Cart;
