// libs
import { configureStore } from "@reduxjs/toolkit";

// slices
import filmsSlice from "./slices/filmsSlice";

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }
  ),
  reducer: {
    films: filmsSlice,
  },
});

export default store;
