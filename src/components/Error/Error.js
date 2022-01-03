import React from 'react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'

function Error() {
  return (
    <Alert
      status='error'
      variant='subtle'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      textAlign='center'
      height='100vh'
    >
      <AlertIcon boxSize='40px' mr={0} />
      <AlertTitle mt={4} mb={1} fontSize='lg'>
        Error 404
      </AlertTitle>
      <AlertDescription maxWidth='sm'>
        We're sorry we can't show the page
      </AlertDescription>
    </Alert>
  )
}

export default Error
