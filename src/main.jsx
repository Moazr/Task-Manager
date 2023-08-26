import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'



ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.useSystemColorMode} />
          <App />
    </ChakraProvider>
  </React.StrictMode>,
)
