import { configureStore } from '@reduxjs/toolkit';
// import productReducer from '../reducers/prodReducer.js';
import cartReducer from "../reducers/cartReducers.js";
import userReducer from '../reducers/CheckOutReducer.js';
import emailReducer from '../reducers/LoginReducer.js';

const store = configureStore({
  reducer: {
    login: emailReducer,
    cart: cartReducer,
    userinfoReducer : userReducer,
  },
});

export default store;