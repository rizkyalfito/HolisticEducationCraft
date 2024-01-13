import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <BrowserRouter>
    <App classname="scroll-smooth" />
    </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
)
