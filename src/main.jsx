import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from './styles/globalStyles'
import { ToastContainer } from 'react-toastify'
import AppProvider from './hooks'
import { Elements } from '@stripe/react-stripe-js'
import stripePromise from './config/stripeConfig'
import { BrowserRouter } from 'react-router-dom'
import {Router} from "./routes"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <Elements stripe={stripePromise}>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </Elements>
      <GlobalStyles />
      <ToastContainer theme='colored' autoClose={3000} />
    </AppProvider>
  </StrictMode>,
)
