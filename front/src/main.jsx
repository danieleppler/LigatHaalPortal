import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Axios from 'axios'
import { setupCache } from 'axios-cache-interceptor'

import { BrowserRouter } from 'react-router-dom'
import { store, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { Provider } from 'react-redux';
import App from './Pages/App'


const axiosInstance = Axios.create()

export const httpClient = setupCache(axiosInstance, { debug: console.log })

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>

          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>

  </StrictMode>,
)
