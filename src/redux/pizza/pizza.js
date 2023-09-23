import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getCategory = createAsyncThunk(
  'category/category',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios(
        'https://6509da8cf6553137159c2414.mockapi.io/api/category'
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getAllPizza = createAsyncThunk(
  'pizza/allPizza',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios(
        'https://6509da8cf6553137159c2414.mockapi.io/api/pizza'
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getFilter = createAsyncThunk(
  'pizza/filter',
  async (category, { rejectWithValue }) => {
    try {
      const { data } = await axios(
        `https://6509da8cf6553137159c2414.mockapi.io/api/pizza?category=${category}`
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const postPizza = createAsyncThunk(
//   'pizza/postPizza',
//   async (avatar, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.post(
//         'https://6509da8cf6553137159c2414.mockapi.io/api/pizza',
//         { avatar }
//       );

//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
