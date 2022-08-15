import { configureStore } from '@reduxjs/toolkit';
import cart from './cartSlise';

export const store = configureStore({
    reducer: {
        cart, 

    }, 
})