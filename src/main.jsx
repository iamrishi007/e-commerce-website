
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './Authcontext/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <AuthProvider>
    <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>,
    </BrowserRouter>
  </AuthProvider>

)
