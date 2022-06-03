import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { store } from "./Redux/store";
import { Provider as ReduxProvider } from "react-redux"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <ReduxProvider store={store}>
        <App />

      </ReduxProvider>

    </ChakraProvider>
  </React.StrictMode>
)
