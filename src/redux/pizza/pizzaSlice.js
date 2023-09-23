import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getAllPizza, getCategory, getFilter } from './pizza';

const initialState = {
  pizza: [],
  category: [],

  isLoading: false,
  error: null,
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,

  extraReducers: builder =>
    builder
      .addCase(getAllPizza.fulfilled, (state, { payload }) => {
        state.pizza = payload;
        state.isLoading = false;
      })
      .addCase(getCategory.fulfilled, (state, { payload }) => {
        state.category = payload;
        state.isLoading = false;
      })
      .addCase(getFilter.fulfilled, (state, { payload }) => {
        state.pizza = payload;
        state.isLoading = false;
      })

      .addMatcher(
        isAnyOf(getAllPizza.pending, getCategory.pending, getFilter.pending),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(getAllPizza.rejected, getCategory.rejected, getFilter.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export const pizzaReducer = pizzaSlice.reducer;
