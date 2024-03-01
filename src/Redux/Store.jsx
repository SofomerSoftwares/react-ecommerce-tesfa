// src/store/store.js
import { CreateStore } from 'redux';
import counterReducer from '../reducers/index'; 

const store = CreateStore({
  reducer: counterReducer, 
});

export default store;