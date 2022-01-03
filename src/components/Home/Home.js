import { Box, Flex, Heading, Text, Button, Stack, Center } from '@chakra-ui/react';
import React from 'react';
import ItemsListsContiner from '../ItemListCotainer/ItemsListsContiner';
import './Home.css';
import bgImage from '../../assets/img/home.jpg';
import { GiCoffeeBeans } from "react-icons/gi";
import { Link } from 'react-router-dom';
const Home = ({ title }) => {


  return (
    <Box h="100vh"
      bg="marron.200"
      bgImage={`url(${bgImage})`}
      bgRepeat='no-repeat'
      bgSize="cover" >

      <Flex
        direction='column'
        alignItems={{ base: 'center', md: 'flex-start' }}
        justify="center"
        h="100%"
        bg="rgba(0,0,0,0.7)"
        p={['0 10%', null, '0 10%']}
      >

        <Heading
          color="marron.900"
          textTransform="uppercase"
          textAlign="left"
          fontWeight="bold"
          letterSpacing="2px"
          as='h1'
          size='4xl'
          isTruncated >

          {title}
        </Heading>

        <Flex
          w="50%"
          marginTop="2rem"
        >
          <Text
            color="marron.200"
            fontSize='l'
            fontWeight="light"
            letterSpacing="1px"
            textAlign="justify"
          >
            Invertimos en conocimiento e innovación, creamos relaciones de beneficio mutuo con los productores de café (Comercio Directo), intentamos y controlamos obsesivamente cada grano de café, tostamos con arte modelando curvas de tueste ideales para cada café (Tostado Artesano).
          </Text>
        </Flex>

      </Flex>

      <ItemsListsContiner title="Algunos de Nuestros Productos" styleRender="top" />
      <Flex flexDir='column' alignContent='center' position='absolute' top='2000px' left='45vw'>
        <Center >
          <Stack direction='row' spacing={4} size='xl'>
            <Link to="/products">
              <Button rightIcon={<GiCoffeeBeans />} colorScheme='marron' variant='outline' size='lg'>
                Ver más Productos
              </Button>
            </Link>
          </Stack>
        </Center>
      </Flex>

    </Box>
  )
}

export default Home;