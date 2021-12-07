import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './resource/theme'
import './index.css';
ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
);
