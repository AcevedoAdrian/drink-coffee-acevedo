// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  marron: {
    900: '#bc9667',
    800: '#C4A37A',
    700: '#CDB08D',
    600: '#D5BDA0',
    500: '#DECBB3',
    400: '#E6D8C6',
    300: '#EEE5D9',
    200: '#F7F2EC',
  },
}
const Button = {
  baseStyle: {
    backgroundColor: 'marron.900',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    _hover: {
      backgroundColor: 'transparent',
      color: 'marron.900',
      borderColor: 'marron.900',
      border: '1px solid',
    }
  }
}

const Spinner = {
  baseStyle: {
    speed: '0.65s',
    emptyColor: 'gray.200',
    color: 'marron.900',
  }
}
const fonts = {
  body: 'Nunito Sans, sans- serif',

}
export const theme = extendTheme({ colors, fonts, components: { Button, Spinner } })
