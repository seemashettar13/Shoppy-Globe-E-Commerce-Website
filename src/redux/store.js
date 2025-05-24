import { configureStore } from '@reduxjs/toolkit';
// importing the reducer function from the cartSlic.js
import cartReducer from './cartSlice';

function createStore() {
    return configureStore({
        reducer: {
            cart: cartReducer
        }
    });
}

const store = createStore();

export default store;
