import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import './Home.css'
import bgImage from '../../assets/img/home.jpg'

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

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt asperiores nihil, reprehenderit, unde repellat quasi repudiandae architecto cumque tempora labore, magni quo accusantium ab quia distinctio vero laboriosam molestias vitae!r
          </Text>
        </Flex>

      </Flex>
    </Box>
  )
}

export default Home;