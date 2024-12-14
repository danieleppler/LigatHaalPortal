import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Axios from 'axios'
import { setupCache } from 'axios-cache-interceptor'
import App from './Pages/App'


const axiosInstance = Axios.create()

export const httpClient = setupCache(axiosInstance, { debug: console.log })

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
