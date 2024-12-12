import Reducer from './Reducer.js';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { legacy_createStore as createStore } from 'redux';

const persistConfig = {
    key:"root",
    version:1,
    storage
  }

  
const reducer = combineReducers({
    rootReducer:persistReducer(persistConfig,Reducer),
  })
  
  
const store = createStore(reducer)
const persistor = persistStore(store)

export  {store,persistor}