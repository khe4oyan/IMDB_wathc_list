// libs
import { configureStore } from "@reduxjs/toolkit";

// slices
import filmsSlice from './slices/filmsSlice';

const store = configureStore({
  reducer: {
    films: filmsSlice,
  }
});

export default store;