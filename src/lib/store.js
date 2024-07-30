// store/store.js

import { configureStore, createSlice } from '@reduxjs/toolkit';
import counterSlic from './features/Counter/counterSlice'
import fetchSlice from './features/fetchData/fetchSlice';

const store = configureStore({
  reducer: {
    counter: counterSlic,

    user: fetchSlice
  }
});

export default store;
