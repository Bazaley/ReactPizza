import { configureStore } from '@reduxjs/toolkit';
import { pizzaReducer } from './pizza/pizzaSlice';

export const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
  },
});
